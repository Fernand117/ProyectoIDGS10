const express = requite('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`API TEST`);
});
function saludo(nombre) {
  const fecha = new Date().toLocaleString();
  return `Hola, ${nombre}. Hoy es ${fecha}.`;
}

console.log(saludo("jair"));