// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register,login,processRegister} = require('../controllers/userController');

const registerValidator = require ('../validations/userValidator')

router
    .get('/register',register)
    .post('/register',registerValidator, processRegister)
    .get('/login',login)

module.exports = router;
