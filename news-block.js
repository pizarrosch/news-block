function createNewsBlock(topic) {
  // Create HTML elements
  const div = document.createElement('div');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const divs = $$('.news-list div');

  // Add src attribute to img element
  img.src = topic.image;
  img.alt = topic.alt;

  // Insert
  p.textContent = topic.topic;

  div.append(img);
  div.append(p);

  newsContainer.append(div);

  div.onclick = () => {
    location.href = 'http://localhost:63342/news-block/Books%20sub.html?_ijt=6ph7bu69lkjtb7c5483jkuhgee&_ij_reload=RELOAD_ON_SAVE';
  }
}

const newsContainer = $('.news-list');


  for (const topic of topicsData) {
    createNewsBlock(topic);
  }

