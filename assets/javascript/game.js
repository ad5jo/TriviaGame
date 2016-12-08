// Dave Durkee
// 11.20.2016

  var question_index = 0;
  var missed = 0;
  var correct = 0;
  var i_seconds_remaining = 30;
  var o_timer = 0;
  var the_correct_answer = -1;


$(document).ready(function(){
  function_reset_game_variables();
  function_display_initial_screen();
});


  function function_display_initial_screen ()
  {
        $("#button_begin").click(
      function(){
        $("#q1").remove();
        $("#a1").remove();
        $("#play_again_button").remove();
        $("#game_status").remove();
        $("#correct_answer_id").remove();
        $("#message_missed").remove();
        $("#thebody").append("<div id=" + "game_status" + ">" + "You will have 30 seconds to answer each question" + "</div>");
 
      });


  function_next_question();
  }
//////////////////////////////////////////////////////////////////////////////////////////////


  var questions = [
  {
    question: "What is the name of the actor who played Captain Kirk?",
    choices: ["William Shatner","Richard Lutz","David Eddings"],
    correctAnswer: 0
  }, 
//var i_correct_number = questions[question_index].correctAnswer
  {
    question: "What is the name of the actor who played Spock?",
    choices: ["Gene Roddenberry","DeForest Kelley","Leonard Nimoy"],
    correctAnswer: 2
  }, 
  {
    question: "What is the name of the actor who played McCoy",
    choices: ["Gene Roddenberry","DeForest Kelley","Leonard Nimoy"],
    correctAnswer: 1
  }
  ];

  

function function_timeout_question()
{
  
  if (i_seconds_remaining === 0)
  {
    $("#game_status").text("--- Time Ran Out ---");
    $("#thebody").append("<div id=" + "message_missed" + ">" + "Missed "+ question_index +" one" + "</div>");
    question_index++;
    missed++;
  }
  else
  {
    i_seconds_remaining--;
    $("#game_status").text(" Time remaining: " + i_seconds_remaining);
    var i_ms =  1000;
    o_timer = setTimeout(function_timeout_question, i_ms);
  }
}


function function_next_question()
{
  // 1. clear the last question
  // 2. post the next
  // 3. create next question button
  // 4. register the next question event click
  // 5. start the timer

  // 1.
  $("#q1").remove();
  $("#play_again_button").remove();
  $("#a1").remove();
  $("#correct_answer_id").remove();
  $("#next_question_button").remove();
  $("#message_missed").remove();


    //var i_max = questions.lenght();

    if (question_index > 2 )
    {
      function_game_over();
    }


  // 2.
          $("#button_begin").hide();
          $("#thebody").append("<div id=" + "q1" + ">" + questions[question_index].question + "</div>");

          var s_radio_buttons = 
          "<div id=" + "a1" + ">" +
          '<INPUT TYPE="Radio" name="answer" value="1">1: ' + questions[question_index].choices[0] + "  " +
          '<INPUT TYPE="Radio" name="answer" value="2">2: '+ questions[question_index].choices[1] +"  " +
          '<INPUT TYPE="Radio" name="answer" value="3">3: ' + questions[question_index].choices[2] +"  " +
          "</div>";

          $("#thebody").append(s_radio_buttons);

  // 3.
          var s_done_button = "<a class=\"btn btn-primary btn-sm\" id=\"next_question_button\" role=\"button\">Next Question</a> ";
          $("#thebody").append(s_done_button);



  // 4.
      $("#next_question_button").click(
      function(){
        // 1. clear the timer
        // 2. get the value of the radio button
        // 3. check the answer for correct or incorrect (missed++ or correct++)
        // 4. if incorrect then display the correct answer
        // 5. if correct display the next question

        // 1.
        clearTimeout(o_timer);
        i_seconds_remaining = 30;

        // 2.
        var s_i_val = $('input[name="answer"]:checked').val();
        var i_val = parseInt(s_i_val, 10);
        i_val--;
        // 3.
        var i_correct_number = questions[question_index].correctAnswer
        if (i_val === i_correct_number)
        {
          correct++;
        }
        else
        {
          missed++;
          $("#thebody").append("<div id=correct_answer_id >" + "The correct answer was " + i_correct) + "</div>";
        }

        question_index++;


        if (i_val === i_correct_number)
        {
          function_next_question();
        }
        else // incorrect
        {
          setTimeout(function_next_question, 3000)
        }
        
      });// end of $("#next_question_button").click

      var i_correct = 1 + questions[question_index].correctAnswer
      the_correct_answer = i_correct;

  // 5.
      o_timer = setTimeout(function_timeout_question, 1000);
      // not here question_index++;
} // end function next question



function function_game_over()
{
  // display game over
  // show score
  // add play again button
  // resister on click event for play again

  $("#game_status").text("Game over");
  $("#thebody").append("<div id=correct_answer_id >" + "Your score is " + correct) + "</div>";

  var s_play_again_button = "<a class=\"btn btn-primary btn-sm\" id=\"play_again_button\" role=\"button\">Play Again</a> ";
  $("#thebody").append(s_play_again_button);



  $("#play_again_button").click(
    function(){
    function_reset_game_variables();
    function_display_initial_screen();

  });// end of $("#play_again_button").click

}

function function_reset_game_variables()
{
  question_index = 0;
  missed = 0;
  correct = 0;
  i_seconds_remaining = 30;
  o_timer = 0;
}

