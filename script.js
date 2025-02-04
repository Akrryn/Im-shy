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


function initializeNoButtonPosition() {
  const rect = noBtn.getBoundingClientRect();
  noBtn.style.left = `${rect.left}px`;
  noBtn.style.top = `${rect.top}px`;
}


yesBtn.addEventListener('click', () => {
  createConfettiAnimation();
  updateQuestion();
});


noBtn.addEventListener('mouseenter', () => {
  moveButton();
});


function moveButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

 
  noBtn.style.transition = 'left 0.5s ease, top 0.5s ease';
  noBtn.style.left = `${Math.min(Math.max(randomX, 0), maxX)}px`;
  noBtn.style.top = `${Math.min(Math.max(randomY, 0), maxY)}px`;
}


updateQuestion();
initializeNoButtonPosition();
