const path = require('path'); // para importar modulo path
const fs = require('fs'); //para importar modulo fs (file system)
const marked = require('marked');
// const { get } = require('https')
const axios = require('axios');


const relativePath = 'src/pruebas/link2.md';
const absolutePath = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link2.md';
const directory = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas';
const fileMD = 'C:/Users/USUARIO/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link3.md';

const isAbsolutePath = (route) => path.isAbsolute(route);
isAbsolutePath(absolutePath);

const convertAbsolutePath = (route) => path.resolve(route);
convertAbsolutePath(relativePath);

const isDirectory = (route) => {
  const stats = fs.statSync(route);
  return stats.isDirectory();
}
isDirectory(directory);

const readDirectorySync = (route) => fs.readdirSync(route);
//console.log(readDirectorySync(directory)); 

  
const markdownFile = (file) => path.extname(file) === '.md';
//console.log("¿Es un archivo con extensión .md?" , markdownFile(fileMD));

const readMD = (route) => {
  const data = fs.readFileSync(route , {encoding:'utf8', flag:'r'});
  return data;
}
readMD(fileMD);

//Función para obtener los links
const getLinks = (route) => {
  const arrayLinks = [];
  const renderer = new marked.Renderer(); //función de rehacer.  Creamos un nuevo renderer 
  renderer.link = (href, title, text) => {  // "link" Métodos de renderizador de nivel en línea, link(string href, string title, string text)
    const validateHTTP = /https:([^"')\s]+)/; // expresión regular para filtrar si es un link realmente.
    if (validateHTTP.test(href)) { // test es un método de las expresiones regulares para validar si tenia esa forma de link. href es lo que queremos comparar
      const linkDetail = {
        href,
        text,
        file: route,
      };
     //console.log(linkDetail);
      arrayLinks.push(linkDetail);
    }
  };
  marked(readMD(route), { renderer}); // llamar marked con 2 argumnentos: por donde va a pasar marked? "readMD" q es la función para recorrer todo el documento, y 2° aplicar mi renderer
  return arrayLinks; // retornar el arreglo de link, 1 objeto por cada link.
};
console.log(getLinks(fileMD));

const validateLinks = (arrValidateLinks) => {
  const petitionHTTP = arrValidateLinks.map((element) => (axios.get(element.href))
    .then((url) => ({ status: url.status, message: url.statusText, ...element }))
    .catch(() => ({ status: 404, message: 'FAIL', ...element })));
    
    return Promise.all(petitionHTTP); //promise.all devuelve en otro array el resultado de todas las promesas.
};
//validateLinks(getLinks(fileMD)).then((url) => console.log(url))


module.exports = {
  relativePath,
  absolutePath,
  directory,
  fileMD,
  isAbsolutePath,
  convertAbsolutePath,
  isDirectory,
  readDirectorySync,
  markdownFile,
  readMD,
  getLinks, 
  validateLinks,
};