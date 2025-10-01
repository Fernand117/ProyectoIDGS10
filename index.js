const express = require('express');
const app = express();
const port = 3000;

// Nueva ruta agregada
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la API</h1><p>Servidor funcionando correctamente</p>');
});

app.listen(port, () => {
  console.log(`API TEST en http://localhost:${port}`);
});
