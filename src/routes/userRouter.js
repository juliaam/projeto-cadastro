// import { app } from "../../server";
import express from "express";
import { userController } from '../controllers/userController.js'; // Importe o userController usando 'import'
const router = express.Router();


router
.route('/users/')
.post(userController.create)
.get(userController.findAll)

// app.get('/users')
// app.get('/')
// app.post('/user/')

export { router as userRouter }; 