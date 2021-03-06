$(document).ready(function() {

    var result = $('#result');

    if( /iPhone|iPad|iPod/i.test(navigator.userAgent) ) {
        out('IOS DEVICE');
    } else if (/Android/i.test(navigator.userAgent)) {
        out('ANDROID DEVICE');
    }

    var links = {
        web: 'https://www.spree.co.za',
        scheme: 'spree://'
    };

    var $linkWeb = $('#link-web');
    var $linkScheme = $('#link-scheme');

    out('APP SCRIPT READY 2<br />');
    
    $linkWeb.on('click', function(evt) {
        // evt.preventDefault();
        // out('WEB LINK CLICKED');
        // out(window.location = links.web);
        out('WELL');
        // setTimeout(function() {
        //         window.location = 'https://play.google.com/store/apps/details?id=com.spreeza.shop&hl=en';
        //     }, 30);
        window.location.href = 'market://details?id=com.spreeza.shop';
    });

    $linkScheme.on('click', function(evt) {
        evt.preventDefault();
        out('WEB SCHEME CLICKED');
        out(window.location = links.scheme);
    });

    /**
     * FUNCTIONS
     */
    function out(message) {
        result.append(message + "<br />");
    }
});