document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
  
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      body.classList.remove('dark-mode', 'light-mode');
      body.classList.add(savedTheme);
      themeToggle.checked = savedTheme === 'dark-mode';
    }
  
    // Handle theme change
    themeToggle.addEventListener('change', () => {
      if (themeToggle.checked) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
      } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
      }
    });
  });
  