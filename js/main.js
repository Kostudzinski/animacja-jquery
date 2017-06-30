'use strict';

$(document).ready(function () {
    $('#button').click(function() {
        $('#div').animate({width:'100px', height: '100px', marginLeft: '100px'}, 3000, function () {
                        $('div').animate({backgroundColor: 'blue'}, 5000);   
                        $('h2').html('Animacja ukończona').css({fontSize: '20px', color: 'white'}); }
        
          );
        

    });

        
});

