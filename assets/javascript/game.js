// Dave Durkee
// 11.20.2016


$(document).ready(function(){
  
    $("#button_begin").click(
      function(){
        debugger;
        $("#q1").remove();
        $("#a1").remove();
        $("#message_missed").remove();
      });
    $("#thebody").append("<div id=" + "game_status" + ">" +"You will have 30 seconds to answer each question" + "</div>");
 
  function_next_question();

});

//////////////////////////////////////////////////////////////////////////////////////////////


  var questions = [
  {
    question: "What is the name of the actor who played Captain Kirk?",
    choices: ["William Shatner","Richard Lutz","David Eddings"],
    correctAnswer: 0
  }, 

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

  
  var question_index = 0;
  var missed = 0;
  var correct = 0;
  var i_seconds_remaining = 30;
  var o_timer = 0;
  // Display initial question
  //displayNext();
  
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
    $("#game_status").text(i_seconds_remaining);
    var i_ms =  1000;
    o_timer = setTimeout(function_timeout_question, i_ms);
  }
}

function function_next_question()
{
  // 1. clear the last question
  // 2. post the next
  // 3. create finished button
  // 4. register the finished event click
  // 5. start the timer

  // 1.
  $("#q1").remove();
  $("#c1").remove();
  $("#a1").remove();
  $("#debug").remove();
  $("#finished_button").remove();
  $("#message_missed").remove();

  // 2.
          $("#button_begin").hide();
          $("#thebody").append("<div id=" + "q1" + ">" + questions[question_index].question + "</div>");
          
          $("#thebody").append("<div id=" + "c1" + ">" + 
            "1: "+ questions[question_index].choices[0] +
             "   2: "+ questions[question_index].choices[1] +
             "   3: "+ questions[question_index].choices[2] +
             "</div>");
          
          var s_radio_buttons = "<div id=" + "a1" + ">" +'<INPUT TYPE="Radio" name="answer" value="1">1' +'<INPUT TYPE="Radio" name="answer" value="2">2'+'<INPUT TYPE="Radio" name="answer" value="3">3' +"</div>";
          $("#thebody").append(s_radio_buttons);

          //var s_done_button = "<a class=\"btn btn-primary btn-sm\" id=\"finished_button\" role=\"button\">Finished</a>";
  // 3.
          var s_done_button = "<a class=\"btn btn-primary btn-sm\" id=\"finished_button\" role=\"button\">Finished</a> ";
          $("#thebody").append(s_done_button);



  // 4.
      $("#finished_button").click(
      function(){
        // clear the timer
        // get the value of the radio button
        // check the answer for correct or incorrect (missed++ or correct++)
        // if incorrect then display the correct answer
        // if correct display the next question

        clearTimeout(o_timer);
        i_seconds_remaining = 30;
        var s_i_val = $('input[name="answer"]:checked').val();
        $("#game_status").text("You selected: " + s_i_val);
        function_next_question();
      });


      var i_correct = 1 + questions[question_index].correctAnswer

      $("#thebody").append("<div id=debug >" + "DEBUG: The correct answer is " + i_correct) + "</div>";

  // 5.
      o_timer = setTimeout(function_timeout_question, 1000);
      question_index++;
} // end function next question





