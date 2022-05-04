function hideElement(element) {
  element.css('display', 'none');
}

function showElement(element) {
  element.css('display', 'block');
}

const html = $('html');
const themeButton = $('.theme-button');
const darkButton = $('.theme-button img:last-child');
const lightButton = $('.theme-button img:first-child');

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