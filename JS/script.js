async function cargarDatosSelects() {
  try {
    const respuesta = await fetch('./data/datos.json');
    const datos = await respuesta.json();

    llenarSelect('cargo', datos.cargos);
    llenarSelect('momento', datos.momentos);
    llenarSelect('producto', datos.productos);
    llenarSelect('tecnica', datos.tecnicas);
    llenarSelect('filtroCargo', datos.cargos, true);
  } catch (error) {
    console.error('Error al cargar datos:', error);
  }
}

function llenarSelect(id, opciones, incluirTodos = false) {
  const select = document.getElementById(id);
  select.innerHTML = incluirTodos ? '<option value="">Todos</option>' : '<option value="">Seleccione</option>';
  opciones.forEach(opcion => {
    const opt = document.createElement('option');
    opt.value = opcion;
    opt.textContent = opcion;
    select.appendChild(opt);
  });
}

function renderizarHistorial(filtrado = null) {
  const historial = filtrado || obtenerHistorial();
  const contenedor = document.getElementById('historial');
  contenedor.innerHTML = '';

  if (historial.length === 0) {
    contenedor.innerHTML = '<p>No se encontraron registros con esos filtros.</p>';
    return;
  }

  historial.forEach((registro, index) => {
    const card = document.createElement('div');
    card.className = 'registro-card';

    const titulo = crearElementoHTML('h4', `Registro ${index + 1}`);
    card.appendChild(titulo);

    for (const clave in registro) {
      const parrafo = crearElementoHTML('p', `${clave}: ${registro[clave]}`);
      card.appendChild(parrafo);
    }

    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = 'Eliminar';
    btnBorrar.className = 'btn-borrar';
    btnBorrar.onclick = () => eliminarRegistro(index);
    card.appendChild(btnBorrar);

    contenedor.appendChild(card);
  });
}

function registrarEvento(e) {
  e.preventDefault();

  const cargo = document.getElementById('cargo').value;
  const momento = document.getElementById('momento').value;
  const producto = document.getElementById('producto').value;
  const tecnica = document.getElementById('tecnica').value;

  if (!cargo || !momento || !producto || !tecnica) {
    mostrarMensajeToast('Por favor completa todos los campos.');
    return;
  }

  const registro = {
    Cargo: cargo,
    Momento: momento,
    Producto: producto,
    Técnica: tecnica,
    Fecha: formatearFechaHora()
  };

  guardarEnHistorial(registro);
  renderizarHistorial();
  renderizarGrafico();
  renderizarGraficoMomentos();
  renderizarGraficoProductos();

  document.getElementById('formRegistro').reset();
  mostrarMensajeToast('Registro guardado con éxito');
}

function aplicarFiltros() {
  const historial = obtenerHistorial();
  const cargoFiltro = document.getElementById('filtroCargo').value;
  const fechaFiltro = document.getElementById('filtroFecha').value;

  const filtrado = historial.filter(registro => {
    const coincideCargo = !cargoFiltro || registro.Cargo === cargoFiltro;
    const coincideFecha = !fechaFiltro || registro.Fecha.startsWith(fechaFiltro);
    return coincideCargo && coincideFecha;
  });

  renderizarHistorial(filtrado);
}

document.addEventListener('DOMContentLoaded', () => {
  cargarDatosSelects();
  renderizarHistorial();
  renderizarGrafico();
  renderizarGraficoMomentos(); 
  renderizarGraficoProductos();

  document.getElementById('formRegistro').addEventListener('submit', registrarEvento);
  document.getElementById('filtroCargo').addEventListener('change', aplicarFiltros);
  document.getElementById('filtroFecha').addEventListener('change', aplicarFiltros);

  document.getElementById('btnRestablecer').addEventListener('click', () => {
    document.getElementById('filtroCargo').value = '';
    document.getElementById('filtroFecha').value = '';
    renderizarHistorial();
  });
});

