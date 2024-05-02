import bcrypt from 'bcrypt';
import { IHash } from './interfaces/IHash.js';

export class Hash implements IHash {
    hash(password: string) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hash(password, salt);
        return hash;
    }

    compare(password: string, hash: string) {
        return bcrypt.compare(password, hash);
    }
}