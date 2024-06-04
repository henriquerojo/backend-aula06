import "dotenv/config";
import express from "express";
import cors from "cors";

// Arquivos de rotas
import { openRouter } from "./routes/open_routes.js";
import { protectedRouter } from "./routes/protected_routes.js";

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

app.use("/auth", openRouter);
app.use("/dashboard", protectedRouter);

app.listen(port, () => console.log(`Server is running on port ${port}`));
