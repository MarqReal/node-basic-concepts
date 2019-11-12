const mongoose = require("mongoose");

//Configurando o mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/learning", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB Conectado...");
}).catch((err) => {
  console.log("Houve um erro ao se conectar ao MongoDB: "+err);
})

//Model - Usuarios
//Definindo o model
const UsuarioSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require: true
  },
  pais: {
    type: String
  }
})

//Collection
mongoose.model("usuarios", UsuarioSchema);

const novoUsuario = mongoose.model("usuarios")
new novoUsuario({
  nome: "Marcos",
  sobrenome: "Santos",
  email: "contatomarcossantos@outlook.com",
  idade: 19,
  pais: "Brasil"
}).save().then(() => {
  console.log("Usuario criado com sucesso")
}).catch((err) => {
  console.log("Houve um erro ao registrar o usuario: "+err);
})
