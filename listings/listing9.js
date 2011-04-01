var menuTemplate = new Ext.XTemplate(
'<ul>',
'<tpl for=".">',
	'<li><a href="/{id}">{name}</a>',
	'<tpl if="values.children && values.children.length &gt; 1">',
		'{[this.renderMenu(values.children)]}',
	'</tpl>',
	'</li>',
'</tpl>',
'</ul>', {
	compiled: true,
	renderMenu: function(items) {
		return this.apply(items);
	}
});
menuTemplate.append(Ext.getBody(), menu);