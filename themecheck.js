window.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const darkModeToggle = document.getElementById('theme-toggle');

  // Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    body.classList.add('dark-mode');
    darkModeToggle.checked = true;
  } else {
    body.classList.add('light-mode');
    darkModeToggle.checked = false;
  }
});