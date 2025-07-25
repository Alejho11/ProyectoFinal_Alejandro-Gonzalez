let graficoBarras, graficoTorta;
let graficoMomentos;

function renderizarGrafico() {
  const canvasBarras = document.getElementById('grafico');
  const canvasTorta = document.getElementById('graficoTorta');
  if (!canvasBarras || !canvasTorta) return;

  const historial = obtenerHistorial();

  // Agrupar por técnica para gráfico de barras
  const conteoTecnicas = {};
  historial.forEach(reg => {
    const tecnica = reg['Técnica'];
    conteoTecnicas[tecnica] = (conteoTecnicas[tecnica] || 0) + 1;
  });

  const labelsTecnica = Object.keys(conteoTecnicas);
  const datosTecnica = Object.values(conteoTecnicas);

  // Destruir gráfico anterior si existe (para evitar errores)
  if (graficoBarras) graficoBarras.destroy();

  graficoBarras = new Chart(canvasBarras, {
    type: 'bar',
    data: {
      labels: labelsTecnica,
      datasets: [{
        label: 'Registros por Técnica',
        data: datosTecnica,
        backgroundColor: '#4caf50'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  // Agrupar por cargo para gráfico de torta
  const conteoCargos = {};
  historial.forEach(reg => {
    const cargo = reg['Cargo'];
    conteoCargos[cargo] = (conteoCargos[cargo] || 0) + 1;
  });

  const labelsCargo = Object.keys(conteoCargos);
  const datosCargo = Object.values(conteoCargos);

  if (graficoTorta) graficoTorta.destroy();

  graficoTorta = new Chart(canvasTorta, {
    type: 'pie',
    data: {
      labels: labelsCargo,
      datasets: [{
        label: 'Distribución por Cargo',
        data: datosCargo,
        backgroundColor: [
          '#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40'
        ]
      }]
    },
    options: {
      responsive: true
    }
  });
}
function renderizarGraficoMomentos() {
  const canvas = document.getElementById('graficoMomentos');
  if (!canvas) return;

  const historial = obtenerHistorial();

  const conteoMomentos = {};
  historial.forEach(item => {
    conteoMomentos[item.Momento] = (conteoMomentos[item.Momento] || 0) + 1;
  });

  if (graficoMomentos) graficoMomentos.destroy();

  graficoMomentos = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: Object.keys(conteoMomentos),
      datasets: [{
        label: 'Momentos',
        data: Object.values(conteoMomentos),
        backgroundColor: '#FF9F40'
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '🧼 Momentos del Lavado de Manos'
        },
        legend: {
          display: false
        }
      }
    }
  });
}
let graficoProductos;

function renderizarGraficoProductos() {
  const canvas = document.getElementById('graficoProductos');
  if (!canvas) return;

  const historial = obtenerHistorial();

  const conteoProductos = {};
  historial.forEach(item => {
    conteoProductos[item.Producto] = (conteoProductos[item.Producto] || 0) + 1;
  });

  if (graficoProductos) graficoProductos.destroy();

  graficoProductos = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: Object.keys(conteoProductos),
      datasets: [{
        label: 'Productos utilizados',
        data: Object.values(conteoProductos),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
        ]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: '🧴 Productos Utilizados'
        }
      }
    }
  });
}
