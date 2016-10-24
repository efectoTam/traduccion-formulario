var titulo= document.getElementById('form-signin-heading');
titulo.innerHTML="Por favor inicia sesión";

var email= document.getElementById('inputEmail').placeholder='Correo Electrónico';

var contraseña= document.getElementById('inputPassword').placeholder='Contraseña';

var remember= document.getElementsByTagName("SPAN")[0].textContent = "Recordar datos";

var boton= document.getElementsByTagName("BUTTON")[0].textContent = "Iniciar Sesión";