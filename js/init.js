if (head.browser.ie && head.browser.version < 8) {
    location.replace("ie7/ie7.html");
}

if (head.browser.ie && head.browser.version < 9) {
    head.load("js/html5.js");
}

head.js(
    "js/jquery-1.10.2.min.js",
    "js/jquery.actual.min.js",
    "js/rform.min.js",
    "js/tabs.js",
    "js/totop.js",
    "js/modal.js",
    "js/tip.validate.js",
    "js/jquery.validate.min.js",
    // "js/scripts.js",
    function() {
        /*radio*/
        $('.radio-box-js').radio();
        /*checkbox*/
        $('.checkbox-js').checkbox();
        /*select*/
        $('.select-js').selectjs();
        /*file*/
        $('.fileload').file();
        /*toTop*/
        $('.toTop-js').toTop();
        /*tabs*/
        $('.tabs-js').tabs();
        /*tooltip*/
        $('.tip-js').tooltipValidate();
        $('.tip2-js').tooltipValidate({
            side: "left"
        });
        $('.tip3-js').tooltipValidate({
            side: "bottom"
        });
        $('.tip4-js').tooltipValidate({
            side: "top"
        });
        /*modal*/
        $('.popup-link-js').modal();
/*
--jQuery Validation Plugin--
1. This class is added to invalid elements.
2. This class is added to an element after it was validated and considered valid.
3. This function works when invalid fields.
4. This function works when valid fields.
5. The errorPlacement callback function is used to place the error message label elements on the page. If you simply put a return false within this callback function, no error messages will be placed anywhere.
*/
        $('.form').validate({
            errorClass: "error", /*1*/
            validClass: "valid", /*2*/
            highlight: function(element, errorClass, validClass) { /*3*/
                var $el = $(element),
                    $tipClass = $el.data('tip_class'),
                    $tip = $('.messageTip-'+$tipClass);
                $el
                    .addClass(errorClass)
                    .removeClass(validClass);
                $tip
                    .attr('for', element.id)
                    .show();
            },
            unhighlight: function(element, errorClass, validClass) { /*4*/
                var $el = $(element),
                    $tipClass = $el.data('tip_class'),
                    $tip = $('.messageTip-'+$tipClass);
                $el
                    .removeClass(errorClass)
                    .addClass(validClass);
                $tip.hide();
            },
            errorPlacement: function(){ /*5*/
                return false;
            }
        });
    }
);

if (head.browser.ie && head.browser.version < 10) {
    head.js(
        "js/placeholder.min.js",
        function() {
            $("input[placeholder], textarea[placeholder]").textPlaceholder();
        }
    );
}

if (head.browser.opera) {
    head.ready(document, function () {
        function removePlaceholder(e) {
            var el = e.target;
            if (!el.placeHolderRemoved) {
                el.placeHolderRemoved = true;
                el.value = "";
                el.removeAttribute("data-operaplaceholder");
            }
        }
        var inputs = document.getElementsByTagName("input");
        for (var i = 0; i < inputs.length; ++i) {
            var el = inputs[i],
                ph = el.getAttribute("placeholder");
            if (ph && !el.hasAttribute("value")) {
                el.value = ph;
                el.removeAttribute("placeholder");
                el.setAttribute("data-operaplaceholder", "");
                el.addEventListener("click", removePlaceholder, false);
            }
        }
    });
}