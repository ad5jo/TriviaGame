// Dave Durkee
// 11.20.2016


$(document).ready(function(){

    $("#button_begin").click(
      function(){
          // $("#button_begin").hide();
          $("#thebody").append("<div id=" + "q1" + ">" + questions[0].question + "</div>");
          var s_radio_buttons = '<INPUT TYPE="Radio" Name="answer" Value="CC">Credit Card' +'<INPUT TYPE="Radio" Name="answer" Value="DC">Debit Card'+'<INPUT TYPE="Radio" Name="answer" Value="PP">PayPal';
          $("#thebody").append(s_radio_buttons);

          var s_done_button = "<a class=\"btn btn-primary btn-sm\" id=\"finished_button\" role=\"button\">Finished</a>";
          $("#thebody").append(s_done_button);
              $("#finished_button").click(

              function(){
                var x=0;
                // $("#thebody").append("answer is " + answer);
              //}
                for (i = 0; i < 3; i++) {
                  question_index = i;
                  choices_[question_index] = +$('input[name="answer"]:checked'); //.val()
                  // $('input[name="answer"]:checked').val();
                  // if ( $("Radio").answer[i].checked ) {
                  //   answer = $("Radio").answer[i].Value;
                  //   break;
                  // }
                }
                $("#thebody").append("answer is " + choices_);
              }
              
            );

      }
    );

    $("#finished_button").click(

      function(){
        var x=0;
        $("#thebody").append("answer is " );
      }
      //   for (i = 0; i < 3; i++) {
      //     if ( document.answer[i].checked ) {
      //       answer = document.answer[i].value;
      //       break;
      //     };
      //   };
      // }
      // $("#thebody").append("answer is " );
    );

	// document.onkeyup = function(event) {

 //    	console.log(event.key);

 //    }; // end of document.onkeyup
main();

});


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
  var choices_ = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  
  // Display initial question
  displayNext();
  




function main()
{ // begin main

  // Click handler for the 'next' button
  $('#next').on('click', function (event) {
    event.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(choices_[question_index])) {
      alert('Please make a selection!');
    } else {
      question_index++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    question_index--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    question_index = 0;
    choices_ = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  

} // end of main



  // Creates and returns the div that contains the questions and 
  // the answer choices_
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    choices_[question_index] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();
      
      if(question_index < questions.length){
        var nextQuestion = createQuestionElement(question_index);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(choices_[question_index]))) {
          $('input[value='+choices_[question_index]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(question_index === 1){
          $('#prev').show();
        } else if(question_index === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < choices_.length; i++) {
      if (choices_[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    
    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  };

