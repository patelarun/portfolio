
const savedTheme = localStorage.getItem('st') || 'light';

setTheme(savedTheme);

const eventDots = document.getElementsByClassName('theme-dot');

for (const eventDot of eventDots) {
  eventDot.addEventListener('click', function () {
    setTheme(this.dataset.theme);
  });
}

function setTheme (theme) {
  if (theme === 'light') {
    document.getElementById('theme-style').href = 'styles.css';
  } else {
    document.getElementById('theme-style').href = `${theme}-theme.css`;
  }

  localStorage.setItem('st', theme);
}
