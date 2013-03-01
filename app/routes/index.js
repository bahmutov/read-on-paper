var wrench = require('wrench');
var path = require('path');
var fs = require('fs');
var sys = require('util');

/*
 * GET home page.
 */

function getNameFromPath( path ) {
  if( path.indexOf( "\\" ) > -1 ) {
    return path.split( "\\manifest.json" )[0].split( "public\\" )[1];
  } else {
    return path.split( "/manifest.json" )[0];
  }
}

exports.index = function(req, res) {
  var listOfApps = wrench.readdirSyncRecursive( path.join( global.baseDir, 'public') );
  var apps = [];
  for( var i=0, len=listOfApps.length; i<len; i++) {
    if( listOfApps[i].indexOf( "manifest.json" ) > -1 ) {
      apps.push( { name: getNameFromPath( listOfApps[i] ) } );
    }
  }

  res.render(
    'index', 
    { 
      title: 'App Cloud',
      apps: apps
    } 
  );
};

exports.scan = function( req, res ) {
  var app = req.params.app;
  var manifestURL = "http://" + req.headers.host + "/" + app + "/manifest.json";
  var url = "https://chart.googleapis.com/chart?cht=qr&choe=UTF-8&chs=274x274&chld=L|0&chl=" + manifestURL;
  var manifestFile = fs.readFileSync( path.join( global.baseDir, "public", app, "manifest.json" ), "utf-8" );
  try {
    var manifest = JSON.parse( manifestFile );

    res.render(
      "scan",
      {
        title: "App Cloud",
        app: app,
        manifestPath: manifestURL,
        qrCodeImage: url,
        views: manifest.views
      }
    );
  } catch( e ) {
    res.render( "error", { title: "App Cloud Error Page"} );
  }
}