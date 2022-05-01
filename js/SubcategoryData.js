function createNewBlock(subdivision) {
  const div = create('div');
  const p = create('p');

  p.textContent = subdivision.title;

  div.append(p);

  subcategories.append(div);


}

 const subcategories = $('.subcategories');

for (const subdivision of subcategoryData) {
  createNewBlock(subdivision);
}


