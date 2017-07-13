'use strict';



$(document).ready(function () {
    $('#button').click(function () {
        $('#div').animate({
                width: '100px',
                height: '100px',
                marginLeft: '100px'
            }, 2000, colorChange(), setTimeout(napis , 5000))
    })
});

function colorChange() {
    $('#div').animate({
        backgroundColor: 'blue'
    }, 1000);
}

function napis() {
        $('h2').html('Animacja ukończona').css({
        fontSize: '20px',
        color: 'white'
    });
}