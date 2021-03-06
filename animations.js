$(document).ready(function() {

    $('[data-nav-link]').hover(
        function(e) {
            if ($(e.target) == this) {
                var $navLink = $(e.target);
            } else {
                var $navLink = $(e.target).closest($('[data-nav-link]'));
            }

            $navLink.addClass('link-highlight');
        }, function(e) {
            if ($(e.target) == this) {
                var $navLink = $(e.target);
            } else {
                var $navLink = $(e.target).closest($('[data-nav-link]'));
            }

            $navLink.removeClass('link-highlight');
        }
    );

    $('[data-nav-link]').focus( function(e) {
        if ($(e.target) == this) {
            var $navLink = $(e.target);
        } else {
            var $navLink = $(e.target).closest($('[data-nav-link]'));
        }

        $navLink.addClass('link-highlight');
    });

    $('[data-nav-link]').focusout( function(e) {
        if ($(e.target) == this) {
            var $navLink = $(e.target);
        } else {
            var $navLink = $(e.target).closest($('[data-nav-link]'));
        }

        $navLink.removeClass('link-highlight');
    });

    $('[data-nav-link]').on('click', function(e) {
        if ($(e.target) == this) {
            var destination = $(e.target).attr('href');
        } else {
            var destination = $(e.target).closest($('[data-nav-link]')).attr('href');
        }

        e.preventDefault();
        $('html,body').animate({scrollTop: $(destination).offset().top-36}, 'slow');
    });

    function positionHighlight(options) {

        $(window).scroll(function() { 
            var sPos = $(window).scrollTop();

            if ($(options.section).position().top-options.aOffset <= sPos && $(options.section).position().top + $(options.section).height()+options.bOffset > sPos) {
                $(options.element).addClass(options.specialClass);
            } else {
                $(options.element).removeClass(options.specialClass);
            };
        });
    };

    positionHighlight({ section:'#resume-area', element:'.primary-nav__item--resume', specialClass:'item-highlight', aOffset:288, bOffset:166});
    positionHighlight({ section:'#animals-area', element:'.primary-nav__item--animals', specialClass:'item-highlight', aOffset:288, bOffset:166});
    positionHighlight({ section:'#pedals-area', element:'.primary-nav__item--pedals', specialClass:'item-highlight', aOffset:288, bOffset:166});
    positionHighlight({ section:'#design-area', element:'.primary-nav__item--design', specialClass:'item-highlight', aOffset:288, bOffset:166});

    positionHighlight({ section:'#resume-area', element:'.primary-nav', specialClass:'primary-nav--yellow', aOffset:40, bOffset:166});
    positionHighlight({ section:'#animals-area', element:'.primary-nav', specialClass:'primary-nav--red', aOffset:40, bOffset:166});
    positionHighlight({ section:'#pedals-area', element:'.primary-nav', specialClass:'primary-nav--green', aOffset:40, bOffset:166});
    positionHighlight({ section:'#design-area', element:'.primary-nav', specialClass:'primary-nav--purple', aOffset:40, bOffset:166});

    $('[data-gallery-frame]').on('click', function(e) {
        var $frame = $(e.target);

        $frame.clone().addClass('gallery__frame--zoom').appendTo('body')
        .on('click', function(e) {
            $(e.target).remove()
        });
    });
});
