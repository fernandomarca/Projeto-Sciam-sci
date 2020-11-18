const express = require('express');

const LoginController = require('./controllers/LoginController');
const ImoveisController = require('./controllers/ImoveisController');
const InsumosController = require('./controllers/InsumosController');
const InsumosControllerProprio = require('./controllers/InsumosControllerProprio');
const ProjectsController = require('./controllers/projectController');
const ComposicoesController = require('./controllers/composicoesController');

const Users = require('./database/controllers/usersController');
const Projects = require('./database/controllers/projectsController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();
//routes.use(authMiddleware);


//metodo para criar usuario
routes.post('/sessions', LoginController.store)
//metodo para logar usuario
routes.post('/', LoginController.logar)
//rota projects
routes.get('/projects', ProjectsController.securit)

//rotas para Imovéis
//cadastro
routes.post('/imovel', ImoveisController.store)
//listar
routes.get('/imovel', ImoveisController.index)
//deletar
routes.delete('/imovel/:id', ImoveisController.delete)
//atualizar
routes.put('/imovel/:id', ImoveisController.update)

//rotas para insumos Sinapi
//cadastrar
routes.post('/insumos', InsumosController.store)
//Pesquisar
routes.get('/insumos/search/', InsumosController.search)


//rotas para insumos Proprios
//cadastro
routes.post('/insumos/proprios', InsumosControllerProprio.store)
//Pesquisar
routes.get('/insumos/proprios/search', InsumosControllerProprio.search)
//deletar
routes.delete('/insumos/proprios/:id', InsumosControllerProprio.delete)
//atualizar
routes.put('/insumos/proprios/:id', InsumosControllerProprio.update)


//rotas para composicoes Sinapi
//cadastrar
routes.post('/composicoes', ComposicoesController.store)
//Pesquisar
routes.get('/composicoes/search/', ComposicoesController.search)

//rotas para usuarios teste
routes.get('/users', Users.index);
routes.post('/users', Users.create);
routes.put('/users/:id', Users.update);
routes.delete('/users/:id', Users.delete);
//rotas para projects
routes.get('/projects2', Projects.index);
routes.post('/projects2', Projects.create);


module.exports = routes