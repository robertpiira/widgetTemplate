
require.config({
    paths: {
        jquery: 'vendor/jquery',
        underscore: 'vendor/underscore',
        qsWidgetLoader: 'vendor/qs_widget_loader_v2',
        dust: 'qs/bower_components/dustjs/dist/dust-core-0.3.0.min',
        qs: 'qs'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        dust: {
            exports: 'dust'
        }
    }
});


require(['jquery', 'qsWidgetLoader'], function($, qsWidgetLoader) {

    var nodes = $('[data-widget-type]');

    qsWidgetLoader.init(nodes);

});


// in terminal run:
// node r.js -o build.js
// ...to build a main-built.js