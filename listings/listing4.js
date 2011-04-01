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
