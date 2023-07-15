const aplicacion = document.querySelector('.app');
const url = 'https://api.crhoy.net/ultimas/5.json';


function obtenerNoticias() {
    
  fetch(url)
    .then(res => res.json())
    .then(data => {
      aplicacion.innerHTML = ''; // Limpiar el contenido actual antes de agregar las noticias actualizadas

      data.ultimas.forEach(noticia => {
        const titulo = noticia.title;
        const imagen = noticia.img;
        const elementoEnlace = document.createElement('a');
        elementoEnlace.href = noticia.url;
        elementoEnlace.textContent = 'Link';
        elementoEnlace.target = '_blank';

        const elementoTitulo = document.createElement('h3');
        elementoTitulo.textContent = titulo;

        const elementoImagen = document.createElement('img');
        elementoImagen.src = imagen;
        elementoImagen.style.maxWidth = '200px';

        aplicacion.appendChild(elementoTitulo);
        aplicacion.appendChild(elementoImagen);
        aplicacion.appendChild(elementoEnlace);
      });
    })
    .catch(err => console.log(err));
}

obtenerNoticias(); // Obtener las noticias al cargar la página

// Actualizar las noticias automáticamente cada 2 minutos
setInterval(obtenerNoticias, 1 * 60 * 1000);

// Agregar un botón de actualización (refresh)
const botonRefresh = document.createElement('button');
botonRefresh.textContent = 'Actualizar noticias';
botonRefresh.addEventListener('click', actualizarNoticias);

aplicacion.appendChild(botonRefresh);