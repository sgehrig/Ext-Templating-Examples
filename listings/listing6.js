var addressTemplate = new Ext.XTemplate(
	'<address>{address}, {zip} {city}, <b>{state}</b></address>',
	{ compiled: true }
);
// same template as in Listing 5
var currentTax = 0.15;
var template   = new Ext.XTemplate(
…, {
	compiled: true,
	address: function(address) {
		return addressTemplate.apply(address);
	},
	…
});
template.append(Ext.getBody(), order);
