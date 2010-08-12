


requireCss = function(cssFile, testFunction, loadCallback) {
    $('<link href="'+cssFile+'" rel="stylesheet" type="text/css">').appendTo('head');
    var testInterval;
    testInterval = setInterval(function() {
        if ( testFunction() ) {
            clearInterval(testInterval);
            loadCallback();
        }
    }, 100);
}