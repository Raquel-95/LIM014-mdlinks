const {
  isAbsolutePath,
  convertAbsolutePath,
  isDirectory,
  fileExists,
  readDirectorySync,
  markdownFile,
  getLinks,
  validateLinks,
} = require('./utilities');

const path = require('path');

const mdLinks = (paths, option = { validate: false }) => new Promise((resolve, reject) => {
  let finalPath = paths;
  let resultArr = [];
  if (!isAbsolutePath(paths)) {
    finalPath = convertAbsolutePath(paths);
  }
  if (!fileExists(finalPath)) {
    reject('La ruta no existe')
  }

  if (isDirectory(finalPath)) {
    let arrOfFiles = readDirectorySync(finalPath);
    arrOfFiles.map((element) => {
      let fileMD = markdownFile(element);
      if (fileMD) {
        let jPath = path.join(finalPath, element);
        getLinks(jPath).forEach((item) => {
          resultArr.push(item);
        });
      }
    })
    if (resultArr.length == 0) {
      reject('El directorio está vacío')
    }
  } else if(markdownFile(finalPath)){

    resultArr = getLinks(finalPath);
  }else{
    reject('No es un archivo markdown')
  }

  if (option.validate === true) {
    resolve(validateLinks(resultArr));
  } else {
    resolve(resultArr);
  }
});
module.exports = { mdLinks };