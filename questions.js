const PROFILING_QUESTIONS = [
  {
    id: "PROF_GDPR",
    text: "La tua azienda tratta dati personali di cittadini o residenti nell'Unione Europea (es. dati di dipendenti, contatti di clienti, credenziali web)?",
    regulation: "GDPR"
  },
  {
    id: "PROF_AI_ACT",
    text: "La tua azienda sviluppa, distribuisce, importa o utilizza sistemi basati su tecniche di Intelligenza Artificiale (IA) nel mercato dell'Unione Europea?",
    regulation: "AI_ACT"
  },
  {
    id: "PROF_CRA",
    text: "La tua azienda progetta, produce, importa o distribuisce sul mercato dell'Unione Europea prodotti con elementi digitali (es. hardware, software standalone, dispositivi connessi, IoT)?",
    regulation: "CRA"
  },
  {
    id: "PROF_DATA_ACT",
    text: "La tua azienda produce prodotti connessi (IoT) che generano dati, offre servizi correlati a tali prodotti, o fornisce servizi di elaborazione dati (es. cloud/edge computing) nell'Unione Europea?",
    regulation: "DATA_ACT"
  },
  {
    id: "PROF_DORA",
    text: "La tua azienda è un'entità finanziaria (es. banca, istituto di credito, società di investimento, impresa di assicurazione) o un fornitore terzo di servizi ICT per il settore finanziario?",
    regulation: "DORA"
  },
  {
    id: "PROF_DSA",
    text: "La tua azienda fornisce servizi intermediari online (es. piattaforme di e-commerce, servizi di hosting, motori di ricerca, social network, servizi di caching o di accesso a internet) per utenti nell'Unione Europea?",
    regulation: "DSA"
  },
  {
    id: "PROF_EAA",
    text: "La tua azienda produce, importa o distribuisce specifici prodotti (es. computer, smartphone, terminali self-service) o fornisce specifici servizi (es. e-commerce, servizi bancari per i consumatori, e-book, servizi di trasporto passeggeri) nell'Unione Europea ed ha almeno 10 dipendenti o un fatturato/totale di bilancio superiore a 2 milioni di euro?",
    regulation: "EAA"
  },
  {
    id: "PROF_EPRIVACY",
    text: "La tua azienda utilizza cookie di profilazione, pixel di tracciamento o altre tecnologie di memorizzazione/accesso alle informazioni sul dispositivo degli utenti (es. su siti web o app mobili), o fornisce servizi di comunicazione elettronica accessibili al pubblico?",
    regulation: "EPRIVACY"
  },
  {
    id: "PROF_NIS2",
    text: "La tua azienda opera in settori critici o altamente critici (es. energia, trasporti, infrastrutture digitali, sanità, finanza, pubblica amministrazione) o fornisce servizi digitali rilevanti (es. cloud, data center, motori di ricerca) e supera i limiti di micro/piccola impresa (almeno 50 dipendenti o fatturato/bilancio annuo superiore a 10 milioni di euro)?",
    regulation: "NIS2"
  }
];

const REGULATIONS_DATA = {
  GDPR: {
    title: "Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679)",
    code: "GDPR",
    description: "Normativa quadro europea per la tutela dei dati personali e la privacy dei cittadini dell'Unione Europea.",
    questions: [
      {
        id: "GDPR_Q1",
        text: "L'azienda fornisce un'informativa privacy chiara e accessibile e ottiene un consenso esplicito, libero e inequivocabile per il tratamento dei dati personali dei soggetti interessati?",
        weight: 10,
        article: "Articoli 6, 7, 12 e 13",
        lawExplanation: "L'articolo 6 stabilisce che il trattamento è lecito solo in presenza di una base giuridica valida (es. il consenso dell'interessato o l'interesse legittimo). Gli articoli 12 e 13 impongono al titolare del trattamento l'obbligo di informare gli interessati in modo trasparente, intelligibile, accessibile e con linguaggio semplice in merito alle finalità del trattamento, all'identità del titolare e ai diritti esercitabili.",
        guidance: "1. Censire tutti i flussi di raccolta dati (form online, contratti, registrazioni).\n2. Redigere un'informativa privacy conforme all'articolo 13 del GDPR, includendo le finalità, la base giuridica, il periodo di conservazione e i diritti degli interessati.\n3. Implementare un sistema di raccolta del consenso (es. cookie banner conforme o casella di controllo non preselezionata nei form) che consenta il consenso esplicito, granulare e liberamente revocabile."
      },
      {
        id: "GDPR_Q2",
        text: "L'azienda tiene e mantiene aggiornato un registro delle attività di trattamento svolte sotto la propria responsabilità?",
        weight: 8,
        article: "Articolo 30",
        lawExplanation: "L'articolo 30 obbliga i titolari e i responsabili del trattamento a redigere e conservare un registro delle attività di trattamento. Questo adempimento è obbligatorio per le imprese con almeno 250 dipendenti e, indipendentemente dalle dimensioni, per quelle che effettuano trattamenti non occasionali, trattamenti che presentano rischi per i diritti degli interessati o trattamenti di categorie particolari di dati (dati sensibili o giudiziari).",
        guidance: "1. Mappare tutti i trattamenti di dati personali effettuati nei diversi dipartimenti aziendali (HR, marketing, vendite, IT).\n2. Creare un registro in formato elettronico strutturato secondo i requisiti del Garante per la Protezione dei Dati Personali.\n3. Inserire per ciascun trattamento le finalità, le categorie di dati, i destinatari dei dati, i trasferimenti all'estero e i termini di cancellazione.\n4. Rivedere e aggiornare il registro almeno una volta all'anno o in occasione di modifiche strutturali ai processi."
      },
      {
        id: "GDPR_Q3",
        text: "L'azienda ha implementato misure tecniche e organizzative adeguate a garantire un livello di sicurezza del trattamento proporzionato al rischio (es. crittografia, pseudonimizzazione, controllo degli accessi)?",
        weight: 9,
        article: "Articolo 32",
        lawExplanation: "L'articolo 32 impone al titolare e al responsabile del trattamento di adottare misure tecniche e organizzative adeguate a garantire un livello di sicurezza proporzionato al rischio. Tali misure includono la pseudonimizzazione e la cifratura dei dati personali, la capacità di assicurare la riservatezza, integrità e disponibilità dei sistemi, e procedure per testare e valutare regolarmente l'efficacia delle misure di sicurezza.",
        guidance: "1. Effettuare un'analisi dei rischi informatici e organizzativi associati ai trattamenti di dati.\n2. Applicare la crittografia per i dati sensibili sia a riposo (server, PC) che in transito (HTTPS, SFTP).\n3. Implementare policy di controllo degli accessi basate sul principio del minimo privilegio e attivare l'autenticazione a più fattori (MFA) per tutti gli account aziendali.\n4. Configurare un piano di backup sicuro e testare periodicamente le procedure di ripristino dei dati."
      },
      {
        id: "GDPR_Q4",
        text: "L'azienda ha definito e testato una procedura per rilevare, documentare e notificare le violazioni dei dati personali (data breach) all'autorità di controllo entro 72 ore?",
        weight: 9,
        article: "Articoli 33 e 34",
        lawExplanation: "L'articolo 33 stabilisce che il titolare del trattamento deve notificare la violazione dei dati personali all'autorità di controllo competente senza ingiustificato ritardo e, ove possibile, entro 72 ore dal momento in cui ne è venuto a conoscenza, a meno che sia improbabile che la violazione presenti un rischio per i diritti delle persone fisiche. L'articolo 34 impone la comunicazione diretta agli interessati qualora la violazione presenti un rischio elevato.",
        guidance: "1. Redigere una procedura aziendale interna per la gestione degli incidenti di sicurezza e dei data breach.\n2. Predisporre un registro interno dei data breach in cui annotare tutte le violazioni, le loro conseguenze e le misure correttive adottate.\n3. Formare il personale affinché riconosca e segnali immediatamente al team IT o al DPO qualsiasi sospetto di violazione.\n4. Definire un modello per la notifica formale al Garante Privacy, da trasmettere tempestivamente tramite i canali ufficiali dell'autorità."
      },
      {
        id: "GDPR_Q5",
        text: "L'azienda effettua una valutazione d'impatto sulla protezione dei dati (DPIA) prima di procedere a trattamenti che presentano un rischio elevato per i diritti delle persone?",
        weight: 8,
        article: "Articolo 35",
        lawExplanation: "L'articolo 35 stabilisce che, quando un tipo di tratamento prevede in particolare l'uso di nuove tecnologie e può presentare un rischio elevato per i diritti e le libertà delle persone fisiche, il titolare deve effettuare, prima di procedere, una valutazione dell'impatto dei trattamenti previsti sulla protezione dei dati (DPIA). Questo è obbligatorio in caso di valutazioni sistematiche, monitoraggio su larga scala o trattamenti di dati sensibili su larga scala.",
        guidance: "1. Definire una procedura interna di screening preliminare per stabilire se un nuovo progetto o software richiede una DPIA.\n2. Utilizzare il software ufficiale fornito dalle autorità di controllo (es. il tool PIA del CNIL/Garante) per strutturare la valutazione.\n3. Documentare in dettaglio il trattamento, valutare la necessità e proporzionalità rispetto alle finalità, analizzare i rischi per gli interessati e definire le misure tecniche e organizzative per mitigarli.\n4. Integrare i risultati della DPIA nel processo di approvazione del progetto."
      },
      {
        id: "GDPR_Q6",
        text: "L'azienda ha formalizzato la nomina di un Responsabile della Protezione dei Dati (DPO) nei casi previsti dalla legge e ha stipulato accordi sul trattamento dei dati (DPA) con i fornitori terzi?",
        weight: 8,
        article: "Articoli 28, 37, 38 e 39",
        lawExplanation: "L'articolo 37 individua i casi in cui è obbligatoria la designazione del DPO (es. enti pubblici, o aziende le cui attività principali consistono in trattamenti che richiedono il monitoraggio regolare e sistematico degli interessati su larga scala o nel trattamento su larga scala di dati particolari). L'articolo 28 impone che i trattamenti effettuati per conto del titolare siano regolati da un contratto o altro atto giuridico (DPA) che vincoli il responsabile esterno al rispetto del GDPR.",
        guidance: "1. Condurre una valutazione scritta per determinare se l'azienda è soggetta all'obbligo di nomina del DPO.\n2. In caso positivo, selezionare un profilo con adeguate competenze specialistiche, formalizzare la nomina e registrarla presso il Garante Privacy.\n3. Censire tutti i fornitori esterni che trattano dati personali per conto dell'azienda (servizi cloud, consulenza HR, hosting).\n4. Richiedere e far sottoscrivere a ciascun fornitore un accordo DPA conforme all'articolo 28 del GDPR."
      }
    ]
  },
  AI_ACT: {
    title: "Regolamento sull'Intelligenza Artificiale (AI Act - Regolamento UE 2024/1689)",
    code: "AI_ACT",
    description: "Quadro armonizzato europeo che regola lo sviluppo, la commercializzazione e l'uso di sistemi di intelligenza artificiale basato sui livelli di rischio.",
    questions: [
      {
        id: "AI_ACT_Q1",
        text: "L'azienda ha implementato una procedura documentata per censire tutti i sistemi di IA sviluppati o utilizzati e classificarli in base ai livelli di rischio definiti dal regolamento?",
        weight: 10,
        article: "Articoli 5, 6 e 25",
        lawExplanation: "L'AI Act vieta all'articolo 5 pratiche di IA considerate a rischio inaccettabile (es. sistemi di manipolazione comportamentale subliminale, social scoring, o identificazione biometrica remota in tempo reale). L'articolo 6 stabilisce i criteri per identificare i sistemi di IA ad alto rischio (es. biometria, infrastrutture critiche, istruzione, occupazione). Gli sviluppatori e utilizzatori devono censire e classificare i propri sistemi prima dell'immissione sul mercato o dell'uso.",
        guidance: "1. Creare un registro centralizzato di tutti gli algoritmi e sistemi software interni che rientrano nella definizione di sistema di IA dell'Unione Europea.\n2. Analizzare ciascun sistema a fronte dei divieti dell'articolo 5 per garantire che non vengano utilizzati sistemi vietati.\n3. Valutare se il sistema di IA rientra tra quelli ad alto rischio ai sensi dell'articolo 6 o dell'Allegato III.\n4. Formalizzare per iscritto l'esito della classificazione e conservare il documento nel fascicolo di conformità dell'azienda."
      },
      {
        id: "AI_ACT_Q2",
        text: "Per i sistemi di IA classificati ad alto rischio, l'azienda ha istituito, attuato e documentato un sistema di gestione dei rischi continuo durante l'intero ciclo di vita del sistema?",
        weight: 9,
        article: "Articolo 9",
        lawExplanation: "L'articolo 9 impone ai fornitori di sistemi di IA ad alto rischio l'obbligo di istituire, attuare, documentare e mantenere un sistema di gestione dei rischi. Questo sistema deve consistere in un processo iterativo continuo, eseguito per tutto il ciclo di vita del sistema di IA ad alto rischio, finalizzato a identificare, analizzare ed eliminare o ridurre al minimo i rischi associati al sistema.",
        guidance: "1. Definire e documentare un framework metodologico per la gestione dei rischi specifici dell'IA (es. allineato allo standard ISO/IEC 42001).\n2. Condurre valutazioni dei rischi sistematiche per individuare pericoli legati alla sicurezza fisica, alla salute o all'impatto sui diritti fondamentali degli interessati.\n3. Stabilire misure di mitigazione adeguate per eliminare o contenere tali rischi.\n4. Pianificare controlli periodici post-commercializzazione per verificare che le mitigazioni rimangano efficaci."
      },
      {
        id: "AI_ACT_Q3",
        text: "I sistemi di IA ad alto rischio sviluppati dall'azienda utilizzano set di dati di addestramento, convalida e prova sottoposti a adeguate pratiche di governance dei dati (es. verifica di distorsioni/bias e rappresentatività)?",
        weight: 9,
        article: "Articolo 10",
        lawExplanation: "L'articolo 10 stabilisce requisiti rigorosi in materia di governance e gestione dei dati per i sistemi di IA ad alto rischio che prevedono l'addestramento di modelli. Tali set di dati devono essere soggetti a pratiche di governance appropriate, incluse valutazioni sulla pertinenza, rappresentatività, assenza di errori, completezza e l'esame per individuare e mitigare eventuali distorsioni sistematiche (bias) che potrebbero causare discriminazioni.",
        guidance: "1. Redigere una policy di data governance per i team di Data Science che disciplini la raccolta e preparazione dei dataset.\n2. Documentare la provenienza dei dati, le scelte di etichettatura (annotation) e i processi di pulizia dei dati.\n3. Eseguire test statistici e algoritmi di rilevamento dei bias (distorsioni) per verificare che il dataset non contenga elementi discriminatori.\n4. Assicurarsi che i dati di test e convalida siano rappresentativi del contesto reale in cui il sistema opererà."
      },
      {
        id: "AI_ACT_Q4",
        text: "L'azienda redige e mantiene aggiornata la documentazione tecnica dettagliata del sistema di IA ad alto rischio, inclusa la registrazione automatica degli eventi (logging) per garantirne la tracciabilità?",
        weight: 8,
        article: "Articoli 11 e 12",
        lawExplanation: "L'articolo 11 impone di redigere la documentazione tecnica del sistema di IA ad alto rischio prima che esso sia immesso sul mercato o messo in servizio, al fine di dimostrare la conformità ai requisiti normativi. L'articolo 12 richiede che i sistemi ad alto rischio siano progettati e sviluppati per consentire la registrazione automatica degli eventi (log) durante il loro funzionamento, garantendo la tracciabilità e la vigilanza post-commercializzazione.",
        guidance: "1. Predisporre la documentazione tecnica descritta all'Allegato IV, specificando l'architettura del sistema, il funzionamento generale, l'hardware richiesto e le metriche di prestazione.\n2. Configurare all'interno del codice del sistema di IA meccanismi di tracciamento e logging automatico per registrare le operazioni di elaborazione, i log di sistema e i fattori decisionali critici.\n3. Conservare i file di log in un formato sicuro e immutabile per un periodo conforme alle indicazioni dell'autorità di vigilanza."
      },
      {
        id: "AI_ACT_Q5",
        text: "I sistemi di IA ad alto rischio sono progettati e sviluppati in modo tale che le persone fisiche possano esercitare un'effettiva sorveglianza (human-in-the-loop) e gli utilizzatori siano informati sulla natura del sistema?",
        weight: 9,
        article: "Articoli 13 e 14",
        lawExplanation: "L'articolo 13 impone che i sistemi di IA ad alto rischio siano progettati in modo da garantire un livello sufficiente di trasparenza affinché gli utilizzatori possano interpretarne l'output. L'articolo 14 richiede che tali sistemi siano dotati di interfacce e strumenti che consentano a persone fisiche di esercitare una sorveglianza effettiva, prevenendo o riducendo al minimo i rischi associati al loro funzionamento (es. pulsante di arresto o override manuale).",
        guidance: "1. Sviluppare interfacce utente (UI) che forniscano spiegazioni chiare sulle raccomandazioni o decisioni generate dall'IA.\n2. Fornire agli utilizzatori istruzioni per l'uso complete, dettagliando i limiti del sistema e i margini di errore.\n3. Implementare procedure di controllo umano che richiedano la conferma o la revisione manuale di un operatore qualificato prima che una decisione automatizzata generi effetti vincolanti o significativi."
      },
      {
        id: "AI_ACT_Q6",
        text: "L'azienda sottopone i sistemi di IA ad alto rischio alle procedure di valutazione della conformità previste e applica la marcatura CE prima dell'immissione sul mercato?",
        weight: 8,
        article: "Articoli 43, 47 e 48",
        lawExplanation: "L'articolo 43 delinea le procedure di valutazione della conformità che i fornitori devono seguire per i sistemi di IA ad alto rischio. L'articolo 48 stabilisce che, a seguito dell'esito positivo della valutazione, il fornitore deve redigere una dichiarazione di conformità UE, apporre la marcatura CE in modo visibile sul prodotto o sul codice e iscrivere il sistema nella banca dati europea gestita dalla Commissione.",
        guidance: "1. Verificare se la valutazione della conformità richiede l'intervento di un organismo notificato terzo o se può essere eseguita tramite controllo interno della produzione (Allegato VI).\n2. Sottoporre il sistema a tutti i test di conformità previsti dalle norme armonizzate pertinenti.\n3. Redigere formalmente la dichiarazione di conformità UE e apporre il marchio CE sul sistema.\n4. Registrare il sistema di IA ad alto rischio nella banca dati europea prima di avviarne la commercializzazione o l'utilizzo."
      }
    ]
  },
  CRA: {
    title: "Regolamento sulla Cibersicurezza dei Prodotti con Elementi Digitali (Cyber Resilience Act - CRA)",
    code: "CRA",
    description: "Regolamento europeo che stabilisce requisiti essenziali di cibersicurezza per hardware e software immessi sul mercato dell'Unione.",
    questions: [
      {
        id: "CRA_Q1",
        text: "L'azienda progetta e sviluppa i prodotti con elementi digitali garantendo che siano privi di vulnerabilità note al momento dell'immissione sul mercato e configurati in modo sicuro per impostazione predefinita?",
        weight: 10,
        article: "Articolo 10 e Allegato I (Sezione 1)",
        lawExplanation: "L'articolo 10 impone ai fabbricanti l'obbligo di garantire che i prodotti con elementi digitali siano progettati e sviluppati in conformità dei requisiti essenziali di cibersicurezza stabiliti dall'Allegato I. Tali requisiti prescrivono che i prodotti siano immessi sul mercato privi di vulnerabilità sfruttuabili note, che utilizzino configurazioni sicure per impostazione predefinita (secure by default) e che dispongano di un controllo degli accessi robusto.",
        guidance: "1. Integrare criteri di sicurezza fin dalle prime fasi di progettazione dei prodotti hardware e software (Secure by Design).\n2. Eseguire scansioni di sicurezza e test di vulnerabilità (es. analisi SAST/DAST) prima del rilascio commerciale.\n3. Disabilitare porte logiche o servizi non necessari e imporre la modifica obbligatoria delle credenziali predefinite al primo utilizzo del dispositivo."
      },
      {
        id: "CRA_Q2",
        text: "L'azienda dispone di un processo strutturato per monitorare le vulnerabilità dei propri prodotti per l'intera durata del ciclo di vita (o per un minimo di 5 anni) e per rilasciare aggiornamenti di sicurezza gratuiti?",
        weight: 9,
        article: "Articolo 10 (paragrafo 6) e Allegato I (Sezione 2)",
        lawExplanation: "L'articolo 10, paragrafo 6, impone ai fabbricanti l'obbligo di monitorare costantemente le vulnerabilità dei prodotti per un periodo di almeno 5 anni dall'immissione sul mercato, o pari alla durata di vita prevista del prodotto (se inferiore). Per tutta la durata di questo periodo, il fabbricante deve identificare le vulnerabilità e rendere disponibili aggiornamenti di sicurezza per correggerle, senza alcun costo per gli utenti.",
        guidance: "1. Definire la durata del ciclo di vita del supporto di sicurezza per ciascun prodotto commerciale e renderla nota agli utenti.\n2. Implementare un sistema per il rilascio automatico o facilitato di patch e aggiornamenti di sicurezza del firmware o del software.\n3. Monitorare regolarmente i database pubblici delle vulnerabilità (CVE) per individuare minacce riguardanti le librerie o il software utilizzato."
      },
      {
        id: "CRA_Q3",
        text: "L'azienda ha implementato una procedura per notificare all'ENISA e alle autorità nazionali competenti qualsiasi vulnerabilità attivamente sfruttata o incidente di sicurezza significativo entro 24 ore dalla sua scoperta?",
        weight: 9,
        article: "Articolo 11",
        lawExplanation: "L'articolo 11 impone ai fabbricanti l'obbligo di segnalare all'Agenzia dell'Unione europea per la cibersicurezza (ENISA) e all'autorità di vigilanza nazionale competente qualsiasi vulnerabilità attivamente sfruttata rilevata nel proprio prodotto o qualsiasi incidente di sicurezza significativo che ne comprometta la sicurezza. Il pre-allarme deve essere inviato entro 24 ore dalla scoperta, seguito da una notifica completa entro 72 ore.",
        guidance: "1. Definire una procedura interna di gestione degli incidenti per i prodotti distribuiti sul mercato.\n2. Designare un team di risposta agli incidenti responsabile di valutare lo sfruttamento attivo di una vulnerabilità.\n3. Configurare i canali di contatto rapidi con l'ENISA e l'autorità nazionale (es. CSIRT italiano) per l'invio delle notifiche obbligatorie entro le scadenze legali."
      },
      {
        id: "CRA_Q4",
        text: "L'azienda identifica e documenta sistematicamente i componenti di terze parti e open-source utilizzati nei propri prodotti, redigendo una distinta base del software (SBOM) in un formato leggibile meccanicamente?",
        weight: 8,
        article: "Articolo 10 (paragrafo 4) e Allegato I (Sezione 2, punto 1)",
        lawExplanation: "L'articolo 10 impone ai fabbricanti l'obbligo di identificare e documentare i componenti del prodotto con elementi digitali, inclusa la redazione di una distinta base del software (Software Bill of Materials - SBOM) che elenchi tutte le dipendenze e i componenti open-source o di terze parti. Questa documentazione è fondamentale per valutare la sicurezza della supply chain del software e consentire la tracciabilità delle vulnerabilità.",
        guidance: "1. Integrare nella pipeline di sviluppo (CI/CD) strumenti automatici di Software Composition Analysis (SCA) per mappare le dipendenze software.\n2. Generare la SBOM in formati standard e leggibili elettronicamente (es. SPDX, CycloneDX) a ogni build o rilascio ufficiale.\n3. Rivedere periodicamente la SBOM per assicurarsi che nessun componente utilizzato presenti vulnerabilità critiche irrisolte."
      },
      {
        id: "CRA_Q5",
        text: "L'azienda ha redatto la documentazione tecnica richiesta e ha condotto una delle procedure di valutazione della conformità (es. controllo interno della produzione) prima di applicare la marcatura CE?",
        weight: 8,
        article: "Articoli 20, 24 e Allegato V",
        lawExplanation: "L'articolo 20 stabilisce che, prima di immettere un prodotto sul mercato, i fabbricanti devono redigere la documentazione tecnica necessaria e condurre o far condurre le procedure di valutazione della conformità previste all'articolo 24. Una volta completata con successo la valutazione e redatta la dichiarazione di conformità UE, sul prodotto deve essere apposta la marcatura CE.",
        guidance: "1. Raccogliere tutta la documentazione tecnica comprendente l'analisi dei rischi di cibersicurezza del prodotto, la SBOM, i test di sicurezza eseguiti e le specifiche di design.\n2. Identificare la classe del prodotto (standard, Classe I o Classe II ai sensi dell'Allegato III) per determinare la procedura di valutazione (autocertificazione o valutazione da parte di un organismo notificato).\n3. Redigere la dichiarazione di conformità UE e apporre il marchio CE sul prodotto."
      },
      {
        id: "CRA_Q6",
        text: "I prodotti sono accompagnati da istruzioni chiare e informazioni di sicurezza in lingua italiana (es. indicazioni sulla durata del supporto di sicurezza e su come segnalare vulnerabilità)?",
        weight: 8,
        article: "Articolo 10 (paragrafo 10) e Allegato II",
        lawExplanation: "L'articolo 10, paragrafo 10, richiede che il prodotto sia accompagnato da informazioni e istruzioni chiare per l'utente, scritte in una lingua facilmente compresa dagli utenti finali (es. la lingua nazionale dello Stato in cui è commercializzato). Le istruzioni devono contenere i dettagli per configurare il prodotto in modo sicuro, le modalità per installare gli aggiornamenti e l'indicazione del periodo durante il quale saranno forniti aggiornamenti di sicurezza.",
        guidance: "1. Redigere una guida alla sicurezza informatica per il prodotto, tradotta in italiano, e allegarla fisicamente o digitalmente al prodotto.\n2. Specificare chiaramente nel manuale e sul sito web aziendale la data di termine del supporto di sicurezza.\n3. Fornire indicazioni chiare su come gli utenti possono segnalare problemi o vulnerabilità riscontrate (es. link a una pagina di segnalazione o indirizzo e-mail del team di sicurezza)."
      }
    ]
  },
  DATA_ACT: {
    title: "Regolamento sui Dati (Data Act - Regolamento UE 2023/2854)",
    code: "DATA_ACT",
    description: "Regolamento che disciplina l'accesso e l'uso equo dei dati generati da prodotti connessi (IoT) e servizi correlati, e la portabilità dei servizi cloud.",
    questions: [
      {
        id: "DATA_ACT_Q1",
        text: "I prodotti connessi (IoT) e i servizi correlati sviluppati o commercializzati dall'azienda sono progettati in modo da consentire all'utente (persona fisica o giuridica) di accedere direttamente, facilmente e gratuitamente ai dati generati dal loro utilizzo?",
        weight: 10,
        article: "Articolo 3",
        lawExplanation: "L'articolo 3 stabilisce il principio dell'accessibilità fin dalla progettazione (access-by-design). I prodotti connessi e i servizi correlati devono essere progettati, fabbricati e forniti in modo tale che i dati generati dal loro utilizzo siano, per impostazione predefinita, accessibili all'utente in modo diretto, sicuro, semplice e senza costi aggiuntivi.",
        guidance: "1. Analizzare i flussi di dati generati dai dispositivi IoT aziendali (sensori, log di utilizzo, metriche).\n2. Progettare e implementare interfacce (es. pannelli web di controllo, API locali o applicazioni mobili) che consentano all'utente di scaricare o visualizzare direttamente e in tempo reale tali dati.\n3. Assicurarsi che l'accesso ai dati non comporti addebiti tariffari aggiuntivi per l'utente finale."
      },
      {
        id: "DATA_ACT_Q2",
        text: "L'azienda dispone di procedure tecniche e contrattuali per trasmettere tempestivamente e in modo sicuro i dati generati a un soggetto terzo (es. fornitore di servizi di manutenzione) indicato dall'utente?",
        weight: 9,
        article: "Articolo 5",
        lawExplanation: "L'articolo 5 sancisce il diritto degli utenti di richiedere che i dati generati da un prodotto connesso o da un servizio correlato siano messi a disposizione di un terzo (un operatore economico da loro scelto, es. un riparatore indipendente). Il detentore dei dati deve effettuare tale trasmissione tempestivamente, gratuitamente per l'utente ed a condizioni eque, ragionevoli e non discriminatorie (FRAND) per il terzo.",
        guidance: "1. Sviluppare interfacce di integrazione sicure (es. API REST) per consentire l'esportazione autorizzata dei dati verso piattaforme terze.\n2. Definire un processo interno per validare le richieste di condivisione avanzate dagli utenti e verificare l'identità del terzo designato.\n3. Predisporre schemi contrattuali standard che regolino la condivisione a condizioni FRAND, specificando eventuali compensazioni ragionevoli applicabili solo ai terzi non consumatori."
      },
      {
        id: "DATA_ACT_Q3",
        text: "Prima della conclusione del contratto di acquisto o di noleggio di un prodotto connesso o servizio correlato, l'azienda fornisce all'utente informazioni chiare sulla tipologia, volume e frequenza dei dati generati e su come accedervi?",
        weight: 8,
        article: "Articolo 4",
        lawExplanation: "L'articolo 4 impone un obbligo di trasparenza precontrattuale. Prima che l'utente stipuli un contratto per l'acquisto, la locazione o il noleggio di un prodotto connesso o per la fornitura di un servizio correlato, il detentore deve fornire informazioni dettagliate, tra cui: la natura dei dati che saranno generati, la frequenza, se il trattamento è continuo, come l'utente può accedervi e per quali finalità il detentore intende usare tali dati.",
        guidance: "1. Redigere un documento informativo precontrattuale (scheda informativa sui dati) specifico per ciascun prodotto IoT o servizio correlato.\n2. Includere in questo documento l'elenco analitico dei dati registrati, la frequenza di campionamento e le modalità tecniche messe a disposizione per la loro estrazione.\n3. Integrare tale informativa all'interno del flusso di vendita online e nei contratti fisici, richiedendo la presa visione dell'utente prima della firma."
      },
      {
        id: "DATA_ACT_Q4",
        text: "L'azienda ha definito misure tecniche e organizzative (es. accordi di riservatezza, restrizioni d'accesso) per proteggere i propri segreti commerciali prima di condividere i dati con utenti o terzi?",
        weight: 8,
        article: "Articolo 4 (paragrafi 3 e 4) e Articolo 5 (paragrafo 8)",
        lawExplanation: "Il Data Act stabilisce che i segreti commerciali devono essere divulgati solo nella misura in cui sono strettamente necessari per adempiere all'obbligo di accesso. Il detentore dei dati può concordare con l'utente o con i terzi misure specifiche (es. accordi di riservatezza, standard di sicurezza tecnica, limitazioni d'accesso) per preservare la riservatezza dei propri segreti commerciali, potendo rifiutare o sospendere la condivisione in casi eccezionali qualora dimostri che la divulgazione causerebbe un grave danno economico.",
        guidance: "1. Identificare e mappare quali dati generati dai prodotti contengono segreti commerciali o proprietà intellettuale aziendale.\n2. Predisporre accordi di riservatezza (NDA) e clausole di protezione dei segreti industriali da far firmare all'utente o al terzo ricevente prima di abilitare l'esportazione dei dati sensibili.\n3. Implementare controlli tecnici (es. mascheramento o aggregazione dei dati) per prevenire attività di reverse engineering sul funzionamento interno dei dispositivi."
      },
      {
        id: "DATA_ACT_Q5",
        text: "Se l'azienda fornisce servizi di elaborazione dati (es. cloud computing), garantisce che i clienti possano migrare agevolmente verso un altro fornitore, eliminando ostacoli commerciali, tecnici e contrattuali e supportando interfacce aperte?",
        weight: 9,
        article: "Articoli 23, 25 e 26",
        lawExplanation: "L'articolo 23 impone ai fornitori di servizi di elaborazione dati (cloud, IaaS, PaaS, SaaS) l'obbligo di rimuovere gli ostacoli contrattuali, commerciali, organizzativi e tecnici che impediscono ai clienti di migrare verso un altro fornitore o di implementare strategie multi-cloud. L'articolo 25 richiede che i contratti descrivano dettagliatamente i diritti di migrazione e che non vengano applicate tariffe di uscita (switching charges) a decorrere dalla data stabilita dalla legge.",
        guidance: "1. Rivedere le clausole contrattuali dei servizi cloud per rimuovere vincoli di lock-in temporali eccessivi o penali economiche per il recesso.\n2. Fornire ai clienti la possibilità di esportare tutti i propri dati, configurazioni e metadati in formati aperti, strutturati e comunemente utilizzati (es. JSON, XML, formati standard di database).\n3. Pubblicare documentazione tecnica chiara che descriva le API e le procedure per l'esportazione autonoma delle risorse."
      },
      {
        id: "DATA_ACT_Q6",
        text: "L'azienda adotta misure tecniche, organizzative e giuridiche per impedire l'accesso o il trasferimento internazionale di dati non personali conservati nell'UE che confligga con il diritto dell'Unione o nazionale?",
        weight: 8,
        article: "Articolo 27",
        lawExplanation: "L'articolo 27 impone ai fornitori di servizi di elaborazione dati l'obbligo di adottare tutte le misure ragionevoli (tecniche, organizzative e giuridiche) per impedire il trasferimento internazionale o l'accesso da parte di governi di paesi terzi a dati non personali conservati nell'Unione Europea, qualora tale trasferimento o accesso sia in conflitto con il diritto dell'Unione o con la legislazione nazionale dello Stato membro interessato.",
        guidance: "1. Rivedere le politiche di localizzazione geografica e conservazione dei dati, assicurando che i dati non personali siano ospitati su server situati nel territorio dell'Unione Europea.\n2. Implementare sistemi di cifratura forte in cui le chiavi di decifrazione siano gestite esclusivamente dal cliente o da entità UE protette da leggi extraterritoriali.\n3. Stabilire una procedura legale interna per la valutazione delle richieste di accesso ai dati provenienti da autorità giudiziarie straniere, prevedendo il rifiuto qualora violino le tutele del Data Act."
      }
    ]
  },
  DORA: {
    title: "Regolamento sulla Resilienza Operativa Digitale per il Settore Finanziario (DORA - Regolamento UE 2022/2554)",
    code: "DORA",
    description: "Regolamento che stabilisce un quadro dettagliato per la gestione dei rischi ICT e la sicurezza informatica per le entità finanziarie e i loro fornitori tecnologici terzi.",
    questions: [
      {
        id: "DORA_Q1",
        text: "L'azienda ha istituito, mantiene e riesamina regolarmente un quadro di gestione dei rischi ICT solido, documentato e integrato nel proprio sistema di gestione aziendale complessivo?",
        weight: 10,
        article: "Articolo 6",
        lawExplanation: "L'articolo 6 stabilisce che gli organi di gestione delle entità finanziarie sono responsabili della definizione, approvazione e supervisione del quadro di gestione dei rischi ICT. Questo quadro deve essere documentato, proporzionato alle dimensioni e al profilo di rischio dell'entità, e finalizzato a proteggere tutte le risorse fisiche e informative contro accessi non autorizzati o danni.",
        guidance: "1. Definire una politica formale di governance dei sistemi informativi approvata formalmente dal Consiglio di Amministrazione.\n2. Strutturare un framework di gestione dei rischi ICT basato su standard di settore (es. ISO 27001, NIST) adattato alle specificità del settore finanziario.\n3. Condurre sessioni periodiche (almeno annuali) di riesame del quadro di sicurezza con la partecipazione del top management."
      },
      {
        id: "DORA_Q2",
        text: "L'azienda mantiene un inventario completo, aggiornato e mappato di tutte le fonti di rischio ICT, delle risorse informative e degli asset tecnologici, classificandoli in base alla loro criticità per le operazioni aziendali?",
        weight: 8,
        article: "Articolo 8",
        lawExplanation: "L'articolo 8 impone alle entità finanziarie l'obbligo di identificare, classificare e documentare in modo coerente tutte le funzioni aziendali supportate da ICT, i ruoli e le risorse informative che sostengono tali funzioni. È richiesta la mappatura delle interconnessioni tra le diverse risorse informative e una classificazione rigorosa di quelle considerate critiche o importanti.",
        guidance: "1. Creare ed implementare un database degli asset tecnologici (CMDB) che censisca hardware, software, licenze e sistemi di rete.\n2. Mappare i flussi di dati e identificare quali asset supportano funzioni aziendali critiche (es. sistemi di pagamento, gestione conti).\n3. Assegnare a ciascun asset un livello di criticità e definire tempi massimi di interruzione tollerabili (RTO e RPO)."
      },
      {
        id: "DORA_Q3",
        text: "L'azienda ha definito e implementato un processo per monitorare, gestire, classificare gli incidenti legati all'ICT e per notificare quelli gravi alle autorità competenti entro i termini stabiliti?",
        weight: 9,
        article: "Articoli 17, 18 e 19",
        lawExplanation: "L'articolo 17 richiede di attuare un processo per rilevare, gestire e notificare gli incidenti legati all'ICT. L'articolo 18 definisce i criteri per classificare la gravità degli incidenti (es. numero di utenti interessati, durata, perdite di dati). L'articolo 19 obbliga le entità finanziarie a notificare gli incidenti ICT gravi all'autorità nazionale competente (es. Banca d'Italia, Consob, IVASS) tramite una notifica iniziale (pre-allarme), una notifica intermedia e una relazione finale.",
        guidance: "1. Redigere una procedura operativa per la classificazione e la gestione degli incidenti informatici.\n2. Configurare strumenti di monitoraggio in tempo reale (SIEM, SOC) per intercettare tempestivamente anomalie o attacchi.\n3. Definire flussi di escalation interni per garantire che gli incidenti gravi siano identificati e notificati alle autorità di vigilanza entro le finestre temporali prescritte dalle norme tecniche di DORA."
      },
      {
        id: "DORA_Q4",
        text: "L'azienda pianifica ed esegue regolarmente (almeno una volta all'anno) un programma di test di resilienza operativa digitale, comprendente valutazioni delle vulnerabilità, scansioni di rete e test di penetrazione?",
        weight: 9,
        article: "Articoli 24, 25 e 26",
        lawExplanation: "L'articolo 24 stabilisce che le entità finanziarie devono istituire e mantenere un programma di test di resilienza operativa digitale proporzionato. L'articolo 25 elenca i test minimi richiesti (es. valutazioni della sicurezza fisica, scansioni di rete, analisi del codice sorgente). L'articolo 26 impone alle entità finanziarie individuate come significative l'obbligo di condurre test avanzati di penetrazione basati su minacce (Threat-Led Penetration Testing - TLPT) almeno ogni 3 anni, eseguiti da professionisti esterni qualificati.",
        guidance: "1. Strutturare un piano annuale di test di sicurezza informatica comprendente vulnerability assessment esterni ed interni.\n2. Sottoporre le applicazioni critiche a test di penetrazione (pentest) annuali eseguiti da terze parti indipendenti.\n3. Se l'azienda rientra nei criteri di criticità per i test TLPT, pianificare l'esecuzione dei test basati su scenari reali di minaccia (Red Teaming) coinvolgendo l'autorità di vigilanza."
      },
      {
        id: "DORA_Q5",
        text: "L'azienda valuta i rischi associati all'utilizzo di fornitori terzi di servizi ICT prima di stipulare contratti e si assicura che gli accordi contrattuali contengano tutti i requisiti minimi di sicurezza stabiliti dal regolamento?",
        weight: 9,
        article: "Articoli 28 e 30",
        lawExplanation: "L'articolo 28 impone una gestione strutturata del rischio ICT derivante da terze parti. Le entità finanziarie devono valutare la postura di sicurezza del fornitore prima del contratto e monitorare costantemente le prestazioni dei fornitori critici. L'articolo 30 elenca dettagliatamente gli elementi minimi che devono essere inclusi negli accordi scritti con i fornitori (es. descrizione dei servizi, SLA, sedi di trattamento dei dati, diritti di audit fisici e logici per l'entità finanziaria).",
        guidance: "1. Istituire una procedura interna per la qualificazione e la due diligence dei fornitori di servizi ICT prima della stipula dei contratti.\n2. Creare un registro aggiornato di tutti i fornitori ICT terzi, identificando quelli che supportano funzioni critiche o importanti.\n3. Aggiornare i contratti in essere inserendo le clausole obbligatorie previste dall'articolo 30, inclusi i diritti di ispezione e di audit per l'azienda e per le autorità di vigilanza."
      },
      {
        id: "DORA_Q6",
        text: "L'azienda partecipa o ha valutato la partecipazione ad accordi per la condivisione di informazioni ed elementi informativi sulle minacce informatiche con altre entità finanziarie, nel rispetto della riservatezza?",
        weight: 7,
        article: "Articolo 45",
        lawExplanation: "L'articolo 45 incoraggia le entità finanziarie a scambiarsi informazioni ed elementi informativi sulle minacce informatiche (es. indicatori di compromissione, tattiche, tecniche e procedure, allarmi di cibersicurezza) al fine di rafforzare la resilienza operativa digitale dell'intero sistema finanziario, a condizione che lo scambio avvenga nel rispetto della privacy e delle norme sulla concorrenza.",
        guidance: "1. Valutare l'adesione a comunità o piattaforme nazionali/europee per la condivisione delle minacce (es. CERTFin o gruppi ISAC).\n2. Configurare i sistemi di sicurezza interni per poter integrare feed di minacce standardizzati (es. STIX/TAXII).\n3. Stabilire policy interne per condividere in forma anonima gli indicatori di attacco subiti, contribuendo alla sicurezza collettiva del settore."
      }
    ]
  },
  DSA: {
    title: "Regolamento sui Servizi Digitali (Digital Services Act - Regolamento UE 2022/2065)",
    code: "DSA",
    description: "Regolamento europeo volto a garantire un ambiente online sicuro, prevedibile e affidabile, regolamentando la moderazione dei contenuti e la trasparenza delle piattaforme intermediarie.",
    questions: [
      {
        id: "DSA_Q1",
        text: "L'azienda fornisce un meccanismo online di facile accesso e utilizzo che consenta a qualsiasi persona o entità di segnalare la presenza di presunti contenuti illegali sul proprio servizio?",
        weight: 10,
        article: "Articolo 16",
        lawExplanation: "L'articolo 16 impone ai fornitori di servizi di hosting l'obbligo di istituire meccanismi di segnalazione e azione (notice and action) facilmente accessibili e di semplice utilizzo. Tali strumenti devono consentire a qualsiasi persona o entità di notificare la presenza di informazioni che considerano contenuti illegali sul servizio, richiedendo dettagli precisi quali l'URL, la descrizione e i dati del segnalante.",
        guidance: "1. Sviluppare un modulo web pubblico o un pulsante di segnalazione integrato nelle pagine del servizio (es. accanto a post, annunci o commenti).\n2. Strutturare il modulo affinché raccolga le informazioni minime richieste: spiegazione del motivo dell'illegalità, localizzazione esatta (URL o ID), nome e indirizzo e-mail del segnalante.\n3. Configurare un sistema per inviare una notifica automatica di ricezione al segnalante e avviare il processo di esame interno."
      },
      {
        id: "DSA_Q2",
        text: "Quando l'azienda decide di rimuovere, disabilitare l'accesso o limitare la visibilità di un contenuto fornito da un utente, invia a quest'ultimo una motivazione chiara, tempestiva e dettagliata della decisione?",
        weight: 9,
        article: "Articolo 17",
        lawExplanation: "L'articolo 17 stabilisce che i prestatori di servizi di hosting, qualora decidano di rimuovere, disabilitare l'accesso, retrocedere o limitare la visibilità di informazioni fornite dagli utenti (a causa di contenuti ritenuti illegali o incompatibili con le condizioni generali), devono inviare all'utente interessato una motivazione chiara e specifica, illustrando le ragioni del provvedimento e le opzioni di ricorso disponibili.",
        guidance: "1. Configurare una procedura (automatica o manuale) all'interno del sistema di moderazione per generare notifiche destinate agli utenti i cui contenuti sono stati rimossi o limitati.\n2. Includere nella comunicazione: la spiegazione dei motivi, il riferimento alla specifica clausola contrattuale o norma di legge violata, l'eventuale uso di strumenti automatizzati per il rilevamento e l'indicazione delle modalità per presentare ricorso."
      },
      {
        id: "DSA_Q3",
        text: "L'azienda offre agli utenti l'accesso gratuito a un sistema interno di gestione dei reclami che consenta loro di impugnare le decisioni di moderazione per un periodo di almeno sei mesi?",
        weight: 9,
        article: "Articolo 20",
        lawExplanation: "L'articolo 20 obbliga i fornitori di piattaforme online a fornire ai destinatari del servizio, per un periodo di almeno 6 mesi a decorrere dalla decisione di moderazione, l'accesso a un sistema interno di gestione dei reclami efficace e gratuito. Il sistema deve consentire agli utenti di contestare decisioni quali la rimozione di contenuti, la disabilitazione dell'account o la sospensione della fornitura del servizio.",
        guidance: "1. Progettare ed implementare una funzionalità o area dedicata sul portale per la presentazione dei reclami contro le decisioni di moderazione.\n2. Garantire che i reclami presentati siano esaminati tempestivamente sotto la supervisione di personale qualificato (e non esclusivamente tramite algoritmi).\n3. Ripristinare immediatamente il contenuto o l'account dell'utente qualora il reclamo si riveli fondato."
      },
      {
        id: "DSA_Q4",
        text: "Le condizioni generali di servizio descrivono in modo chiaro, accessibile e facilmente comprensibile le politiche, le procedure e gli strumenti utilizzati per la moderazione dei contenuti e l'eventuale funzionamento dei sistemi di raccomandazione algoritmici?",
        weight: 8,
        article: "Articoli 14 e 27",
        lawExplanation: "L'articolo 14 richiede che i prestatori di servizi descrivano chiaramente nelle loro condizioni generali qualsiasi restrizione imposta all'uso del servizio, comprese informazioni sulle politiche, sulle procedure e sui filtri algoritmici utilizzati per la moderazione dei contenuti. L'articolo 27 impone alle piattaforme online che utilizzano sistemi di raccomandazione di indicare nelle condizioni generali i parametri principali che determinano i contenuti visualizzati dagli utenti e le opzioni per modificarli.",
        guidance: "1. Revisionare i Termini di Servizio del sito o dell'applicazione inserendo capitoli specifici sulla moderazione (esplicitando se si usano sistemi automatici e quali sono le regole di condotta).\n2. Se il servizio propone contenuti in base alle preferenze degli utenti, descrivere in modo chiaro i fattori principali dell'algoritmo (es. cronologia di visualizzazione, geolocalizzazione).\n3. Fornire agli utenti un'opzione facilmente accessibile per modificare o disattivare i parametri di raccomandazione principali."
      },
      {
        id: "DSA_Q5",
        text: "L'azienda progetta le proprie interfacce digitali evitando l'uso di tecniche ingannevoli (dark patterns) volte a manipolare le scelte degli utenti e garantisce un livello elevato di sicurezza, protezione e riservatezza per i minori?",
        weight: 9,
        article: "Articoli 25 e 28",
        lawExplanation: "L'articolo 25 vieta espressamente ai fornitori di piattaforme online di progettare, organizzare o gestire le loro interfacce web in modo da ingannare o manipolare i destinatari del servizio o da distorcere o ostacolare altrimenti la loro capacità di prendere decisioni libere e informate (i cosiddetti dark patterns). L'articolo 28 impone alle piattaforme accessibili ai minori l'obbligo di adottare misure adeguate e proporzionate per garantire un livello elevato di riservatezza, sicurezza e protezione dei minori sul servizio.",
        guidance: "1. Sottoporre l'interfaccia utente (UI/UX) del sito o dell'app a un audit per identificare e rimuovere pratiche ingannevoli (es. rendere più difficile la cancellazione dell'abbonamento rispetto all'attivazione, o utilizzare popup ripetitivi per forzare il consenso).\n2. Qualora la piattaforma sia utilizzata da minori, disattivare la profilazione e l'invio di pubblicità mirata basata sui loro dati personali.\n3. Configurare impostazioni di privacy predefinite elevate per i profili dei minori."
      },
      {
        id: "DSA_Q6",
        text: "L'azienda redige e pubblica, almeno una volta all'anno, relazioni dettagliate e facilmente comprensibili sull'attività di moderazione dei contenuti svolta?",
        weight: 8,
        article: "Articoli 15 e 24",
        lawExplanation: "L'articolo 15 e l'articolo 24 impongono ai prestatori di servizi intermediari e di piattaforme online l'obbligo di rendere pubbliche, a cadenza almeno annuale, relazioni chiare, dettagliate e facilmente comprensibili sulle attività di moderazione dei contenuti effettuate. Tali relazioni devono indicare il numero di segnalazioni ricevute, i tempi medi di gestione, i provvedimenti adottati (rimozioni, sospensioni) e l'uso di filtri automatici.",
        guidance: "1. Strutturare un registro metrico interno che tracci tutte le azioni di moderazione (segnalazioni ricevute, reclami presentati, rimozioni effettuate).\n2. Predisporre a fine anno un report formale (es. in formato PDF o pagina web dedicata) contenente i dati statistici richiesti dal regolamento.\n3. Pubblicare la relazione sul sito web aziendale in una sezione facilmente accessibile e dedicata alla trasparenza."
      }
    ]
  },
  EAA: {
    title: "Direttiva sui Requisiti di Accessibilità dei Prodotti e dei Servizi (European Accessibility Act - Direttiva UE 2019/882)",
    code: "EAA",
    description: "Direttiva europea (recepita in Italia con il D.Lgs. 82/2022) volta a garantire l'accessibilità digitale e fisica di determinati prodotti e servizi per le persone con disabilità.",
    questions: [
      {
        id: "EAA_Q1",
        text: "I canali web, le app mobili e i flussi di e-commerce dell'azienda sono pienamente conformi ai requisiti tecnici di accessibilità (es. navigabilità completa da tastiera, compatibilità con screen reader, contrasto cromatico sufficiente)?",
        weight: 10,
        article: "Articolo 4 e Allegato I (Requisiti di accessibilità generali per servizi)",
        lawExplanation: "L'articolo 4 della Direttiva (UE) 2019/882 stabilisce che gli operatori economici devono garantire che i servizi forniti ai consumatori rispettino i requisiti di accessibilità previsti all'Allegato I. Per i canali digitali come siti web ed e-commerce, ciò comporta il rispetto dello standard armonizzato europeo EN 301 549 (fondato sulle linee guida internazionali WCAG 2.1 livello AA) per consentire la percezione, l'operabilità, la comprensione e la robustezza del servizio a persone con disabilità.",
        guidance: "1. Eseguire un audit tecnico di accessibilità sul sito web e sui canali di e-commerce utilizzando strumenti automatici (es. Lighthouse, Axe) ed ispezioni manuali.\n2. Garantire che tutti gli elementi grafici e le immagini abbiano testi alternativi descrittivi.\n3. Assicurarsi che l'intero sito sia navigabile ed utilizzabile esclusivamente tramite tastiera (senza mouse) e che il contrasto tra i testi e lo sfondo sia adeguato (rapporto minimo 4.5:1).\n4. Testare il corretto funzionamento dei flussi di acquisto con screen reader comuni (es. NVDA, VoiceOver)."
      },
      {
        id: "EAA_Q2",
        text: "L'azienda ha elaborato, documentato e reso pubblica una valutazione di accessibilità che descrive le caratteristiche di accessibilità del proprio servizio o prodotto in formati fruibili da persone con disabilità?",
        weight: 8,
        article: "Articolo 13 (paragrafo 1) e D.Lgs. 82/2022 (Articolo 7)",
        lawExplanation: "L'articolo 13 impone ai fornitori di servizi soggetti all'EAA l'obbligo di elaborare le informazioni descrittive sulle caratteristiche e sul funzionamento del servizio, spiegando in che modo esso soddisfa i requisiti di accessibilità applicabili. Tali informazioni devono essere messe a disposizione del pubblico in forma scritta e orale, e comunque in formati accessibili a persone con disabilità, incluse le indicazioni su come attivare tali caratteristiche.",
        guidance: "1. Redigere una 'Dichiarazione di Accessibilità' formale, seguendo le linee guida stabilite dall'Agenzia per l'Italia Digitale (AgID) o dall'autorità nazionale pertinente.\n2. Dettagliare nel documento lo stato di conformità del servizio, le sezioni eventualmente non conformi e i canali alternativi messi a disposizione dell'utente.\n3. Pubblicare il documento sul sito web aziendale inserendo un link ben visibile (solitamente nel footer) intitolato 'Dichiarazione di Accessibilità'."
      },
      {
        id: "EAA_Q3",
        text: "Se l'azienda applica deroghe all'accessibilità invocando un 'onere sproporzionato', ha documentato e formalizzato questa decisione tramite una valutazione di impatto rigorosa condotta secondo i criteri di legge?",
        weight: 8,
        article: "Articolo 14",
        lawExplanation: "L'articolo 14 consente deroghe ai requisiti di accessibilità solo se la conformità comporta una modifica fondamentale del servizio o un onere sproporzionato per l'organizzazione. La valutazione deve essere effettuata dal fabbricante o dal fornitore di servizi secondo i criteri definiti all'Allegato VI, deve essere formalizzata per iscritto, conservata per 5 anni dall'ultimo rilascio del servizio e notificata alle autorità nazionali di vigilanza competenti (es. AgID in Italia).",
        guidance: "1. Evitare di invocare deroghe in modo generico: preparare un'istruttoria formale scritta qualora l'adeguamento sia ritenuto tecnicamente o finanziariamente impraticabile.\n2. Svolgere la valutazione d'impatto basandosi sui parametri dell'Allegato VI (rapporto costi/benefici, dimensioni aziendali, risorse finanziarie, frequenza d'uso).\n3. Conservare il documento di valutazione firmato nei registri aziendali per un eventuale controllo da parte delle autorità di vigilanza."
      },
      {
        id: "EAA_Q4",
        text: "L'azienda ha istituito procedure per monitorare costantemente le modifiche e gli aggiornamenti apportati ai propri servizi digitali, garantendo che non introducano nuove barriere all'accessibilità?",
        weight: 9,
        article: "Articolo 13 (paragrafo 2)",
        lawExplanation: "L'articolo 13, paragrafo 2, impone ai fornitori di servizi l'obbligo di predisporre procedure affinché la fornitura dei servizi rimanga conforme ai requisiti di accessibilità applicabili. Qualsiasi variazione nel codice software, nella progettazione dell'interfaccia o nelle caratteristiche del servizio deve essere monitorata e verificata rispetto agli obblighi di legge.",
        guidance: "1. Integrare i requisiti di accessibilità (UNI EN 301549) all'interno delle specifiche di sviluppo software e di design (UX/UI).\n2. Formare periodicamente il personale interno (web designer, programmatori, redattori di contenuti) sui principi di accessibilità digitale.\n3. Introdurre test di accessibilità automatizzati (es. test d'integrazione con strumenti di scansione) all'interno dei processi di Quality Assurance (QA) prima di rilasciare aggiornamenti del software."
      },
      {
        id: "EAA_Q5",
        text: "I canali di supporto e assistenza clienti (es. centralini, chat, e-mail, help desk) associati al servizio sono progettati per essere accessibili anche a persone con disabilità sensoriali o cognitive?",
        weight: 8,
        article: "Allegato I (Sezione III)",
        lawExplanation: "L'Allegato I stabilisce che le informazioni e i canali messi a disposizione per l'assistenza clienti (es. help desk, call center, assistenza tecnica, servizi fiduciari e di formazione) associati alla fornitura del servizio devono essere essi stessi accessibili. Ciò significa che le informazioni sul funzionamento del servizio devono essere fornite in formati accessibili e che i canali di supporto devono offrire modalità di comunicazione adatte a persone con disabilità sensoriali o cognitive.",
        guidance: "1. Offrire molteplici canali di contatto alternativi e non limitarsi a un singolo canale (es. affiancare al supporto telefonico una chat di testo accessibile o un indirizzo e-mail diretto).\n2. Assicurarsi che le interfacce dei sistemi di chat di supporto (widget) rispettino le WCAG 2.1 per la compatibilità con screen reader e tastiera.\n3. Fornire le guide utente, le FAQ e i manuali d'uso in formati digitali accessibili (es. HTML strutturato o PDF taggati)."
      },
      {
        id: "EAA_Q6",
        text: "L'azienda ha predisposto un meccanismo per raccogliere feedback degli utenti sull'accessibilità dei servizi e per gestire in modo strutturato eventuali reclami sulle barriere digitali rilevate?",
        weight: 8,
        article: "Articolo 15 e D.Lgs. 82/2022",
        lawExplanation: "L'articolo 15 impone agli Stati membri di istituire procedure affinché i fornitori di servizi rispondano ai requisiti di conformità e per consentire ai consumatori di presentare ricorsi. Il recepimento italiano (D.Lgs. 82/2022) prevede che gli utenti debbano disporre di un meccanismo per inviare segnalazioni (meccanismo di feedback) al fornitore e, in caso di mancata risposta o risposta insoddisfacente, di adire l'AgID tramite la procedura di attuazione.",
        guidance: "1. Inserire un link dedicato nel footer del sito per consentire l'invio rapido di feedback sull'accessibilità (es. una mail dedicata o un modulo web).\n2. Definire un processo interno con tempi massimi di risposta (es. 30 giorni) per prendere in carico le segnalazioni sulle barriere digitali inoltrate dagli utenti.\n3. Risolvere tempestivamente le anomalie segnalate e aggiornare di conseguenza la dichiarazione di accessibilità."
      }
    ]
  },
  EPRIVACY: {
    title: "Direttiva sulla Vita Privata e le Comunicazioni Elettroniche (Direttiva ePrivacy - Direttiva 2002/58/CE)",
    code: "EPRIVACY",
    description: "Direttiva europea che tutela la riservatezza delle comunicazioni elettroniche, disciplinando l'uso di cookie, tracciatori e le comunicazioni commerciali (anti-spam).",
    questions: [
      {
        id: "EPRIVACY_Q1",
        text: "L'azienda acquisisce il consenso preventivo, libero ed informato dell'utente prima di archiviare informazioni o accedere a informazioni già archiviate nel suo dispositivo terminale (es. tramite cookie di profilazione o pixel)?",
        weight: 10,
        article: "Articolo 5 (paragrafo 3)",
        lawExplanation: "L'articolo 5, paragrafo 3, stabilisce che l'archiviazione di informazioni o l'accesso a informazioni già archiviate nell'apparecchio terminale di un abbonato o utente (es. tramite cookie di profilazione, tracciatori di terze parti, SDK o impronte digitali del dispositivo) è consentita solo se l'utente ha espresso il proprio consenso preventivo, dopo essere stato informato in modo chiaro e completo. Fanno eccezione esclusivamente i cookie o tracciatori tecnici strettamente necessari per erogare un servizio esplicitamente richiesto dall'utente.",
        guidance: "1. Configurare una Piattaforma di Gestione del Consenso (CMP) conforme alle linee guida delle autorità nazionali per la protezione dati.\n2. Bloccare preventivamente tutti i cookie e i tracciatori non necessari (profilazione, marketing, analitici di terze parti) prima che l'utente compia un'azione esplicita di accettazione sul banner.\n3. Consentire all'utente di rifiutare facilmente tutti i tracciatori con la stessa semplicità con cui può accettarli (es. pulsante 'Rifiuta tutti' visibile nel banner principale) e documentare i consensi ottenuti."
      },
      {
        id: "EPRIVACY_Q2",
        text: "L'azienda garantisce la riservatezza delle comunicazioni e dei relativi dati di traffico trasmessi tramite reti di comunicazione pubblica, evitando l'intercettazione o la memorizzazione non autorizzata degli stessi?",
        weight: 9,
        article: "Articolo 5 (paragrafo 1) e Articolo 6",
        lawExplanation: "L'articolo 5, paragrafo 1, impone di garantire la riservatezza delle comunicazioni e dei relativi dati di traffico effettuati tramite rete pubblica e servizi di comunicazione elettronica accessibili al pubblico. È vietata qualsiasi forma di ascolto, intercettazione o memorizzazione senza il consenso degli utenti interessati, salvo nei casi autorizzati dalla legge. L'articolo 6 impone che i dati di traffico debbano essere cancellati o resi anonimi quando non sono più necessari ai fini della trasmissione della comunicazione.",
        guidance: "1. Implementare protocolli di cifratura avanzati (es. TLS 1.3, HTTPS) su tutti i server e canali di comunicazione digitale dell'azienda.\n2. Configurare politiche rigorose di gestione dei log di rete e di traffico, assicurando che i metadati di comunicazione vengano distrutti o anonimizzati al termine della trasmissione del servizio.\n3. Limitare l'accesso ai sistemi di rete esclusivamente al personale tecnico autorizzato e monitorare gli accessi insoliti."
      },
      {
        id: "EPRIVACY_Q3",
        text: "L'azienda effettua comunicazioni commerciali dirette (e-mail, SMS, telefonate) solo previa ricezione del consenso esplicito dell'interessato (opt-in), ad eccezione del cosiddetto soft-spam su clienti già acquisiti?",
        weight: 9,
        article: "Articolo 13",
        lawExplanation: "L'articolo 13 vieta l'uso di sistemi automatizzati di chiamata o di comunicazione (e-mail, SMS, fax) a fini di commercializzazione diretta senza il preventivo consenso dei destinatari (principio dell'opt-in). Tuttavia, consente il cosiddetto 'soft-spam' a condizione che il venditore utilizzi le coordinate elettroniche fornite dal cliente nel contesto della vendita di un prodotto o servizio per inviare comunicazioni promozionali riguardanti propri prodotti analoghi, purché il cliente possa opporsi (opt-out) in modo semplice e gratuito a ogni invio.",
        guidance: "1. Rivedere i database di marketing e i flussi di iscrizione (newsletter, registrazioni), assicurandosi che la casella di consenso al marketing commerciale sia separata e non preselezionata.\n2. Integrare in ogni comunicazione e-mail o SMS promozionale un link o un meccanismo di disiscrizione (unsubscribe) ben visibile, gratuito e funzionante in tempo reale.\n3. Gestire un registro interno delle opposizioni (black-list) per evitare l'invio accidentale di comunicazioni commerciali a utenti che hanno revocato il consenso."
      },
      {
        id: "EPRIVACY_Q4",
        text: "Se l'azienda tratta dati relativi all'ubicazione geografica diversi dai dati di traffico, tali dati vengono trattati solo se resi anonimi o previo consenso degli utenti per il tempo strettamente necessario?",
        weight: 8,
        article: "Articolo 9",
        lawExplanation: "L'articolo 9 stabilisce che i dati relativi all'ubicazione geografica diversi dai dati di traffico, riferiti agli utenti o abbonati di reti pubbliche o servizi di comunicazione, possono essere trattati solo se resi anonimi o se gli utenti hanno prestato il proprio consenso specifico per il tempo necessario alla fornitura di un servizio a valore aggiunto. Gli utenti devono poter revocare il consenso in qualsiasi momento.",
        guidance: "1. Configurare le applicazioni mobili e i sistemi web aziendali affinché richiedano le coordinate GPS o di localizzazione solo se indispensabili per il servizio specifico richiesto dall'utente.\n2. Mostrare un'informativa chiara prima di raccogliere il dato geografico, specificando la finalità del trattamento e la durata di conservazione.\n3. Fornire agli utenti un'impostazione semplice all'interno dell'applicazione per revocare il consenso alla geolocalizzazione senza compromettere le altre funzioni base."
      },
      {
        id: "EPRIVACY_Q5",
        text: "Se l'azienda effettua chiamate telefoniche promozionali, garantisce la trasmissione dell'identificazione della linea chiamante in modo da essere rintracciabile e non effettua chiamate commerciali verso numeri iscritti nei registri delle opposizioni?",
        weight: 7,
        article: "Articolo 8 e Articolo 13",
        lawExplanation: "L'articolo 8 della direttiva (integrato dalle leggi nazionali sul telemarketing) stabilisce che, qualora sia offerta la presentazione dell'identificazione della linea chiamante, il fornitore deve consentire all'utente chiamante di eliminare tale identificazione in modo semplice e gratuito. Per le chiamate commerciali e di telemarketing, tuttavia, le normative nazionali impongono l'obbligo di presentare un identificativo di linea chiaro e non mascherato per consentire la rintracciabilità della chiamata, vietando le chiamate promozionali verso gli utenti iscritti al Registro Pubblico delle Opposizioni.",
        guidance: "1. Configurare i sistemi di centralino telefonico aziendali o dei partner esterni affinché trasmettano un numero telefonico visibile e richiamabile dall'utente.\n2. Verificare sistematicamente le liste dei contatti telefonici da chiamare confrontandole con il Registro Pubblico delle Opposizioni vigente nello Stato di riferimento (es. in Italia, Registro delle Opposizioni) prima di avviare campagne di telemarketing.\n3. Rispettare il divieto assoluto di utilizzare numeri mascherati o privati per scopi promozionali."
      }
    ]
  },
  NIS2: {
    title: "Direttiva sulla Sicurezza delle Reti e dei Sistemi Informativi (NIS 2 - Direttiva UE 2022/2555)",
    code: "NIS2",
    description: "Direttiva europea volta a garantire un livello comune elevato di cibersicurezza nell'Unione per le entità essenziali e importanti operanti in settori critici.",
    questions: [
      {
        id: "NIS2_Q1",
        text: "Gli organi di gestione dell'azienda (es. CdA, amministratori) hanno approvato le misure di gestione dei rischi di cibersicurezza, ne supervisionano l'attuazione e partecipano periodicamente a corsi di formazione specifici?",
        weight: 10,
        article: "Articolo 20",
        lawExplanation: "L'articolo 20 stabilisce che gli organi di gestione delle entità essenziali e importanti devono approvare le misure di gestione dei rischi di cibersicurezza adottate dall'entità, controllarne l'attuazione e poter essere ritenuti responsabili per le violazioni. Impone inoltre ai membri degli organi di gestione di seguire regolarmente una formazione specifica in materia di cibersicurezza per acquisire le conoscenze necessarie a valutare i rischi informatici e le relative prassi di gestione.",
        guidance: "1. Formalizzare il coinvolgimento del Consiglio di Amministrazione (CdA) o della direzione aziendale nei temi di cibersicurezza tramite delibere periodiche.\n2. Programmare corsi di formazione specifici per gli amministratori e i dirigenti sui rischi informatici, gli standard di sicurezza e l'impatto sul business.\n3. Stabilire un flusso di reporting periodico (es. trimestrale) in cui il CISO o il responsabile IT presenti alla direzione lo stato di sicurezza aziendale."
      },
      {
        id: "NIS2_Q2",
        text: "L'azienda ha adottato e documentato misure tecniche, operative e organizzative adeguate e proporzionate per gestire i rischi per la sicurezza dei sistemi informativi e di rete (es. business continuity, gestione incidenti)?",
        weight: 10,
        article: "Articolo 21",
        lawExplanation: "L'articolo 21 obbliga le entità ad adottare misure tecniche, operative e organizzative adeguate e proporzionate per gestire i rischi per la sicurezza dei sistemi e delle reti. Tali misure devono basarsi su un approccio multirischio e comprendere almeno: politiche di analisi dei rischi e di sicurezza, gestione degli incidenti, continuità operativa (recovery, backup, gestione delle crisi), sicurezza della catena di approvvigionamento, crittografia, igiene informatica e controllo degli accessi.",
        guidance: "1. Adottare e implementare un framework di sicurezza delle informazioni solido (es. certificazione ISO/IEC 27001 o allineamento con i controlli CIS).\n2. Redigere e diffondere le politiche interne di sicurezza aziendale (es. gestione accessi, uso delle risorse, gestione delle credenziali).\n3. Elaborare e testare annualmente un piano di continuità operativa (BCP) e di disaster recovery (DR) per i sistemi aziendali critici."
      },
      {
        id: "NIS2_Q3",
        text: "L'azienda valuta gli aspetti di cibersicurezza relativi alle relazioni con i propri fornitori e subfornitori diretti, inclusa la sicurezza dello sviluppo del software e la postura di sicurezza dei partner?",
        weight: 9,
        article: "Articolo 21 (paragrafo 2, lettera d)",
        lawExplanation: "L'articolo 21, paragrafo 2, lettera d, impone alle entità l'obbligo di implementare misure per garantire la sicurezza della catena di approvvigionamento (supply chain security). Le entità devono considerare le vulnerabilità specifiche di ciascun fornitore e subfornitore diretto, valutare la qualità complessiva delle loro pratiche di cibersicurezza, comprese le procedure per lo sviluppo sicuro del software e la sicurezza dei loro sistemi informativi.",
        guidance: "1. Definire e implementare una procedura di qualificazione della sicurezza dei fornitori ICT terzi (es. richiedendo certificazioni ISO 27001, report SOC 2 o svolgendo audit mirati).\n2. Richiedere ai fornitori di software prove dell'adozione di metodologie di sviluppo sicuro (SSDLC) e la fornitura di una SBOM.\n3. Inserire nei contratti di fornitura clausole di cibersicurezza standardizzate, includendo l'obbligo di notificare tempestivamente all'azienda eventuali incidenti subiti dal fornitore."
      },
      {
        id: "NIS2_Q4",
        text: "L'azienda ha definito procedure interne per notificare al CSIRT nazionale o all'autorità competente qualsiasi incidente significativo con un pre-allarme entro 24 ore e una notifica di incidente entro 72 ore?",
        weight: 9,
        article: "Articolo 23",
        lawExplanation: "L'articolo 23 stabilisce gli obblighi di segnalazione degli incidenti significativi. Le entità devono trasmettere al CSIRT nazionale o all'autorità competente: un pre-allarme senza ingiustificato ritardo e comunque entro 24 ore dal momento in cui sono venute a conoscenza dell'incidente; una notifica di incidente entro 72 ore, contenente una prima valutazione della gravità e dell'impatto; una relazione finale dettagliata entro un mese dall'incidente.",
        guidance: "1. Integrare i requisiti di segnalazione NIS2 (24 ore e 72 ore) nel piano di Incident Response dell'azienda.\n2. Definire i criteri operativi per stabilire se un incidente informatico è classificabile come 'significativo' (es. se causa interruzione del servizio, perdite finanziarie rilevanti o impatto su altri soggetti).\n3. Individuare il portale e i canali di contatto ufficiali del CSIRT nazionale (es. CSIRT Italia gestito dall'ACN) e fare simulazioni periodiche di segnalazione incidenti."
      },
      {
        id: "NIS2_Q5",
        text: "L'azienda utilizza in modo sistematico soluzioni di crittografia avanzata e sistemi di autenticazione a più fattori (MFA) o controlli di accesso continui per la protezione dei propri sistemi informativi?",
        weight: 9,
        article: "Articolo 21 (paragrafo 2, lettera j)",
        lawExplanation: "L'articolo 21, paragrafo 2, lettera j, richiede specificamente l'adozione di politiche sull'uso della crittografia e, ove opportuno, di soluzioni di autenticazione a più fattori (MFA) o di sistemi di controllo degli accessi continui, nonché di sistemi di comunicazione di emergenza protetti all'interno dell'entità per garantire la riservatezza e l'integrità dei dati e delle trasmissioni critiche.",
        guidance: "1. Configurare e forzare l'autenticazione a più fattori (MFA) su tutte le piattaforme aziendali (e-mail, cloud, pannelli di controllo) e per tutti gli accessi amministrativi.\n2. Applicare la crittografia per la protezione dei dati sensibili in transito e a riposo (es. crittografia dei dischi rigidi dei laptop aziendali).\n3. Configurare VPN sicure con cifratura forte per i collegamenti in modalità di lavoro agile (smart working)."
      },
      {
        id: "NIS2_Q6",
        text: "L'azienda ha definito e diffuso linee guida per l'igiene informatica di base ed eroga corsi di formazione periodici in materia di cibersicurezza per tutti i dipendenti?",
        weight: 8,
        article: "Articolo 21 (paragrafo 2, lettera g)",
        lawExplanation: "L'articolo 21, paragrafo 2, lettera g, stabilisce che le entità devono adottare pratiche di igiene informatica di base e fornire formazione in materia di cibersicurezza. L'igiene informatica e la consapevolezza del personale sono considerate elementi fondamentali per prevenire la maggior parte degli attacchi informatici comuni (es. phishing, social engineering, infezioni da malware).",
        guidance: "1. Redigere e diffondere una guida all'igiene informatica aziendale che illustri le buone pratiche per la gestione delle password, il blocco dei dispositivi e il riconoscimento del phishing.\n2. Implementare un programma di formazione obbligatorio sulla sicurezza informatica per tutti i dipendenti, ripetuto con cadenza almeno annuale.\n3. Condurre simulazioni periodiche di attacchi phishing per misurare l'efficacia della formazione e identificare i dipendenti che necessitano di ulteriore supporto."
      }
    ]
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    PROFILING_QUESTIONS,
    REGULATIONS_DATA
  };
}
