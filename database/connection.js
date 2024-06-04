import pkg from "mongoose";
const { connect, connection, disconnect } = pkg;

const uri = process.env.MONGO_DB_URL;

// Parametros de configuração da conexão
const clientOptions = {
  serverApi: {
    version: "1",
    strict: true,
    deprecationErrors: true,
  },
};

// Função que executa de conexão com o banco de dados
async function run() {
  try {
    await connect(uri, clientOptions);
    await connection.db.admin().command({ ping: 1 });

    console.log("Database connected");
  } catch (error) {
    console.log("Error: ", error);
  }
}

run();
