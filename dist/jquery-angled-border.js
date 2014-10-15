/**
 * jquery-angled-border - Add angled borders to anything!
 * @version v0.0.1
 * @link https://github.com/stursby/jquery-angled-borders
 * @license MIT
 * @author Charlie Hield
 */
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