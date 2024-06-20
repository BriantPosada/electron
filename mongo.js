/* MongoDB */

document.addEventListener('DOMContentLoaded', function() {
    window.api.fetchDocumentos()
    .then(documentos => {
        const tabla = document.getElementById('tabla-documentos');
        documentos.forEach(doc => {
            const fila = document.createElement('tr');
            fila.innerHTML =  `<td>${doc.fecha}</td>
            <td>$${doc.precioBTC}</td>
            <td>$${doc.precioCompra}</td>
            <td>${doc.satoshis}</td>
            `;

            tabla.appendChild(fila);
        });
    })
    .catch(error => console.error('Error al cargar documentos:', error));
  });

   
   