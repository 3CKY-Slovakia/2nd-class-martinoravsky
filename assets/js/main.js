$(document).ready(function(){
    var bulb = $('#light-bulb')
    var bulbState = 'off';



    /**
     * CHANGE THE BULB BACKGROUND AND BULB STATUS ON BULB CLICK
     */
    bulb.click(function(){
        /*switch the bulb state; bulb states [on, off]*/
        if(bulbState == 'off') bulbState = 'on'; else bulbState = 'off';

        /*change the BG*/
        $( this ).css({ 'background-image': 'url("assets/img/light_bulb-'+ bulbState +'.gif")' });

        /*change the status*/
        $('.status', this).html( bulbState );

        /*change position*/
        chabgePosition( $(this) );

        /*show alert*/
        showAlert('prompt', 'asd');
    });

    /**
     * CHANGE THE POSITION OF AN DOM ELEMENT; W. ANIMATION
     * @param element
     */
    function chabgePosition( element ){
        var wWidth = $(window).width();

        if(element.position().left + element.width() <= wWidth) {
            element.animate({
                left: '+=200'
            }, 1000, function () {
                //after the animation is complete
            })
        }else{
            element.animate({
                left: '0'
            }, 1000, function () {
                //after the animation is complete
            })
        }
    }

    /**
     * ALERTS; types [basic, confirm, prompt]
     */

    function showAlert( type, message ){
        switch( type ){
            case 'basic':
                alertify.alert( message );
                break;
            case 'confirm':
                alertify.confirm( message, function (e) {
                    if (e) {
                        // user clicked "ok"
                    } else {
                        // user clicked "cancel"
                    }
                });
                break;
            case 'prompt':
                alertify.prompt( message, function (e, str) {
                    // str is the input text
                    if (e) {
                        // user clicked "ok"
                    } else {
                        // user clicked "cancel"
                    }
                }, "Your message");
                break;
            default:
                console.log('The type "'+ type +'" is not defined');
                return false;
        }
    }
});



/**
 * SINGLE DATE PICEKR
 */
$(function() {
    $( "#datepicker" ).datepicker();
});

/**
 * NICESCROLL
 */
$(function(){
   $("html").niceScroll();
});



/**
 * summernote
*/

$(document).ready(function() {
    $('#summernote').summernote({
        height: 400,
    });

});

$('#summernote').on('summernote.enter', function(customEvent, nativeEvent) {
    var textik = $("#summernote").code();

    $.jGrowl("napisal si: "+textik);


});



/**
 * google mapka
 */

var map;
$(document).ready(function(){
    map = new GMaps({
        el: '#map',
        lat: 48.160077,
        lng: 17.066269,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
    });
});

/**
 * DATE RANGE DATE PICKER
 */
$(function() {
    $( "#from" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function( selectedDate ) {
            $( "#to" ).datepicker( "option", "minDate", selectedDate );
        }
    });
    $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
        onClose: function( selectedDate ) {
            $( "#from" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
});