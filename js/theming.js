function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'block';
}

const html = $('html');
const themeButton = $('.theme-button');
const darkButton = $('.theme-button img:last-child');
const lightButton = $('.theme-button img:first-child');

themeButton.onclick = () => {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    hideElement(lightButton);
    showElement(darkButton);
  } else {
    showElement(lightButton);
    hideElement(darkButton);
  }
}