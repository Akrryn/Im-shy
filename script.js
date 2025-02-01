const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');

// Список вопросов
const questions = [
  "იქნები ჩემი მხედართმთავარი?",
  "იქნები ჩემი ცხენის ნაშა?",
  "იქნები ჩემი ხველის წამალი?",
  "იქნები ჩემი დონ კორლეონე?"
];

let currentQuestionIndex = 0;

// Функция для создания анимации конфетти
function createConfettiAnimation() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Функция для обновления вопроса
function updateQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionText.textContent = questions[currentQuestionIndex];
    currentQuestionIndex++;
  } else {
    // Если вопросы закончились
    questionText.textContent = "წინასწარ ვიცოდი კის რომ იტყოდი ამიტომ წამო რამე ვჭამოთ! 💖";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
  }
}

// Инициализация начальной позиции кнопки "No"
function initializeNoButtonPosition() {
  const rect = noBtn.getBoundingClientRect();
  noBtn.style.left = `${rect.left}px`;
  noBtn.style.top = `${rect.top}px`;
}

// Обработчик для кнопки "Yes"
yesBtn.addEventListener('click', () => {
  createConfettiAnimation();
  updateQuestion();
});

// Обработчик для кнопки "No"
noBtn.addEventListener('mouseenter', () => {
  moveButton();
});

// Функция для плавного перемещения кнопки "No"
function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Плавное перемещение
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';
  noBtn.style.left = `${Math.min(Math.max(randomX, 0), maxX)}px`;
  noBtn.style.top = `${Math.min(Math.max(randomY, 0), maxY)}px`;
}

// Инициализация первого вопроса и позиции кнопки "No"
updateQuestion();
initializeNoButtonPosition();
