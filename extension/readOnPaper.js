chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	console.log('got callback from', sender.tab.url);
	console.log('got data', request);
	// sendToServer(sender.tab.url, _.escape(request));
	sendToServer(sender.tab.url, request);
});

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// sendToServer(tab.url, '');
	console.log('executing readibility.init');
	/*
	chrome.tabs.executeScript(tab.id, {file: "lib/readability-0.5.1/readabilitySimple.js"},
		function(results) {
			console.log('readability has finished');
		}
	);
*/
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
		url: 'http://localhost:3500/',
		//data: JSON.stringify({
		//	url: pageUrl,
		//	content: pageContent
		//}),
		//dataType: 'json'
		data: pageContent,
		dataType: 'text'
	}).done(function (data) {
		console.log('finished sending data, received', data);
	}).fail(function (xhr, status, error) {
		console.error('could not send data to server ' + status + error);
	});
}
