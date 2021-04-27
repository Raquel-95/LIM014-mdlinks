const {mdLinks} = require('./mdLinks');

const relativePath = 'src/pruebas/link2.md';
const absolutePath = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link2.md';
const directory = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas';
const fileMD = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link3.md';

mdLinks(absolutePath)
  .then((links) => {
    console.log(links);
    // => [{ href, text, file }]
  })
  .catch(console.error);

  mdLinks(fileMD, { validate: true })
  .then(links => {
    console.log(links);
    // => [{ href, text, file, status, ok }]
  })
  .catch(console.error);

mdLinks(directory)
  .then(links => {
    console.log(links);
    // => [{ href, text, file }]
  })
  .catch(console.error);