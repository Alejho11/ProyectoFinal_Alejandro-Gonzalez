function formatearFechaHora() {
  const fecha = new Date();
  const año = fecha.getFullYear();
  const mes = String(fecha.getMonth() + 1).padStart(2, '0');
  const dia = String(fecha.getDate()).padStart(2, '0');
  const hora = String(fecha.getHours()).padStart(2, '0');
  const minutos = String(fecha.getMinutes()).padStart(2, '0');

  return `${año}-${mes}-${dia} ${hora}:${minutos}`;
}

function crearElementoHTML(tag, contenido, clase = '') {
  const elemento = document.createElement(tag);
  elemento.textContent = contenido;
  if (clase) elemento.classList.add(clase);
  return elemento;
}

function mostrarMensajeToast(mensaje) {
  Toastify({
    text: mensaje,
    duration: 3000,
    gravity: 'top',
    position: 'right',
    backgroundColor: '#00796b'
  }).showToast();
}