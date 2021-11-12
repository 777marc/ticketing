import { ValidationError } from "express-validator";

export class DatabaseConnetionError extends Error {

    reason = 'Error connecting to datbase';
    
    constructor() {
        super();

        // only because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConnetionError.prototype)
    }

}