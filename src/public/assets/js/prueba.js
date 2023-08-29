const prueba = document.getElementById('prueba');
function llamada() {
    fetch("../../components/prueba.html")
        .then(response => response.text())
        .then(data => {
            try {
                console.log("dato2");
                prueba.innerHTML = data;
            } catch (error) {
                console.error("Este ese el error", error);
            }
        });
}
export default llamada;