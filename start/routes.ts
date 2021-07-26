/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// Route.get('/posts', 'PostsController.read');
// Route.post('/posts', 'PostsController.create');
// Route.put('/posts', 'PostsController.update');
// Route.patch('/posts', 'PostsController.update');
// Route.delete('/posts', 'PostsController.delete');

Route.post('/cafes', 'CafesController.create');
Route.get('/cafes', 'CafesController.list');
Route.get('/cafes/:id', 'CafesController.read');
Route.post('/upload', 'CafesController.upload');

Route.post('/auth/signup', 'AuthController.signUp');
Route.post('/auth/signin', 'AuthController.signIn');
Route.get('/auth/profile', 'AuthController.profile');
