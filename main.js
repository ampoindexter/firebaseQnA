'use strict';

var ref = new Firebase('https://aliciafirebaseqna.firebaseio.com/');
var questionsRef = ref.child('questions');
var $title, $question, $answer, $questions;

$(document).ready(init);

function init() {
  $title = $('#title');
  $question = $('#question');
  $answer = $('#answer');
  $questions =  $('#questions');
  $('#ask').click(askQuestion);
}

function askQuestion() {
  var title = $title.val();
  var question = $question.val();
  if(question) {
    $title.val('');
    $question.val('');
    questionsRef.push({
      title: title,
      question: question,
      date: Date.now()
    })
  }
}
