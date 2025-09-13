"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require("crypto-js");
var readline = require("readline");
var senha = '';
var permissao = false;
//permite a entrada de dados via terminal
var entradaSenha = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
//Pede um valor e devolve o mesmo criptografado
entradaSenha.question('Entre com um valor para senha: ', function (senha) {
    console.log(encrypt(senha));
    entradaSenha.close();
});
// Chave usada tanto para criptografar quanto para decritografar a senha
var key = "e5bbb3fd1536b390c011200732ffc3d765accda268b9203523677859674eb7a3f2cd1fd6949b7f640160b3ecd29e072666afb31386ae217ab2bbf2c75a837ac6";
//Função que criptografa a senha
function encrypt(password) {
    return CryptoJS.AES.encrypt(password, key).toString();
}
