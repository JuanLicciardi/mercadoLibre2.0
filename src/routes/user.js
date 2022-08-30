// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {register,login} = require('../controllers/userController');

router
    .get('/register',register)
    .get('/login',login)

module.exports = router;
