
define(['jquery', 'lodash', 'text!qs/widgets/qs-fruit-special/template/qs-widget.html'], function ($, _, html) {

    return {

        init: function () {

            var $html = $(_.template(html, { title: this.data.title, foods: this.data.data, favo: '' }));
            this.$el.append($html);

            this.events();

            console.log('Init: fruit special widget', this);

        },

        events: function () {

            this.$el.on('click', '.js-reco-btn', $.proxy(this.doTheShuffle, this));

        },


        doTheShuffle: function () {

            var shuffledData = _.shuffle(this.data.data);

            var $html = $(_.template(html, { title: this.data.title, foods: shuffledData, favo: '' }));
            this.$el.html($html);

        }

    };

});

