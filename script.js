const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');

const questions = [
  "იქნები ჩემი მხედართმთავარი?",
  "იქნები ჩემი ზაფხული?"
];

let currentQuestionIndex = 0;

// Confetti animation
function createConfettiAnimation() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    console.error("Confetti library not loaded!");
  }
}

// Update the question text
function updateQuestion() {
  if (currentQuestionIndex < questions.length) {
    questionText.textContent = questions[currentQuestionIndex];
    currentQuestionIndex++;
  } else {
    questionText.textContent = "წინასწარ ვიცოდი კის რომ იტყოდი ამიტომ წამო რამე ვჭამოთ! 💖";
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
  }
}

// Initialize button positions
function initializeButtonPositions() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  yesBtn.style.left = `${centerX - yesBtn.offsetWidth / 2}px`;
  yesBtn.style.top = `${centerY - yesBtn.offsetHeight / 2 - 30}px`;

  noBtn.style.left = `${centerX - noBtn.offsetWidth / 2}px`;
  noBtn.style.top = `${centerY - noBtn.offsetHeight / 2 + 150}px`;
}

// Move the "No" button randomly
function moveButton() {
  if (noBtn.style.display !== "none") { // Проверяем, видима ли кнопка
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';
    noBtn.style.left = `${Math.min(Math.max(randomX, 0), maxX)}px`;
    noBtn.style.top = `${Math.min(Math.max(randomY, 0), maxY)}px`;
  }
}

// Ребалансировка кнопок при изменении размера окна
window.addEventListener('resize', initializeButtonPositions);

// Обработка клика на "კი"
yesBtn.addEventListener('click', () => {
  createConfettiAnimation();
  updateQuestion();
});

// Обработка наведения на "არა" (для десктопов)
noBtn.addEventListener('mouseenter', () => {
  moveButton();
});

// Обработка касания на "არა" (для мобильных устройств)
noBtn.addEventListener('touchstart', (event) => {
  moveButton();
  event.preventDefault(); // Предотвращаем стандартное поведение
});

// Инициализация
updateQuestion();
initializeButtonPositions();
