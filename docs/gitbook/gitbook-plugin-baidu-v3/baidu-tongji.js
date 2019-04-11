require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        _hmt.push(['_trackEvent', location.pathname, 'page.change', '', '']);
    });

    gitbook.events.bind("exercise.submit", function() {
        // do something
    });
});