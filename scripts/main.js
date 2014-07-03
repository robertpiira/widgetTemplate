
require.config({
    paths: {
        jquery: 'vendor/jquery',
        lodash: 'qs/bower_components/lodash/dist/lodash.min',
        qsWidgetLoader: 'qs/qs_widget_loader_v2',
        qsWidgetModel: 'qs/qs_widget_model',
        qs: 'qs'
    }
});


require(['jquery', 'qsWidgetLoader'], function($, qsWidgetLoader) {

    var nodes = $('[data-widget-type]');

    qsWidgetLoader.init(nodes);

});


// in terminal run:
// node r.js -o build.js
// ...to build a main-built.js