const body = document.querySelector('body');
const themeSwitcher = document.querySelector('.theme-switcher');
const themeIndicator = document.querySelector('.theme-switcher__toggler');
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

themeSwitcher.addEventListener('click', ThemeMode);
