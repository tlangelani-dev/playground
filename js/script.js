$(document).ready(function() {

    var openApp = $('#open');
    var viewApp = $('#view');
    var result = $('#result');

    // android settings
    var scheme = 'com.spreeza.shop';
    var package = 'com.spreeza.shop';

    out('APP READY<br />');

    // launch app from device
    var intentOpenApp = 'intent://scan/#Intent;scheme='+scheme+';package='+package+';end';

    // view app from google store
    var intentViewApp = 'intent://details?id='+package+'&amp;url=spree.co.za#Intent;scheme='+scheme+';action=android.intent.action.VIEW;package='+package+';end';

    /**
     * EVENTS
     */
    openApp.on('click', function(evt) {
        out('OPENING...<br />');
        out(window.location = intentOpenApp);
    });
    viewApp.on('click', function(evt) {
        out('VIEWING...<br />');
        out(window.location = intentViewApp);
    });

    /**
     * FUNCTIONS
     */
    function out(message) {
        result.append(message);
    }

});
