import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cafe from "App/Models/Cafe"
import Application from '@ioc:Adonis/Core/Application';

export default class CafesController {
    async create({request}:HttpContextContract) {
        const body = request.only(['name', 'coordinates', 'conect', 'address', 'opening_hour', 'homepage'])
        return body;
        const cafe = new Cafe()
        // cafe.name = '더픽트'
        // cafe.coordinates = '38.123215, 128.12354'
        // cafe.conect = '033-250-1234'
        // cafe.address = '강원도 춘천시 시청길 40-1'
        // cafe.openingHours = '매일 09:00 ~ 16:00'
        // cafe.homepage = 'www.pict.kr'
        return await cafe.save();
    }

    async list() {
        return await Cafe.all();
    }

    async read({params}:HttpContextContract) {
        const {id} = params;
        // const {id} = req.qs();
        return await Cafe.findOrFail(id);
    }

    async upload({request}:HttpContextContract) {
        const file = request.file('file');
        file?.move(Application.publicPath('uploads'))
        return 'uploaded'
    }
}
