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
  const absolutePath = 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link2.md';
  const directory = 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas';
  const fileMD = 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\moreLinks\\link5.md';
  const link = [
    {
      href: 'https://www.gmail.com',
      text: 'https://www.gmail.com',
      file: 'C:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\moreLinks\\link5.md',
    }
  ];

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
    it('Debería retornar ruta absoluta ', () => {
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
      expect(readDirectorySync(directory)).toEqual(['folderVacio', 'link1.md', 'link2.md', 'link3.md', 'link4.txt', 'moreLinks']);
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
    it('Debería retornar el contenido del archivo ', () => {
      expect((readMD(fileMD))).toEqual('[Gmail] (https://www.gmail.com)');
    });
  });
  
  describe('Comprobar que extrae los links', () => {
    it('Debería ser una función ', () => {
      expect(typeof getLinks).toBe('function');
    });
    it('Debería retornar true ', () => {
      expect(getLinks(fileMD)).toEqual(link);
  });
});
