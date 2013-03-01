# Read On Paper

## Installation

* once:
	* Install the unpacked Chrome extension
	* Install Nodejs
	* Run `npm i` inside server folder
* every time:
	* start nodejs server using `node index.js` in server folder
	* if warning dialog appears, allow nodejs to run.

Relay server starts by default at port 3500

## Run

* When browsing using Chrome a page you would like to read on your tablet, click paper 
extension icon (looks like a page). 
* Page will be processed by the Readability script and shown in an overlay. 
* Cleaned up page content will be sent to the relay local server.
* Open url http://<you computer ip>:3500/ from your tablet. The page should appear 
in a readable format, looking like it was printed on paper.

## Optional cross platform mobile app

* The demo includes Brightcove AppCloud mobile app
	* Start app service using node `node app\app.js`
	* Open browser url http://<you computer ip>:3773/
	* Using mobile Brightcove Workshop app, snap QR code to open the page.
	* Click on the default **read** tab, the page content should appear.

