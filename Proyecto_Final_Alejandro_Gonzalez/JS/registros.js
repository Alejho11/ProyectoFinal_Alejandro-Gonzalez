function guardarEnHistorial(registro) {
  const historial = JSON.parse(localStorage.getItem('historial')) || [];
  historial.push(registro);
  localStorage.setItem('historial', JSON.stringify(historial));
}

function obtenerHistorial() {
  return JSON.parse(localStorage.getItem('historial')) || [];
}

function eliminarRegistro(index) {
   const confirmacion = confirm("¿Estás seguro de que deseas eliminar este registro?");
  if (!confirmacion) return;
  const historial = obtenerHistorial();
  historial.splice(index, 1);
  localStorage.setItem('historial', JSON.stringify(historial));
  mostrarMensajeToast('Registro eliminado correctamente');
  renderizarHistorial();
}

function editarRegistro(index, nuevoRegistro) {
  const historial = obtenerHistorial();
  historial[index] = nuevoRegistro;
  localStorage.setItem('historial', JSON.stringify(historial));
  mostrarMensajeToast('Registro editado correctamente');
  renderizarHistorial();
} 