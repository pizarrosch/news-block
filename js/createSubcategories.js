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

$('#select').change(function () {
  const filter = this;

  for (const div of $('.book')) {
    // Wrap a plain JS object into jQuery object
    const $item = $(div);

    // If the select value equals the current item's genre-id OR equals 'all-genres'
    // then make it visible.
    if ($item.data('genreId') === filter.value || filter.value === 'all-genres') {
      $item.css('display', 'block');
    } else {
      $item.css('display', 'none');
    }
  }

  // Option #2
  // $('.book').each(function(i, div) {
  //     const $this = $(div);
  //     if ($this.data('genreId') === filter.value) {
  //       $this.css('display', 'block');
  //     } else {
  //       $this.css('display', 'none');
  //     }
  // });
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