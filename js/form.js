document.querySelector('#submit').addEventListener('click',function() {
  

  let cliente = document.querySelector('#cliente').nodeValue;
  let fecha = document.querySelector('#fecha').nodeValue;
  let hora = document.querySelector('#cliente').nodeValue;
  let local = document.querySelector('#local').nodeValue;
  let servicio que solicita = document.querySelector('#servicio').nodeValue;
  let cedula = document.querySelector('#cedula').nodeValue;
  let pago = document.querySelector('#pago').nodeValue;

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=0981966233&text=
		*_WIN CITY_*%0A
		*Reservas*%0A%0A
		*¿Cuál es tu nombre?*%0A
		${cliente}%0A
		*Indica la fecha de tu reserva*%0A
		${fecha}%0A
		*Indica la hora de tu reserva*%0A
		${hora}%0A
		*indica la ubicacion del local*%0A
		${local}%0A
		*¿Cuál es el servicio que se desea realizar?*%0A
		${servicio}%0A
		*ingrese su numero de cedula*%0A
		${cedula}%0A
		*indica la forma de pago*%0A
		${pago}`;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);
)};
