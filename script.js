const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionText = document.getElementById('question');

const questions = [
  "იქნები ჩემი მხედართმთავარი?",
  "იქნები ჩემი ზაფხული?"
];

let currentQuestionIndex = 0;

function createConfettiAnimation() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

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

function initializeButtonPositions() {
  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  // Центр экрана
  const centerX = containerWidth / 2;
  const centerY = containerHeight / 2;

  // Кнопка "Да" - по центру экрана
  yesBtn.style.left = `${centerX - yesBtn.offsetWidth / 2}px`;
  yesBtn.style.top = `${centerY - yesBtn.offsetHeight / 2 - 30}px`;  // Немного выше центра

  // Кнопка "Нет" - ниже кнопки "Да"
  noBtn.style.left = `${centerX - noBtn.offsetWidth / 2}px`;
  noBtn.style.top = `${centerY - noBtn.offsetHeight / 2 + 150}px`; // 50px ниже кнопки "Да"
}

function adjustButtonPositions() {
  // Перерасчет позиций при изменении размера окна
  initializeButtonPositions();
}

function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';
  noBtn.style.left = `${Math.min(Math.max(randomX, 0), maxX)}px`;
  noBtn.style.top = `${Math.min(Math.max(randomY, 0), maxY)}px`;
}

window.addEventListener('resize', adjustButtonPositions); // Ребалансировка кнопок при изменении размера окна

yesBtn.addEventListener('click', () => {
  createConfettiAnimation();
  updateQuestion();
});

// Для мобильных устройств используем touchstart для имитации поведения mouseenter
noBtn.addEventListener('mouseenter', () => {
  moveButton();
});

noBtn.addEventListener('touchstart', (event) => {
  moveButton();
  event.preventDefault(); // Предотвращаем стандартное поведение
});

updateQuestion();
initializeButtonPositions(); // Инициализация симметричных позиций кнопок
