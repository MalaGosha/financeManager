const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');

let root = document.documentElement;


const changeStyleToLight = () => {
  root.style.setProperty('--first-color', '#F9F9F9');
  root.style.setProperty('--second-color', '#14161F');
  root.style.setProperty('--border-color', 'rgba(0,0,0,.2)');
}

const changeStylToDark = () => {
  root.style.setProperty('--first-color', '#14161F');
  root.style.setProperty('--second-color', '#F9F9F9');
  root.style.setProperty('--border-color', 'rgba(255,255,2555,.4)');
}

lightMode.addEventListener('click', changeStyleToLight);
darkMode.addEventListener('click', changeStylToDark);

















