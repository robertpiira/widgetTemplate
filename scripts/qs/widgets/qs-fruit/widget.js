
define(['jquery', 'underscore', 'text!qs/widgets/qs-fruit/template/qs-widget.html'], function ($, _, html) {

    return {

        init: function () {

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


});

