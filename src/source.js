;(function($) {

    'use strict';

    $.fn.angledBorder = function (options) {

        // defaults
        var defaults = {

            height: 30, // in px
            color: 'inherit', // hex value
            direction: 'LTR', // or RTL
            position: 'bottom' // or top

        }, settings = $.extend({}, defaults, options);

        this.each(function () {

            // cache $(this) var
            var el = $(this);
            var o = $.extend(true, {}, settings, el.data());

            // does element have position relative or absolute?
            if (el.css('position') === 'static') {
                el.css('position', 'relative');
            }

            // attempt to auto match border color to parent background color
            el.css({ borderColor: el.css('background-color')});

            // create border element
            var border = $('<span class="angled-border"/>');

            // base CSS
            var properties = {
                "content": "",
                "position": "absolute",
                "display": "block",
                "width": "100%",
                "background": "transparent",
                "border-width": el.outerWidth(),
                "height": o.height
            };

            // change direction to CSS value
            var direction;

            switch(o.direction.toLowerCase()) {
                case 'ltr':
                    direction = 'left';
                    break;
                case 'rtl':
                    direction = 'right';
                    break;
            }

            // set dynamic properties
            properties['border-' + direction + '-color'] = o.color;
            properties['border-' + direction + '-style'] = 'solid';
            properties['border-' + o.position] = o.height + "px solid transparent";
            properties['' + o.position] = -o.height;
            properties['' + direction] = '0px';
            // properties['right'] = -padding + 'px';

            // set all the properties
            border.css(properties);

            // set border width on window resize
            $(window).resize(function() {
                var el = $(border);
                var $parent = el.parent();
                var parentWidth = $parent.outerWidth();
                var resizeProperties = {};
                resizeProperties['border-' + direction + '-width'] = parentWidth;
                $(border).css(resizeProperties);
            });

            // append styled border
            el.append(border);

        });

    return this;

    };

})(jQuery);