document.addEventListener('DOMContentLoaded', () => {
    // --- Data ---
    const vocabulary = [
        { spanish : 'Cerveza', type: 'Noun', english: 'Beer'},
        { spanish : 'Poner', type: 'Verb', english: 'To put'},
        { spanish : 'Comer', type: 'Verb', english: 'To eat'},
        { spanish : 'Beber', type: 'Verb', english: 'To drink'},
        { spanish : 'Vivir', type: 'Verb', english: 'To live'},
        { spanish : 'Agua', type: 'Noun', english: 'Water'},
        { spanish : 'Comida', type: 'Noun', english: 'Food'},
        { spanish : 'Casa', type: 'Noun', english: 'House'},
        { spanish : 'Perro', type: 'Noun', english: 'Dog'},
        { spanish : 'Gato', type: 'Noun', english: 'Cat'},
        { spanish : 'Feliz', type: 'Adjective', english: 'Happy'},
        { spanish : 'Triste', type: 'Adjective', english: 'Sad'},
        { spanish : 'Grande', type: 'Adjective', english: 'Big'},
        { spanish : 'Pequeño', type: 'Adjective', english: 'Small'},
        { spanish : 'Rojo', type: 'Adjective', english: 'Red'},
        { spanish : 'Azul', type: 'Adjective', english: 'Blue'},
        { spanish : 'Uno', type: 'Number', english: 'One' },
        { spanish : 'Dos', type: 'Number', english: 'Two' },
        { spanish : 'Tres', type: 'Number', english: 'Three' },
        { spanish : 'Abrir', type: 'Verb', english: 'To open' },
        { spanish : 'Cerrar', type: 'Verb', english: 'To close' },
        { spanish : 'Manzana', type: 'Noun', english: 'Apple' },
        { spanish : 'Libro', type: 'Noun', english: 'Book' },
        { spanish : 'Siempre', type: 'Adverb', english: 'Always' },
        { spanish : 'Nunca', type: 'Adverb', english: 'Never' },
        { spanish : 'Rápido', type: 'Adjective', english: 'Fast' },
        { spanish : 'Lento', type: 'Adjective', english: 'Slow' },
    ];

    // --- DOM Elements ---
    const setupSection = document.getElementById('setup-section');
    const testSection = document.getElementById('test-section');
    const resultsSection = document.getElementById('results-section');
    const setupForm = document.getElementById('setup-form');
    const wordTypeSelect = document.getElementById('word-type');
    const numQuestionsInput = document.getElementById('num-questions');
    const progressIndicator = document.getElementById('progress-indicator');
    const runningScoreDisplay = document.getElementById('running-score'); // Added
    const questionWord = document.getElementById('question-word');
    const questionPrompt = document.getElementById('question-prompt');
    const answerInput = document.getElementById('answer-input');
    const submitAnswerButton = document.getElementById('submit-answer');
    // const nextQuestionButton = document.getElementById('next-question'); // Removed
    const feedbackDiv = document.getElementById('feedback');
    const finalScoreSpan = document.getElementById('final-score');
    const restartButton = document.getElementById('restart-button');
    const historySection = document.getElementById('history-section');
    const scoreHistoryList = document.getElementById('score-history-list');
    const noHistoryMessage = document.getElementById('no-history');
    const confettiCanvas = document.getElementById('confetti-canvas'); // Reference remains the same

    // --- State Variables ---
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let testConfig = {};
    let historicalScores = [];
    let feedbackTimeoutId = null; // To manage the auto-advance timeout

    // --- Confetti Setup ---
    // Create confetti instance targeting the specific canvas
    const myConfetti = confetti.create(confettiCanvas, {
        resize: true, // Resizes confetti effect on window resize
        useWorker: true // Offloads confetti calculations to a web worker
    });

    // --- Functions ---

    // Fisher-Yates (Knuth) Shuffle Algorithm (remains the same)
    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;
        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Populate word type options dynamically (modified)
    function populateWordTypes() {
        // Clear existing options except the first two ("All", "Nouns & Verbs")
        while (wordTypeSelect.options.length > 2) {
             wordTypeSelect.remove(2);
        }

        const types = [...new Set(vocabulary.map(item => item.type))]; // Get unique types
        types.sort().forEach(type => {
            const option = document.createElement('option');
            option.value = type.toLowerCase();
            option.textContent = type;
            wordTypeSelect.appendChild(option);
        });
    }

    // Load scores from localStorage (remains the same)
    function loadHistory() {
        const storedScores = localStorage.getItem('spanishPracticeScores');
        if (storedScores) {
            historicalScores = JSON.parse(storedScores);
        } else {
            historicalScores = [];
        }
        displayHistory();
    }

     // Display historical scores (remains the same, but added config details)
     function displayHistory() {
        scoreHistoryList.innerHTML = '';
        if (historicalScores.length === 0) {
            noHistoryMessage.style.display = 'block';
            return;
        }

        noHistoryMessage.style.display = 'none';
        historicalScores.sort((a, b) => new Date(b.date) - new Date(a.date));

        historicalScores.forEach(scoreData => {
            const div = document.createElement('div');
            div.className = 'p-2 border-b border-gray-200 flex justify-between items-center gap-2'; // Added gap
            const scoreDate = new Date(scoreData.date);
            // More robust date/time formatting
            const dateString = scoreDate.toLocaleDateString(undefined, { year: '2-digit', month: 'short', day: 'numeric'});
            const timeString = scoreDate.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit'});

            // Determine readable type string
            let typeStr = scoreData.type;
            if(typeStr === 'nouns_verbs') typeStr = 'Nouns & Verbs';
            else typeStr = typeStr.charAt(0).toUpperCase() + typeStr.slice(1);


            div.innerHTML = `
                <span class="flex-shrink-0">
                    <span class="font-semibold text-orange-600">${scoreData.score}/${scoreData.total}</span>
                </span>
                 <span class="text-xs text-gray-500 text-center flex-grow truncate px-1" title="${typeStr}, ${scoreData.direction === 'es-to-en' ? '🇪🇸→🇬🇧' : '🇬🇧→🇪🇸'}">
                     (${typeStr}, ${scoreData.direction === 'es-to-en' ? '🇪🇸→🇬🇧' : '🇬🇧→🇪🇸'})
                 </span>
                <span class="text-xs text-gray-500 flex-shrink-0">${dateString} ${timeString}</span>
            `;
            scoreHistoryList.appendChild(div);
        });
    }


    // Save score to localStorage (remains the same)
    function saveScore(currentScore, totalQuestions, type, direction) {
        const newScore = {
            score: currentScore,
            total: totalQuestions,
            type: type, // Store the raw value ('all', 'noun', 'nouns_verbs')
            direction: direction,
            date: new Date().toISOString()
        };
        historicalScores.push(newScore);
        // Optional: Limit history size
        // if (historicalScores.length > 20) { historicalScores.shift(); }
        localStorage.setItem('spanishPracticeScores', JSON.stringify(historicalScores));
        displayHistory();
    }

    // Start the test (modified)
    function startTest(event) {
        event.preventDefault();

        // Clear any pending auto-advance timeouts from previous sessions
        if (feedbackTimeoutId) {
            clearTimeout(feedbackTimeoutId);
            feedbackTimeoutId = null;
        }

        const selectedType = wordTypeSelect.value;
        let numQuestions = parseInt(numQuestionsInput.value, 10);
        const direction = document.querySelector('input[name="direction"]:checked').value;

        let filteredVocab = [];
        if (selectedType === 'all') {
            filteredVocab = vocabulary;
        } else if (selectedType === 'nouns_verbs') {
             filteredVocab = vocabulary.filter(item => item.type.toLowerCase() === 'noun' || item.type.toLowerCase() === 'verb');
        }
        else {
            filteredVocab = vocabulary.filter(item => item.type.toLowerCase() === selectedType);
        }

        // Validate number of questions (improved alert message)
        const maxAvailable = filteredVocab.length;
        if (isNaN(numQuestions) || numQuestions < 1) {
            numQuestions = 1;
        }
         if (numQuestions > maxAvailable) {
             numQuestions = maxAvailable;
             numQuestionsInput.value = numQuestions;
             if(numQuestions === 0) {
                 let typeName = selectedType.replace('_', ' & '); // Make 'nouns_verbs' readable
                 typeName = typeName.charAt(0).toUpperCase() + typeName.slice(1);
                 alert(`¡Ay! No words found for the type "${typeName}". Please select another type or add more words.`);
                 return;
             }
             alert(`Only ${numQuestions} words available for this selection. Adjusting question count.`);
         }


        currentQuestions = shuffleArray([...filteredVocab]).slice(0, numQuestions);
        currentQuestionIndex = 0;
        score = 0;
        testConfig = { type: selectedType, numQuestions, direction };

        setupSection.classList.add('hidden');
        resultsSection.classList.add('hidden');
        testSection.classList.remove('hidden');
        testSection.classList.add('animate-fade-in');
        submitAnswerButton.disabled = false; // Ensure button is enabled
        submitAnswerButton.classList.remove('hidden'); // Ensure button is visible
        feedbackDiv.textContent = '';
        answerInput.value = '';
        answerInput.disabled = false;
        answerInput.classList.remove('border-green-500', 'border-red-500', 'animate-pulse-correct', 'animate-pulse-incorrect', 'bg-green-50', 'bg-red-50');
        runningScoreDisplay.textContent = `Score: 0 / 0`; // Initialize running score

        displayQuestion();
    }

    // Display the current question (modified)
    function displayQuestion() {
        if (currentQuestionIndex >= currentQuestions.length) {
            showResults();
            return;
        }

        // Update running score *before* showing the new question
        runningScoreDisplay.textContent = `Score: ${score} / ${currentQuestionIndex}`; // Show score based on questions *answered*

        const questionItem = currentQuestions[currentQuestionIndex];
        let wordToShow, promptText;

        if (testConfig.direction === 'es-to-en') {
            wordToShow = questionItem.spanish;
            promptText = `Translate this Spanish word (${questionItem.type}) to English:`;
        } else { // en-to-es
            wordToShow = questionItem.english;
            promptText = `Translate this English word (${questionItem.type}) to Spanish:`;
        }

        questionWord.textContent = wordToShow;
        questionPrompt.textContent = promptText;
        progressIndicator.textContent = `Question ${currentQuestionIndex + 1} of ${testConfig.numQuestions}`;

        // Prepare the input field
        answerInput.value = ''; // Clear previous answer
        feedbackDiv.textContent = ''; // Clear previous feedback
        answerInput.disabled = false; // Enable input for the new question
        submitAnswerButton.disabled = false; // Ensure submit button is enabled
        answerInput.classList.remove('border-green-500', 'border-red-500', 'animate-pulse-correct', 'animate-pulse-incorrect', 'bg-green-50', 'bg-red-50');

        // --- ADD THIS LINE ---
        answerInput.focus(); // Set focus to the input field automatically
        // --------------------
    }
    // Check the user's answer (modified for auto-advance)
    function checkAnswer() {
        // Prevent checking if already checked and waiting for timeout
        if (answerInput.disabled) return;

        // Clear any previous timeout just in case
        if (feedbackTimeoutId) {
            clearTimeout(feedbackTimeoutId);
            feedbackTimeoutId = null;
        }

        const userAnswer = answerInput.value.trim().toLowerCase();
        const currentItem = currentQuestions[currentQuestionIndex];
        let correctAnswer;
        let isCorrect = false;

        if (testConfig.direction === 'es-to-en') {
            correctAnswer = currentItem.english.toLowerCase();
        } else { // en-to-es
            correctAnswer = currentItem.spanish.toLowerCase();
        }

        if (userAnswer === correctAnswer) {
            score++;
            isCorrect = true;
            feedbackDiv.textContent = '¡Correcto!';
            feedbackDiv.className = 'h-10 mb-2 text-sm font-medium text-green-600 flex items-center justify-center';
            answerInput.classList.add('border-green-500', 'bg-green-50', 'animate-pulse-correct');
            answerInput.classList.remove('border-red-500', 'bg-red-50', 'animate-pulse-incorrect');
        } else {
            feedbackDiv.innerHTML = `Incorrecto. Correcto: <strong class="font-semibold">${correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1)}</strong>`;
            feedbackDiv.className = 'h-10 mb-2 text-sm font-medium text-red-600 flex items-center justify-center';
            answerInput.classList.add('border-red-500', 'bg-red-50', 'animate-pulse-incorrect');
            answerInput.classList.remove('border-green-500', 'bg-green-50', 'animate-pulse-correct');
            questionWord.classList.add('animate-shake');
            setTimeout(() => questionWord.classList.remove('animate-shake'), 500);
        }

        answerInput.disabled = true; // Disable input after answering
        submitAnswerButton.disabled = true; // Disable button while showing feedback

         // Update running score display immediately after checking
        runningScoreDisplay.textContent = `Score: ${score} / ${currentQuestionIndex + 1}`;


        // --- Auto-advance after a delay ---
        const delay = isCorrect ? 1200 : 2000; // Shorter delay for correct answers
        feedbackTimeoutId = setTimeout(() => {
            currentQuestionIndex++; // Move to next index
            displayQuestion(); // Display next question or results
            feedbackTimeoutId = null; // Clear the timeout ID reference
        }, delay);
        // -----------------------------------
    }

    // handleNext function is no longer needed as checkAnswer triggers the next step via timeout

    // Show the final results (modified)
    function showResults() {
         // Clear any pending auto-advance timeout if the last question was answered quickly
        if (feedbackTimeoutId) {
            clearTimeout(feedbackTimeoutId);
            feedbackTimeoutId = null;
        }

        testSection.classList.add('hidden');
        resultsSection.classList.remove('hidden');
        resultsSection.classList.add('animate-fade-in');
        // Final score calculation is more reliable here
        finalScoreSpan.textContent = `${score} / ${testConfig.numQuestions}`;

        saveScore(score, testConfig.numQuestions, testConfig.type, testConfig.direction);
        triggerConfetti();
    }

     // Function to trigger confetti burst (modified for full screen)
    function triggerConfetti() {
        const duration = 4 * 1000; // 4 seconds
        const animationEnd = Date.now() + duration;
        // Use screen width/height for origin points if desired, but random is easier
        const defaults = { startVelocity: 25, spread: 360, ticks: 50, zIndex: 50 }; // Match canvas z-index

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            // Shoot confetti from multiple points for better full screen effect
            myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }); // Left side
            myConfetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }); // Right side
            // Optionally add center burst: myConfetti({ ...defaults, particleCount: particleCount / 2, origin: { x: 0.5, y: Math.random() - 0.1 } });

        }, 250);
    }

    // Restart the process (remains the same)
    function restartPractice() {
        // Clear any pending auto-advance timeout if restarting early
        if (feedbackTimeoutId) {
            clearTimeout(feedbackTimeoutId);
            feedbackTimeoutId = null;
        }

        resultsSection.classList.add('hidden');
        setupSection.classList.remove('hidden');
        setupSection.classList.add('animate-fade-in');
    }

    // --- Event Listeners ---
    setupForm.addEventListener('submit', startTest);
    submitAnswerButton.addEventListener('click', checkAnswer);
    // Allow pressing Enter key to submit answer
    answerInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter' && !answerInput.disabled) { // Check if input is enabled
             event.preventDefault();
             checkAnswer();
        }
        // Enter key no longer triggers "Next"
    });
    // nextQuestionButton listener removed
    restartButton.addEventListener('click', restartPractice);


    // --- Initial Setup ---
    populateWordTypes();
    loadHistory();

});