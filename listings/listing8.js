var menu = [
	{ id: 'home', name: 'Home' },
	{ id: 'news', name: 'News' },
	{ id: 'products', name: 'Products', children: [
		{ id: 'products.apple', name: 'Apple', children: [
			{ id: 'products.apple.iphone', name: 'iPhone' },
			{ id: 'products.apple.ipad', name: 'iPad' },
			{ id: 'products.apple.imac', name: 'iMac' },
			{ id: 'products.apple.macbook', name: 'MacBook' }
	]},
		{ id: 'products.hp', name: 'HP' },
		{ id: 'products.dell', name: 'Dell' }
 	]},
	{ id: 'contact', name: 'Contact', children: [
		{ id: 'contact.mail', name: 'Mail' },
		{ id: 'contcat.phone', name: 'Phone' }
	]}
];
