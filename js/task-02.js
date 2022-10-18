const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  li.classList = 'item';
  return li
  })

  console.log(list);

  const uleRef = document.querySelector('#ingredients');
  uleRef.append(...list);
  


  // const stUl = `<li class="item"> </li>`;
// const str = ingredients.reduce((prev, item) => { 
//   return prev +  `<li class="item">${item}</li>` },' ' );
//   console.log (str);
//   uleRef.insertAdjacentHTML('afterbegin', str);

