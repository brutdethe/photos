(function($) {

    var $body = $('body');

    $(window).on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Assign a random "delay" class to each thumbnail item.
    $('.item.thumb').each(function() {
        $(this).addClass('delay-' + Math.floor((Math.random() * 6) + 1));
    });

    // IE: Fix thumbnail images.
    if (navigator.userAgent.indexOf("MSIE") !== -1 || !!document.documentMode) {
        $('.item.thumb').each(function() {
            var $this = $(this),
                $img = $this.find('img');

            $this
                .css('background-image', 'url(' + $img.attr('src') + ')')
                .css('background-size', 'cover')
                .css('background-position', 'center');

            $img.css('opacity', '0');
        });
    }

})(jQuery);
