// Dave Durkee
// 11.20.2016


$(document).ready(function(){


    $("#test_button").click(
      function(){
      	var s_div = "</br>";

      	s_div = "<div> Hi </div> <div> Hi again </div>"; 

          $("#top_left").html(s_div);
          console.log('button');
      }
    );

	document.onkeyup = function(event) {

    	console.log(event.key);

    }; // end of document.onkeyup


});

