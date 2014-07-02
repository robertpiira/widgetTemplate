
define([], function () {

  'use strict';

  var WidgetModel = function (el, data) {

    this.data = data;
    this.el = el;
    this.$el = $(el);

  };

  return WidgetModel;

});

