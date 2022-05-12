function hideElement(element) {
  element.css('display', 'none');
}

function showElement(element) {
  element.css('display', 'block');
}

const html = document.querySelector('html');
const themeButton = document.querySelector('.theme-button');
const darkButton = document.querySelector('.theme-button img:last-child');
const lightButton = document.querySelector('.theme-button img:first-child');

themeButton.click(() => {
  html.toggleClass('dark');

  if (html.hasClass('dark')) {
    hideElement(lightButton);
    showElement(darkButton);
  } else {
    showElement(lightButton);
    hideElement(darkButton);
  }
});