(function($) {

    'use strict';

    $.fn.angledBorder = function(opts) {

        // default configuration
        var config = $.extend({}, {
            opt1: null
        }, opts);

        // main function
        function DoSomething(e) {
        }

        // initialize every element
        this.each(function() {
            DoSomething($(this));
        });

        return this;
    };

    // start
    $(function() {
        $("#select").PlugInName();
    });



})(jQuery);