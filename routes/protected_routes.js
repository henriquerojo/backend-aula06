import express from "express";
const protectedRouter = express.Router();

const validateToken = (request, response, next) => {
  // pegar o token dos headers da request
  // validar o token
  // buscar o usuário no banco de dados com base no id que está no token
  // qualquer erro retorna 400
  next();
};

// [GET] - http://localhost:3000/dashboard
protectedRouter.get("/", (request, response) => {
  response.send("Listagem dos dados protegidos");
  // response.send(`Olá ${request.user.name} sejá bem vindo!`);
});

export { protectedRouter };
