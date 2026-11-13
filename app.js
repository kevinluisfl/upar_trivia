/**
 * ==============================================================================
 * UPARTRIVIA STUDIO - MOTOR PRINCIPAL (MODERNIZACIÓN DE TECHMATH)
 * ==============================================================================
 */

const STORAGE_KEYS = {
    TEACHERS: 'upartrivia_teachers_v1',
    ACTIVE_TEACHER: 'upartrivia_active_teacher_v1',
    BANKS: 'upartrivia_banks_v1',
    RANKING: 'upartrivia_ranking_v1',
    THEME: 'upartrivia_theme',
    LANG: 'upartrivia_lang'
};

const ROUND_TIERS = [
    { level: 1, nameEs: 'Muy Fácil', nameEn: 'Very Easy', descEs: 'Muy Fácil (Inicial)', descEn: 'Very Easy (Starter)', points: 500 },
    { level: 2, nameEs: 'Fácil', nameEn: 'Easy', descEs: 'Fácil (Básico)', descEn: 'Easy (Basic)', points: 1000 },
    { level: 3, nameEs: 'Intermedia', nameEn: 'Medium', descEs: 'Intermedia', descEn: 'Intermediate', points: 1500 },
    { level: 4, nameEs: 'Difícil', nameEn: 'Hard', descEs: 'Difícil (Avanzado)', descEn: 'Hard (Advanced)', points: 2500 },
    { level: 5, nameEs: 'Muy Difícil', nameEn: 'Expert', descEs: 'Muy Difícil (Experto)', descEn: 'Very Hard (Expert)', points: 4500 }
];

/* --------------------------------------------------------------------------
   0. DICCIONARIO COMPLETO BILINGÜE (ES / EN)
   -------------------------------------------------------------------------- */
const I18N = {
    es: {
        badgeEdition: 'Edición Millonario',
        mainSubtitle: 'Plataforma interactiva de trivias por niveles para el aula',
        navPlay: 'Jugar',
        navBanks: 'Bancos y Carga Masiva',
        navRanking: 'Ranking',
        navAbout: 'Cómo Jugar',
        btnSettings: 'Audio',
        settingsTitle: 'Sonido y Narrador',
        btnTestVoice: 'Probar',
        labelVoiceRate: 'Velocidad de lectura',
        rateSlow: 'Lento (0.8x)',
        rateNormal: 'Normal (1.0x)',
        rateFast: 'Rápido (1.25x)',
        labelNarrator: 'Voz del navegador',
        defaultNarrator: 'Predeterminada del sistema',
        labelAutoRead: 'Leer preguntas en voz alta',
        labelSfx: 'Efectos de sonido (Millonario)',
        testVoicePhrase: 'Bienvenido a UparTrivia Studio, edición Quién quiere ser Sabio.',

        // Lobby / Inicio
        lobbyTitle: 'Nueva Partida',
        labelTeacher: 'Perfil Docente Activo',
        btnAddTeacher: 'Nuevo Docente',
        labelPlayer: 'Nombre del Jugador o Equipo',
        placeholderPlayer: 'Ej. Sofía Martínez - 601',
        labelTopicSelect: 'Temática de la Trivia',
        labelMixMode: 'Mezclar varias temáticas',
        labelQPerRound: 'Preguntas por Ronda',
        optQ3: '3 por ronda (15 total - Rápida)',
        optQ5: '5 por ronda (25 total - Clásica)',
        labelAvailablePool: 'Preguntas Disponibles',
        unitQuestions: 'preguntas',
        unitQuestionsShort: 'preg',
        unitRounds: 'Rondas',
        btnStartNow: '¡Comenzar a Jugar Ahora!',
        ladderPreviewTitle: 'Estructura de Rondas y Puntos',
        ladderPreviewDesc: 'Supera cada ronda para asegurar tu puntaje acumulado. Si te equivocas, conservas los puntos asegurados de la última ronda completada.',
        roundWord: 'Ronda',
        ptsPerQ: 'pts / preg',
        tipTitle: '3 Comodines Incluidos:',
        tipDesc: '50:50 (descarta 2 opciones), Cambiar Pregunta y Pista del Público disponibles una vez por partida.',

        // Juego en Vivo
        hudPlayer: 'Jugador',
        hudRound: 'Ronda',
        hudScore: 'Puntaje Actual',
        hudSafe: 'Asegurado',
        hudTime: 'Tiempo',
        lifelineSwap: 'Cambiar',
        lifelineAudience: 'Público',
        titleLifeline5050: 'Eliminar 2 respuestas incorrectas',
        titleLifelineSwap: 'Cambiar por otra pregunta del mismo nivel',
        titleLifelineAudience: 'Ver tendencia de votos del público',
        titleSpeakQ: 'Leer pregunta y opciones en voz alta',
        btnRetire: 'Plantarse / Retirarse',
        liveLadderTitle: 'Escalera de Rondas',
        questionWord: 'Pregunta',
        ofWord: 'de',
        feedbackCorrectPre: '¡Respuesta Correcta!',
        feedbackPoints: 'puntos',
        feedbackWrongPre: 'Respuesta incorrecta. La opción correcta era:',
        mixedTopicLabel: 'Mixto',
        topicsWord: 'temáticas',

        // Bancos y Carga Masiva
        myBanksTitle: 'Bancos de Preguntas',
        unitBanks: 'bancos',
        placeholderSearchBank: 'Buscar temática o docente...',
        emptyBanks: 'No se encontraron bancos de preguntas.',
        btnExportAll: 'Exportar Todo (JSON)',
        btnRestoreDefaults: 'Restaurar Plantillas',
        bulkCenterTitle: 'Centro de Carga Masiva Multiformato',
        labelTargetBank: 'Nombre de la Temática / Banco',
        placeholderTargetBank: 'Ej. Matemáticas 6° - Fracciones',
        labelBulkAction: 'Modo de Carga',
        optBulkAppend: 'Crear nuevo o añadir al existente',
        optBulkReplace: 'Reemplazar preguntas si ya existe',
        tabFmtExcel: '1. Excel / CSV',
        tabFmtText: '2. Texto Plano',
        tabFmtJson: '3. JSON',
        btnSeeSample: 'Ver Ejemplo',
        btnTemplateCsv: 'Plantilla Excel (.csv)',
        btnTemplateTxt: 'Plantilla (.txt)',
        btnTemplateJson: 'Plantilla (.json)',
        guideExcelTitle: 'Cómo cargar desde Excel o Google Sheets:',
        guideExcelDesc: 'Crea una tabla en Excel con <strong>6 o 7 columnas</strong>, selecciona las filas, cópialas (<code>Ctrl+C</code>) y pégalas abajo, o sube tu archivo <code>.csv</code>:',
        chip1: '1. Pregunta',
        chip2: '2. Respuesta Correcta',
        chip3: '3. Incorrecta 1',
        chip4: '4. Incorrecta 2',
        chip5: '5. Incorrecta 3',
        chip6: '6. Nivel (1 a 5, opc)',
        chip7: '7. URL Imagen (opc)',
        guideTextTitle: 'Cómo cargar en Texto Plano (una pregunta por línea):',
        guideTextDesc: 'Escribe una pregunta por línea separando cada dato con barra <code>|</code>, punto y coma <code>;</code> o dos puntos <code>:</code>. La <strong>primera respuesta</strong> siempre debe ser la correcta (el juego las desordena al jugar):',
        guideTextCode: 'Pregunta | Respuesta Correcta | Incorrecta 1 | Incorrecta 2 | Incorrecta 3 | Nivel(1-5) | URL_Imagen(opcional)',
        guideJsonTitle: 'Cómo cargar en formato JSON (Compatible con tu versión anterior):',
        guideJsonDesc: 'Acepta tanto objetos JSON modernos como el arreglo clásico <code>data_</code> de <em>TECHMATH</em>:',
        placeholderBulkTextarea: 'Pega aquí tus preguntas desde Excel, texto plano o JSON...',
        btnUploadFile: 'Subir Archivo (.csv, .txt, .json)',
        btnProcessBulk: 'Procesar y Guardar Banco',
        titleExportSingleBank: 'Exportar este banco en JSON',
        titleDeleteBank: 'Eliminar banco',

        // Ranking
        rankingTitle: 'Tabla de Posiciones',
        rankingSubtitle: 'Ordenado por mayor puntaje y menor tiempo empleado (desempate automático).',
        filterAllTopics: 'Todas las Temáticas (General)',
        filterAllTeachers: 'Todos los Docentes',
        placeholderSearchPlayer: 'Buscar jugador...',
        btnClearRanking: 'Vaciar Historial',
        thPlayer: 'Jugador',
        thTopic: 'Temática',
        thTeacher: 'Docente',
        thRound: 'Ronda',
        thScore: 'Puntaje',
        thTime: 'Tiempo',
        thDate: 'Fecha',
        emptyRanking: 'No hay registros de puntajes para este filtro todavía.',

        // Acerca de / Cómo Jugar
        aboutTitle: '¿Cómo funciona UparTrivia Studio?',
        about1Title: '1. 5 Niveles de Dificultad',
        about1Desc: 'La partida avanza a través de 5 rondas progresivas (Muy Fácil a Muy Difícil). Al completar todas las preguntas de una ronda, aseguras el puntaje acumulado.',
        about2Title: '2. Retirarse vs Arriesgar',
        about2Desc: 'Si decides "Plantarte / Retirarte" te llevas el puntaje total que tengas en ese momento. Si respondes mal, solo te llevas el último piso asegurado.',
        about3Title: '3. Bancos Multiformato y Perfiles',
        about3Desc: 'Cada docente puede crear sus temáticas pegando directamente desde Excel, texto separado por barras o archivos JSON, e incluso mezclar varios bancos en una misma partida.',
        footerCreatedBy: 'Creado por',

        // Modales y Notificaciones (Toasts)
        toastFinishCurrentGame: 'Termina o retírate de la partida actual primero',
        modalNewTeacherTitle: 'Nuevo Perfil Docente',
        modalNewTeacherBody: 'Ingresa el nombre del docente para organizar sus propios bancos de preguntas y rankings:',
        placeholderTeacherModal: 'Nombre del docente (ej. Prof. Kevin Florez)',
        btnCancel: 'Cancelar',
        btnCreateProfile: 'Crear Perfil',
        toastProfileActivated: 'Perfil activado:',
        toastSampleInserted: 'Ejemplo insertado. Haz clic en "Procesar y Guardar Banco" para probarlo.',
        toastFileLoaded: 'Archivo cargado en el editor:',
        toastNoValidQuestions: 'No se detectaron preguntas válidas. Revisa el formato guía.',
        toastBankSavedPre: 'preguntas guardadas en',
        toastKeepOneBank: 'Debes conservar al menos un banco de preguntas activo.',
        toastBankDeleted: 'Banco eliminado',
        toastDefaultsRestored: 'Plantillas oficiales restauradas',
        toastEnterPlayerName: 'Por favor escribe el nombre del jugador o equipo para iniciar',
        toastSelectOneTopic: 'Selecciona al menos una temática para jugar',
        toastMin5Questions: 'El banco seleccionado necesita al menos 5 preguntas.',
        toastRoundClearedPre: 'superada! Aseguras',
        toastQuestionSwapped: 'Pregunta cambiada por otra del mismo nivel',
        modalRetireTitle: '¿Deseas plantarte y retirarte?',
        modalRetireBody: (score, sec) => `Si te retiras ahora, asegurarás tu puntaje actual de <strong>${score} puntos</strong> en un tiempo de <strong>${sec}s</strong>.`,
        btnKeepPlaying: 'Seguir Jugando',
        btnConfirmRetire: 'Sí, Retirarme con mis Puntos',
        modalVictoryTitle: (p) => `¡Felicidades ${p}, eres Sabio Millonario! 🏆`,
        modalRetiredTitle: (p) => `¡Buen retiro estratégico, ${p}! 🤝`,
        modalWrongTitle: (p) => `Fin de la partida, ${p}`,
        modalVictoryDesc: (s, t) => `Respondiste todas las rondas correctamente.<br>Puntaje Final: <strong>${s} pts</strong> en <strong>${t}s</strong>.`,
        modalRetiredDesc: (s, t) => `Te retiraste a tiempo conservando tu puntaje actual:<br><strong>${s} pts</strong> en <strong>${t}s</strong>.`,
        modalWrongDesc: (s, t) => `Te llevas el puntaje asegurado de tu última ronda completada:<br><strong>${s} pts</strong> (${t}s).`,
        btnGoHome: 'Ir al Inicio',
        btnSeeRanking: 'Ver Ranking 🏆',
        modalClearRankTitle: '¿Vaciar historial de puntajes?',
        modalClearRankBody: 'Se eliminarán todos los registros de la tabla de posiciones.',
        btnConfirmClearRank: 'Sí, Borrar Todo',
        toastRankingCleared: 'Historial de puntajes vaciado',
        sampleBankDefaultName: 'Ciencias y Tecnología - Ejemplo',
        importedBankDefaultName: 'Banco Importado'
    },
    en: {
        badgeEdition: 'Millionaire Edition',
        mainSubtitle: 'Interactive tiered trivia platform for the classroom',
        navPlay: 'Play',
        navBanks: 'Question Banks & Bulk Load',
        navRanking: 'Ranking',
        navAbout: 'How to Play',
        btnSettings: 'Audio',
        settingsTitle: 'Sound & Narrator',
        btnTestVoice: 'Test',
        labelVoiceRate: 'Speech rate',
        rateSlow: 'Slow (0.8x)',
        rateNormal: 'Normal (1.0x)',
        rateFast: 'Fast (1.25x)',
        labelNarrator: 'Browser voice',
        defaultNarrator: 'System default',
        labelAutoRead: 'Read questions aloud',
        labelSfx: 'Sound effects (Millionaire)',
        testVoicePhrase: 'Welcome to UparTrivia Studio, Millionaire classroom edition.',

        // Lobby / Home
        lobbyTitle: 'New Game Setup',
        labelTeacher: 'Active Teacher Profile',
        btnAddTeacher: 'New Teacher',
        labelPlayer: 'Player or Team Name',
        placeholderPlayer: 'E.g. Sofia Martinez - Grade 601',
        labelTopicSelect: 'Trivia Topic',
        labelMixMode: 'Mix multiple topics',
        labelQPerRound: 'Questions per Round',
        optQ3: '3 per round (15 total - Quick)',
        optQ5: '5 per round (25 total - Classic)',
        labelAvailablePool: 'Available Questions',
        unitQuestions: 'questions',
        unitQuestionsShort: 'q',
        unitRounds: 'Rounds',
        btnStartNow: 'Start Playing Now!',
        ladderPreviewTitle: 'Round & Point Structure',
        ladderPreviewDesc: 'Complete each round to lock in your safe score. If you miss a question, you keep the guaranteed points from the last completed round.',
        roundWord: 'Round',
        ptsPerQ: 'pts / q',
        tipTitle: '3 Lifelines Included:',
        tipDesc: '50:50 (removes 2 wrong options), Swap Question, and Ask the Audience available once per game.',

        // Live Game
        hudPlayer: 'Player',
        hudRound: 'Round',
        hudScore: 'Current Score',
        hudSafe: 'Safe Score',
        hudTime: 'Time',
        lifelineSwap: 'Swap',
        lifelineAudience: 'Audience',
        titleLifeline5050: 'Remove 2 incorrect answers',
        titleLifelineSwap: 'Swap for another question of the same level',
        titleLifelineAudience: 'See audience voting trend',
        titleSpeakQ: 'Read question and options aloud',
        btnRetire: 'Walk Away / Take Points',
        liveLadderTitle: 'Round Ladder',
        questionWord: 'Question',
        ofWord: 'of',
        feedbackCorrectPre: 'Correct Answer!',
        feedbackPoints: 'points',
        feedbackWrongPre: 'Wrong answer. The correct option was:',
        mixedTopicLabel: 'Mixed',
        topicsWord: 'topics',

        // Banks & Bulk Loader
        myBanksTitle: 'Question Banks',
        unitBanks: 'banks',
        placeholderSearchBank: 'Search topic or teacher...',
        emptyBanks: 'No question banks found.',
        btnExportAll: 'Export All (JSON)',
        btnRestoreDefaults: 'Restore Templates',
        bulkCenterTitle: 'Multi-Format Bulk Loader',
        labelTargetBank: 'Topic / Bank Name',
        placeholderTargetBank: 'E.g. 6th Grade Math - Fractions',
        labelBulkAction: 'Load Mode',
        optBulkAppend: 'Create new or append to existing',
        optBulkReplace: 'Replace questions if bank exists',
        tabFmtExcel: '1. Excel / CSV',
        tabFmtText: '2. Plain Text',
        tabFmtJson: '3. JSON',
        btnSeeSample: 'Insert Example',
        btnTemplateCsv: 'Excel Template (.csv)',
        btnTemplateTxt: 'Template (.txt)',
        btnTemplateJson: 'Template (.json)',
        guideExcelTitle: 'How to load from Excel or Google Sheets:',
        guideExcelDesc: 'Create a table in Excel with <strong>6 or 7 columns</strong>, select the rows, copy them (<code>Ctrl+C</code>) and paste below, or upload a <code>.csv</code> file:',
        chip1: '1. Question',
        chip2: '2. Correct Answer',
        chip3: '3. Wrong 1',
        chip4: '4. Wrong 2',
        chip5: '5. Wrong 3',
        chip6: '6. Level (1 to 5, opt)',
        chip7: '7. Image URL (opt)',
        guideTextTitle: 'How to load from Plain Text (one question per line):',
        guideTextDesc: 'Write one question per line separating fields with a pipe <code>|</code>, semicolon <code>;</code> or colon <code>:</code>. The <strong>first answer</strong> must always be the correct one (the game shuffles them automatically):',
        guideTextCode: 'Question | Correct Answer | Wrong 1 | Wrong 2 | Wrong 3 | Level(1-5) | Image_URL(optional)',
        guideJsonTitle: 'How to load in JSON format (Compatible with legacy TECHMATH):',
        guideJsonDesc: 'Accepts both modern JSON objects and the classic <code>data_</code> array from <em>TECHMATH</em>:',
        placeholderBulkTextarea: 'Paste your questions here from Excel, plain text, or JSON...',
        btnUploadFile: 'Upload File (.csv, .txt, .json)',
        btnProcessBulk: 'Process & Save Bank',
        titleExportSingleBank: 'Export this bank as JSON',
        titleDeleteBank: 'Delete bank',

        // Ranking
        rankingTitle: 'Leaderboard',
        rankingSubtitle: 'Sorted by highest score and fastest completion time (automatic tie-breaker).',
        filterAllTopics: 'All Topics (General)',
        filterAllTeachers: 'All Teachers',
        placeholderSearchPlayer: 'Search player...',
        btnClearRanking: 'Clear History',
        thPlayer: 'Player',
        thTopic: 'Topic',
        thTeacher: 'Teacher',
        thRound: 'Round',
        thScore: 'Score',
        thTime: 'Time',
        thDate: 'Date',
        emptyRanking: 'No score records found for this filter yet.',

        // About / How to Play
        aboutTitle: 'How does UparTrivia Studio work?',
        about1Title: '1. 5 Difficulty Tiers',
        about1Desc: 'The game progresses through 5 rounds (Very Easy to Expert). Completing all questions in a round locks in your guaranteed safe score.',
        about2Title: '2. Walk Away vs Risk It',
        about2Desc: 'If you choose to "Walk Away", you keep 100% of your current score. If you answer incorrectly, you only take home your last guaranteed safe score.',
        about3Title: '3. Multi-Format Banks & Teacher Profiles',
        about3Desc: 'Each teacher can create their own topics by pasting directly from Excel, pipe-separated text, or JSON files, and even mix multiple banks in a single game.',
        footerCreatedBy: 'Created by',

        // Modals & Toasts
        toastFinishCurrentGame: 'Finish or walk away from the current game first',
        modalNewTeacherTitle: 'New Teacher Profile',
        modalNewTeacherBody: 'Enter the teacher\'s name to organize their own question banks and leaderboards:',
        placeholderTeacherModal: 'Teacher name (e.g. Prof. Kevin Florez)',
        btnCancel: 'Cancel',
        btnCreateProfile: 'Create Profile',
        toastProfileActivated: 'Profile activated:',
        toastSampleInserted: 'Sample inserted. Click "Process & Save Bank" to test it.',
        toastFileLoaded: 'File loaded into editor:',
        toastNoValidQuestions: 'No valid questions detected. Check the format guide.',
        toastBankSavedPre: 'questions saved in',
        toastKeepOneBank: 'You must keep at least one active question bank.',
        toastBankDeleted: 'Bank deleted',
        toastDefaultsRestored: 'Official templates restored',
        toastEnterPlayerName: 'Please enter the player or team name to start',
        toastSelectOneTopic: 'Select at least one topic to play',
        toastMin5Questions: 'The selected bank needs at least 5 questions.',
        toastRoundClearedPre: 'cleared! Safe score locked at',
        toastQuestionSwapped: 'Question swapped for another of the same level',
        modalRetireTitle: 'Walk away with your current points?',
        modalRetireBody: (score, sec) => `If you walk away now, you will lock in your current score of <strong>${score} points</strong> with a time of <strong>${sec}s</strong>.`,
        btnKeepPlaying: 'Keep Playing',
        btnConfirmRetire: 'Yes, Walk Away with Points',
        modalVictoryTitle: (p) => `Congratulations ${p}, you are a Millionaire Scholar! 🏆`,
        modalRetiredTitle: (p) => `Smart strategic walk-away, ${p}! 🤝`,
        modalWrongTitle: (p) => `Game Over, ${p}`,
        modalVictoryDesc: (s, t) => `You answered all rounds correctly!<br>Final Score: <strong>${s} pts</strong> in <strong>${t}s</strong>.`,
        modalRetiredDesc: (s, t) => `You walked away in time keeping your current score:<br><strong>${s} pts</strong> in <strong>${t}s</strong>.`,
        modalWrongDesc: (s, t) => `You take home the guaranteed safe score from your last completed round:<br><strong>${s} pts</strong> (${t}s).`,
        btnGoHome: 'Back to Home',
        btnSeeRanking: 'View Ranking 🏆',
        modalClearRankTitle: 'Clear leaderboard history?',
        modalClearRankBody: 'All score records in the leaderboard will be permanently removed.',
        btnConfirmClearRank: 'Yes, Clear All',
        toastRankingCleared: 'Leaderboard history cleared',
        sampleBankDefaultName: 'Science & Tech - Sample',
        importedBankDefaultName: 'Imported Bank'
    }
};

function t(key) {
    return I18N[appState.lang]?.[key] ?? I18N.es[key] ?? key;
}

/* --------------------------------------------------------------------------
   1. BANCOS PREDEFINIDOS (MATEMÁTICAS TECHMATH Y CULTURA GENERAL DEPURADOS)
   -------------------------------------------------------------------------- */
const DEFAULT_BANKS = [
    {
        id: 'bank_math_default',
        title: 'Matemáticas y Lógica (TECHMATH)',
        teacher: 'Prof. Kevin Flórez',
        createdAt: '2026-10-15',
        questions: [
            // Nivel 1
            { id: 'm1', question: '¿Cuánto es 5 × 7?', correct: '35', wrong: ['30', '40', '45'], level: 1, url: '' },
            { id: 'm2', question: '¿Cuánto es 72 ÷ 8?', correct: '9', wrong: ['7', '8', '10'], level: 1, url: '' },
            { id: 'm3', question: '¿Cuál es el valor de 3² (tres al cuadrado)?', correct: '9', wrong: ['3', '6', '12'], level: 1, url: '' },
            { id: 'm4', question: '¿Cuántos lados tiene un octágono?', correct: '8', wrong: ['6', '7', '9'], level: 1, url: '' },
            { id: 'm5', question: '¿Cuál es la suma de los ángulos internos de un triángulo?', correct: '180°', wrong: ['90°', '120°', '360°'], level: 1, url: '' },
            { id: 'm6', question: 'Si tienes 2 docenas de huevos, ¿cuántos huevos tienes en total?', correct: '24', wrong: ['12', '36', '48'], level: 1, url: '' },
            { id: 'm7', question: '¿Cuánto es 3/4 de 40?', correct: '30', wrong: ['25', '35', '40'], level: 1, url: '' },
            // Nivel 2
            { id: 'm8', question: '¿Cuál es el valor numérico de 3x + 2 si x = 4?', correct: '14', wrong: ['10', '12', '16'], level: 2, url: '' },
            { id: 'm9', question: 'Si un rectángulo tiene base de 8 cm y altura de 6 cm, ¿cuál es su perímetro?', correct: '28 cm', wrong: ['24 cm', '30 cm', '48 cm'], level: 2, url: '' },
            { id: 'm10', question: 'Un tren viaja a 60 km/h. ¿Cuántos kilómetros recorrerá en 3 horas y media?', correct: '210 km', wrong: ['180 km', '200 km', '220 km'], level: 2, url: '' },
            { id: 'm11', question: '¿Cuál es la representación decimal de 3/5?', correct: '0.6', wrong: ['0.4', '0.5', '0.7'], level: 2, url: '' },
            { id: 'm12', question: 'Si un ángulo mide 70°, ¿cuánto mide su suplemento?', correct: '110°', wrong: ['100°', '20°', '130°'], level: 2, url: '' },
            { id: 'm13', question: 'Un agricultor cosecha 600 kg de café. Si vende el 75%, ¿cuántos kg vende?', correct: '450 kg', wrong: ['400 kg', '500 kg', '550 kg'], level: 2, url: '' },
            // Nivel 3
            { id: 'm14', question: 'Un cuadrado tiene un área de 144 cm². ¿Cuánto mide su perímetro?', correct: '48 cm', wrong: ['36 cm', '12 cm', '52 cm'], level: 3, url: '' },
            { id: 'm15', question: 'Un prisma rectangular tiene base de 10 cm × 8 cm y altura de 5 cm. ¿Cuál es su volumen?', correct: '400 cm³', wrong: ['350 cm³', '450 cm³', '500 cm³'], level: 3, url: '' },
            { id: 'm16', question: 'Un comerciante vende un producto en $6,000 con descuento del 20%. ¿Cuánto paga el cliente?', correct: '$4,800', wrong: ['$4,200', '$4,500', '$5,000'], level: 3, url: '' },
            { id: 'm17', question: 'En una fábrica trabajan 120 empleados y 2/3 son operarios. ¿Cuántos operarios hay?', correct: '80', wrong: ['60', '70', '90'], level: 3, url: '' },
            { id: 'm18', question: '¿Cuánto es el resultado de la operación 5 + 3 × (7 - 2)?', correct: '20', wrong: ['40', '35', '18'], level: 3, url: '' },
            { id: 'm19', question: '¿Cuál es el número primo que le sigue inmediatamente al 7?', correct: '11', wrong: ['9', '13', '10'], level: 3, url: '' },
            // Nivel 4
            { id: 'm20', question: 'Un trapecio tiene bases de 10 cm y 6 cm, y altura de 4 cm. ¿Cuál es su área?', correct: '32 cm²', wrong: ['24 cm²', '28 cm²', '36 cm²'], level: 4, url: '' },
            { id: 'm21', question: 'En un triángulo rectángulo, los catetos miden 9 cm y 12 cm. ¿Cuál es la hipotenusa?', correct: '15 cm', wrong: ['14 cm', '16 cm', '17 cm'], level: 4, url: '' },
            { id: 'm22', question: 'Un cubo tiene un volumen de 125 cm³. ¿Cuánto mide su arista?', correct: '5 cm', wrong: ['4 cm', '6 cm', '25 cm'], level: 4, url: '' },
            { id: 'm23', question: '¿Cuántas aristas tiene un octaedro regular?', correct: '12', wrong: ['8', '24', '6'], level: 4, url: '' },
            { id: 'm24', question: '¿Qué matemático griego escribió la obra "Elementos de Geometría"?', correct: 'Euclides', wrong: ['Arquímedes', 'Pitágoras', 'Tales de Mileto'], level: 4, url: '' },
            { id: 'm25', question: '¿Cuántos segundos hay en 2 horas y media?', correct: '9000', wrong: ['7200', '8000', '9500'], level: 4, url: '' },
            // Nivel 5
            { id: 'm26', question: 'Cinco personas se reúnen y cada una abraza a las demás una vez. ¿Cuántos abrazos se dieron?', correct: '10 abrazos', wrong: ['25 abrazos', '5 abrazos', '20 abrazos'], level: 5, url: '' },
            { id: 'm27', question: '¿Cuánto mide la diagonal de un cuadrado cuyos lados miden 6 cm?', correct: '6√2 cm', wrong: ['6 cm', '12 cm', '9√2 cm'], level: 5, url: '' },
            { id: 'm28', question: 'Un rectángulo tiene el largo igual al doble del ancho y su área es 98 cm². ¿Cuáles son sus lados?', correct: '7 cm × 14 cm', wrong: ['8 cm × 16 cm', '6 cm × 12 cm', '9 cm × 18 cm'], level: 5, url: '' },
            { id: 'm29', question: '¿Cuál es la fórmula para hallar el volumen de una esfera de radio r?', correct: '(4/3)πr³', wrong: ['(3/4)πr³', '4πr²', '(1/3)πr³'], level: 5, url: '' },
            { id: 'm30', question: '¿Quién inventó el cálculo infinitesimal de forma independiente a Newton y creó el sistema binario?', correct: 'Gottfried Leibniz', wrong: ['René Descartes', 'Johannes Kepler', 'Leonhard Euler'], level: 5, url: '' },
            { id: 'm31', question: 'Si una persona camina 5 km en una hora, ¿cuánto tardará en recorrer 12 km al mismo ritmo?', correct: '2.4 horas', wrong: ['2.2 horas', '2.5 horas', '2.6 horas'], level: 5, url: '' }
        ]
    },
    {
        id: 'bank_general_default',
        title: 'Cultura General y Ciencias',
        teacher: 'Prof. Kevin Flórez',
        createdAt: '2026-10-15',
        questions: [
            { id: 'g1', question: '¿Cuál es el animal nacional representativo de Australia?', correct: 'Canguro', wrong: ['Koala', 'León', 'Cóndor'], level: 1, url: '' },
            { id: 'g2', question: '¿Cuántos días tarda aproximadamente la Tierra en dar una vuelta al Sol?', correct: '365 días', wrong: ['30 días', '180 días', '400 días'], level: 1, url: '' },
            { id: 'g3', question: '¿Qué país sudamericano se ubica en la frontera entre Perú y Colombia?', correct: 'Ecuador', wrong: ['Paraguay', 'Chile', 'Uruguay'], level: 1, url: '' },
            { id: 'g4', question: '¿Cuál es la montaña más alta del planeta Tierra sobre el nivel del mar?', correct: 'Monte Everest', wrong: ['Monte Fuji', 'Aconcagua', 'Kilimanjaro'], level: 1, url: '' },
            { id: 'g5', question: '¿Qué parte del cuerpo humano percibe los sabores de los alimentos?', correct: 'La lengua', wrong: ['El olfato', 'El paladar óseo', 'La laringe'], level: 1, url: '' },
            { id: 'g6', question: '¿Cuál es el estado soberano más pequeño del mundo?', correct: 'Ciudad del Vaticano', wrong: ['Mónaco', 'San Marino', 'Chipre'], level: 2, url: '' },
            { id: 'g7', question: '¿Cuál es la capital de Canadá?', correct: 'Ottawa', wrong: ['Toronto', 'Montreal', 'Vancouver'], level: 2, url: '' },
            { id: 'g8', question: '¿Cuántos jugadores en cancha tiene un equipo de voleibol?', correct: '6 jugadores', wrong: ['5 jugadores', '7 jugadores', '11 jugadores'], level: 2, url: '' },
            { id: 'g9', question: '¿Quién fue el primer presidente de los Estados Unidos?', correct: 'George Washington', wrong: ['Abraham Lincoln', 'Thomas Jefferson', 'John Adams'], level: 2, url: '' },
            { id: 'g10', question: '¿Cuál fue el primer largometraje animado de Disney (1937)?', correct: 'Blancanieves y los siete enanitos', wrong: ['Pinocho', 'El Rey León', 'Bambi'], level: 2, url: '' },
            { id: 'g11', question: '¿Qué misión espacial llevó al primer ser humano a la Luna en 1969?', correct: 'Apolo 11', wrong: ['Sputnik 1', 'Apolo 13', 'Voyager 1'], level: 3, url: '' },
            { id: 'g12', question: '¿En qué país sudamericano se encuentra el cerro Aconcagua?', correct: 'Argentina', wrong: ['Chile', 'Perú', 'Bolivia'], level: 3, url: '' },
            { id: 'g13', question: '¿Qué científico formuló la Teoría de la Relatividad?', correct: 'Albert Einstein', wrong: ['Isaac Newton', 'Nikola Tesla', 'Galileo Galilei'], level: 3, url: '' },
            { id: 'g14', question: '¿Qué instrumento se utiliza para medir la presión atmosférica?', correct: 'Barómetro', wrong: ['Anemómetro', 'Termómetro', 'Higrómetro'], level: 3, url: '' },
            { id: 'g15', question: '¿Quién dio la primera voz oficial a Mickey Mouse?', correct: 'Walt Disney', wrong: ['Roy Disney', 'Mel Blanc', 'Ub Iwerks'], level: 3, url: '' },
            { id: 'g16', question: '¿Qué artista renacentista pintó la bóveda de la Capilla Sixtina?', correct: 'Miguel Ángel', wrong: ['Leonardo da Vinci', 'Rafael Sanzio', 'Sandro Botticelli'], level: 4, url: '' },
            { id: 'g17', question: '¿Cuántas teclas tiene un piano estándar moderno?', correct: '88 teclas', wrong: ['64 teclas', '76 teclas', '92 teclas'], level: 4, url: '' },
            { id: 'g18', question: '¿En qué año se disolvió oficialmente la Unión Soviética?', correct: '1991', wrong: ['1989', '1985', '1995'], level: 4, url: '' },
            { id: 'g19', question: '¿Qué prefijo en los apellidos escoceses significa literalmente "hijo de"?', correct: 'Mac', wrong: ['Van', 'Fitz', 'O\''], level: 4, url: '' },
            { id: 'g20', question: '¿Cuál de los cinco sentidos humanos se desarrolla primero en el útero?', correct: 'El tacto / olfato temprano', wrong: ['La vista', 'El gusto adulto', 'El equilibrio'], level: 4, url: '' },
            { id: 'g21', question: '¿Cuál es la pintura más célebre del expresionista noruego Edvard Munch?', correct: 'El grito', wrong: ['La noche estrellada', 'Guernica', 'La persistencia de la memoria'], level: 5, url: '' },
            { id: 'g22', question: '¿Quién es considerado el creador de la World Wide Web (WWW)?', correct: 'Tim Berners-Lee', wrong: ['Bill Gates', 'Steve Jobs', 'Linus Torvalds'], level: 5, url: '' },
            { id: 'g23', question: '¿Cuál fue el primer país del mundo en aprobar el sufragio femenino (1893)?', correct: 'Nueva Zelanda', wrong: ['Suiza', 'Estados Unidos', 'Reino Unido'], level: 5, url: '' },
            { id: 'g24', question: '¿Cuál es la capital de Indonesia?', correct: 'Yakarta', wrong: ['Kuala Lumpur', 'Manila', 'Bangkok'], level: 5, url: '' },
            { id: 'g25', question: '¿Qué país africano fue fundado en 1847 por esclavos estadounidenses liberados?', correct: 'Liberia', wrong: ['Ghana', 'Senegal', 'Etiopía'], level: 5, url: '' }
        ]
    }
];

/* --------------------------------------------------------------------------
   2. ESTADO GLOBAL DE LA APLICACIÓN Y PARTIDA
   -------------------------------------------------------------------------- */
let appState = {
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'es',
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'light',
    teachers: [],
    activeTeacher: 'Prof. Kevin Flórez',
    banks: [],
    ranking: [],
    bulkFormatTab: 'excel',
    audio: {
        rate: 1.0,
        voiceURI: 'default',
        autoRead: false,
        sfx: true
    },
    game: {
        active: false,
        player: '',
        topicLabel: '',
        teacherName: '',
        questionsPerRound: 5,
        currentRound: 1,
        questionInRound: 1,
        score: 0,
        safeScore: 0,
        seconds: 0,
        timerInterval: null,
        poolByRound: {},
        currentQuestion: null,
        shuffledOptions: [],
        lifelines: {
            fifty: true,
            swap: true,
            audience: true
        },
        isLocked: false
    }
};

/* --------------------------------------------------------------------------
   3. MOTOR DE SONIDO (WEB AUDIO API) Y VOZ (SPEECH SYNTHESIS)
   -------------------------------------------------------------------------- */
let audioCtx = null;

function getAudioCtx() {
    if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        if (Ctx) audioCtx = new Ctx();
    }
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
}

function playSoundEffect(type) {
    if (!appState.audio.sfx) return;
    const ctx = getAudioCtx();
    if (!ctx) return;

    const now = ctx.currentTime;
    const playTone = (freq, start, duration, wave = 'sine', gainVal = 0.14) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = wave;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(gainVal, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(start + duration);
    };

    if (type === 'select') {
        playTone(440, now, 0.18, 'triangle', 0.15);
        playTone(554.37, now + 0.12, 0.25, 'triangle', 0.12);
    } else if (type === 'correct') {
        playTone(523.25, now, 0.12, 'sine', 0.16);
        playTone(659.25, now + 0.1, 0.12, 'sine', 0.16);
        playTone(783.99, now + 0.2, 0.3, 'sine', 0.18);
    } else if (type === 'roundUp') {
        [523.25, 659.25, 783.99, 1046.5].forEach((f, idx) => {
            playTone(f, now + idx * 0.09, 0.35, 'triangle', 0.16);
        });
    } else if (type === 'wrong') {
        playTone(311.13, now, 0.22, 'sawtooth', 0.14);
        playTone(233.08, now + 0.2, 0.45, 'sawtooth', 0.16);
    } else if (type === 'lifeline') {
        playTone(698.46, now, 0.1, 'sine', 0.14);
        playTone(880, now + 0.1, 0.22, 'sine', 0.14);
    }
}

let browserVoices = [];
function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    browserVoices = window.speechSynthesis.getVoices();
    const sel = document.getElementById('voiceNarratorSelect');
    if (!sel) return;
    const prevVal = sel.value || appState.audio.voiceURI;
    sel.innerHTML = `<option value="default">${t('defaultNarrator')}</option>`;
    browserVoices.forEach(v => {
        const opt = document.createElement('option');
        opt.value = v.voiceURI;
        opt.textContent = `${v.name} (${v.lang})`;
        if (v.voiceURI === prevVal) opt.selected = true;
        sel.appendChild(opt);
    });
}
if ('speechSynthesis' in window) {
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
    }
}

function speakText(text) {
    if (!('speechSynthesis' in window) || !text) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const chosen = browserVoices.find(v => v.voiceURI === appState.audio.voiceURI);
    if (chosen) {
        u.voice = chosen;
        u.lang = chosen.lang;
    } else {
        u.lang = appState.lang === 'es' ? 'es-ES' : 'en-US';
    }
    u.rate = appState.audio.rate || 1.0;
    window.speechSynthesis.speak(u);
}

function speakCurrentQuestion() {
    if (!appState.game.currentQuestion) return;
    const q = appState.game.currentQuestion.question;
    const opts = appState.game.shuffledOptions
        .filter(o => !o.hidden)
        .map((o, idx) => `${['A', 'B', 'C', 'D'][idx]}: ${o.text}`)
        .join('. ');
    speakText(`${q}. ${opts}`);
}

/* --------------------------------------------------------------------------
   4. UTILIDADES DE INTERFAZ (TOAST, MODALES, NAVEGACIÓN, TEMA E IDIOMA)
   -------------------------------------------------------------------------- */
function showToast(msg, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const div = document.createElement('div');
    div.className = 'toast-item';
    div.innerHTML = `<i class="fa-solid ${icon} text-indigo"></i><span>${msg}</span>`;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3200);
}

function showAppModal({ icon = 'fa-trophy', title, bodyHtml, showInput = false, buttons = [] }) {
    const overlay = document.getElementById('appModalOverlay');
    document.getElementById('appModalIcon').innerHTML = `<i class="fa-solid ${icon}"></i>`;
    document.getElementById('appModalTitle').textContent = title;
    document.getElementById('appModalBody').innerHTML = bodyHtml;

    const inputWrap = document.getElementById('appModalInputWrapper');
    const inputEl = document.getElementById('appModalInput');
    if (showInput) {
        inputWrap.classList.remove('hidden');
        inputEl.placeholder = t('placeholderTeacherModal');
        inputEl.value = '';
    } else {
        inputWrap.classList.add('hidden');
    }

    const actionsEl = document.getElementById('appModalActions');
    actionsEl.innerHTML = '';
    buttons.forEach(btn => {
        const b = document.createElement('button');
        b.className = btn.className || 'btn-utility';
        b.innerHTML = btn.label;
        b.onclick = () => {
            const val = inputEl.value.trim();
            overlay.classList.remove('active');
            if (btn.onClick) btn.onClick(val);
        };
        actionsEl.appendChild(b);
    });

    overlay.classList.add('active');
    if (showInput) setTimeout(() => inputEl.focus(), 80);
}

function switchView(viewName) {
    if (appState.game.active && viewName !== 'game') {
        showToast(t('toastFinishCurrentGame'), 'fa-triangle-exclamation');
        return;
    }

    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(tEl => {
        tEl.classList.toggle('active', tEl.dataset.view === viewName);
    });

    const targetMap = {
        home: 'viewHome',
        game: 'viewGame',
        banks: 'viewBanks',
        ranking: 'viewRanking',
        about: 'viewAbout'
    };
    const targetId = targetMap[viewName] || 'viewHome';
    const targetEl = document.getElementById(targetId);
    if (targetEl) targetEl.classList.add('active');

    if (viewName === 'home') updateLobbySelectors();
    if (viewName === 'banks') renderBanksList();
    if (viewName === 'ranking') renderRankingTable();
}

function applyTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (appState.theme === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
        if (icon) icon.className = 'fa-solid fa-sun text-amber';
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        if (icon) icon.className = 'fa-solid fa-moon text-indigo';
    }
}

function toggleLanguage() {
    appState.lang = appState.lang === 'es' ? 'en' : 'es';
    localStorage.setItem(STORAGE_KEYS.LANG, appState.lang);
    document.documentElement.lang = appState.lang;
    applyTranslations();
}

function setTextIfPresent(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function applyTranslations() {
    setTextIfPresent('langLabel', appState.lang.toUpperCase());

    // Cabecera y Navegación
    setTextIfPresent('uiBadgeEdition', t('badgeEdition'));
    setTextIfPresent('uiMainSubtitle', t('mainSubtitle'));
    setTextIfPresent('uiNavPlay', t('navPlay'));
    setTextIfPresent('uiNavBanks', t('navBanks'));
    setTextIfPresent('uiNavRanking', t('navRanking'));
    setTextIfPresent('uiNavAbout', t('navAbout'));
    setTextIfPresent('uiBtnSettings', t('btnSettings'));

    // Menú desplegable de Audio y Voz
    setTextIfPresent('uiSettingsTitle', t('settingsTitle'));
    setTextIfPresent('uiBtnTestVoice', t('btnTestVoice'));
    setTextIfPresent('uiLabelVoiceRate', t('labelVoiceRate'));
    setTextIfPresent('optRateSlow', t('rateSlow'));
    setTextIfPresent('optRateNormal', t('rateNormal'));
    setTextIfPresent('optRateFast', t('rateFast'));
    setTextIfPresent('uiLabelNarrator', t('labelNarrator'));
    setTextIfPresent('uiLabelAutoRead', t('labelAutoRead'));
    setTextIfPresent('uiLabelSfx', t('labelSfx'));
    loadVoices();

    // Vista 1: Lobby / Inicio
    setTextIfPresent('uiLobbyTitle', t('lobbyTitle'));
    setTextIfPresent('uiLabelTeacher', t('labelTeacher'));
    setTextIfPresent('uiBtnAddTeacher', t('btnAddTeacher'));
    setTextIfPresent('uiLabelPlayer', t('labelPlayer'));
    const playerInput = document.getElementById('playerNameInput');
    if (playerInput) playerInput.placeholder = t('placeholderPlayer');
    setTextIfPresent('uiLabelTopicSelect', t('labelTopicSelect'));
    setTextIfPresent('uiLabelMixMode', t('labelMixMode'));
    setTextIfPresent('uiLabelQPerRound', t('labelQPerRound'));

    const qPerRoundSel = document.getElementById('questionsPerRoundSelect');
    if (qPerRoundSel && qPerRoundSel.options.length >= 2) {
        qPerRoundSel.options[0].textContent = t('optQ3');
        qPerRoundSel.options[1].textContent = t('optQ5');
    }

    setTextIfPresent('uiLabelAvailablePool', t('labelAvailablePool'));
    setTextIfPresent('uiBtnStartNow', t('btnStartNow'));
    setTextIfPresent('uiLadderPreviewTitle', t('ladderPreviewTitle'));
    setTextIfPresent('uiLadderPreviewDesc', t('ladderPreviewDesc'));

    // Escalera previa del Lobby (Niveles 1 a 5)
    ROUND_TIERS.forEach(tier => {
        const tierBox = document.querySelector(`.ladder-tier.tier-${tier.level}`);
        if (tierBox) {
            const badge = tierBox.querySelector('.tier-badge');
            const name = tierBox.querySelector('.tier-name');
            const pts = tierBox.querySelector('.tier-points');
            if (badge) badge.textContent = `${t('roundWord')} ${tier.level}`;
            if (name) name.textContent = appState.lang === 'en' ? tier.descEn : tier.descEs;
            if (pts) pts.textContent = `+${tier.points.toLocaleString()} ${t('ptsPerQ')}`;
        }
    });

    setTextIfPresent('uiTipTitle', t('tipTitle'));
    setTextIfPresent('uiTipDesc', t('tipDesc'));

    // Vista 2: Juego en Vivo
    setTextIfPresent('uiHudPlayer', t('hudPlayer'));
    setTextIfPresent('uiHudRound', t('hudRound'));
    setTextIfPresent('uiHudScore', t('hudScore'));
    setTextIfPresent('uiHudSafe', t('hudSafe'));
    setTextIfPresent('uiHudTime', t('hudTime'));
    setTextIfPresent('uiLifelineSwap', t('lifelineSwap'));
    setTextIfPresent('uiLifelineAudience', t('lifelineAudience'));
    setTextIfPresent('uiBtnRetire', t('btnRetire'));
    setTextIfPresent('uiLiveLadderTitle', t('liveLadderTitle'));

    const l50 = document.getElementById('lifeline5050');
    const lSw = document.getElementById('lifelineSwap');
    const lAu = document.getElementById('lifelineAudience');
    const lSp = document.querySelector('.btn-speak-q');
    if (l50) l50.title = t('titleLifeline5050');
    if (lSw) lSw.title = t('titleLifelineSwap');
    if (lAu) lAu.title = t('titleLifelineAudience');
    if (lSp) lSp.title = t('titleSpeakQ');

    if (appState.game.active && appState.game.currentQuestion) {
        const g = appState.game;
        const tierInfo = ROUND_TIERS[g.currentRound - 1];
        setTextIfPresent('gameCategoryBadge', `${g.currentQuestion.sourceTopic || g.topicLabel} • +${tierInfo.points} pts`);
        setTextIfPresent('gameQuestionCounter', `${t('questionWord')} ${g.questionInRound} ${t('ofWord')} ${g.questionsPerRound} (${t('roundWord')} ${g.currentRound})`);
        renderLiveLadder();
    }

    // Vista 3: Bancos y Centro de Carga Masiva Multiformato
    setTextIfPresent('uiMyBanksTitle', t('myBanksTitle'));
    const bankSearch = document.getElementById('bankSearchInput');
    if (bankSearch) bankSearch.placeholder = t('placeholderSearchBank');
    setTextIfPresent('uiBtnExportAll', t('btnExportAll'));
    setTextIfPresent('uiBtnRestoreDefaults', t('btnRestoreDefaults'));
    setTextIfPresent('uiBulkCenterTitle', t('bulkCenterTitle'));
    setTextIfPresent('uiLabelTargetBank', t('labelTargetBank'));
    const bulkNameInput = document.getElementById('bulkBankNameInput');
    if (bulkNameInput) bulkNameInput.placeholder = t('placeholderTargetBank');
    setTextIfPresent('uiLabelBulkAction', t('labelBulkAction'));
    setTextIfPresent('optBulkAppend', t('optBulkAppend'));
    setTextIfPresent('optBulkReplace', t('optBulkReplace'));

    // Pestañas de formato (Excel, Texto Plano, JSON)
    const tabExcel = document.querySelector('.format-tab[data-fmt="excel"] span');
    const tabText = document.querySelector('.format-tab[data-fmt="text"] span');
    const tabJson = document.querySelector('.format-tab[data-fmt="json"] span');
    if (tabExcel) tabExcel.textContent = t('tabFmtExcel');
    if (tabText) tabText.textContent = t('tabFmtText');
    if (tabJson) tabJson.textContent = t('tabFmtJson');

    // Guías de formato (Excel, Texto, JSON)
    const guideExcel = document.getElementById('fmtGuideExcel');
    if (guideExcel) {
        guideExcel.innerHTML = `
            <div class="guide-header">
                <strong><i class="fa-solid fa-circle-check text-emerald"></i> ${t('guideExcelTitle')}</strong>
                <div class="guide-actions">
                    <button type="button" class="btn-mini" onclick="insertSampleIntoBulk('excel')">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> ${t('btnSeeSample')}
                    </button>
                    <button type="button" class="btn-mini" onclick="downloadTemplateFile('csv')">
                        <i class="fa-solid fa-download"></i> ${t('btnTemplateCsv')}
                    </button>
                </div>
            </div>
            <p class="guide-text">${t('guideExcelDesc')}</p>
            <div class="schema-chips">
                <span>${t('chip1')}</span>
                <span class="chip-correct">${t('chip2')}</span>
                <span>${t('chip3')}</span>
                <span>${t('chip4')}</span>
                <span>${t('chip5')}</span>
                <span>${t('chip6')}</span>
                <span>${t('chip7')}</span>
            </div>
        `;
    }

    const guideText = document.getElementById('fmtGuideText');
    if (guideText) {
        guideText.innerHTML = `
            <div class="guide-header">
                <strong><i class="fa-solid fa-circle-check text-emerald"></i> ${t('guideTextTitle')}</strong>
                <div class="guide-actions">
                    <button type="button" class="btn-mini" onclick="insertSampleIntoBulk('text')">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> ${t('btnSeeSample')}
                    </button>
                    <button type="button" class="btn-mini" onclick="downloadTemplateFile('txt')">
                        <i class="fa-solid fa-download"></i> ${t('btnTemplateTxt')}
                    </button>
                </div>
            </div>
            <p class="guide-text">${t('guideTextDesc')}</p>
            <code class="code-sample">${t('guideTextCode')}</code>
        `;
    }

    const guideJson = document.getElementById('fmtGuideJson');
    if (guideJson) {
        guideJson.innerHTML = `
            <div class="guide-header">
                <strong><i class="fa-solid fa-circle-check text-emerald"></i> ${t('guideJsonTitle')}</strong>
                <div class="guide-actions">
                    <button type="button" class="btn-mini" onclick="insertSampleIntoBulk('json')">
                        <i class="fa-solid fa-wand-magic-sparkles"></i> ${t('btnSeeSample')}
                    </button>
                    <button type="button" class="btn-mini" onclick="downloadTemplateFile('json')">
                        <i class="fa-solid fa-download"></i> ${t('btnTemplateJson')}
                    </button>
                </div>
            </div>
            <p class="guide-text">${t('guideJsonDesc')}</p>
            <code class="code-sample">[ ["¿Cuánto es 5x7?", "", "35", "30", "40", "45", 1], ... ]  /  [ {"question":"...", "correct":"...", "wrong":["..."], "level":1} ]</code>
        `;
    }

    const bulkRaw = document.getElementById('bulkRawTextarea');
    if (bulkRaw) bulkRaw.placeholder = t('placeholderBulkTextarea');
    setTextIfPresent('uiBtnUploadFile', t('btnUploadFile'));
    setTextIfPresent('uiBtnProcessBulk', t('btnProcessBulk'));

    // Vista 4: Ranking
    setTextIfPresent('uiRankingTitle', t('rankingTitle'));
    setTextIfPresent('uiRankingSubtitle', t('rankingSubtitle'));
    const rankSearch = document.getElementById('rankingSearchInput');
    if (rankSearch) rankSearch.placeholder = t('placeholderSearchPlayer');
    setTextIfPresent('uiBtnClearRanking', t('btnClearRanking'));
    setTextIfPresent('thPlayer', t('thPlayer'));
    setTextIfPresent('thTopic', t('thTopic'));
    setTextIfPresent('thTeacher', t('thTeacher'));
    setTextIfPresent('thRound', t('thRound'));
    setTextIfPresent('thScore', t('thScore'));
    setTextIfPresent('thTime', t('thTime'));
    setTextIfPresent('thDate', t('thDate'));

    // Vista 5: Cómo Jugar / Acerca de
    setTextIfPresent('uiAboutTitle', t('aboutTitle'));
    setTextIfPresent('uiAbout1Title', t('about1Title'));
    setTextIfPresent('uiAbout1Desc', t('about1Desc'));
    setTextIfPresent('uiAbout2Title', t('about2Title'));
    setTextIfPresent('uiAbout2Desc', t('about2Desc'));
    setTextIfPresent('uiAbout3Title', t('about3Title'));
    setTextIfPresent('uiAbout3Desc', t('about3Desc'));

    const footerP = document.querySelector('.app-footer p');
    if (footerP) {
        footerP.innerHTML = `<strong>UparTrivia Studio</strong> — ${t('footerCreatedBy')} <a href="https://github.com/kevinluisfl" target="_blank">Kevin Luis Flórez Lozada (klfl)</a> 💻`;
    }

    updateLobbySelectors();
    renderBanksList();
    renderRankingTable();
}

/* --------------------------------------------------------------------------
   5. PERSISTENCIA DE PERFILES DOCENTES, BANCOS Y RANKING
   -------------------------------------------------------------------------- */
function loadInitialStorage() {
    let savedTeachers = null;
    try {
        savedTeachers = JSON.parse(localStorage.getItem(STORAGE_KEYS.TEACHERS) || 'null');
    } catch (e) { savedTeachers = null; }

    appState.teachers = Array.isArray(savedTeachers) && savedTeachers.length > 0
        ? savedTeachers
        : ['Prof. Kevin Flórez', 'Docente Invitado'];

    appState.activeTeacher = localStorage.getItem(STORAGE_KEYS.ACTIVE_TEACHER) || appState.teachers[0];

    let savedBanks = null;
    try {
        savedBanks = JSON.parse(localStorage.getItem(STORAGE_KEYS.BANKS) || 'null');
    } catch (e) { savedBanks = null; }

    if (Array.isArray(savedBanks) && savedBanks.length > 0) {
        appState.banks = savedBanks;
    } else {
        appState.banks = JSON.parse(JSON.stringify(DEFAULT_BANKS));
        saveBanksToStorage();
    }

    let savedRanking = null;
    try {
        savedRanking = JSON.parse(localStorage.getItem(STORAGE_KEYS.RANKING) || 'null');
    } catch (e) { savedRanking = null; }

    let legacyScores = [];
    try {
        legacyScores = JSON.parse(localStorage.getItem('datos') || '[]');
    } catch (e) { legacyScores = []; }

    if (Array.isArray(savedRanking)) {
        appState.ranking = savedRanking;
    } else {
        appState.ranking = (Array.isArray(legacyScores) ? legacyScores : []).map(d => ({
            player: d.user || 'JUGADOR',
            topic: 'Matemáticas (TECHMATH)',
            teacher: 'Prof. Kevin Flórez',
            round: d.ronda || 1,
            score: d.puntos || 0,
            time: d.tiempo || 0,
            date: d.fecha || new Date().toLocaleDateString()
        }));
        saveRankingToStorage();
    }
}

function saveTeachersToStorage() {
    localStorage.setItem(STORAGE_KEYS.TEACHERS, JSON.stringify(appState.teachers));
    localStorage.setItem(STORAGE_KEYS.ACTIVE_TEACHER, appState.activeTeacher);
}

function saveBanksToStorage() {
    localStorage.setItem(STORAGE_KEYS.BANKS, JSON.stringify(appState.banks));
}

function saveRankingToStorage() {
    localStorage.setItem(STORAGE_KEYS.RANKING, JSON.stringify(appState.ranking));
}

function openNewTeacherModal() {
    showAppModal({
        icon: 'fa-user-tie',
        title: t('modalNewTeacherTitle'),
        bodyHtml: t('modalNewTeacherBody'),
        showInput: true,
        buttons: [
            { label: t('btnCancel'), className: 'btn-utility' },
            {
                label: t('btnCreateProfile'),
                className: 'btn-primary-md',
                onClick: (name) => {
                    if (!name) return;
                    if (!appState.teachers.includes(name)) {
                        appState.teachers.push(name);
                    }
                    appState.activeTeacher = name;
                    saveTeachersToStorage();
                    updateLobbySelectors();
                    showToast(`${t('toastProfileActivated')} "${name}"`);
                }
            }
        ]
    });
}

function handleTeacherChange(val) {
    appState.activeTeacher = val;
    saveTeachersToStorage();
    updateLobbySelectors();
}

function updateLobbySelectors() {
    const teacherSel = document.getElementById('teacherProfileSelect');
    if (!teacherSel) return;

    teacherSel.innerHTML = appState.teachers.map(tc =>
        `<option value="${tc}" ${tc === appState.activeTeacher ? 'selected' : ''}>${tc}</option>`
    ).join('');

    const bankSel = document.getElementById('activeBankSelect');
    const multiBox = document.getElementById('multiTopicWrapper');

    const sortedBanks = [...appState.banks].sort((a, b) => {
        if (a.teacher === appState.activeTeacher && b.teacher !== appState.activeTeacher) return -1;
        if (a.teacher !== appState.activeTeacher && b.teacher === appState.activeTeacher) return 1;
        return a.title.localeCompare(b.title);
    });

    const prevBankId = bankSel.value;
    bankSel.innerHTML = sortedBanks.map(b =>
        `<option value="${b.id}" ${b.id === prevBankId ? 'selected' : ''}>${b.title} (${b.questions.length} ${t('unitQuestionsShort')} • ${b.teacher})</option>`
    ).join('');

    multiBox.innerHTML = sortedBanks.map(b => `
        <label class="multi-topic-item">
            <span>
                <input type="checkbox" class="mix-bank-check" value="${b.id}" checked onchange="updateLobbySummary()">
                ${b.title}
            </span>
            <span class="badge-soft">${b.questions.length} ${t('unitQuestionsShort')}</span>
        </label>
    `).join('');

    updateLobbySummary();
}

function toggleMixTopicsMode() {
    const isMix = document.getElementById('mixTopicsToggle').checked;
    document.getElementById('singleTopicWrapper').classList.toggle('hidden', isMix);
    document.getElementById('multiTopicWrapper').classList.toggle('hidden', !isMix);
    updateLobbySummary();
}

function getSelectedBanksForGame() {
    const mixToggle = document.getElementById('mixTopicsToggle');
    const isMix = mixToggle ? mixToggle.checked : false;
    if (!isMix) {
        const id = document.getElementById('activeBankSelect')?.value;
        const found = appState.banks.find(b => b.id === id);
        return found ? [found] : (appState.banks[0] ? [appState.banks[0]] : []);
    } else {
        const checkedIds = Array.from(document.querySelectorAll('.mix-bank-check:checked')).map(c => c.value);
        return appState.banks.filter(b => checkedIds.includes(b.id));
    }
}

function updateLobbySummary() {
    const selected = getSelectedBanksForGame();
    const totalQ = selected.reduce((acc, b) => acc + b.questions.length, 0);
    const qPerRound = parseInt(document.getElementById('questionsPerRoundSelect')?.value, 10) || 5;
    const poolEl = document.getElementById('lobbyPoolCount');
    const badgeEl = document.getElementById('uiLobbyRoundsBadge');
    if (poolEl) poolEl.textContent = `${totalQ} ${t('unitQuestions')}`;
    if (badgeEl) badgeEl.textContent = `5 ${t('unitRounds')} • ${qPerRound * 5} ${t('unitQuestions')}`;
}

/* --------------------------------------------------------------------------
   6. CENTRO DE CARGA MASIVA MULTIFORMATO (EXCEL/CSV, TEXTO PLANO Y JSON)
   -------------------------------------------------------------------------- */
function switchBulkFormatTab(fmt) {
    appState.bulkFormatTab = fmt;
    document.querySelectorAll('.format-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.fmt === fmt);
    });
    document.getElementById('fmtGuideExcel').classList.toggle('hidden', fmt !== 'excel');
    document.getElementById('fmtGuideText').classList.toggle('hidden', fmt !== 'text');
    document.getElementById('fmtGuideJson').classList.toggle('hidden', fmt !== 'json');
}

function insertSampleIntoBulk(fmt) {
    const textarea = document.getElementById('bulkRawTextarea');
    const nameInput = document.getElementById('bulkBankNameInput');
    if (!nameInput.value.trim()) {
        nameInput.value = t('sampleBankDefaultName');
    }

    if (fmt === 'excel') {
        textarea.value = [
            "¿Cuál es el planeta más grande del Sistema Solar?\tJúpiter\tMarte\tSaturno\tVenus\t1",
            "¿Qué molécula transporta la información genética?\tADN\tATP\tGlucosa\tInsulina\t2",
            "¿Qué unidad mide la resistencia eléctrica?\tOhmio\tVoltio\tAmperio\tVatio\t3",
            "¿En qué orgánulo celular ocurre la respiración celular?\tMitocondria\tRibosoma\tLisosoma\tAparato de Golgi\t4",
            "¿Qué ley física establece que F = m · a?\tSegunda Ley de Newton\tLey de Hooke\tLey de Ohm\tPrincipio de Pascal\t5"
        ].join('\n');
    } else if (fmt === 'text') {
        textarea.value = [
            "¿Cuál es el planeta más grande del Sistema Solar? | Júpiter | Marte | Saturno | Venus | 1",
            "¿Qué molécula transporta la información genética? | ADN | ATP | Glucosa | Insulina | 2",
            "¿Qué unidad mide la resistencia eléctrica? | Ohmio | Voltio | Amperio | Vatio | 3",
            "¿En qué orgánulo celular ocurre la respiración celular? | Mitocondria | Ribosoma | Lisosoma | Golgi | 4",
            "¿Qué ley física establece que F = m · a? | Segunda Ley de Newton | Ley de Hooke | Ley de Ohm | Pascal | 5"
        ].join('\n');
    } else if (fmt === 'json') {
        textarea.value = JSON.stringify([
            ["¿Cuál es el planeta más grande del Sistema Solar?", "", "Júpiter", "Marte", "Saturno", "Venus", 1],
            {
                question: "¿Qué molécula transporta la información genética?",
                correct: "ADN",
                wrong: ["ATP", "Glucosa", "Insulina"],
                level: 2,
                url: ""
            }
        ], null, 2);
    }
    showToast(t('toastSampleInserted'));
}

function downloadTemplateFile(type) {
    let content = '';
    let filename = '';
    let mime = 'text/plain;charset=utf-8';

    if (type === 'csv') {
        content = [
            "Pregunta,Respuesta_Correcta,Incorrecta_1,Incorrecta_2,Incorrecta_3,Nivel_1_a_5,URL_Imagen_Opcional",
            "\"¿Cuánto es 8 x 9?\",\"72\",\"64\",\"81\",\"70\",1,\"\"",
            "\"¿Capital de Colombia?\",\"Bogotá\",\"Medellín\",\"Cali\",\"Barranquilla\",1,\"\""
        ].join('\n');
        filename = 'plantilla_upartrivia_excel.csv';
        mime = 'text/csv;charset=utf-8';
    } else if (type === 'txt') {
        content = [
            "# Una pregunta por línea: Pregunta | Correcta | Incorrecta 1 | Incorrecta 2 | Incorrecta 3 | Nivel(1-5)",
            "¿Cuánto es 8 x 9? | 72 | 64 | 81 | 70 | 1",
            "¿Capital de Colombia? | Bogotá | Medellín | Cali | Barranquilla | 1"
        ].join('\n');
        filename = 'plantilla_upartrivia_texto.txt';
    } else {
        content = JSON.stringify([
            {
                question: "¿Cuánto es 8 x 9?",
                correct: "72",
                wrong: ["64", "81", "70"],
                level: 1,
                url: ""
            }
        ], null, 2);
        filename = 'plantilla_upartrivia.json';
        mime = 'application/json';
    }

    const blob = new Blob([content], { type: mime });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    a.click();
}

function handleBulkFileUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        document.getElementById('bulkRawTextarea').value = e.target.result;
        const nameInput = document.getElementById('bulkBankNameInput');
        if (!nameInput.value.trim()) {
            nameInput.value = file.name.replace(/\.[^/.]+$/, '');
        }
        if (file.name.endsWith('.json')) switchBulkFormatTab('json');
        else if (file.name.endsWith('.csv') || file.name.endsWith('.tsv')) switchBulkFormatTab('excel');
        else switchBulkFormatTab('text');

        showToast(`${t('toastFileLoaded')} "${file.name}"`);
        event.target.value = '';
    };
    reader.readAsText(file);
}

function parseUniversalQuestions(rawText) {
    const trimmed = rawText.trim();
    if (!trimmed) return [];

    // 1. Intentar como JSON si empieza por [ o {
    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
        try {
            const parsed = JSON.parse(trimmed);
            const list = Array.isArray(parsed) ? parsed : (parsed.questions || []);
            const out = [];

            list.forEach((item, idx) => {
                if (Array.isArray(item) && item.length >= 6) {
                    const qText = String(item[0] || '').trim();
                    const url = String(item[1] || '').trim();
                    const correct = String(item[2] || '').trim();
                    const w1 = String(item[3] || '').trim();
                    const w2 = String(item[4] || '').trim();
                    const w3 = String(item[5] || '').trim();
                    const lvl = Math.min(5, Math.max(1, parseInt(item[6], 10) || ((idx % 5) + 1)));
                    if (qText && correct) {
                        out.push({
                            id: 'q_' + Date.now() + '_' + idx,
                            question: qText,
                            correct,
                            wrong: [w1 || 'Opción B', w2 || 'Opción C', w3 || 'Opción D'],
                            level: lvl,
                            url
                        });
                    }
                } else if (item && typeof item === 'object') {
                    const qText = String(item.question || item.pregunta || '').trim();
                    const correct = String(item.correct || item.correcta || '').trim();
                    const wrongArr = Array.isArray(item.wrong)
                        ? item.wrong.map(x => String(x).trim())
                        : [item.wrong1, item.wrong2, item.wrong3].filter(Boolean).map(x => String(x).trim());
                    const lvl = Math.min(5, Math.max(1, parseInt(item.level || item.idcategoria, 10) || ((idx % 5) + 1)));
                    const url = String(item.url || '').trim();
                    if (qText && correct && wrongArr.length >= 1) {
                        while (wrongArr.length < 3) wrongArr.push(`Opción ${wrongArr.length + 2}`);
                        out.push({
                            id: 'q_' + Date.now() + '_' + idx,
                            question: qText,
                            correct,
                            wrong: wrongArr.slice(0, 3),
                            level: lvl,
                            url
                        });
                    }
                }
            });
            return out;
        } catch (e) {
            // Continúa con el parser de líneas
        }
    }

    // 2. Analizar línea por línea (Excel TSV, CSV o Texto Plano con | ; :)
    const lines = trimmed.split(/\r?\n/);
    const results = [];

    lines.forEach((line, idx) => {
        const cleanLine = line.trim();
        if (!cleanLine || cleanLine.startsWith('#')) return;

        let parts = [];
        if (cleanLine.includes('\t')) {
            parts = cleanLine.split('\t').map(s => s.trim());
        } else if (cleanLine.includes('|')) {
            parts = cleanLine.split('|').map(s => s.trim());
        } else if (cleanLine.includes(';')) {
            parts = cleanLine.split(';').map(s => s.trim());
        } else if (cleanLine.includes(',')) {
            parts = cleanLine.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || cleanLine.split(',');
            parts = parts.map(s => s.replace(/^"|"$/g, '').trim());
        } else if (cleanLine.includes(':')) {
            parts = cleanLine.split(':').map(s => s.trim());
        }

        if (parts.length < 5) return;
        if (idx === 0 && /^(pregunta|question)$/i.test(parts[0])) return;

        const [qText, correct, w1, w2, w3, rawLevel, rawUrl] = parts;
        if (!qText || !correct) return;

        const level = Math.min(5, Math.max(1, parseInt(rawLevel, 10) || ((results.length % 5) + 1)));
        const url = (rawUrl && /^https?:\/\//i.test(rawUrl)) ? rawUrl : '';

        results.push({
            id: 'q_' + Date.now() + '_' + idx,
            question: qText,
            correct,
            wrong: [w1 || 'Opción B', w2 || 'Opción C', w3 || 'Opción D'],
            level,
            url
        });
    });

    return results;
}

function processBulkImport() {
    const raw = document.getElementById('bulkRawTextarea').value;
    const bankTitle = document.getElementById('bulkBankNameInput').value.trim() || t('importedBankDefaultName');
    const mode = document.getElementById('bulkOperationMode').value;

    const parsedQuestions = parseUniversalQuestions(raw);
    if (parsedQuestions.length === 0) {
        showToast(t('toastNoValidQuestions'), 'fa-circle-exclamation');
        return;
    }

    const existingBank = appState.banks.find(
        b => b.title.toLowerCase() === bankTitle.toLowerCase() && b.teacher === appState.activeTeacher
    );

    if (existingBank) {
        if (mode === 'replace') {
            existingBank.questions = parsedQuestions;
        } else {
            existingBank.questions.push(...parsedQuestions);
        }
        existingBank.createdAt = new Date().toISOString().slice(0, 10);
    } else {
        appState.banks.unshift({
            id: 'bank_' + Date.now(),
            title: bankTitle,
            teacher: appState.activeTeacher,
            createdAt: new Date().toISOString().slice(0, 10),
            questions: parsedQuestions
        });
    }

    saveBanksToStorage();
    renderBanksList();
    updateLobbySelectors();
    document.getElementById('bulkRawTextarea').value = '';
    showToast(`¡${parsedQuestions.length} ${t('toastBankSavedPre')} "${bankTitle}"!`);
}

function renderBanksList() {
    const container = document.getElementById('banksListContainer');
    if (!container) return;
    const query = (document.getElementById('bankSearchInput')?.value || '').trim().toLowerCase();
    document.getElementById('totalBanksBadge').textContent = `${appState.banks.length} ${t('unitBanks')}`;

    const filtered = appState.banks.filter(b =>
        !query ||
        b.title.toLowerCase().includes(query) ||
        b.teacher.toLowerCase().includes(query)
    );

    if (filtered.length === 0) {
        container.innerHTML = `<p class="text-muted-sm">${t('emptyBanks')}</p>`;
        return;
    }

    container.innerHTML = filtered.map(b => {
        const byLvl = [1, 2, 3, 4, 5].map(l => b.questions.filter(q => q.level === l).length);
        return `
            <div class="bank-item-card">
                <div class="bank-item-info">
                    <h4>${b.title}</h4>
                    <p><i class="fa-solid fa-chalkboard-user text-indigo"></i> ${b.teacher} • <strong>${b.questions.length} ${t('unitQuestionsShort')}</strong> (L1:${byLvl[0]} L2:${byLvl[1]} L3:${byLvl[2]} L4:${byLvl[3]} L5:${byLvl[4]})</p>
                </div>
                <div class="bank-item-actions">
                    <button class="btn-icon-sm" onclick="exportSingleBankJSON('${b.id}')" title="${t('titleExportSingleBank')}">
                        <i class="fa-solid fa-download"></i>
                    </button>
                    <button class="btn-icon-sm" onclick="deleteBank('${b.id}')" title="${t('titleDeleteBank')}">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function exportSingleBankJSON(bankId) {
    const bank = appState.banks.find(b => b.id === bankId);
    if (!bank) return;
    const blob = new Blob([JSON.stringify(bank.questions, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `banco-${bank.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.json`;
    a.click();
}

function exportAllBanksJSON() {
    const blob = new Blob([JSON.stringify(appState.banks, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `respaldo-upartrivia-bancos.json`;
    a.click();
}

function deleteBank(bankId) {
    if (appState.banks.length <= 1) {
        showToast(t('toastKeepOneBank'), 'fa-triangle-exclamation');
        return;
    }
    appState.banks = appState.banks.filter(b => b.id !== bankId);
    saveBanksToStorage();
    renderBanksList();
    updateLobbySelectors();
    showToast(t('toastBankDeleted'));
}

function restoreDefaultBanks() {
    DEFAULT_BANKS.forEach(def => {
        if (!appState.banks.some(b => b.id === def.id)) {
            appState.banks.push(JSON.parse(JSON.stringify(def)));
        }
    });
    saveBanksToStorage();
    renderBanksList();
    updateLobbySelectors();
    showToast(t('toastDefaultsRestored'));
}

/* --------------------------------------------------------------------------
   7. MOTOR DE JUEGO ESTILO "QUIÉN QUIERE SER MILLONARIO"
   -------------------------------------------------------------------------- */
function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function startNewGame() {
    const playerName = document.getElementById('playerNameInput').value.trim();
    if (!playerName) {
        showToast(t('toastEnterPlayerName'), 'fa-user-pen');
        document.getElementById('playerNameInput').focus();
        return;
    }

    const selectedBanks = getSelectedBanksForGame();
    if (selectedBanks.length === 0) {
        showToast(t('toastSelectOneTopic'), 'fa-circle-exclamation');
        return;
    }

    const qPerRound = parseInt(document.getElementById('questionsPerRoundSelect').value, 10) || 5;
    const combinedQuestions = selectedBanks.flatMap(b =>
        b.questions.map(q => ({ ...q, sourceTopic: b.title }))
    );

    if (combinedQuestions.length < 5) {
        showToast(t('toastMin5Questions'), 'fa-circle-exclamation');
        return;
    }

    const poolByRound = {};
    for (let lvl = 1; lvl <= 5; lvl++) {
        let levelPool = shuffleArray(combinedQuestions.filter(q => q.level === lvl));
        if (levelPool.length < qPerRound) {
            const others = shuffleArray(combinedQuestions.filter(q => q.level !== lvl));
            levelPool = [...levelPool, ...others];
        }
        poolByRound[lvl] = levelPool;
    }

    const topicLabel = selectedBanks.length === 1
        ? selectedBanks[0].title
        : `${t('mixedTopicLabel')} (${selectedBanks.length} ${t('topicsWord')})`;

    clearInterval(appState.game.timerInterval);
    appState.game = {
        active: true,
        player: playerName.toUpperCase(),
        topicLabel,
        teacherName: appState.activeTeacher,
        questionsPerRound: qPerRound,
        currentRound: 1,
        questionInRound: 1,
        score: 0,
        safeScore: 0,
        seconds: 0,
        timerInterval: null,
        poolByRound,
        currentQuestion: null,
        shuffledOptions: [],
        lifelines: { fifty: true, swap: true, audience: true },
        isLocked: false
    };

    document.getElementById('lifeline5050').disabled = false;
    document.getElementById('lifelineSwap').disabled = false;
    document.getElementById('lifelineAudience').disabled = false;

    switchView('game');
    startGameTimer();
    loadNextGameQuestion();
}

function startGameTimer() {
    clearInterval(appState.game.timerInterval);
    appState.game.timerInterval = setInterval(() => {
        if (!appState.game.isLocked && appState.game.active) {
            appState.game.seconds++;
            document.getElementById('gameTimerDisplay').textContent = `${appState.game.seconds}s`;
        }
    }, 1000);
}

function renderLiveLadder() {
    const container = document.getElementById('liveLadderContainer');
    if (!container) return;
    const qPerR = appState.game.questionsPerRound;

    container.innerHTML = [...ROUND_TIERS].reverse().map(tier => {
        const isCurrent = tier.level === appState.game.currentRound;
        const isDone = tier.level < appState.game.currentRound;
        const cls = isCurrent ? 'active-round' : (isDone ? 'completed-round' : '');
        const roundTotal = tier.points * qPerR;

        return `
            <div class="live-step ${cls}">
                <span>${t('roundWord')} ${tier.level} • ${appState.lang === 'es' ? tier.nameEs : tier.nameEn}</span>
                <span class="font-mono">+${roundTotal.toLocaleString()}</span>
            </div>
        `;
    }).join('');
}

function loadNextGameQuestion() {
    const g = appState.game;
    g.isLocked = false;

    document.getElementById('gamePlayerName').textContent = g.player;
    document.getElementById('gameRoundDisplay').textContent = `${g.currentRound} / 5`;
    document.getElementById('gameCurrentScore').textContent = g.score.toLocaleString();
    document.getElementById('gameSafeScore').textContent = g.safeScore.toLocaleString();
    document.getElementById('gameTimerDisplay').textContent = `${g.seconds}s`;

    document.getElementById('audienceChartBox').classList.add('hidden');
    document.getElementById('gameFeedbackBanner').classList.add('hidden');

    renderLiveLadder();

    const pool = g.poolByRound[g.currentRound];
    const nextQ = pool.shift() || {
        question: '¿Cuánto es 12 × 12?',
        correct: '144',
        wrong: ['124', '148', '132'],
        level: g.currentRound,
        url: '',
        sourceTopic: g.topicLabel
    };
    g.currentQuestion = nextQ;

    const tierInfo = ROUND_TIERS[g.currentRound - 1];
    document.getElementById('gameCategoryBadge').textContent = `${nextQ.sourceTopic || g.topicLabel} • +${tierInfo.points} pts`;
    document.getElementById('gameQuestionCounter').textContent =
        `${t('questionWord')} ${g.questionInRound} ${t('ofWord')} ${g.questionsPerRound} (${t('roundWord')} ${g.currentRound})`;
    document.getElementById('gameQuestionText').textContent = nextQ.question;

    const imgWrap = document.getElementById('gameImageWrapper');
    const imgEl = document.getElementById('gameQuestionImage');
    imgWrap.classList.add('hidden');

    if (nextQ.url && /^https?:\/\//i.test(nextQ.url)) {
        imgEl.onload = () => imgWrap.classList.remove('hidden');
        imgEl.onerror = () => imgWrap.classList.add('hidden');
        imgEl.src = nextQ.url;
    } else {
        imgEl.removeAttribute('src');
    }

    const options = shuffleArray([
        { text: nextQ.correct, isCorrect: true, hidden: false },
        ...nextQ.wrong.slice(0, 3).map(w => ({ text: w, isCorrect: false, hidden: false }))
    ]);
    g.shuffledOptions = options;

    options.forEach((opt, idx) => {
        const btn = document.getElementById(`ansBtn${idx}`);
        const txt = document.getElementById(`ansText${idx}`);
        btn.className = 'answer-option';
        btn.disabled = false;
        txt.textContent = opt.text;
    });

    if (appState.audio.autoRead) {
        speakCurrentQuestion();
    }
}

function selectAnswer(idx) {
    const g = appState.game;
    if (g.isLocked || !g.active) return;
    g.isLocked = true;

    playSoundEffect('select');

    for (let i = 0; i < 4; i++) {
        document.getElementById(`ansBtn${i}`).disabled = true;
    }

    const chosenBtn = document.getElementById(`ansBtn${idx}`);
    chosenBtn.classList.add('selected-pending');

    const chosenOpt = g.shuffledOptions[idx];
    const feedback = document.getElementById('gameFeedbackBanner');

    setTimeout(() => {
        chosenBtn.classList.remove('selected-pending');

        if (chosenOpt.isCorrect) {
            playSoundEffect('correct');
            chosenBtn.classList.add('correct-reveal');
            const tierPts = ROUND_TIERS[g.currentRound - 1].points;
            g.score += tierPts;
            document.getElementById('gameCurrentScore').textContent = g.score.toLocaleString();

            feedback.className = 'game-feedback-banner text-emerald';
            feedback.style.color = '';
            feedback.textContent = `${t('feedbackCorrectPre')} +${tierPts.toLocaleString()} ${t('feedbackPoints')} 👏`;
            feedback.classList.remove('hidden');

            setTimeout(() => advanceAfterCorrect(), 1200);
        } else {
            playSoundEffect('wrong');
            chosenBtn.classList.add('wrong-reveal');
            g.shuffledOptions.forEach((o, i) => {
                if (o.isCorrect) document.getElementById(`ansBtn${i}`).classList.add('correct-reveal');
            });

            feedback.className = 'game-feedback-banner';
            feedback.style.color = 'var(--danger)';
            feedback.textContent = `${t('feedbackWrongPre')} ${g.currentQuestion.correct}`;
            feedback.classList.remove('hidden');

            setTimeout(() => finishGameSession('wrong'), 1800);
        }
    }, 1100);
}

function advanceAfterCorrect() {
    const g = appState.game;
    if (g.questionInRound >= g.questionsPerRound) {
        g.safeScore = g.score;
        if (g.currentRound >= 5) {
            playSoundEffect('roundUp');
            finishGameSession('victory');
        } else {
            g.currentRound++;
            g.questionInRound = 1;
            playSoundEffect('roundUp');
            showToast(`¡${t('roundWord')} ${g.currentRound - 1} ${t('toastRoundClearedPre')} ${g.safeScore.toLocaleString()} pts`, 'fa-shield-halved');
            loadNextGameQuestion();
        }
    } else {
        g.questionInRound++;
        loadNextGameQuestion();
    }
}

/* --------------------------------------------------------------------------
   8. COMODINES ESTILO MILLONARIO (50:50, CAMBIAR PREGUNTA, PÚBLICO)
   -------------------------------------------------------------------------- */
function useLifeline5050() {
    const g = appState.game;
    if (g.isLocked || !g.lifelines.fifty) return;
    g.lifelines.fifty = false;
    document.getElementById('lifeline5050').disabled = true;
    playSoundEffect('lifeline');

    const wrongIndices = g.shuffledOptions
        .map((o, idx) => (!o.isCorrect ? idx : -1))
        .filter(idx => idx !== -1);

    const toHide = shuffleArray(wrongIndices).slice(0, 2);
    toHide.forEach(idx => {
        g.shuffledOptions[idx].hidden = true;
        const btn = document.getElementById(`ansBtn${idx}`);
        btn.classList.add('hidden-5050');
        btn.disabled = true;
    });
}

function useLifelineSwap() {
    const g = appState.game;
    if (g.isLocked || !g.lifelines.swap) return;
    g.lifelines.swap = false;
    document.getElementById('lifelineSwap').disabled = true;
    playSoundEffect('lifeline');
    showToast(t('toastQuestionSwapped'), 'fa-arrows-rotate');
    loadNextGameQuestion();
}

function useLifelineAudience() {
    const g = appState.game;
    if (g.isLocked || !g.lifelines.audience) return;
    g.lifelines.audience = false;
    document.getElementById('lifelineAudience').disabled = true;
    playSoundEffect('lifeline');

    const chartBox = document.getElementById('audienceChartBox');
    const votes = [0, 0, 0, 0];
    let remaining = 100;

    const correctIdx = g.shuffledOptions.findIndex(o => o.isCorrect);
    const correctVote = 48 + Math.floor(Math.random() * 28);
    votes[correctIdx] = correctVote;
    remaining -= correctVote;

    for (let i = 0; i < 4; i++) {
        if (i === correctIdx || g.shuffledOptions[i].hidden) continue;
        const v = Math.floor(Math.random() * remaining);
        votes[i] = v;
        remaining -= v;
    }
    votes[correctIdx] += remaining;

    chartBox.innerHTML = votes.map((pct, idx) => `
        <div class="audience-bar-col">
            <span>${['A', 'B', 'C', 'D'][idx]}: ${pct}%</span>
            <div class="audience-bar-track">
                <div class="audience-bar-fill" style="height: ${pct}%"></div>
            </div>
        </div>
    `).join('');
    chartBox.classList.remove('hidden');
}

function retireFromGame() {
    const g = appState.game;
    if (g.isLocked || !g.active) return;

    showAppModal({
        icon: 'fa-flag',
        title: t('modalRetireTitle'),
        bodyHtml: t('modalRetireBody')(g.score.toLocaleString(), g.seconds),
        buttons: [
            { label: t('btnKeepPlaying'), className: 'btn-utility' },
            {
                label: t('btnConfirmRetire'),
                className: 'btn-primary-md',
                onClick: () => finishGameSession('retired')
            }
        ]
    });
}

function finishGameSession(reason) {
    const g = appState.game;
    clearInterval(g.timerInterval);
    g.active = false;

    const finalAwardedScore = reason === 'retired' || reason === 'victory'
        ? g.score
        : g.safeScore;

    if (finalAwardedScore > 0) {
        appState.ranking.push({
            player: g.player,
            topic: g.topicLabel,
            teacher: g.teacherName,
            round: g.currentRound,
            score: finalAwardedScore,
            time: g.seconds,
            date: new Date().toLocaleString()
        });
        saveRankingToStorage();
    }

    const titles = {
        victory: t('modalVictoryTitle')(g.player),
        retired: t('modalRetiredTitle')(g.player),
        wrong: t('modalWrongTitle')(g.player)
    };

    const descriptions = {
        victory: t('modalVictoryDesc')(finalAwardedScore.toLocaleString(), g.seconds),
        retired: t('modalRetiredDesc')(finalAwardedScore.toLocaleString(), g.seconds),
        wrong: t('modalWrongDesc')(finalAwardedScore.toLocaleString(), g.seconds)
    };

    showAppModal({
        icon: reason === 'victory' ? 'fa-trophy' : (reason === 'retired' ? 'fa-sack-dollar' : 'fa-rotate-left'),
        title: titles[reason],
        bodyHtml: descriptions[reason],
        buttons: [
            {
                label: t('btnGoHome'),
                className: 'btn-utility',
                onClick: () => switchView('home')
            },
            {
                label: t('btnSeeRanking'),
                className: 'btn-primary-md',
                onClick: () => switchView('ranking')
            }
        ]
    });
}

/* --------------------------------------------------------------------------
   9. SISTEMA DE RANKING (FILTRABLE POR TEMÁTICA, DOCENTE Y JUGADOR)
   -------------------------------------------------------------------------- */
function renderRankingTable() {
    const bankFilter = document.getElementById('rankingBankFilter');
    const teacherFilter = document.getElementById('rankingTeacherFilter');
    if (!bankFilter || !teacherFilter) return;

    const searchVal = (document.getElementById('rankingSearchInput')?.value || '').trim().toLowerCase();

    const currentTopic = bankFilter.value || 'all';
    const currentTeacher = teacherFilter.value || 'all';

    const uniqueTopics = [...new Set(appState.ranking.map(r => r.topic))];
    const uniqueTeachers = [...new Set(appState.ranking.map(r => r.teacher))];

    bankFilter.innerHTML = `<option value="all">${t('filterAllTopics')}</option>` +
        uniqueTopics.map(tp => `<option value="${tp}" ${tp === currentTopic ? 'selected' : ''}>${tp}</option>`).join('');

    teacherFilter.innerHTML = `<option value="all">${t('filterAllTeachers')}</option>` +
        uniqueTeachers.map(tc => `<option value="${tc}" ${tc === currentTeacher ? 'selected' : ''}>${tc}</option>`).join('');

    const filtered = appState.ranking
        .filter(r => (currentTopic === 'all' || r.topic === currentTopic))
        .filter(r => (currentTeacher === 'all' || r.teacher === currentTeacher))
        .filter(r => (!searchVal || r.player.toLowerCase().includes(searchVal)))
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.time - b.time;
        });

    const tbody = document.getElementById('rankingTableBody');
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding: 2rem; color: var(--text-muted);">${t('emptyRanking')}</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map((row, idx) => {
        const medals = ['👑 🥇', '🥈', '🥉'];
        const posBadge = idx < 3 ? `${medals[idx]} #${idx + 1}` : `#${idx + 1}`;
        return `
            <tr>
                <td class="font-mono"><strong>${posBadge}</strong></td>
                <td><strong>${row.player}</strong></td>
                <td><span class="badge-soft">${row.topic}</span></td>
                <td>${row.teacher}</td>
                <td>${t('roundWord')} ${row.round}</td>
                <td class="font-mono text-emerald"><strong>${Number(row.score).toLocaleString()} pts</strong></td>
                <td class="font-mono">${row.time}s</td>
                <td style="font-size:0.75rem; color:var(--text-muted);">${row.date}</td>
            </tr>
        `;
    }).join('');
}

function clearRankingHistory() {
    if (appState.ranking.length === 0) return;
    showAppModal({
        icon: 'fa-trash-can',
        title: t('modalClearRankTitle'),
        bodyHtml: t('modalClearRankBody'),
        buttons: [
            { label: t('btnCancel'), className: 'btn-utility' },
            {
                label: t('btnConfirmClearRank'),
                className: 'btn-danger-sm',
                onClick: () => {
                    appState.ranking = [];
                    localStorage.removeItem('datos');
                    saveRankingToStorage();
                    renderRankingTable();
                    showToast(t('toastRankingCleared'));
                }
            }
        ]
    });
}

/* --------------------------------------------------------------------------
   10. EXPOSICIÓN EXPLÍCITA AL ÁMBITO GLOBAL (WINDOW) Y ARRANQUE
   -------------------------------------------------------------------------- */
Object.assign(window, {
    switchView,
    openNewTeacherModal,
    handleTeacherChange,
    toggleMixTopicsMode,
    updateLobbySummary,
    startNewGame,
    useLifeline5050,
    useLifelineSwap,
    useLifelineAudience,
    speakCurrentQuestion,
    retireFromGame,
    selectAnswer,
    renderBanksList,
    exportAllBanksJSON,
    restoreDefaultBanks,
    switchBulkFormatTab,
    insertSampleIntoBulk,
    downloadTemplateFile,
    handleBulkFileUpload,
    processBulkImport,
    exportSingleBankJSON,
    deleteBank,
    renderRankingTable,
    clearRankingHistory
});

window.addEventListener('DOMContentLoaded', () => {
    loadInitialStorage();
    applyTheme();
    applyTranslations();
    updateLobbySelectors();

    document.getElementById('btnThemeToggle').addEventListener('click', () => {
        appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEYS.THEME, appState.theme);
        applyTheme();
    });

    document.getElementById('btnLangToggle').addEventListener('click', toggleLanguage);

    const btnSettings = document.getElementById('btnSettingsToggle');
    const menuSettings = document.getElementById('settingsMenu');
    btnSettings.addEventListener('click', (e) => {
        e.stopPropagation();
        menuSettings.classList.toggle('hidden');
    });
    document.addEventListener('click', (e) => {
        if (!menuSettings.classList.contains('hidden') && !menuSettings.contains(e.target) && e.target !== btnSettings) {
            menuSettings.classList.add('hidden');
        }
    });

    document.getElementById('voiceRateSelect').addEventListener('change', (e) => {
        appState.audio.rate = parseFloat(e.target.value) || 1.0;
    });
    document.getElementById('voiceNarratorSelect').addEventListener('change', (e) => {
        appState.audio.voiceURI = e.target.value;
    });
    document.getElementById('autoReadToggle').addEventListener('change', (e) => {
        appState.audio.autoRead = e.target.checked;
    });
    document.getElementById('sfxToggle').addEventListener('change', (e) => {
        appState.audio.sfx = e.target.checked;
    });
    document.getElementById('btnTestVoice').addEventListener('click', () => {
        speakText(t('testVoicePhrase'));
    });
});