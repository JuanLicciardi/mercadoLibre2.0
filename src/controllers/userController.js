const {loadUsers, storeUsers} = require ('../data/dbModule')

const {validationResult} = require('express-validator')

const controller = {
	register: (req, res) => {
		return res.render('register')
	},

	login: (req, res) => {
    	return res.render('login')
	},

	processRegister: (req, res) => {
		const errors = validationResult(req);

		if (errors.isEmpty()){
			const users = loadUsers();
			const {regName,regLastName,regEmail,regPass} = req.body;

			const newUser ={
			id : users[users.length - 1] ? users[users.length - 1].id + 1 : 1,
			name : regName.trim(),
			lastname: regLastName.trim(),
			email: regEmail.trim(),
			password : regPass
			}

			const usersModify = [...users,newUser];
			storeUsers(usersModify);
			return res.redirect('/user/login')
		} else {
			return res.render('register',{
				errors : errors.mapped(),
				old:req.body
			})
		}
	}
}
module.exports = controller;