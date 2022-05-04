function createNewsBlock(topic) {
   $('.news-list').append(`
     <div class="newsValue">
       <img alt="${topic.image}" src="${topic.image}"/>
       <p>${topic.topic}</p>
     </div>
  `);

  // div.onclick = () => location.href = '/news-block/Books%20sub.html';
}

for (const topic of topicsData) {
  createNewsBlock(topic);
}

