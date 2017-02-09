$(document).ready(function() {

    var openApp = $('#open');
    var viewApp = $('#view');
    var result = $('#result');

    result.append('APP READY<br />');

    // launch app from device
    var intentOpenApp = 'intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;end';

    // view app from google store
    var intentViewApp = 'intent://details?id=com.spreeza.shop&amp;url=spree.co.za#Intent;scheme=market;action=android.intent.action.VIEW;package=com.spreeza.shop;end';

    /**
     * EVENTS
     */
    openApp.on('click', function(evt) {
        result.append('OPENING...<br />');
        window.location = intentOpenApp;
    });
    viewApp.on('click', function(evt) {
        result.append('VIEWING...<br />');
        window.location = intentViewApp;
    });

});
