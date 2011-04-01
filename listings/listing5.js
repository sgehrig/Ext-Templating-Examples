var currentTax = 0.15;
var template   = new Ext.XTemplate(
'<h1>Order {number}</h1>',
'<h2>{status} on {date:date("Y-m-d")} to {[this.address(shippingAddress)]}</h2>',
'<h3>Customer</h3>',
'<dl>',
	'<dt>Name</dt>',
	'<dd>{[values.customer.firstName]} {[values.customer.lastName]}</dd>',
	'<dt>Email</dt>',
	'<dd><a href="mailto:{ [values.customer.email]}">{[values.customer.email]}</a></dd>',
'</dl>',
'<table>',
	'<caption>Order items</caption>',
	'<tpl for="items">',
		'<tr <tpl if="this.onlyOne(values)">class="only-one"</tpl>>',
			'<td>{#:this.formatNo}.</td>',
			'<td><a href="detail.php?id={id}">{name}</a></td>',
			'<td>{quantity}</td>',
			'<td>{[this.grossPrice(values.unitPrice)]}</td>',
			'<td>{[this.grossItem(values)]}</td>',
		'</tr>',
	'</tpl>',
		'<tr>',
			'<th colspan="4">Total</th>',
			'<td>{[this.orderSum(values)]}</td>',
		'</tr>',
 '</table>', {
	compiled: true,
	address: function(address) {
		return address.address + ", " + address.zip + " " + address.city + ", " + address.state;
	},
	onlyOne: function(item) {
		return item.quantity == 1;
	},
	formatNo: function(number) {
		return String.leftPad(number.toString(), 5, '0');
	},
	grossPrice: function(price) {
		return price * (1 + currentTax);
	},
	grossItem: function(item) {
		return this.grossPrice(item.unitPrice) * item.quantity;
	},
	orderSum: function(order) {
		var sum = 0;
		Ext.each(order.items, function(item) {
			sum += this.grossItem(item);
		}, this);
		return sum;
	}
});
template.append(Ext.getBody(), order);