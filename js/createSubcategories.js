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

$('#select').change(function() {
  if (this.value === 'all-genres') {
    $(`.book`).css('display', 'block');
    return;
  }

  $(`.book:not([data-genre-id="${this.value}"])`).css('display', 'none');
  $(`.book[data-genre-id="${this.value}"]`).css('display', 'block');
})

const subcategoriesContainer = $('.subcategories');

function createBooksList() {
  for (const item of subcategoryData) {
    subcategoriesContainer.append(`
      <div class="book" data-genre-id="${item.genre}">
        <p>${item.title}</p>
      </div>
    `)
  }
 }


function createAnimalsList() {

}