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

const subcategoriesContainer = $('.subcategories');

function createBooksList() {
  for (const item of subcategoryData) {
    subcategoriesContainer.append(`
      <div class="book" data-id="${item.id}">
        <p>${item.title}</p>
      </div>
    `)
  }
}

function createAnimalsList() {

}