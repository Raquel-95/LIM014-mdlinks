const { mdLinks } = require('./mdLinks');

const relativePath = 'src\\pruebas\\link2.md';
const absolutePath = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link2.md';
const directory = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas';
const fileMD = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md';

mdLinks(absolutePath, { validate: true })
  .then((links) => {
    console.log('primer console.log ', links);
    // => [{ href, text, file }]
  })
  .catch((e) => console.error('primer error ', e));

mdLinks(fileMD, { validate: true })
  .then(links => {
    console.log('segundo console.log ', links);
    // => [{ href, text, file, status, ok }]
  })
  .catch((e) => console.error('segundo error ', e));

mdLinks(directory, { validate: true })
  .then(links => {
    console.log('tercer console.log ', links);
    // => [{ href, text, file }]
  })
  .catch((e) => console.error('tercer error ', e));