
# ProyectoFinal_Alejandro Gonzalez

##  Registro de Lavado de Manos

Este proyecto es un simulador web interactivo desarrollado con HTML, CSS y JavaScript, que permite registrar, visualizar, filtrar y analizar datos de una simulación. Incluye gráficos dinámicos, filtros por cargo y fecha, y almacenamiento persistente en "datos.json".

---

✅ Funcionalidades principales

- Registro de datos mediante formulario (nombre, cédula, cargo, momento, producto, técnica).
- Almacenamiento en `datos.json` con persistencia de datos.
- Filtros por cargo y fecha.
- Limpieza individual del historial.
- Gráficos dinámicos con Chart.js:
  - Técnica por tipo (barras verticales).
  - Momento de uso (barras horizontales).
  - Producto utilizado (gráfico de dona).
- Notificaciones visuales con Toastify.




HTML5:Estructura del proyecto 
CSS3: Estilos personalizados 
JavaScript:Lógica del simulador, manejo de eventos, DOM y localStorage 
Chart.js: Gráficos interactivos 
Toastify.js: Notificaciones visuales sin interrumpir el flujo 
JSON: Datos externos cargados dinámicamente con `fetch()` 

---

## 📁 Estructura del proyecto

```
ProyectoFinal_TuApellido/
│
├── index.html             # Página principal
├── Estilos             # Estilos del proyecto
    └──estilos.css
├── JS                
    └──script.js                  
    └──graficos.js      
    └──registros.js  
    └──libreria.js     
├── data/
│   └── datos.json         
├── README.md              
```

---

## 🧪 Cómo usar

1. Clona el repositorio o descarga el ZIP del proyecto.
2. Abre el archivo `index.html` en tu navegador.
3. Rellena el formulario y haz clic en **Registrar**.
4. Visualiza los registros creados en forma de tarjetas.
5. Usa los filtros de **cargo** o **fecha** para refinar los resultados.
6. Explora los gráficos generados automáticamente.
7. Limpia los registros si deseas comenzar de nuevo.

---

## 📦 Librerías externas

- [Chart.js](https://www.chartjs.org/)
- [Toastify.js](https://apvarun.github.io/toastify-js/)

---

## 🔐 Autor

Desarrollado por: **Breyan Alerjandro Gonzalez Gutierrez**  
Fecha de entrega: **25/07/2025**  
Formación: Curso de JavaScript Coder house (Proyecto Final)

---
