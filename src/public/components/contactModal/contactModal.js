fetch("components/contactModal/contactModal.html").then(response => response.text()).then(data =>{
	const modal = document.getElementById("contactModal");

	modal.innerHTML = data;

	//Functions modal
	const emailIcon = document.getElementById('emailIcon');
	const btnCancel = document.getElementById('btnCancel');
	const modalContent = document.getElementsByClassName('modalContent');

	emailIcon.addEventListener("click", ()=>{
		modal.style.display = "flex";
	});

	btnCancel.addEventListener("click",()=>{
		modal.style.display = "none";
	});

});