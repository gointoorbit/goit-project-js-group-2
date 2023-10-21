const body = document.querySelector('body');
let theme = localStorage.getItem('theme') || 'light';

const ThemeMode = () => {
  if (theme === 'dark') {
    body.classList.remove('darkmode');
    theme = 'light';
    themeIndicator.classList.remove('dark-mode-on');
  } else {
    body.classList.add('darkmode');
    theme = 'dark';
    themeIndicator.classList.add('dark-mode-on');
  }
  localStorage.setItem('theme', theme);
};

if (theme === 'dark') {
  body.classList.add('darkmode');
  themeIndicator.classList.add('dark-mode-on');
}

// narazie nie ma buttona od darkmoda więc darkmoda przełącza
// sie tym 2 enterem tym prawym w rogu klawiatury
document.addEventListener('keydown', event => {
  if (event.code === 'NumpadEnter') {
    ThemeMode();
  }
});

const themeSwitcher = document.querySelector('.theme-switcher');
const themeIndicator = document.querySelector('.theme-switcher__toggler');

themeSwitcher.addEventListener('click', ThemeMode);
