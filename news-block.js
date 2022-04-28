function createNewsBlock(topic) {
  // Create HTML elements
  const div = document.createElement('div');
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
}


const newsContainer = $('.news-list');

for (const topic of topicsData) {
  createNewsBlock(topic);
}
