const themeSwitcher = document.querySelector('#light-dark-mode-switch');
const container = document.querySelector('.container');

let mode = 'light';

themeSwitcher.addEventListener('click', function () {
 
  if (mode === 'light') {
    mode = 'dark';
    container.setAttribute('class', 'dark');
    // themeSwitcher.textContent = '';
    themeSwitcher.textContent = '🌙';
  }

  else {
    mode = 'light';
    container.setAttribute('class', 'light');
    themeSwitcher.textContent = '☀️';
  }
 
});