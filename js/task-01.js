
const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

const titlesOfCategories = categories.forEach(category => {
	const title = category.firstElementChild.textContent;
	const numberOfList = category.lastElementChild.children.length;
	console.log(`Category: ${title}`);
	console.log(`Elements: ${numberOfList}`);
});