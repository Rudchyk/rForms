/*select plagin*/
(function($){
    $.fn.selectjs = function(){
        return this.each(function(){
            var settings = {
                key : true,
                selectBox : this,
                activeClass : 'active',
                slctdrop : $('.slctdrop-js')
            },
            dropList = $(settings.selectBox).find(settings.slctdrop);
            $(settings.selectBox).on('click', 'div', function(){
                settings.slctdrop.hide();
                $(this)
                    .toggleClass(settings.activeClass)
                    .next().slideToggle();
                return false;
            });
            dropList.on('click', 'li', function(){
                var thisBox = $(this),
                    thisText = thisBox.text(),
                    select = thisBox.parent().siblings('div');
                select
                    .text(thisText)
                    .removeClass(settings.activeClass)
                    .next().hide().end()
                    .parent().children('input').val(thisText)
                    .trigger('change');
            });
            $(document).click(function(event) {
                if(settings.key && !$(event.target).closest(dropList).length){
                    dropList.hide();
                    $(settings.selectBox).find('div').delay(400).queue(function(nextJs){
                        $(this).removeClass(settings.activeClass);
                        nextJs();
                    });
                    settings.key = true;
                    return;
                }
            });
        });
    };
})($);

/*radio function*/
(function($){
    $.fn.radio = function () {
        return this.each(function(){
            var settings = {
              radio : this,
              virtualRadio : '.radio',
              activeClass : 'active'
            };

            $(settings.radio).on('click', settings.virtualRadio, function() {
                var radioThis = $(this),
                    valueRadio = radioThis.data('radio_value');

                radioThis
                        .parent().find(settings.virtualRadio).removeClass(settings.activeClass)
                        .end().end().addClass(settings.activeClass)
                        .parent().find('input').val(valueRadio);
            });
        });
    };
})($);

/*checkbox function*/
(function($){
    $.fn.checkbox = function () {
        return this.each(function(){
            var settings = {
                checkbox : this,
                activeClass : 'active'
            };
            $(settings.checkbox).on('change', 'input:checkbox', function(){
                $(this).parent().toggleClass(settings.activeClass);
            });
        });
    };
})($);

/*file function*/
(function($){
    $.fn.file = function () {
        return this.each(function(){
            var settings = {
                file : this,
                field : '.fileload-field-js',
                button: '.fileload-button-js'
            };
            $(settings.file).on('change', 'input:file', function(){
                var $ThisEl = $(this),
                    $fileResult = $ThisEl.val();
                $ThisEl.parent().find(settings.field).text($fileResult);
            })
            .on('click', settings.button, function(){
                $(this).siblings('input').click();
            });
        });
    };
})($);