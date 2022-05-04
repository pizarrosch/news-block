// function createNewBlock(item) {
//   const div = create('div');
//   div.classList.add('book');
//   const p = create('p');
//   const a = create('a');
//
//   a.href = item.location;
//
//   p.textContent = item.title;
//   // div.value = item.category;
//   div.dataset.category = item.genre;
//
//   div.append(p);
//
//   subcategories.append(div);
// }
//
// const subcategories = $('.subcategories');
//
// for (const subdivision of subcategoryData) {
//   createNewBlock(subdivision);
// }

const divs = $$('.book');



// filter.onchange = () => {
//   for (const div of divs) {
//   if(div.dataset.category !== filter.value && filter.value !== 'all-genres') {
//     div.classList.add('hidden');
//   } else {
//     div.classList.remove('hidden');
//   }
//  }
// }

// const returnButton = $('.return-button');

// returnButton.onclick = () => {
//   location.href = "http://localhost:63342/news-block/index.html?_ijt=1fb797h1nkvr10mjdbp51dk3na&_ij_reload=RELOAD_ON_SAVE";
// }
