const axios = require('axios'); //para trabajar con axios
jest.mock('axios')
const { validateLinks } = require('../utilities.js'); //funcion que vamos a mockear

describe('Comprobar validacion de links', () => {
  it('Debería ser una función ', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Validar status = 200', () => {
    const links = [
      {
        href: 'https://www.github.com',
        text: 'https://www.github.com',
        file: 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'
      }
    ];
    const linkStatus = [
      {
        status: 200,
        message: 'OK',
        href: 'https://www.github.com',
        text: 'https://www.github.com',
        file: 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'
      }
    ];
    const axiosResponse = {
      status: 200, statusText: 'OK',
    };
    axios.get.mockResolvedValue(axiosResponse)
    validateLinks(links).then((data) => {
      expect(data).toEqual(linkStatus);
    })
  });
});

describe('Comprobar validacion de links', () => {
  it('Debería ser una función ', () => {
    expect(typeof validateLinks).toBe('function');
  });
  it('Validar status = 404', () => {
    const links = [
      {
        href: 'https://www.githubzzz.com',
        text: 'https://www.githubzzz.com',
        file: 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'
      }
    ];
    const linkStatus = [
      {
        status: 404,
        message: 'FAIL',
        href: 'https://www.githubzzz.com',
        text: 'https://www.githubzzz.com',
        file: 'c:\\Users\\USUARIO\\Desktop\\LABORATORIA\\LIM014-mdlinks\\src\\pruebas\\link3.md'
      }
    ];
    
    axios.get.mockRejectedValue()
    validateLinks(links).then((data) => {
      expect(data).toEqual(linkStatus);
    })
  });
});