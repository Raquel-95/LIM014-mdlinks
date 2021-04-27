const {
  isAbsolutePath,
  convertAbsolutePath,
  isDirectory,
  readDirectorySync,
  markdownFile,
  readMD,
  getLinks,
  validateLinks
} = require('../utilities.js');


  const relativePath = 'src\\pruebas\\link2.md';
  const absolutePath = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link2.md';
  const directory = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas';
  const fileMD = 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md';
  const link = [
    {
    href: 'https://github.com',
    text: 'https://github.com',
    file: 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'
    }
  ]

  describe('Comprobar que es una ruta absoluta ', () => {
    it('Debería ser una función ', () => {
      expect(typeof isAbsolutePath).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(isAbsolutePath(absolutePath)).toBe(true);
    });
  });

  describe('Comprobar que convierte una ruta relativa a absoluta', () => {
    it('Debería ser una función ', () => {
      expect(typeof convertAbsolutePath).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(convertAbsolutePath(relativePath)).toBe(absolutePath);
    });
  });

  describe('Comprobar si es un directorio', () => {
    it('Debería ser una función ', () => {
      expect(typeof isDirectory).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(isDirectory(directory)).toBe(true);
    });
  });
  
  describe('Comprobar que lee el directorio', () => {
    it('Debería ser una función ', () => {
      expect(typeof readDirectorySync).toBe('function');
    });
    it('Debería retornar un array con los archivos', () => {
      expect(readDirectorySync(directory)).toEqual(['link1.md', 'link2.md', 'link3.md', 'link4.txt', 'moreLinks']);
    });
  });

  describe('Comprobar que es un archivo markdown', () => {
    it('Debería ser una función ', () => {
      expect(typeof markdownFile).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(markdownFile(fileMD)).toBe(true);
    });
  });
  
  
  describe('Comprobar que trae un array con el contenido del archivo MD', () => {
    it('Debería ser una función ', () => {
      expect(typeof readMD).toBe('function');
    });
    it('Debería retornar un array con la ruta del archivo .md ', () => {
      expect((readMD(fileMD))).toEqual([[GitHub] ('https://github.com')]);
    });
  });
  
  describe('Comprobar que extrae los links', () => {
    it('Debería ser una función ', () => {
      expect(typeof getLinks).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(getLinks(fileMD)).toEqual([{href: 'https://github.com', text: 'https://github.com', file: 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'}]);
  });
});

describe('Comprobar que los links son validos', () => {
  it('Debería ser una función ', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Debería retornar true ', (done) => {
    validateLinks(getLinks(fileMD))
    .then((h) => {expect(h).toEqual(test1);
    done();
    });
  });
});