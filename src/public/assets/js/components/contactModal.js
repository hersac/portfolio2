fetch("components/contactModal.html").then(response => response.text()).then(data =>{
	const modal = document.getElementById("contactModal");

	modal.innerHTML = data;

	//Functions modal
	const emailIcon = document.getElementById('emailIcon');
	const modalContent = document.getElementsByClassName('modalContent');
	const backgroundModal = document.getElementsByClassName('backgroundModal');

	emailIcon.addEventListener("click", ()=>{
		modal.style.display = "flex";
	});

	backgroundModal[0].addEventListener("click", ()=>{
		modal.style.display = "none";
	});

});