const {sequelize,Sequelize} = require('./database.js');
module.exports = (sequelize,Sequelize)=>{
    const users = sequelize.define('user_management',{
        id:{
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name:{
            type:Sequelize.STRING,
            allowNull:false
        },
        email:{
            type:Sequelize.STRING,
            allowNull:false
        },
        password:{
            type:Sequelize.STRING,
            allowNull:false
        },
        image:{
            type:Sequelize.STRING,
            allowNull:false
        },
        total_orders:{
            type:Sequelize.INTEGER,
            allowNull:false
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false
        },
        last_loggged_in:{
            type: Sequelize.DATE,
            defaultValue:null
        }
    })
    return users;
}
