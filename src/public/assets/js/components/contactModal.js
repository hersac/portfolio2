fetch("components/contactModal.html").then(response => response.text()).then(data =>{
	const modal = document.getElementById("contactModal");

	modal.innerHTML = data;

	//Functions modal
	const emailIcon = document.getElementById('emailIcon');
	const btnCancel = document.getElementById('btnCancel');
	const modalContent = document.getElementsByClassName('modalContent');
	const html = document.documentElement;
	const body = document.body;

	emailIcon.addEventListener("click", ()=>{
		modal.style.display = "flex";
		html.classList.add("noScroll");
		body.classList.add("noScroll");
	});

	btnCancel.addEventListener("click",()=>{
		modal.style.display = "none";
		html.classList.remove("noScroll");
		body.classList.remove("noScroll");
	});

});