
define([], function () {

  'use strict';

  function register(nodes) {

    var i = 0, l = nodes.length, module, data;

    for (;i<l;i++) {

      (function (node) {

        module = 'qs/' + node.getAttribute('data-widget-type') + '/widget';
        data = node.getAttribute('data-widget-src') ? 'qs/' + node.getAttribute('data-widget-type') + '/data/' + node.getAttribute('data-widget-src') : null;

        require([module, data], function (module, data) {
          module.init(node, data);
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

