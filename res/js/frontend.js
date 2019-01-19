let theta = 0

function headerImageRotate(a) {
    theta = a % 360;
    $('#header-img').css('transform', 'rotate(' + theta + 'deg)');
}

$('#about-me').waypoint(direction => {
    console.log(direction);
    if (direction === "down")
        $('nav').addClass("fixed-top");
    else
        $('nav').removeClass("fixed-top");
}, {
    offset: "25%"
});

new SmoothScroll('a[href*="#"]', {
    easing: "easeOutQuint",
    speed: 2000,
    durationMin: 1000,
    updateURL: false,
    popstate: true
});