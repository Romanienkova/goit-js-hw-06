const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
	event.preventDefault()

	const {
    elements: { email, password },
	} = event.currentTarget;
  
	if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
	} 
	
	const inputValues = {
		email: email.value,
		password: password.value,
		};
	
	console.log(inputValues);

  	event.currentTarget.reset();
});