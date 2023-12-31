import express from "express";
import { Sequelize } from "sequelize";
import { userRouter } from './src/routes/userRouter.js'
export const app = express()
const port = 8080

// conectar sem o sequelize
// const mysql = require('mysql2')

// const con = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'cadastro'  
// })

const sequelize = new Sequelize('cadastro', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database: ', error);
});

// routes

// let  = require('./src/routes/user')
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})