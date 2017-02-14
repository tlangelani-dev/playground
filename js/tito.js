$(document).ready(function() {

    var result = $('#result');

    var links = {
        web: 'https://www.spree.co.za',
        scheme: 'spree://'
    };

    var $linkWeb = $('#link.web');
    var $linkScheme = $('#link.scheme');

    out('APP SCRIPT READY 1<br />');
    
    $linkWeb.on('click', function(evt) {
        evt.preventDefault();
        window.location = links.web;

    });

    $linkScheme.on('click', function(evt) {
        evt.preventDefault();
        window.location = links.scheme;
    });

    /**
     * FUNCTIONS
     */
    function out(message) {
        result.append(message);
    }
});