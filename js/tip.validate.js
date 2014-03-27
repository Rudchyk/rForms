(function($){
    tooltipValidate = function() {
        this._init = function(element, options) {
            var defaults = {
                el: $(element),
                elMessageClass: "messageTip",
                elMessageBl: 'label',
                fullWidthClass: 'full-width',
                side: "right"
            },
            settings = $.extend(defaults, options);
            settings.el.each(function(){
                var $el = $(this),
                    $elHeight = $el.actual( "outerHeight", { absolute : true } ),
                    $elWidth = $el.actual( "outerWidth", { absolute : true } ),
                    $elData = $el.data("tip_message"),
                    $elNum = $el.data("tip_class"),
                    $elMessage = $("<" + settings.elMessageBl + " class='" + settings.elMessageClass + ' '+ settings.elMessageClass + '-' + $elNum+ "'>" + $elData + "</" + settings.elMessageBl + ">");
                $el
                    .wrap('<div class="'+settings.elMessageClass+'-wrapper '+settings.fullWidthClass+'"></div>')
                    .parent().append($elMessage);
                var $elMessageHeight = $elMessage.actual( "outerHeight"),
                    $elMessageWidth = $elMessage.actual( "outerWidth"),
                    $elMessageTop = (($elHeight/2) - ($elMessageHeight/2)),
                    $elMessageLeft = (($elWidth/2) - ($elMessageWidth/2));
                if (settings.side == "right") {
                    $elMessage
                            .addClass(settings.elMessageClass+"-right")
                            .css("top", $elMessageTop);
                }
                else if (settings.side == "left"){
                    $elMessage
                            .addClass(settings.elMessageClass+"-left")
                            .css("top", $elMessageTop);
                }
                else if (settings.side == "top"){
                    $elMessage
                            .addClass(settings.elMessageClass+"-top")
                            .css("left", $elMessageLeft);
                }
                else if (settings.side == "bottom"){
                    $elMessage
                            .addClass(settings.elMessageClass+"-bottom")
                            .css("left", $elMessageLeft);
                }
            });
        };
    };
    // Launch plugin
    $.fn.tooltipValidate = function( options ){
        return this.each(function(){
            $( this ).data( "tooltipValidate", new tooltipValidate()._init( this, options ) );
        });
    };
})(jQuery);