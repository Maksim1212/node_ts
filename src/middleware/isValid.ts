import { Request } from 'express';
import { validationResult } from 'express-validator';
import ValidationError from '../error/ValidationError';

export default function validateData(req: Request): void {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const message: string = errors.array()[0].msg;
        const { value } = errors.array()[0];
        const { param } = errors.array()[0];
        throw new ValidationError(message, value, param);
    }
}
