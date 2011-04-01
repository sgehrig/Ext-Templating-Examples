var template = new Ext.XTemplate(
'<table>',
	'<tpl for=".">',
		'<tr>',
			'<td>{#}.</td>',
			'<td>{name}</td>',
			'<td>{quantity}</td>',
		'</tr>',
	'</tpl>',
 '</table>'
);
template.append(Ext.getBody(), order.items);
