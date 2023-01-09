const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsConteiner = document.querySelector('#ingredients');

const makeIngredient = name => {
  const liEl = document.createElement('li');
  liEl.textContent = name;
  liEl.classList = 'item';
  // console.log(liEl);
  return liEl;
};

const listLi = ingredients.map(makeIngredient);

ingredientsConteiner.append(...listLi);  







