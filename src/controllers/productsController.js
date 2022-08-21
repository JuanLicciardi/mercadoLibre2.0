const {loadProducts, storeProducts} = require ('../data/dbModule');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		let products = loadProducts()
		return res.render('products', {
			products,
			toThousand
		})
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let products = loadProducts();
		let product = products.find(product => product.id === +req.params.id);
		return res.render ('detail', {
			product,
			toThousand
		})
	},

	// Create - Form to create
	create: (req, res) => {
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {

		const {name, price, discount, description, category} = req.body;
		let products = loadProducts()
		const newProduct = {
			id : products[products.length -1].id +1,
			name: name.trim(),
			price: +price,
			description : description.trim(),
			discount : +discount,
			category,
			image : 'default-image.png'
		}
		productsModify = [...products,newProduct];
		storeProducts(productsModify);

		return res.redirect('/products');
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;