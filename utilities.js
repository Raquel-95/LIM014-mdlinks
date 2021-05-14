const path = require('path'); // para importar modulo path
const fs = require('fs'); //para importar modulo fs (file system)
const marked = require('marked');
const axios = require('axios');

const isAbsolutePath = (route) => path.isAbsolute(route);

const convertAbsolutePath = (route) => path.resolve(route);

const isDirectory = (route) => {
  const stats = fs.statSync(route);
  return stats.isDirectory();
}

const fileExists = (route) => fs.existsSync(route);

const readDirectorySync = (route) => fs.readdirSync(route);
  
const markdownFile = (file) => path.extname(file) === '.md';

const readMD = (route) => {
  const data = fs.readFileSync(route , {encoding:'utf8', flag:'r'});
  return data;
}

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
      arrayLinks.push(linkDetail);
    }
  };
  marked(readMD(route), { renderer}); // llamar marked con 2 argumnentos: por donde va a pasar marked? "readMD" q es la función para recorrer todo el documento, y 2° aplicar mi renderer
  return arrayLinks; // retornar el arreglo de link, 1 objeto por cada link.
};


const validateLinks = (arrValidateLinks) => {
  const petitionHTTP = arrValidateLinks.map((element) => (axios.get(element.href))
    .then((url) => ({ status: url.status, message: url.statusText, ...element }))
    .catch(() => ({ status: 404, message: 'FAIL', ...element })));
    
    return Promise.all(petitionHTTP); //promise.all devuelve en otro array el resultado de todas las promesas.
};


module.exports = {
  isAbsolutePath,
  convertAbsolutePath,
  isDirectory,
  fileExists,
  readDirectorySync,
  markdownFile,
  readMD,
  getLinks, 
  validateLinks,
};