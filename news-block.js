const html = $('html');
const themeButton = $('.theme-button');
const darkButton = $('.theme-button img:last-child');
const lightButton = $('.theme-button img:first-child');


themeButton.onclick = () => {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    lightButton.style.display = 'none';
    darkButton.style.display = 'block';
  } else {
    lightButton.style.display = 'block';
    darkButton.style.display = 'none';
  }
}

