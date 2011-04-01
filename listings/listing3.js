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
