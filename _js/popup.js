   var popupStatus = 0; 
   
   function loadPopup(){  
  	 if(popupStatus==0){  
		$("#backgroundPopup").css({  
			"opacity": "0.7"  
		});  
		$("#backgroundPopup").fadeIn("slow");  
		$("#popupContact").fadeIn("slow");  
		popupStatus = 1;  
	 }  
	}
	//disabling popup with jQuery magic!  
function disablePopup(){  
//disables popup only if it is enabled  
if(popupStatus==1){  
$("#backgroundPopup").fadeOut("slow");  
$("#popupContact").fadeOut("slow");  
popupStatus = 0;  
}  
}
//centering popup  
function centerPopup(){  
//request data for centering  
var windowWidth = document.documentElement.clientWidth;  
var windowHeight = document.documentElement.clientHeight;  
var popupHeight = $("#popupContact").height();  
var popupWidth = $("#popupContact").width();  
//centering  
$("#popupContact").css({  
"position": "absolute",  
"top": windowHeight/2-popupHeight/2,  
"left": windowWidth/2-popupWidth/2  
});  
//only need force for IE6  
  
$("#backgroundPopup").css({  
"height": windowHeight  
});  
  
}

 // JavaScript Document