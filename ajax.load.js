haha

hoops

(function($){

var stop=true; 
$(window).scroll(function(){ 
    totalheight = parseFloat($(window).height()) + parseFloat($(window).scrollTop()); 
    if($(document).height() <= totalheight){ 
        if(stop==true){ 
            stop=false; 
	    $('#Loading').before('<h1>More Info</h1>');
	    stop=true; 
        } 
    } 
});


})(jQuery)
