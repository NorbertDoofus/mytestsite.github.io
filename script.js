// Вопросы для квиза
const questions = [
    {
        question: "Затвердження Present Simple утворюється для I",
        options: ["Play", "Plays"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для You",
        options: ["Play", "Plays"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для He",
        options: ["Play", "Plays"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для She",
        options: ["Play", "Plays"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для It",
        options: ["Play", "Plays"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для We",
        options: ["Play", "Plays"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для You",
        options: ["Play", "Plays"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Затвердження Present Simple утворюється для They",
        options: ["Play", "Plays"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для I утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для You утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для We утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для They утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для He утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для She утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Питальне речення для It утворюється з використанням:",
        options: ["Do", "Does"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Заперечне речення для I утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
       {
        question: "Заперечне речення для You утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
       {
        question: "Заперечне речення для We утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
       {
        question: "Заперечне речення для They утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 0,
        answerType: "multiple" // Тип вопроса: выбор
    },
       {
        question: "Заперечне речення для He утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Заперечне речення для She утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
    {
        question: "Заперечне речення для It утворюється з використанням:",
        options: ["Do not", "Does not"],
        correctIndex: 1,
        answerType: "multiple" // Тип вопроса: выбор
    },
];

// Функция для случайного перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Меняем местами
    }
}

// Перемешиваем вопросы
shuffleArray(questions);

let currentQuestionIndex = 0;

// Элементы для вывода вопроса и вариантов
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const textInputElement = document.getElementById('text-input');
const submitButton = document.getElementById('submit-answer');
const feedbackElement = document.getElementById('feedback'); // Элемент для вывода обратной связи

// Функция для отображения текущего вопроса
function showQuestion(index) {
    const questionData = questions[index];
    questionElement.textContent = questionData.question;
    optionsElement.innerHTML = ''; // Очищаем старые варианты
    textInputElement.value = ''; // Очищаем текстовое поле
    textInputElement.style.display = 'none'; // Скрываем текстовое поле
    submitButton.style.display = 'none'; // Скрываем кнопку отправки по умолчанию
    feedbackElement.style.display = 'none'; // Скрываем элемент обратной связи

    if (questionData.answerType === "multiple") {
        // Генерируем варианты ответов
        questionData.options.forEach((optionText, i) => {
            const option = document.createElement('div');
            option.classList.add('option');
            option.textContent = optionText;
            option.addEventListener('click', () => handleAnswer(i, questionData.correctIndex));
            optionsElement.appendChild(option);
        });
    } else if (questionData.answerType === "text") {
        textInputElement.style.display = 'block'; // Показываем текстовое поле
        submitButton.style.display = 'block'; // Показываем кнопку отправки
        submitButton.onclick = () => handleTextAnswer(textInputElement.value, questionData.correctAnswer);
    }
}

// Обработка выбора ответа
function handleAnswer(selectedIndex, correctIndex) {
    const allOptions = document.querySelectorAll('.option');
    allOptions[selectedIndex].classList.add(
        selectedIndex === correctIndex ? 'correct' : 'incorrect'
    );
    allOptions[correctIndex].classList.add('correct');

    // Блокируем все варианты после выбора
    allOptions.forEach(option => (option.style.pointerEvents = 'none'));

    // Переход к следующему вопросу через 2 секунды
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showEndMessage();
        }
    }, 2000);
}

// Обработка текстового ответа
function handleTextAnswer(userAnswer, correctAnswer) {
    const normalizedUserAnswer = userAnswer.trim().toLowerCase();
    const normalizedCorrectAnswer = correctAnswer.trim().toLowerCase();
    
    feedbackElement.style.display = 'block'; // Показываем элемент обратной связи

    if (normalizedUserAnswer === normalizedCorrectAnswer) {
        feedbackElement.textContent = "Правильна відповідь!";
        feedbackElement.classList.remove('incorrect');
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = `Неправильна відповідь! Правильна відповідь: ${correctAnswer}`;
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('incorrect');
    }

    // Переход к следующему вопросу через 2 секунды
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(currentQuestionIndex);
        } else {
            showEndMessage();
        }
    }, 2000);
}

// Сообщение об окончании квиза
function showEndMessage() {
    questionElement.textContent = "Ви завершили квіз!";
    optionsElement.innerHTML = '';
    textInputElement.style.display = 'none'; // Скрываем текстовое поле
    submitButton.style.display = 'none'; // Скрываем кнопку
    feedbackElement.style.display = 'none'; // Скрываем элемент обратной связи
}

// Отображаем первый вопрос при загрузке страницы
showQuestion(currentQuestionIndex);
