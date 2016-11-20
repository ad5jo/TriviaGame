// Dave Durkee
// 11.20.2016


$(document).ready(function(){
//mod_test();
//sort_media();

    $("#npc1").click(function(){
        //$("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
        var s_img =  "./assets/images/han.png";
        if (a_game_data.s_state === "choose_hero")
        {
          $("#rest").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#select_a_hero").html(" ");
          $("#img_han").remove();
          $("#npc1").html("");


          s_img =  "./assets/images/chewy.png";
          $("#en1").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_chewy").remove();
          $("#npc1").html("");

          s_img =  "./assets/images/maul.png";
          $("#en2").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_maul").remove();
          $("#npc1").html("");

          s_img =  "./assets/images/darth.png";
          $("#en3").html("<img src=" + s_img + " width = '75px' "  + " height = '75px' " + ">");
          $("#img_darth").remove();
          $("#npc1").html("");
          a_game_data.s_state = "choose_enemy";
          $("#results").html("You have selected your hero. Now select an enemy. " + a_game_data.s_state);
        } 
    });


        $("#en1").click(function()
        {
          if (a_game_data.s_state === "choose_enemy")
          {
            // move the defender
            var obj = $("#en1").html();
            $("#defender").html(obj);
            $("#en1").html("");

            // move en2
            obj = $("#en2").html();
            $("#en1").html(obj);
            $("#en2").html("");

            // move en3
            obj = $("#en3").html();
            $("#en2").html(obj);
            $("#en3").html("");

            // move the hero
            obj = $("#rest").html();
            $("#attacker").html(obj);
            $("#rest").html("");

            a_game_data.s_state = "battle";
            $("#results").html("You have selected your opponent. Let the battle begin." + a_game_data.s_state);
          }
        });



    $("#attack_button").click(function(){
      if (a_game_data.s_state === "battle")
      {
        $("#results").html("Boom. " + a_game_data.s_state);
      }

        //$("#results").html("attack_button clicked with mouse");
        //console.log("attack_button clicked with mouse");
        //$("#the_image_of_attacker").remove();
        //$("#the_image_of_attacker").html("");
        //$("#the_image_of_attacker").html('<img id="hans" src="./assets/images/han.png" />');
       
        a_game_data.m_play("a"); // Attack
    });

    $("#play_again_button").click(function(){
        $("#results").html("play_again_button clicked with mouse");
        console.log("play_again_button clicked with mouse");

        $("#the_image_of_defender").html("");
        //$("#the_image_of_defender").html("<img src=" + images[count] + " width='400px'>");
        $("#the_image_of_defender").html('<img id="hans" src="./assets/images/darth.png" />');
        a_game_data.m_play("r"); // restart / play again
    });

    // a_game_data

});

    	// "choose_hero", "choose_enemy", "battle", "won", "lost"


//<!-- ---------------------------------- Event LOOPs begin --------------------------------------- -->
	document.onkeyup = function(event) {

    	a_game_data.m_play(event.key);

    } // end of document.onkeyup

//<!-- ---------------------------------- Event LOOPs end --------------------------------------- -->

