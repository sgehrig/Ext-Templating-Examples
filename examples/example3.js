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
	'<tpl for="items">',
		'<tr>',
			'<tpl if="xindex == 1"><td rowspan="{[xcount]}">Items</td></tpl>',
			'<td>{#}.</td>',
			'<td>{quantity} x {name} on {parent.date:date("Y-m-d")}</td>',
		'</tr>',
	'</tpl>',
 '</table>'
);
template.append(Ext.getBody(), order);
