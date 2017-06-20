$(document).ready(function(){
	console.log("work")
	$('#main-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 700);
    });
    $('#projects-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 700);
    });
    $('#skills-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 700);
    });
    $('#about-me-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about-me").offset().top
        }, 700);
    });
    $('#contact-link').click(function () {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 700);
    });
});