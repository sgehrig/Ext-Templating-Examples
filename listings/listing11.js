var win = new Ext.Window({
	width: 300,
	height: 200,
	autoScroll: true,
	title: "Purchase order",
	tpl: template,
	data: order
});
win.show();
