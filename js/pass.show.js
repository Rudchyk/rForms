// passShow
(function($){

function passFn(block,type,text,class1,class2){
    var $el = block,
    $field = $el.parent().find('input');

    $field.attr('type', type);
    $el
        .text(text)
        .removeClass(class1)
        .addClass(class2);
}

passShow = function() {

    this._init = function(element, options) {

        var defaults = {
            $this: $(element),
            showText: 'show',
            hideText: 'hide',
            showClass: 'pass-show',
            hideClass: 'pass-hide',
            btnClass: 'pass-btn-js',
            passType: 'password',
            textType: 'text'
        },
        settings = $.extend(defaults, options),
        $passField = settings.$this.find('input'),
        $passBtn = settings.$this.find('.'+settings.btnClass);

        if ($passField.attr('type', settings.passType)) {
            $passBtn
                    .addClass(settings.showClass)
                    .text(settings.showText);
        };

        settings.$this
        .on('click', '.'+settings.showClass, function(){
            passFn($(this),settings.textType,settings.hideText,settings.showClass,settings.hideClass);
        })
        .on('click', '.'+settings.hideClass, function() {
            passFn($(this),settings.passType,settings.showText,settings.hideClass,settings.showClass);
        });
    };
};
    // Launch plugin
    $.fn.passShow = function(options){
        return this.each(function(){
             $(this).data( "passShow", new passShow()._init( this, options ) );
         });
    };

})(jQuery);
// end passShow