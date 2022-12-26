const changeInput = document.querySelector("#font-size-control");
const changeSpan = document.querySelector("#text");

changeInput.addEventListener('input', event =>
	changeSpan.style.fontSize = `${changeInput.value}px`
);