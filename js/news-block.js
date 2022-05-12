function createNewsBlock(topic) {
  // Append it to the container
  container.innerHTML += `
     <div class="newsValue" data-id="${topic.id}">
       <img alt="${topic.image}" src="${topic.image}"/>
       <p>${topic.topic}</p>
     </div>
  `;

  const divs = document.querySelectorAll('.newsValue');
  // Set event handler for the newly created news block

  for(const div of divs) {
  div.onclick = () => {
    // Clean the page
    container.style.display = 'none';
    choose.style.display = 'block';
    createSubcategories(div.dataset.id);
  };
  }
  choose.onclick = () => {
    filter.classList.toggle('show');
  }
}

// Start of the app
const container = document.querySelector('.news-list');

window.onclick = (event) => {
  if (event.target.classList.contains('.choose')) {
    return;
  }
  filter.style.display = 'none';
}

for (const topic of topicsData) {
  createNewsBlock(topic);
}



const choose = document.querySelector('.choose');
const filter = document.querySelector('#select');