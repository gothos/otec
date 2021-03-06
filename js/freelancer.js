$(function() {

    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


$( document ).ready(function() {

    var yourStartLatLng = new google.maps.LatLng(48.850049,17.238618)
    $('#map').gmap({'zoom':15,'center': yourStartLatLng}).gmap('addMarker', {'position':yourStartLatLng,'animation': google.maps.Animation.DROP} )

                // Highlight the top nav as scrolling occurs
})