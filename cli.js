#!/usr/bin/env node
//hace que el modulo cli.js pueda ser ejecutado desde la consola. Identificador. 
const {mdLinks} = require('./mdLinks');
const chalk = require('chalk');
const option1 = process.argv[3];
const option2 = process.argv[4];
const pathOption = process.argv[2];
if(option1 === '--validate') {
    mdLinks(pathOption, { validate: true }).then((data)=>{
        validateHref = data.forEach(element => {
        console.log(element.file + ' ' + element.href + ' ' + element.message + ' ' + element.status + ' ' + element.text);
        });
    }).catch((e) => console.error('', e));
}else if(option1 === '--stats' && option2 === undefined ) {
    mdLinks(pathOption, { validate: true }).then((data)=>{
        const links = data.map(result => result.href);
        console.log(chalk.blue.bold('Total : ') + links.length);
        const uniqueHref = new Set(links).size; // Set para remover elementos repetidos y después obtener un Array 
        console.log(chalk.green.bold('Unique : ') + uniqueHref);
    }).catch((e) => console.error('', e));
} else if(option1 === '--stats' && option2 === '--validate') {
    mdLinks(pathOption, { validate: true }).then((data)=>{
        const links = data.map(result => result.href);
        const linksRotos = data.map(result => result.message);
        console.log(chalk.blue.bold('Total : ') + links.length);
        const uniqueHref = new Set(links).size; // Set para remover elementos repetidos y después obtener un Array 
        console.log(chalk.green.bold('Unique : ') + uniqueHref);
        const brokenHref = (linksRotos.filter(resp => resp === 'FAIL')).length;
        console.log(chalk.red.bold('Broken : ') + brokenHref);
    }).catch((e) => console.error('', e));
} else if (option1 === undefined  && option2 === undefined){
    mdLinks(pathOption, { validate: true }).then((data)=>{
        validateHref = data.forEach(element => {
        console.log(element.file + ' ' + element.href + ' ' + element.text);
        })}).catch((e) => console.error('', e));
}else{
    console.log('No es un comando valido, prueba con: "--validate", "--stats" "--stats --validate"');
}
