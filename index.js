const express = require('express');
const app = express();
const port = 3000;

// Nueva ruta raíz
app.get('/', (req, res) => {
  res.send('¡Hola! Esta es mi primera API con Express 🚀');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
