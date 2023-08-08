import { app } from "../../server";
import { Express } from "express";

// Função do controller
// O controle deve se preocupar em aceitar a solicitação, repassar para o
// serviço de domínio correto processe a solicitação e entregue a resposta
// ao cliente

app.post('/usuario', async (req, res) => {
	try {
		const response = await UsuarioService.create(req.body);
		return res.status(201).json(response) 
	} catch (error) {
		return next(error);
	}
})