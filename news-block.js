function createNewsBlock(topic) {
  // Create HTML elements
  const div = document.createElement('div');
  div.classList.add('newsValue');
  const img = document.createElement('img');
  const p = document.createElement('p');


  // Add src attribute to img element
  img.src = topic.image;
  img.alt = topic.alt;

  // Insert
  p.textContent = topic.topic;

  div.append(img);
  div.append(p);

  newsContainer.append(div);

  // div.onclick = () => location.href = '/news-block/Books%20sub.html';
}

const newsContainer = $('.news-list');

for (const topic of topicsData) {
  createNewsBlock(topic);
}

