/**
 * @exports
 * @extends Error
 */
class ValidationError extends Error {
    /**
     * @constructor
     * @param {object} message
     */
    value: string;

    param: string;

    constructor(message: string, value?: string, param?: string) {
        super();
        this.value = value;
        this.param = param;
        this.message = message;
        this.name = 'E_MISSING_OR_INVALID_PARAMS';
    }
}

export default ValidationError;
