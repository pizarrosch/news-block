function createSubcategories(categoryId) {
  switch (categoryId) {
    case 0:
      createBooksList();
      break;
    case 1:
      createAnimalsList();
      break;
  }
}

function createBooksList() {
  for (const item of subcategoryData) {
    $('.subcategories').append(`
      <div class="book" data-genre-id="${item.genre}">
        <p>${item.title}</p>
      </div>
    `)
  }

  for (const book of booksData) {
    fillDropdown(book, '.book', 'genreId');
  }
}

function createAnimalsList() {
  for (const animal of Animals) {
    $('.subcategories').append(`
      <div class="animals" data-species-id="${animal.species}">  
        <h3>${animal.title}</h3>
        <img class="animals-image" src="${animal.image}" alt="${animal.alt}"> 
        <span class="content">
          <p>${animal.insight}</p>
          <span class="look-button">Look here  ></span>    
        </span> 
      </div> 
    `);
  }

  for (const species of speciesData) {
    fillDropdown(species, '.animals', 'speciesId');
  }
}

function fillDropdown(list, selector, identifier) {
  const $li = $(`
      <li class="select-list" data-value="${list.value}">
         <p>${list.content}</p>
      </li>
  `)

  $li.click(() => {
    for (const div of $(selector)) {
      // Wrap a plain JS object into jQuery object
      const $item = $(div);

      // If the select value equals the current item's genre-id OR equals 'all-genres'
      // then make it visible.
      if ($item.data(identifier) === $li.data('value') || $li.data('value') === 'all') {
        $item.css('display', 'block');
      } else {
        $item.css('display', 'none');
      }
    }
    $('.choose').text(list.content);
  });

  $('#select').append($li);
}