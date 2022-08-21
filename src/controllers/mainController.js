
const {loadProducts} = require ('../data/dbModule')

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		let products=loadProducts();
		let productsInSale = products.filter(product => product.category === "in-sale");
		let productsVisited = products.filter(product => product.category === "visited");
		
		return res.render('index',{
			productsVisited,
			productsInSale, 
			toThousand
		})
	},
	search: (req, res) => {
		return res.render('')
	},
};

module.exports = controller;
