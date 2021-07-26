import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User';


export default class AuthController {
    async signUp({request}:HttpContextContract) {
        const params = request.only(['email', 'password', 'name']);
        return await User.create(params);
    }
    async signIn({auth, request}:HttpContextContract) {
        // request에서 email과 password 가져옴
        const email = request.input('email');
        const password = request.input('password');
        // 유효성 검사  + 토큰 발행
        const token = auth.use('api').attempt(email, password);
        // user 정보조회
        const user = await User.findBy('email', email);

        return {
            user,
            token
        };
    }

    async profile() {
        return 'me';
    }
}
