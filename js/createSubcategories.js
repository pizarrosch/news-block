

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

  // Option #2
  // $('.book').each(function(i, div) {
  //     const $this = $(div);
  //     if ($this.data('genreId') === filter.value) {
  //       $this.css('display', 'block');
  //     } else {
  //       $this.css('display', 'none');
  //     }
  // });
// })

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

  const filter = $('#select');

  function createSelectList(list) {

    const $li = $(`
      <li class="select-list" data-value="${list.value}">
         <p>${list.content}</p>
      </li>
  `)

    $li.click(function () {

      for (const div of $('.book')) {
        // Wrap a plain JS object into jQuery object
        const $item = $(div);

        // If the select value equals the current item's genre-id OR equals 'all-genres'
        // then make it visible.
        if ($item.data('genreId') === $li.data('value') || $li.data('value') === 'all-genres') {
          $item.css('display', 'block');
        } else {
          $item.css('display', 'none');
        }
      }
      $('.choose').text(list.content);
      filter.css('display', 'none');
    });

    filter.append($li);
  }

  for (const list of selectData) {
    createSelectList(list);
  }