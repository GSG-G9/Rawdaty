const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('./connection');

const dbBuild  = () => {
    let sql = readFileSync(join(__dirname, 'rawdaty.sql')).toString();
    if (process.env.NODE_ENV === 'test') {
      sql += readFileSync(join(__dirname, 'rawdatyFake.sql')).toString();
    }
};
module.exports = dbBuild ;

