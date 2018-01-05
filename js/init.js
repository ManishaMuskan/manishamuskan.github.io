var typed = new Typed('#typed', {
    strings: ['web applications.', 'user Interfaces.', 'android applications.', 'landing pages.', 'corporate websites.'],
    typeSpeed: 30,
    backSpeed: 500,
    fadeOut: true,
    loop: true
});
var options = {
    shape: 'sphere',
    textColour: '#aae7ed',
    depth: 1,
    animTiming: 'Smooth',
    outlineMethod: 'size',
    pinchZoom: true,
    weight: true,
    weightMode: 'size',
    weightFrom: 'data-weight',
    wheelZoom: false
};
window.onload = function () {
    try {
        TagCanvas.Start('myCanvas', 'tagList', options);
        TagCanvas.SetSpeed('myCanvas', [0.3, -0.15]);
    } catch (e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
    }
};

function toggleOverlay() {
    $('div.overlay').toggleClass("open");
    $('body').toggleClass("no-scroll");
};

$('#trigger-overlay').click(function () {
    toggleOverlay();
});
$('a.overlay-close').click(function () {
    toggleOverlay();
});

function submitCheck() {
    $('#gform *').fadeOut(1000);
    $('#gform').prepend("<div><p class='center padding-bg-ver blue-text'><strong>Thanks for the note.<br> I will get back to you as soon as I can.</strong> </p>");
    console.log("loaded");
}
