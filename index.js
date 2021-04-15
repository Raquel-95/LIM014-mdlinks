module.exports = () => {

};

const path = require('path');
const fs = require('fs');

const mdLinks = (pathFiles, option = {validate: false}) => new Promise((resolve, reject) => {
// pregunto si la ruta es absoluta
if(!path.isAbsolute(pathFiles)){
  pathFiles = path.resolve(pathFiles);
}
// pregunto si es una carpeta
let isFolder = false;
fs.stat(pathFiles, (err, stats) => {
  if (err){
    return console.log("no existe ruta");
  }
isFolder = stats.isDirectory();
});

let listFilesMD = [];

if(isFolder){
  files = fs.readdirSync(pathFiles);
  files.forEach(file => {
  if (path.extname(file) == ".md"){
  listFilesMD.push(pathFiles + file);
  }
  })

}else{
  if(path.extname(pathFiles) == ".md"){
    listFilesMD.push(pathFiles);
  }
}
resolve("resuelto");
reject("El proceso lento tuvo un error");
});

module.exports = mdLinks;

/*files = fs.readdirSync('src/pruebas');

fs.stat('src/pruebas', (err, stats) => {
  if (err) throw err;
  console.log(stats.isDirectory());
});

fs.stat('src/pruebas', (err, stats) => {
  if (err) throw err;

  if (stats.isDirectory()) {
      console.log("fs.Stats describes a " + "file system directory");
  } else {
      console.log("fs.Stats does not " + "describe a file system directory");
  }
});*/





/*const relativePath = 'src/pruebas/link2.md';
const absolutePath = 'C:/Users/Victor/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link2.md';

const isAbsolutePath = path.isAbsolute(absolutePath);
//console.log(isAbsolutePath);

const convertAbsolutePath = path.resolve(relativePath);
//console.log(convertAbsolutePath);*/

