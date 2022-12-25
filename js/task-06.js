const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", event => {
	if (validInput.value.length === +validInput.dataset.length) {
		validInput.classList.remove('invalid');
		validInput.classList.add('valid');
	} else {
		validInput.classList.remove('valid');
		validInput.classList.add('invalid');
	}
});