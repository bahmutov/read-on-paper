// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	sendToServer(tab.url, '');
});

function sendToServer(pageUrl, pageContent) {
	console.log('sending page', pageUrl, 'to server');
	var server = 'http://localhost:3500/';
	console.assert(jQuery, 'cannot find jquery');
	jQuery.ajax({
		type: 'POST',
		accepts: 'application/json',
		url: 'http://localhost:3500/',
		data: JSON.stringify({
			url: pageUrl,
			content: pageContent
		}),
		dataType: 'json'
	}).done(function (data) {
		console.log('finished sending data, received', data);
	}).fail(function (xhr, status, error) {
		console.error('could not send data to server ' + status + error);
	});
}
