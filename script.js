let score = 0;
const scoreDiv = document.getElementById('score');
const chikuwaButton = document.getElementById('chikuwa');
const dogDiv = document.getElementById('dog');
const backgrounds = ['background-0', 'background-1', 'background-2', 'background-3'];
let currentBg = 0;

function updateScore() {
  scoreDiv.textContent = `Score: ${score}`;
  if (score % 10 === 0) {
    changeBackground();
  }
}

function changeBackground() {
  document.body.classList.remove(backgrounds[currentBg]);
  currentBg = (currentBg + 1) % backgrounds.length;
  document.body.classList.add(backgrounds[currentBg]);
}

chikuwaButton.addEventListener('click', () => {
  score++;
  dogDiv.textContent = '🐕\u200d🍴';
  updateScore();
  setTimeout(() => {
    dogDiv.textContent = '🐕';
  }, 300);
});
