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

var template = new Ext.XTemplate(
'<table>',
	'<caption>Order #{number}</caption>',
	'<tpl for="items">',
		'<tr>',
			'<td>{#}.</td>',
			'<td>{name}</td>',
			'<td>',
				'<tpl if="quantity &gt; 1"><em>{quantity}</em></tpl>',
				'<tpl if="quantity &lt; 2">{quantity}</tpl>',
			'</td>',
			'<td>{unitPrice*1.15}</td>',
			'<td>{[values.unitPrice * 1.15 * values.quantity]}</td>',
		'</tr>',
	'</tpl>',
'</table>'
);
template.append(Ext.getBody(), order);
