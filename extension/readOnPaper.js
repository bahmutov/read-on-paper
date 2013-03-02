// called when Readability script finishes page content processing
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	sendToServer(sender.tab.url, request);
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Read On Paper starts');

	var script = "readability.init();";
	script += "var readableContent = document.getElementById('readOverlay').innerHTML;";
	script += "console.log('readable content', readableContent);";
	script += "chrome.extension.sendRequest(readableContent);";
	chrome.tabs.executeScript(tab.id, {
		code: script
	});
});

function sendToServer(pageUrl, pageContent) {
	console.log('sending page', pageUrl, 'to server');
	var server = 'http://localhost:3500/';
	console.assert(jQuery, 'cannot find jquery');

	jQuery.ajax({
		type: 'POST',
		accepts: 'application/json',
		url: server,
		data: pageContent,
		dataType: 'text'
	}).done(function (data) {
		console.log('finished sending data, received', data);
	}).fail(function (xhr, status, error) {
		console.error('could not send data to server ' + status + error);
	});
}
