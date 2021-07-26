import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    // async list() {

    // }

    async create({request, response}:HttpContextContract) {
        response.status(201);
        return request.url();
    }

    async read({request, response}: HttpContextContract){
        request.body();
        request.qs();
        // response.abort(404);
        return request.url();
    }

    async update() {
        return 'update';
    }

    async delete() {
        return 'delete';
    }
}
