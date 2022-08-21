
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
		
		let {keywords} = req.query;
		let products = loadProducts();
		let result = products.filter(product => product.name.toLowerCase().includes(keywords.toLowerCase()))
		
		return res.render('results',{
			result,
			keywords,
			toThousand
		})
	},
};

module.exports = controller;
