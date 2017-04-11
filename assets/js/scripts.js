svg4everybody();

jQuery(document).ready( function() {

    // Makes all videos responsive.
    jQuery(".the-content").fitVids();

    // Shows the number of search results.
    jQuery('#search-input').on('focus', function() {
        jQuery('.show-results-count').addClass('active');
    });

    // Shows available sharing options.
    jQuery('.share').on('click', function() {
        jQuery(this).addClass('active');
    });

    // Hides available sharing options and the number of search results.
    jQuery(document).on('click focus', function(e) {
        if (jQuery(e.target).closest('.share').length === 0 && jQuery(e.target).closest('#search-input').length === 0) {
            jQuery('.show-results-count').removeClass('active');
            jQuery('.results-container').hide();
            jQuery('.share').removeClass('active');
        }
    });

    // Generates a quick link to the current heading section.
    jQuery('.post-content').find(':header').on({
        mouseenter: function() {
            var headingID = jQuery(this).attr('id');
            jQuery(this).append('<a class="heading-marker" href="#' + headingID + '">&#35;</a>');
        },
        mouseleave: function () {
            jQuery(this).children('a').remove();
        }
    });

    // Automatically sets the first post image as a featured image on Facebook and Twitter.
    var firstImg = jQuery('.post.single').find('img:first-of-type');
    var firstImgSrc = firstImg.attr('src');
    if (typeof firstImgSrc !== 'undefined') {
        jQuery('meta[property="og:image"]').attr('content', firstImgSrc);
        jQuery('meta[name="twitter:image"]').attr('content', firstImgSrc);
    }

    // Fixed sidebar or not!
    var steveSidebar = jQuery('.user-profile');
    var steveSidebarPos = steveSidebar.offset().top;

    function fixedSidebar() {
        var scrollPos = jQuery(window).scrollTop();
        if (scrollPos >= steveSidebarPos) {
            steveSidebar.css({'top': scrollPos - 70});
        }
        else if (scrollPos === 0) {
            steveSidebar.css({'top': 0});
        }
    };

    if(steveSidebar.hasClass('fixed')) {
        fixedSidebar();
    }

    jQuery(window).on('scroll', function () {
        if(steveSidebar.hasClass('fixed')) {
            fixedSidebar();
        }
    });

    var viewportWidth = window.innerWidth;

    jQuery(window).on('resize', function() {
        viewportWidth = window.innerWidth;
        if (viewportWidth > 768 && steveSidebar.hasClass('fixed')) {
            fixedSidebar();
        }
    });
});