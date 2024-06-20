const $ = selector => document.querySelector(selector)

if (window.API) {
  window.API.onUpdateTheme((event, theme) => {
    const root = document.documentElement
    console.log({ event }) // Uncomment the console.log statement
    root.style.setProperty('--scheme', theme)
  })
} else {
  console.warn('electronAPI is not defined')
}
/*
document.getElementById('crear-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const fecha = document.getElementById('fecha').value;
  const precioBTC = parseFloat(document.getElementById('precioBTC').value);
  const precioCompra = parseFloat(document.getElementById('precioCompra').value);
  const satoshis = parseFloat(document.getElementById('satoshis').value);

  const nuevoDocumento = {
      fecha,
      precioBTC,
      precioCompra,
      satoshis
  };

  try {
      const response = await fetch('http://localhost:3000/documentos', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(nuevoDocumento)
      });

      if (response.ok) {
          // Documento creado exitosamente
          obtenerDocumentos(); // Actualizar la lista de documentos
      } else {
          console.error('Error al crear el documento:', response.statusText);
      }
  } catch (error) {
      console.error('Error al crear el documento:', error);
  }
});

// Escucha el evento de envío del formulario de actualización
document.getElementById('actualizar-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = {_id: new ObjectId(id)}; // Reemplaza con el ID correcto
    const actualizacion = {
        fecha: document.getElementById('fecha').value,
        precioBTC: parseFloat(document.getElementById('precioBTC').value),
        precioCompra: parseFloat(document.getElementById('precioCompra').value),
        satoshis: parseFloat(document.getElementById('satoshis').value)
    };

    try {
        const response = await fetch(`http://localhost:3000/documentos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(actualizacion)
        });

        if (response.ok) {
            // Documento actualizado exitosamente
            obtenerDocumentos(); // Actualizar la lista de documentos
        } else {
            console.error('Error al actualizar el documento:', response.statusText);
        }
    } catch (error) {
        console.error('Error al actualizar el documento:', error);
    }
});

// Escucha un evento (por ejemplo, un botón "Eliminar")
document.getElementById('eliminar-btn').addEventListener('click', async () => {
  const id = {_id: new ObjectId(id)}; // Reemplaza con el ID correcto

  try {
      const response = await fetch(`http://localhost:3000/documentos/${id}`, {
          method: 'DELETE'
      });

      if (response.ok) {
          // Documento eliminado exitosamente
          obtenerDocumentos(); // Actualizar la lista de documentos
      } else {
          console.error('Error al eliminar el documento:', response.statusText);
      }
  } catch (error) {
      console.error('Error al eliminar el documento:', error);
  }
});
*/
