const Sequelize = require('sequelize');
const sequelize = new Sequelize('nodejs', 'nodejs', 'nodejs', {
  host:"localhost",
  dialect: "mysql"
});

sequelize.authenticate().then( function() {
  console.log('Conectado com sucesso!');
}).catch( function() {
  console.log("Falha ao se conectar: "+erro);
});

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

Postagem.sync({force: true})

Postagem.create({
  titulo: "Brasil",
  conteudo: "Brasil é campeão"
})

const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

Usuario.sync({force: true})

Usuario.create({
  nome: "Marcos",
  sobrenome: "Santos",
  idade: 21,
  email: "contatomarcossantos@outlok.com",
})
