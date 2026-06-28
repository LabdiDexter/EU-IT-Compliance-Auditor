/* ==========================================================================
   EU IT Compliance Auditor - LOGICA APPLICAZIONE (VANILLA JS)
   ========================================================================== */

// Stato dell'applicazione
const appState = {
  activeRegulations: [],  // Codici dei regolamenti attivi (es. ['GDPR', 'AI_ACT'])
  filteredQuestions: [],  // Elenco piatto di tutte le domande applicabili
  currentSectionIndex: 0, // Indice della sezione regolamento attiva
  profile: {
    companyName: "",
    assessorName: "",
    assessmentDate: "",
    companySize: "",
    activeRegs: {}        // Mappa { REG_CODE: true/false }
  },
  answers: {}             // Mappa { questionId: { value: 'yes'|'no'|'na', evidence: '...' } }
};

document.addEventListener("DOMContentLoaded", () => {
  // Imposta la data odierna come default
  const dateInput = document.getElementById("assessment-date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
  }

  // Verifica presenza dati del database caricati da questions.js
  if (typeof PROFILING_QUESTIONS !== "undefined" && typeof REGULATIONS_DATA !== "undefined") {
    console.log("Database normativo caricato correttamente da questions.js");
    renderProfilingSectors();
  } else {
    alert("Errore: Impossibile caricare il database delle domande. Assicurati che questions.js sia presente nella stessa cartella.");
  }

  initApp();
});

// Inizializza eventi e impostazioni dell'app
function initApp() {
  // Gestione Tema (Dark / Light)
  const themeToggle = document.getElementById("theme-toggle");
  const currentTheme = localStorage.getItem("theme") || "light";
  setTheme(currentTheme);
  
  themeToggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    setTheme(theme);
  });

  // Gestione Modulo Profilazione
  const profilingForm = document.getElementById("profiling-form");
  profilingForm.addEventListener("submit", handleProfilingSubmit);

  // Navigazione del Questionario
  document.getElementById("btn-prev-section").addEventListener("click", navigatePreviousSection);
  document.getElementById("btn-next-section").addEventListener("click", navigateNextSection);
  document.getElementById("btn-submit-assessment").addEventListener("click", submitAssessment);
  document.getElementById("btn-cancel-assessment").addEventListener("click", cancelAssessment);

  // Pulsanti del Report
  document.getElementById("btn-back-to-questions").addEventListener("click", backToQuestionnaire);
  document.getElementById("btn-print-report").addEventListener("click", () => window.print());
  document.getElementById("btn-restart-assessment").addEventListener("click", resetAssessment);
}

// Cambia e memorizza il tema visivo (Light/Dark Mode)
function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");
  
  if (theme === "dark") {
    if (sunIcon) sunIcon.style.display = "none";
    if (moonIcon) moonIcon.style.display = "block";
  } else {
    if (sunIcon) sunIcon.style.display = "block";
    if (moonIcon) moonIcon.style.display = "none";
  }
}

// Genera dinamicamente le opzioni di profilazione basate sui regolamenti nel database
function renderProfilingSectors() {
  const container = document.getElementById("sectors-grid");
  if (!container) return;
  
  container.innerHTML = "";
  
  PROFILING_QUESTIONS.forEach(q => {
    const regInfo = REGULATIONS_DATA[q.regulation];
    if (!regInfo) return;
    
    const card = document.createElement("label");
    card.className = "sector-card";
    card.htmlFor = `opt-${q.regulation}`;
    
    card.innerHTML = `
      <input type="checkbox" id="opt-${q.regulation}" class="sector-checkbox" data-regulation="${q.regulation}">
      <span class="sector-card-content">
        <span class="sector-title">${regInfo.title}</span>
        <span class="sector-desc">${q.text}</span>
      </span>
    `;
    container.appendChild(card);
  });
}

// Gestione invio modulo di profilazione
function handleProfilingSubmit(e) {
  e.preventDefault();
  
  appState.profile.companyName = document.getElementById("company-name").value.trim();
  appState.profile.assessorName = document.getElementById("assessor-name").value.trim();
  appState.profile.assessmentDate = document.getElementById("assessment-date").value;
  appState.profile.companySize = document.getElementById("company-size").value;
  
  // Raccogli regolamenti selezionati
  appState.activeRegulations = [];
  const checkboxes = document.querySelectorAll(".sector-checkbox");
  checkboxes.forEach(cb => {
    if (cb.checked) {
      const regCode = cb.dataset.regulation;
      appState.activeRegulations.push(regCode);
      appState.profile.activeRegs[regCode] = true;
    } else {
      appState.profile.activeRegs[cb.dataset.regulation] = false;
    }
  });

  const errorDiv = document.getElementById("profiling-error");
  if (appState.activeRegulations.length === 0) {
    if (errorDiv) {
      errorDiv.textContent = "Seleziona almeno un regolamento o ambito di applicazione per procedere.";
      errorDiv.style.display = "block";
    }
    return;
  }
  
  if (errorDiv) errorDiv.style.display = "none";
  
  buildQuestionnaire();
}

// Costruisce il questionario filtrando le domande in base al profilo
function buildQuestionnaire() {
  appState.filteredQuestions = [];
  
  appState.activeRegulations.forEach(regCode => {
    const regInfo = REGULATIONS_DATA[regCode];
    if (regInfo && regInfo.questions) {
      regInfo.questions.forEach(q => {
        // Aggiunge metadati utili per la gestione dello stato piatto
        appState.filteredQuestions.push({
          ...q,
          regulation: regCode
        });
        
        // Inizializza la risposta se non già presente
        if (!appState.answers[q.id]) {
          appState.answers[q.id] = { value: "", evidence: "" };
        }
      });
    }
  });

  appState.currentSectionIndex = 0;
  switchScreen("screen-questionnaire");
  renderSidebar();
  renderCurrentSection();
}

// Cambia schermata visibile
function switchScreen(screenId) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
    screen.style.display = "none";
  });
  
  const activeScreen = document.getElementById(screenId);
  if (activeScreen) {
    activeScreen.style.display = "block";
    setTimeout(() => {
      activeScreen.classList.add("active");
    }, 50);
  }
  window.scrollTo(0, 0);
}

// Renderizza l'avanzamento complessivo e la nav sidebar
function renderSidebar() {
  const listContainer = document.getElementById("regulation-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  appState.activeRegulations.forEach((regCode, index) => {
    const regQuestions = appState.filteredQuestions.filter(q => q.regulation === regCode);
    const answeredCount = regQuestions.filter(q => appState.answers[q.id].value !== "").length;
    
    const li = document.createElement("li");
    li.className = "regulation-nav-item";
    
    const button = document.createElement("button");
    button.type = "button";
    button.className = `regulation-nav-btn ${index === appState.currentSectionIndex ? "active" : ""}`;
    button.innerHTML = `
      <span>${regCode}</span>
      <span class="nav-item-progress">${answeredCount}/${regQuestions.length}</span>
    `;
    
    button.addEventListener("click", () => {
      appState.currentSectionIndex = index;
      updateSidebarActiveState();
      renderCurrentSection();
    });
    
    li.appendChild(button);
    listContainer.appendChild(li);
  });

  updateGlobalProgress();
}

// Aggiorna la classe attiva sui pulsanti della sidebar
function updateSidebarActiveState() {
  const buttons = document.querySelectorAll(".regulation-nav-btn");
  buttons.forEach((btn, index) => {
    if (index === appState.currentSectionIndex) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
}

// Aggiorna le barre di progresso
function updateGlobalProgress() {
  const total = appState.filteredQuestions.length;
  const answered = appState.filteredQuestions.filter(q => appState.answers[q.id].value !== "").length;
  const percentage = total > 0 ? Math.round((answered / total) * 100) : 0;
  
  const progBadge = document.getElementById("overall-progress-badge");
  const progFill = document.getElementById("overall-progress-fill");
  
  if (progBadge) progBadge.textContent = `${percentage}%`;
  if (progFill) progFill.style.width = `${percentage}%`;

  // Aggiorna contatori singoli nella sidebar
  appState.activeRegulations.forEach((regCode, index) => {
    const regQuestions = appState.filteredQuestions.filter(q => q.regulation === regCode);
    const answeredCount = regQuestions.filter(q => appState.answers[q.id].value !== "").length;
    const badges = document.querySelectorAll(".nav-item-progress");
    if (badges[index]) {
      badges[index].textContent = `${answeredCount}/${regQuestions.length}`;
    }
  });
}

// Visualizza le domande della sezione corrente
function renderCurrentSection() {
  const regCode = appState.activeRegulations[appState.currentSectionIndex];
  const regInfo = REGULATIONS_DATA[regCode];
  if (!regInfo) return;

  document.getElementById("current-regulation-title").textContent = regInfo.title;
  document.getElementById("current-regulation-desc").textContent = regInfo.description;

  const currentQuestions = appState.filteredQuestions.filter(q => q.regulation === regCode);
  const container = document.getElementById("questions-container");
  if (!container) return;
  container.innerHTML = "";

  currentQuestions.forEach(q => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.id = `q-card-${q.id}`;
    
    // Mappa peso a livello rischio
    let riskLevel = "Medio";
    let riskBadgeClass = "badge-warning";
    if (q.weight >= 10) {
      riskLevel = "Critico";
      riskBadgeClass = "badge-error";
    } else if (q.weight >= 8) {
      riskLevel = "Alto";
      riskBadgeClass = "badge-error";
    }

    const currentAnswer = appState.answers[q.id].value;
    const currentEvidence = appState.answers[q.id].evidence;

    card.innerHTML = `
      <div class="question-meta">
        <span class="question-id-badge">${q.id}</span>
        <div class="question-badges">
          <span class="badge ${riskBadgeClass}">Rilevanza: ${riskLevel} (Peso: ${q.weight})</span>
          <span class="badge">Rif: ${q.article}</span>
        </div>
      </div>
      <p class="question-text">${q.text}</p>
      
      <div class="answers-group">
        <input type="radio" id="opt-yes-${q.id}" name="ans-${q.id}" value="yes" class="answer-radio" ${currentAnswer === "yes" ? "checked" : ""}>
        <label for="opt-yes-${q.id}" class="answer-option">Sì - Conforme</label>
        
        <input type="radio" id="opt-no-${q.id}" name="ans-${q.id}" value="no" class="answer-radio" ${currentAnswer === "no" ? "checked" : ""}>
        <label for="opt-no-${q.id}" class="answer-option">No - Non Conforme</label>
        
        <input type="radio" id="opt-na-${q.id}" name="ans-${q.id}" value="na" class="answer-radio" ${currentAnswer === "na" ? "checked" : ""}>
        <label for="opt-na-${q.id}" class="answer-option">N/A - Non Applicabile</label>
      </div>

      <div class="evidence-area">
        <label for="evidence-${q.id}">Evidenze di Conformità / Note dell'Auditor</label>
        <textarea id="evidence-${q.id}" class="evidence-textarea" placeholder="Indica documenti aziendali, procedure adottate, o dettagli sulla non conformità...">${currentEvidence}</textarea>
      </div>

      <details class="guidance-details">
        <summary class="guidance-summary">Spiegazione Legale e Guida Pratica</summary>
        <div class="guidance-body">
          <p><strong>Spiegazione Normativa:</strong> ${q.lawExplanation}</p>
          <p><strong>Misure Correttive Suggerite:</strong> ${q.guidance.replace(/\n/g, '<br>')}</p>
        </div>
      </details>
    `;

    // Eventi di ascolto
    const radios = card.querySelectorAll(`.answer-radio`);
    radios.forEach(radio => {
      radio.addEventListener("change", (e) => {
        appState.answers[q.id].value = e.target.value;
        updateGlobalProgress();
      });
    });

    const textarea = card.querySelector(`.evidence-textarea`);
    textarea.addEventListener("input", (e) => {
      appState.answers[q.id].evidence = e.target.value;
    });

    container.appendChild(card);
  });

  updateNavigationButtons();
}

function updateNavigationButtons() {
  const isFirst = appState.currentSectionIndex === 0;
  const isLast = appState.currentSectionIndex === appState.activeRegulations.length - 1;

  const btnPrev = document.getElementById("btn-prev-section");
  const btnNext = document.getElementById("btn-next-section");
  const btnSubmit = document.getElementById("btn-submit-assessment");

  if (btnPrev) btnPrev.style.display = isFirst ? "none" : "inline-flex";
  
  if (isLast) {
    if (btnNext) btnNext.style.display = "none";
    if (btnSubmit) btnSubmit.style.display = "inline-flex";
  } else {
    if (btnNext) btnNext.style.display = "inline-flex";
    if (btnSubmit) btnSubmit.style.display = "none";
  }
}

function navigatePreviousSection() {
  if (appState.currentSectionIndex > 0) {
    appState.currentSectionIndex--;
    updateSidebarActiveState();
    renderCurrentSection();
    window.scrollTo(0, 0);
  }
}

// Sottomissione e verifica risposte complete
function submitAssessment() {
  const unanswered = appState.filteredQuestions.filter(q => appState.answers[q.id].value === "");
  
  if (unanswered.length > 0) {
    const firstUnanswered = unanswered[0];
    const targetReg = firstUnanswered.regulation;
    const regIndex = appState.activeRegulations.indexOf(targetReg);
    
    alert(`Mancano ancora ${unanswered.length} risposte. Si prega di compilare tutte le domande prima di generare il report.`);
    
    appState.currentSectionIndex = regIndex;
    updateSidebarActiveState();
    renderCurrentSection();
    
    setTimeout(() => {
      const el = document.getElementById(`q-card-${firstUnanswered.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add("highlight-error");
        setTimeout(() => el.classList.remove("highlight-error"), 2000);
      }
    }, 150);
    
    return;
  }

  generateReport();
}

function navigateNextSection() {
  if (appState.currentSectionIndex < appState.activeRegulations.length - 1) {
    appState.currentSectionIndex++;
    updateSidebarActiveState();
    renderCurrentSection();
    window.scrollTo(0, 0);
  }
}

// Calcoli e generazione del report finale
function generateReport() {
  const results = calculateComplianceScores();

  // Dati anagrafici
  document.getElementById("rep-company-name").textContent = appState.profile.companyName;
  document.getElementById("rep-assessor-name").textContent = appState.profile.assessorName;
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(appState.profile.assessmentDate).toLocaleDateString('it-IT', options);
  document.getElementById("rep-date").textContent = formattedDate;
  
  document.querySelectorAll(".print-date").forEach(el => el.textContent = new Date().toLocaleDateString('it-IT'));
  
  const sizeText = appState.profile.companySize === "sme" ? "PMI / Startup" : "Grande Impresa";
  document.getElementById("rep-size").textContent = sizeText;
  
  document.getElementById("sig-assessor").textContent = appState.profile.assessorName;
  document.getElementById("sig-company-rep").textContent = appState.profile.companyName;

  // Punteggio Globale
  const globalScore = results.global;
  document.getElementById("report-score-text").textContent = `${globalScore}%`;
  
  const circle = document.getElementById("report-score-ring");
  if (circle) {
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (globalScore / 100) * circumference;
    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${offset}`;
    
    circle.classList.remove("score-medium", "score-low");
    if (globalScore < 50) {
      circle.classList.add("score-low");
    } else if (globalScore < 80) {
      circle.classList.add("score-medium");
    }
  }

  const statusBadge = document.getElementById("report-status-badge");
  const statusDesc = document.getElementById("report-status-desc");

  if (globalScore >= 80) {
    statusBadge.className = "badge badge-success";
    statusBadge.textContent = "Conformità Elevata";
    statusDesc.textContent = "L'organizzazione dimostra un ottimo livello di presidio e aderenza alle normative tecnologiche verificate.";
  } else if (globalScore >= 50) {
    statusBadge.className = "badge badge-warning";
    statusBadge.textContent = "Conformità Parziale";
    statusDesc.textContent = "Sono emerse alcune aree di non conformità o documentazione mancante. Si consiglia di pianificare rimedi per i gap individuati.";
  } else {
    statusBadge.className = "badge badge-error";
    statusBadge.textContent = "Criticità Rilevate";
    statusDesc.textContent = "Si riscontrano gravi lacune rispetto ai requisiti legali obbligatori. È necessario agire con priorità per evitare rischi sanzionatori.";
  }

  // Breakdown Regolamenti
  const breakdownContainer = document.getElementById("regulation-breakdown-container");
  if (breakdownContainer) {
    breakdownContainer.innerHTML = "";

    appState.activeRegulations.forEach(regCode => {
      const regScore = results.byRegulation[regCode];
      const regQuestions = appState.filteredQuestions.filter(q => q.regulation === regCode);
      const naCount = regQuestions.filter(q => appState.answers[q.id].value === "na").length;
      const yesCount = regQuestions.filter(q => appState.answers[q.id].value === "yes").length;
      const applicableCount = regQuestions.length - naCount;

      const card = document.createElement("div");
      card.className = "breakdown-card";
      
      let barColor = "var(--color-success)";
      if (regScore < 50) barColor = "var(--color-error)";
      else if (regScore < 80) barColor = "var(--color-warning)";

      card.innerHTML = `
        <div class="breakdown-header">
          <span class="breakdown-name">${REGULATIONS_DATA[regCode].title}</span>
          <span class="breakdown-score">${regScore}%</span>
        </div>
        <div class="breakdown-bar-container">
          <div class="breakdown-bar-fill" style="width: ${regScore}%; background-color: ${barColor};"></div>
        </div>
        <div class="breakdown-details">
          Requisiti Soddisfatti: ${yesCount}/${applicableCount} (${naCount} N/A)
        </div>
      `;
      breakdownContainer.appendChild(card);
    });
  }

  // Gaps (Risposte "No")
  const gapsListContainer = document.getElementById("gaps-list");
  const gapsCountBadge = document.getElementById("gaps-count-badge");
  const gapsSection = document.getElementById("gaps-section");
  
  if (gapsListContainer) {
    gapsListContainer.innerHTML = "";
    const gaps = appState.filteredQuestions.filter(q => appState.answers[q.id].value === "no");
    
    // Ordina per peso desc (maggiore gravità prima)
    gaps.sort((a, b) => b.weight - a.weight);

    if (gapsCountBadge) gapsCountBadge.textContent = `${gaps.length} Gaps Rilevati`;
    
    if (gaps.length === 0) {
      if (gapsSection) gapsSection.style.display = "none";
    } else {
      if (gapsSection) gapsSection.style.display = "block";
      
      gaps.forEach(gap => {
        const gapDiv = document.createElement("div");
        let gapRiskClass = "risk-medio";
        let riskLabel = "Medio";
        if (gap.weight >= 10) {
          gapRiskClass = "risk-critico";
          riskLabel = "Critico";
        } else if (gap.weight >= 8) {
          gapRiskClass = "risk-critico";
          riskLabel = "Alto";
        }

        gapDiv.className = `gap-card ${gapRiskClass}`;
        
        const userNotes = appState.answers[gap.id].evidence.trim();
        const notesBlock = userNotes 
          ? `<div class="gap-user-notes"><strong>Note Auditor / Mancanze Riscontrate:</strong><br>${escapeHTML(userNotes)}</div>`
          : "";

        gapDiv.innerHTML = `
          <div class="gap-header">
            <div class="gap-ref-info">
              <span class="gap-reg">${REGULATIONS_DATA[gap.regulation].title}</span>
              <span class="gap-id">ID Requisito: ${gap.id} &bull; Rif: ${gap.article} &bull; Rilevanza: ${riskLabel}</span>
            </div>
            <span class="badge badge-error">Non Conforme</span>
          </div>
          <p class="gap-question">${gap.text}</p>
          ${notesBlock}
          <div class="gap-remediation">
            <strong>Piano di Adeguamento Suggerito:</strong><br>
            ${gap.guidance.replace(/\n/g, '<br>')}
          </div>
        `;
        gapsListContainer.appendChild(gapDiv);
      });
    }
  }

  // Tabella Completa per la stampa
  const tableBody = document.getElementById("compliance-table-body");
  if (tableBody) {
    tableBody.innerHTML = "";

    appState.filteredQuestions.forEach(q => {
      const tr = document.createElement("tr");
      const ans = appState.answers[q.id].value;
      
      let ansBadgeClass = "badge-success";
      let ansText = "Sì";
      if (ans === "no") {
        ansBadgeClass = "badge-error";
        ansText = "No";
      } else if (ans === "na") {
        ansBadgeClass = "badge";
        ansText = "N/A";
      }

      let riskLabel = "Medio";
      let riskBadgeClass = "badge-warning";
      if (q.weight >= 10) {
        riskLabel = "Critico";
        riskBadgeClass = "badge-error";
      } else if (q.weight >= 8) {
        riskLabel = "Alto";
        riskBadgeClass = "badge-error";
      }

      tr.innerHTML = `
        <td class="table-text-bold">${q.id}</td>
        <td>${q.regulation}</td>
        <td>
          <strong>${q.text}</strong>
          <div style="font-size: 0.7rem; color: var(--text-secondary); margin-top: 4px;">Rif: ${q.article}</div>
        </td>
        <td><span class="badge ${ansBadgeClass}">${ansText}</span></td>
        <td><span class="badge ${riskBadgeClass}">${riskLabel}</span></td>
        <td class="table-note-text">${escapeHTML(appState.answers[q.id].evidence) || "-"}</td>
      `;
      tableBody.appendChild(tr);
    });
  }

  switchScreen("screen-report");
}

// Calcola i punteggi (escludendo N/A dal denominatore)
function calculateComplianceScores() {
  let totalApplicableWeights = 0;
  let totalCompliantWeights = 0;
  
  const scoresByReg = {};

  appState.activeRegulations.forEach(reg => {
    scoresByReg[reg] = { applicableWeight: 0, compliantWeight: 0 };
  });

  appState.filteredQuestions.forEach(q => {
    const ans = appState.answers[q.id].value;
    if (ans !== "na") {
      totalApplicableWeights += q.weight;
      scoresByReg[q.regulation].applicableWeight += q.weight;
      
      if (ans === "yes") {
        totalCompliantWeights += q.weight;
        scoresByReg[q.regulation].compliantWeight += q.weight;
      }
    }
  });

  const globalScore = totalApplicableWeights > 0 ? Math.round((totalCompliantWeights / totalApplicableWeights) * 100) : 100;
  
  const byRegPercentage = {};
  appState.activeRegulations.forEach(reg => {
    const app = scoresByReg[reg].applicableWeight;
    const comp = scoresByReg[reg].compliantWeight;
    byRegPercentage[reg] = app > 0 ? Math.round((comp / app) * 100) : 100;
  });

  return {
    global: globalScore,
    byRegulation: byRegPercentage
  };
}

function backToQuestionnaire() {
  switchScreen("screen-questionnaire");
}

function resetAssessment() {
  appState.filteredQuestions = [];
  appState.activeRegulations = [];
  appState.currentSectionIndex = 0;
  appState.answers = {};
  
  document.getElementById("company-name").value = "";
  document.getElementById("assessor-name").value = "";
  document.getElementById("company-size").selectedIndex = 0;
  
  // Deseleziona checkbox profilazione
  const checkboxes = document.querySelectorAll(".sector-checkbox");
  checkboxes.forEach(cb => cb.checked = false);

  const today = new Date().toISOString().split("T")[0];
  document.getElementById("assessment-date").value = today;

  switchScreen("screen-profiling");
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
