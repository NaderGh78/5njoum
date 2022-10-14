/*global console*/
$(document).ready(function () {
    "use strict";

    //make the all header content make the 100vh toghter
    var topBotom = $('.topBottomHeader');
    var topHead = $('.topHeader');
    var topBotomHeight = $('.topBottomHeader').height();
    var topHeadHeight = $('.topHeader').height();
    var headerHeght = $('.mainHeaderContent').height();
    var activeLink = $('.mainPagination ul.pagination li.pageNumber');
    /*=====================================================================*/

    //make the all links desactivate temperoly
    $('a').click(function (e) {

        // e.preventDefault();

    });

    //make the images take the height of it parent

    $('.carosel-section ,.carousel-item').height(headerHeght);

    //make the navbar sticky when scrolling
    console.log(topBotom.offset().top);

    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 220) {

            topBotom.addClass('scrolled ');

        } else {

            console.log(topBotom.height());

            topBotom.removeClass('scrolled ');
        }

    });

    /*================================================*/
    //make the link active when clicking on it
    activeLink.click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    /*================================================*/

    //    style the owl slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })

    /*================================================*/

    //voice section js

    var $audioPlayer = $(".audio-player").luna({
        songs: ["song.mp3"],
        onStatusChange: function (e) {
            console.log(e);
        }
    }); 

}); //end
