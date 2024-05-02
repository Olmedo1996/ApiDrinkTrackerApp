import type { IUser } from '../domain/IUser.js';
import type { IHash } from '../../services/interfaces/IHash.js';
import { IJWT } from '../../services/interfaces/IJWT.js';

export class LoginUser {
    constructor(
        private userRepository: IUser,
        private hash: IHash,
        private jwt: IJWT
    ) { }

    async run(email: string, password: string) {
        const user = await this.userRepository.find(email);
        if (!user) throw new Error('User not fount');

        const isPasswordValid = await this.hash.compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        const token = this.jwt.sign(user.id);
        user.setToken(token);

        return user
    }
}
