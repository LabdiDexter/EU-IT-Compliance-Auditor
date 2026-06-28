Strumento professionale di autovalutazione per la conformità ai principali regolamenti IT europei.

## Regolamenti Coperti

- **AI Act** (Reg. UE 2024/1689) — Sistemi di Intelligenza Artificiale
- **CRA** — Cyber Resilience Act, prodotti con elementi digitali
- **Data Act** (Reg. UE 2023/2854) — Portabilità e condivisione dei dati IoT
- **DORA** (Reg. UE 2022/2554) — Resilienza operativa digitale settore finanziario
- **DSA** (Reg. UE 2022/2065) — Digital Services Act, servizi intermediari online
- **EAA** (Dir. UE 2019/882) — European Accessibility Act, accessibilità digitale
- **ePrivacy** (Dir. 2002/58/CE) — Cookie, tracciamento e comunicazioni elettroniche
- **GDPR** (Reg. UE 2016/679) — Protezione dei dati personali
- **NIS 2** (Dir. UE 2022/2555) — Sicurezza delle reti e dei sistemi informativi

## Funzionalità

- **Profilazione aziendale intelligente**: le domande vengono filtrate in base al tipo di azienda e alle attività svolte, eliminando i quesiti irrilevanti.
- **Questionario guidato (wizard)**: interfaccia a step con avanzamento in tempo reale per regolamento e complessivo.
- **Risposte SI / NO**: semplicità massima per una compilazione rapida e precisa.
- **Punteggio ponderato**: ogni domanda ha un peso normativo basato sulla severità del requisito di legge; le risposte N/A sono escluse dal calcolo per non alterare la percentuale finale.
- **Report di conformità dettagliato**:
  - Punteggio globale e punteggio per singolo regolamento con barra grafica.
  - Elenco di tutti i *gap* (risposte NO) ordinati per gravità, con citazione dell'articolo di legge, spiegazione normativa e piano di adeguamento step-by-step.
  - Tabella completa di tutte le domande e risposte per scopi di audit interno.
- **Esportazione in PDF**: foglio di stile dedicato `@media print` per una stampa professionale.
- **Light / Dark Mode**: tema salvato in localStorage.
- **Nessun database esterno**: 100% client-side, pronto per GitHub Pages e Cloudflare Pages.

## Tecnologie

| Tecnologia | Utilizzo |
|---|---|
| HTML5 | Struttura semantica della SPA |
| CSS3 (Vanilla) | Design system professionale, responsive e print-ready |
| JavaScript (Vanilla) | Logica applicativa, calcoli, navigazione |
| Google Fonts (Inter) | Tipografia professionale |

## Avvio Rapido

Nessun server o build step richiesto.

```bash
git clone https://github.com/[tuo-username]/eu-it-compliance-auditor
cd eu-it-compliance-auditor
# Apri index.html nel browser oppure avvia un server locale:
npx serve .
```

## Struttura del Progetto

```
eu-it-compliance-auditor/
├── index.html       # Layout SPA e struttura HTML
├── style.css        # Design system (Light/Dark, print styles)
├── app.js           # Logica applicativa
├── questions.js     # Database normativo (domande, pesi, guide)
```

## Note Legali

Lo strumento è concepito come supporto orientativo all'autovalutazione e non sostituisce la consulenza legale professionale. I contenuti delle domande e delle guide sono basati sui testi ufficiali dei regolamenti europei.

## Licenza

MIT License — libero utilizzo, modifica e distribuzione.
