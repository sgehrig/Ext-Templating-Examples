Ext.onReady(function() {
	
	var examplesCount	= 13;

	var href	= window.location.href;

	var hrefParts	= href.match(/(index|example(\d+)).html/);

	var prev;
	if (!hrefParts || hrefParts[1] == 'index') {
		prev	= String.format('example{0}', examplesCount);
	} else {
		prev	= (parseInt(hrefParts[2]) === 1) ? 'index' : String.format('example{0}', parseInt(hrefParts[2]) - 1);
	}
	
	var next;
	if (!hrefParts || hrefParts[1] == 'index') {
		next	= 'example1';
	} else {
		next	= (parseInt(hrefParts[2]) === examplesCount) ? 'index' : String.format('example{0}', parseInt(hrefParts[2]) + 1);
	}

	Ext.select('a[rel=source]').on('click', function() {
		window.location = "view-source:" + href;
	}, this, { stopEvent: true });

	Ext.select('a[rel=prev]').on('click', function() {
		window.location = prev + '.html';
	}, this, { stopEvent: true });

	Ext.select('a[rel=next]').on('click', function() {
		window.location = next + '.html';
	}, this, { stopEvent: true });

	Ext.select('a[rel=index]').on('click', function() {
		window.location = 'index.html';
	}, this, { stopEvent: true });
});