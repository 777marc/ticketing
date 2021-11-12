import { CustomError } from "./custom-error";

export class DatabaseConnetionError extends CustomError {

    statusCode = 500;
    reason = 'Error connecting to database';
    
    constructor() {
        super('Error connecting to database');

        // only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnetionError.prototype)
    }

    serializeErrors() {
        return [{ message: this.reason }];
    }

}