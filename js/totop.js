/*toTop function*/
(function($){
    toTop = function() {
        this._init = function(element, options) {
            var defaults = {
                this: $(element),
                min: 200,
                inDelay:400,
                outDelay:600,
                scrollSpeed: 600,
                easingType: 'linear'
            },
            settings = $.extend(defaults, options),
            sdLoad = $(window).scrollTop();

            if ( sdLoad > settings.min )
                settings.this.fadeIn(settings.inDelay);
            else
                settings.this.fadeOut(settings.outDelay);

            settings.this.on('click', function(){
                $('html, body').animate({scrollTop:0}, settings.scrollSpeed, settings.easingType);
            });

            $(window).scroll(function() {
                var sd = $(window).scrollTop();

                if ( sd > settings.min)
                    settings.this.fadeIn(settings.inDelay);
                else{
                    settings.this.fadeOut(settings.outDelay);
                }
            });
        };
    };
    // Launch plugin
    $.fn.toTop = function(options){
        return this.each(function(){
             $(this).data( "toTop", new toTop()._init( this, options ) );
         });
    };
})($);