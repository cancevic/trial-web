jQuery(document).ready(function() {
   $('.story')                            // Filter: .stories
        .find('.news')                     // Filter: .stories .news
            .hide()                        // Hide all
            .end()                         // End current filter
        .find('.title')                    // Filter: .stories .title
            .click( function(){            // Set the onclick action
                $(this).siblings('.news')  // Filter: .stories .news (sibling of .title)
                .slideToggle();            // Toggle visibility
            });
});

/* https://stackoverflow.com/questions/23851607/how-to-hide-paragraph-and-make-visible-with-heading-click-using-javascript - bcorso*/