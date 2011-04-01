…
var template   = new Ext.XTemplate(
'<h1>Order {number}</h1>',
'<h2>{status} on {date:date("Y-m-d")} to {[this. addressTemplate.apply(shippingAddress)]}</h2>',
…, {
	compiled: true,
	addressTemplate: addressTemplate,
	…
});
…
