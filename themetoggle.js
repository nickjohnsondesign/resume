const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
  }
});
window.addEventListener('DOMContentLoaded', (event) => {
  const darkModeToggle = document.querySelector('.switch input');
  const body = document.body;

  if (body.classList.contains('dark-mode')) {
    darkModeToggle.checked = true;
  }

  darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
    }
  });
});
          
            themeToggleBtn.addEventListener('click', toggleTheme);