function createNewsBlock(topic) {
  // Create the topic block
  const $div = $(`
     <div class="newsValue" data-id="${topic.id}">
       <img alt="${topic.image}" src="${topic.image}"/>
       <p>${topic.topic}</p>
     </div>
  `);

  // Append it to the container
  $container.append($div);

  // Set event handler for the newly created news block
  $div.click(() => {
    // Clean the page
    $container.css('display', 'none');
    $('.choose').css('display', 'block');
    createSubcategories($div.data('id'));
  });

  $('.choose').click(() => {
    $('#select').toggle();
  })
}

// Start of the app
const $container = $('.news-list');

$(window).click((event) => {
  if ($(event.target).is('.choose')) {
    return;
  }
  $('#select').css('display', 'none');
})

for (const topic of topicsData) {
  createNewsBlock(topic);
}

