var store = new Ext.data.ArrayStore({
	idIndex: 0,
	fields: [
		{ name: 'id', type: 'int', mapping: 0 },
		{ name: 'login', type: 'string', mapping: 1 },
		{ name: 'nick', type: 'string', mapping: 2, useNull: true },
		{ name: 'email', type: 'string', mapping: 3 },
		{ name: 'gravatar', type: 'string', mapping: 4 }
	],
	data: [
		[1, 'john', 'Johnny', 'john@example.com', '…'],
		[2, 'jack', null, 'jack@example.com', '…'],
		[3, 'jane', 'LA69', 'jane@example.com', '…'],
		[4, 'jim', 'Jimmy', 'jim@example.com', '…']
	]
});

var combo = new Ext.form.ComboBox({
	typeAhead: false,
	forceSelection: true,
	editable: false,
	triggerAction: 'all',
	mode: 'local',
	store: store,
	valueField: 'id',
	displayField: 'email',
	tpl: '<tpl for="."><div class="x-combo-list-item" style="overflow: auto;">{email} [{login}]<tpl if="nick">&quot;{nick}&quot;</tpl><div style="float: left; width: 50px; height: 50px;"><img src="{gravatar}"/></div></div></tpl>'
});
combo.render(Ext.getBody());
