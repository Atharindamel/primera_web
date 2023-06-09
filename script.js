function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
    alert('Por favor ingrese un correo electrónico válido.');
    } else {
    alert('Correo electrónico enviado correctamente.');
    }
}
function showAlert() { alert('¡Hola, este es un alerta desde JavaScript'); }

const form = document.getElementById('myForm');

if(form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateForm();
    });
}

document.querySelector("button.button-menu-toggle").addEventListener("click", function(){
    document.querySelector(".nav-links").
    classList.toggle("nav-links-responsive")
})

/* //Encuentra el elemento HTML (el botón) mediante su ID.
const miBoton = document.getElementById('miBoton');

//Define la función que se ejecutará cuando se haga clic en el botón.
function handleClick() {
    alert('¡Hola! Has hecho clic en el botón.');
} */

/* miBoton.addEventListener('click',handleClick);
 */