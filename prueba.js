const mdLinks = require('./index.js');

const ruta = 'src/pruebas'

mdLinks(ruta)
  .then((links) => {
    console.log(links);
    // => [{ href, text, file }]
  })
  .catch(console.error);
