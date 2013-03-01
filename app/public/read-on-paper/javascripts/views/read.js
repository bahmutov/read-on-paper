( function( $ ) {
    
  var serverUrl = 'http://192.168.2.6:3500/content';

  /*
   * The Brightcove SDK will fire an "init" event after the document is ready, the device is ready to be interacted with and any
   * locale or markup files have been loaded and populated on the bc.templates object.
   */
  $( bc ).bind( "init", initialize );
  
  function initialize() {
    registerEventListeners();
    fetchContent();
  }
  
  /**
   * Any event listeners we need for this view we setup here.  Note that the elements we are binding to are not yet 
   * created which is why we use the delegate syntax.
   */
  function registerEventListeners() {
  }

  function fetchContent() {
    bc.device.fetchContentsOfURL(serverUrl, function(data) {
      $('#first-page-content').html(data);
    });
  }
  
})( jQuery )