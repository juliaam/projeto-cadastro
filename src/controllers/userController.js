// import { express } from "express";
// Função do controller
// O controle deve se preocupar em aceitar a solicitação, repassar para o
// serviço de domínio correto processe a solicitação e entregue a resposta
// ao cliente
// fazer as validações, chamar o service
const userController = {
	async findAll() {
	  try {
		// Lógica para buscar todos os usuários
	  } catch (error) {
		// Tratar erros
	  }
	},
	async create() {
	  try {
		// Lógica para criar um novo usuário
	  } catch (error) {
		// Tratar erros
	  }
	}
  };
  
  export { userController };