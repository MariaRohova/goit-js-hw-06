const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);



// Array.from(categories);
for (const li of Array.from(categories)) {
	console.log('Categories:', li.firstElementChild.textContent);
	console.log('Elements:', li.lastElementChild.children.length);
};



