const {
  isAbsolutePath,
  convertAbsolutePath,
  isDirectory,
  readDirectorySync,
  markdownFile,
  readMD,
  getLinks,
  validateLinks} = require('./utilities.js')

const mdLinks = (path, option = {validate: false}) => new Promise((resolve, reject) => {
    if (!isAbsolutePath(path)){
      resolve(convertAbsolutePath(path));
    }else{
      reject("la ruta ya es absoluta")
    }

  // mdLinks('src\\pruebas\\link1.md');
  // console.log(mdLinks('src\\pruebas\\link1.md'));
  
});


module.exports = {mdLinks};