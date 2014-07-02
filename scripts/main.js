
require.config({
    paths: {
        jquery: 'lib/jquery',
        underscore: 'lib/underscore',
        dn: 'scripts/modules',
        qs: 'qs/widgets'
    },
    shim: {
        underscore: {
            exports: '_'
        }
    }
});


require(['jquery', 'myLib/qs_widget_loader_v2'], function($, qsLoader) {

    var nodes = $('[data-widget-type]');

    qsLoader.init(nodes);

});


// in terminal run:
// node r.js -o build.js
// ...to build a main-built.js