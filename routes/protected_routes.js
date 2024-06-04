import express from "express";
const protectedRouter = express.Router();

// [GET] - http://localhost:3000/dashboard
protectedRouter.get("/", (request, response) => {
  response.send("Listagem dos dados protegidos");
  // response.send(`Olá ${request.user.name} sejá bem vindo!`);
});

export { protectedRouter };
