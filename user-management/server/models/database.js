const {Sequelize,Model,DataTypes} = require('sequelize');
require('dotenv').config();
const {DB_NAME,DB_USER,DB_PASSWORD,DB_HOST} = process.env;

let config = {
    db_name:DB_NAME,
    db_user:DB_USER,
    db_password:DB_PASSWORD,
    cont_type:'mysql',
    port:'3306',
    host:DB_HOST
}
const sequelize = new Sequelize(config.db_name,config.db_user,config.db_password,
    {host:config.host,port:config.port,dialect:config.cont_type})
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./userModel')(sequelize,Sequelize);
module.exports = db;
