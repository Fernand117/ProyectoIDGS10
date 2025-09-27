const express = require('express'); // corregido 'requite' a 'require'
const app = express();
const port = 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola desde la API!');
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
