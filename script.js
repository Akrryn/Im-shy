const yesBtn = document.getElementById('yes-btn');
const questionText = document.querySelector('.question');
let inputCreated = false;
let input;

// Функция для создания анимации конфетти
function createConfettiAnimation() {
  confetti({
    particleCount: 100, // количество частиц конфетти
    spread: 70, // радиус разброса частиц
    origin: { y: 0.6 } // начальное положение частиц (сверху)
  });
}

// Функция для обработки нажатия на кнопку "Yes"
const handleClick = () => {
// Создаем анимацию конфетти при нажатии на кнопку "Send"
      createConfettiAnimation();
  // Проверяем, было ли уже создано окно ввода текста
  if (!inputCreated) {
    // Создаем элемент ввода текста
    input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter the text...';

    // Стили для элемента ввода текста
    input.style.width = 'calc(100% - 20px)'; // учитываем внутренний отступ кнопки
    input.style.padding = '10px';
    input.style.boxSizing = 'border-box';
    input.style.border = 'none';
    input.style.borderRadius = '10px';
    input.style.fontFamily = 'Arial, sans-serif';
    input.style.fontSize = '16px';
    input.style.color = '#333'; // цвет текста
    input.style.background = '#f9f9f9'; // цвет фона
    input.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // тень

    // Создаем кнопку для отправки текста
    const sendButton = document.createElement('button');
    sendButton.textContent = 'Send';
    sendButton.style.marginTop = '10px'; // добавляем немного отступа сверху
    sendButton.style.padding = '5px 10px';
    sendButton.style.border = 'none';
    sendButton.style.borderRadius = '5px';
    sendButton.style.background = '#007bff'; // цвет кнопки
    sendButton.style.color = '#fff'; // цвет текста кнопки
    sendButton.style.fontFamily = 'Arial, sans-serif';
    sendButton.style.fontSize = '16px';
    sendButton.style.cursor = 'pointer';

    // Обработчик для кнопки отправки текста
    sendButton.addEventListener('click', () => {

      // Создаем анимацию конфетти при нажатии на кнопку "Send"
      createConfettiAnimation();
    });

    // Добавляем элемент ввода текста и кнопку внутрь контейнера кнопки "Yes"
    yesBtn.appendChild(input);
    yesBtn.appendChild(sendButton);

    inputCreated = true;

    // Удаляем обработчик события click, чтобы кнопка больше не реагировала на нажатия
    yesBtn.removeEventListener('click', handleClick);

    // Меняем текст над кнопкой на "When"
    questionText.textContent = 'When?';
  }
};

// Добавляем обработчик нажатия на кнопку "Yes"
yesBtn.addEventListener('click', handleClick);

const noBtn = document.getElementById('no-btn');

// Добавляем обработчик наведения курсора на кнопку "No"
noBtn.addEventListener('mouseenter', () => {
  // Устанавливаем случайные координаты для кнопки "No"
  noBtn.style.position = 'absolute';
  noBtn.style.top = Math.random() * 80 + '%';
  noBtn.style.left = Math.random() * 80 + '%';
});

