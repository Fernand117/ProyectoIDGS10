const express = require('express'); // corregido 'requite' → 'require'
const app = express();
const port = 3000;

// Ruta de saludo
app.get('/', (req, res) => {
  res.send('¡Hola! Bienvenido a mi API 🚀');
});

app.listen(port, () => {
  console.log(`API TEST escuchando en http://localhost:${port}`);
});

