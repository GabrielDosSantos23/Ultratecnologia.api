const mysql = require ('mysql2/promise');
const config = {

host: 'localhost',
user:'root',
password:'',
database:'site_iphone'
}

const conexao = mysql.createPool(config);

module.exports = conexao;






