import { LoginUser } from '../../application/login';

type Login = {
    body: {
        email: string;
        password: string;
    };
    token: string;
};

export class LoginController {
    constructor(private loginUser: LoginUser) {}

    async run({ body, token }: Login) {
        console.log(token);
        
        try {
            const { email, password } = body;

            const user = await this.loginUser.run(email, password);

            return {
                code: 200,
                user,
                message: 'Login successful'
            };
        } catch (e) {
            const error = e as Error;

            return {
                code: 500,
                message: error.message
            };
        }
    }
}
