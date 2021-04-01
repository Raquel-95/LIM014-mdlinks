module.exports = () => {

};

const path = require('path');
const fs = require('fs');

const mdLinks = (pathFiles, option = {validate: false}) => new Promise((resolve, reject) => {

resolve("resuelto");
});

module.exports = mdLinks;

files = fs.readdirSync('src/pruebas');

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
});



files = fs.readdirSync('src/pruebas');
  console.log('Files con la extensión .md');

files.forEach(file => {
  if (path.extname(file) == ".md")
    console.log(file);
})


/*const relativePath = 'src/pruebas/link2.md';
const absolutePath = 'C:/Users/Victor/Desktop/LABORATORIA/LIM014-mdlinks/src/pruebas/link2.md';

const isAbsolutePath = path.isAbsolute(absolutePath);
//console.log(isAbsolutePath);

const convertAbsolutePath = path.resolve(relativePath);
//console.log(convertAbsolutePath);*/
