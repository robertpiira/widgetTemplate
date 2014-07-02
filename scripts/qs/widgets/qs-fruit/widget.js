
define(['jquery', 'underscore', 'text!qs/qs-fruit/template/qs-widget.html'], function ($, _, html) {


    var _this;

    var fruitWidget = function (el, data) {

        this.data = data;
        this.el = el;
        this.$el = $(el);

    };


    fruitWidget.prototype = {

        boostrap: function () {

            var $html = $(_.template(html, { title: 'underscore template!', foods: this.data, favo: '' }));
            this.$el.append($html);

            this.events();

        },

        events: function () {

            this.$el.on('click', '.js-reco-btn', $.proxy(this.pickFood, this));

        },


        pickFood: function () {

            var favoIndex = _.random(0, this.data.length - 1);
            var favoFood = this.data[favoIndex];

            alert(favoFood);

        }

    };


    return {

        init: function (el, data) {

            console.dir(el);

            var widget = new fruitWidget(el, data);

            widget.boostrap();

        }

    };

});

