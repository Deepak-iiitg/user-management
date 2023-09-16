const express = require('express');
require('dotenv').config();
const {PORT} = process.env;
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors({origin:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
const db = require('./models/database');
db.sequelize.sync();
const router = require('./routes/users').router;
app.use(router);
app.listen(PORT,()=>{
    console.log('listening at port '+PORT);
})