
define(['jquery', 'underscore', 'text!qs/qs-fruit-special/template/qs-widget.html'], function ($, _, html) {


    var _this;

    var fruitWidget = function (el, data) {

        this.data = data;
        this.el = el;
        this.$el = $(el);

    };


    fruitWidget.prototype = {

        boostrap: function () {

            var $html = $(_.template(html, { title: this.data.title, foods: this.data.data, favo: '' }));
            this.$el.append($html);

            this.events();

        },

        events: function () {

            this.$el.on('click', '.js-reco-btn', $.proxy(this.pickFood, this));

        },


        pickFood: function () {

            var shuffledData = _.shuffle(this.data.data);

            var $html = $(_.template(html, { title: this.data.title, foods: shuffledData, favo: '' }));
            this.$el.html($html);

        }

    };


    return {

        init: function (el, data) {

            var widget = new fruitWidget(el, data);

            widget.boostrap();

        }

    };

});

