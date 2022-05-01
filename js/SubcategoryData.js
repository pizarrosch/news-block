function createNewBlock(subdivision) {
  const div = create('div');
  const p = create('p');
  const a = create('a');

  a.href = subdivision.location;

  p.textContent = subdivision.title;
  div.value = subdivision.category;

  div.append(p);

  subcategories.append(div);
}

const subcategories = $('.subcategories');

for (const subdivision of subcategoryData) {
  createNewBlock(subdivision);
}


