// tabs
(function($){
tabs = function() {
    this._init = function(element, options) {
        var defaults = {
            this: $(element),
            tabCurrent : 'tab-current',
            tabSection : '.tabs-section-js',
            tabContent : '.tab-content-js',
            inDelay : 150
        },
        settings = $.extend(defaults, options);

        settings.this.delegate('li:not(.'+settings.tabCurrent+')', 'click', function() {
            var $el = $(this);
            $el
                .addClass(settings.tabCurrent)
                .siblings().removeClass(settings.tabCurrent)
                .parents(settings.tabSection).find(settings.tabContent).eq($el.index()).fadeIn(settings.inDelay)
                .siblings(settings.tabContent).hide();
        });
    };
};
    // Launch plugin
    $.fn.tabs = function(options){
        return this.each(function(){
             $(this).data( "tabs", new tabs()._init( this, options ) );
         });
    };
})($);
// end tabs