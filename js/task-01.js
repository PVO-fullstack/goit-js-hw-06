const quantityCategories = document.querySelector('#categories').children.length;

console.log(`Number of categories: ${quantityCategories}`)

const listItemCategories = document.querySelectorAll('.item');

listItemCategories.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
})
