fetch("components/contactModal.html").then(response => response.text()).then(data =>{
	const modal = document.getElementById("contactModal");
	modal.innerHTML = data;
});