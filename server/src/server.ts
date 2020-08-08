import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar uma nova informação no back-end
// PUT: Atualizar uma informação existente no back-end
// DELETE: Remover uma informação do back-end

//GET http://localhost:3333/users : lista todos os usuarios da lista 
//GET http://localhost:3333/users/3 : busca o dado do usuario com id 3 
//POST http://localhost:3333/users  : cria um novo usuario 


//Request Param: Parâmetros que vem na própria rota que identificam o recurso
//Query Param: Parâmetros que vem na própria rota geralmente opcionais para filtros, paginação
//Request Body: Parâmetros para criação/atualização de informações

/* const users = [
    'Diego',
    'Cleiton',
    'Robson',
    'Daniel'
]; */



/* app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);

});

 app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);

});

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);
    
    const user = {
        name: data.name,
        email: data.email
    };

    return response.json(user);
}); */

app.listen(3333);