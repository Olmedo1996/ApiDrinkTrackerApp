import { IJWT } from "./interfaces/IJWT.js";
import jwt from 'jsonwebtoken';

export class JWT implements IJWT { 

    sign(payload: string): string {
        return jwt.sign({ payload }, 'secret', { expiresIn: '1h' });
    }

    verify(token: string): string {
        return jwt.verify(token, 'secret') as string;
    }
}