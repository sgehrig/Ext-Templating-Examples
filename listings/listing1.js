var order = {
	number: 4711,
	date: new Date(2011, 2, 29, 12, 0, 0),
	status: 'shipped',
	shippingAddress: {
		address: '1 Sandy Way',
	city: 'Tatooine',
	state: 'Tatooine',
		zip: '0815'
	},
	customer: {
		firstName: 'Luke',
		lastName: 'Skywalker',
		email: 'luke@deathstar.com'
	},
	items: [{
		id: 1,
		name: 'Light saber',
		quantity: 5,
		unitPrice: 100.5
	}, {
		id: 2,
		name: 'C3PO',
		quantity: 1,
		unitPrice: 95450.75
	}]
};
