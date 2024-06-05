import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";

// Arquivos de rotas
import { openRouter } from "./routes/open_routes.js";
import { protectedRouter } from "./routes/protected_routes.js";

const app = express();
const port = process.env.PORT;

// Middlewares - Funções que são executadas antes da requisição chegar ao servidor (endpoint)
app.use(express.json());
app.use(cors());

app.use("/auth", openRouter);
app.use("/dashboard", protectedRouter);

app.use((request, response) => {
    response.status(404).json({message: "Page not found"});
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
