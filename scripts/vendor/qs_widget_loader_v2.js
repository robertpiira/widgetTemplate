
define([], function () {

  'use strict';

  function register(nodes) {

    var i = 0, l = nodes.length, widget, data;

    for (;i<l;i++) {

      (function (node) {

        widget = 'qs/widgets/' + node.getAttribute('data-widget-type') + '/widget';
        data = node.getAttribute('data-widget-src') ? 'qs/widgets/' + node.getAttribute('data-widget-type') + '/data/' + node.getAttribute('data-widget-src') : null;

        require([widget, data, 'vendor/qs_widget_model'], function (widget, data, Model) {

          Model.prototype = widget;
          new Model(node, data).init();

        });

      })(nodes[i]);

    }

  }

  function init(nodes) {
    register(nodes);
  }

  return {
      init: init
  };

});

