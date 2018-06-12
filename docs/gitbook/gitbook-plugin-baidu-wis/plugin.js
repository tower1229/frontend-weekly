require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config["baidu-wis"] = config["baidu-wis"] || {};
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?' + config["baidu-wis"].token;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    });
});
