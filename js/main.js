function titulo(){
	var titulo= document.getElementById('form-signin-heading');
	titulo.innerHTML="Por favor inicia sesión";
}titulo();

function email(){
	document.getElementById('inputEmail').placeholder='Correo Electrónico';
}email();

function contraseña(){
	document.getElementById('inputPassword').placeholder='Contraseña';
}contraseña();

function recordar(){
	document.getElementsByTagName("SPAN")[0].textContent = "Recordar datos";
}recordar();

function boton(){
	document.getElementsByTagName("BUTTON")[0].textContent = "Iniciar Sesión";
}boton();