// VALIDATION
const Joy = require("@hapi/joi");

// Register Validation
const registerValidation = data => {
    const schema = {
        name: Joy.string().min(6).required(),
        email: Joy.string().min(6).required().email(),
        password: Joy.string().min(6).required(),
    };
    return Joy.validate(data, schema);
;}

// Register Validation
const loginValidation = data => {
    const schema = {
        email: Joy.string().min(6).required().email(),
        password: Joy.string().min(6).required(),
    };
    return Joy.validate(data, schema);
;}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
