import express from "express";
const openRouter = express.Router();

// [POST] - http://localhost:3000/auth/register
openRouter.post("/register", async (request, response) => {
  const body = request.body;

  response.send(body);
});

// [POST] - http://localhost:3000/auth/login
openRouter.post("/login", (request, response) => {
  const body = request.body;

  response.send(body);
});

export { openRouter };
