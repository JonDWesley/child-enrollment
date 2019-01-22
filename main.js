var audio = new Audio;
var video = document.getElementById("videoOne");

Vue.component ('modal', {
  template: "#modal-template"
})

Vue.component ('my-footer', {
  template: "#footer-template"
})

var app = new Vue({
  el: '#app',
  data() {
    return {
      
      //////////////////////////////////
      // rendered slides properties
      //////////////////////////////////
      currentSlide: 10,
      bgImgSrc: './assets/images/slide-standard.png',
      showModal: false,
      showModalTwo: false,
      showFinish: false,

      //////////////////////////////////
      // navigation button properties
      //////////////////////////////////
      showNav: true,
      nextEnabled: true,
      previousEnabled: true,
      playEnabled: true,
      pauseEnabled: true,
      playAttention: false,
      nextAttention: false,

      //////////////////////////////////
      // Simulation properties
      //////////////////////////////////
      rightAnswerMsg: false,
      wrongAnswerMsg: false,
      highlightAnswer: '',

      //////////////////////////////////
      // QUIZ RELATED DATA
      //////////////////////////////////
      currentQuestion: 0,
      modalQuiz: false,
      quizModalHeading: 'That is not correct. Please try again.',
      quizModalBody: '',
      
      //////////////////////////////////
      // ARRAY OF QUESTION OBJECTS
      //////////////////////////////////
      allQuestions: [
        {
            question: 'Out-side-school-hours care centers are required to enroll participants with CACFP enrollment documentation under which circumstance?',
            answers: ["The institution is under a sponsoring organization", "The out-side-school-hours care program is part of the centers CACFP", "The out-side-school-hours care center has a occupancy limit over 100 persons"],
            explanation: "Remember, if an outside-school-hours care center is operated as part of a child care center that participates in the CACFP, it will require CACFP enrollment documentation.",
            correct: 1
        },
        {
            question: 'Which one of the below types of institutions WOULD require CACFP enrollment documentation for all child participants?',
            answers: ["An outside-school-hours care program that is NOT part of a center already running a CACFP", "An at-risk-afterschool care facility that is being operated in facilities owned by a for-profit organization", "An outside-school-hours care center is operated as part of a child care center that participates in the CACFP"],
            explanation: "Remember that when an outside-school-hours care center is operated as part of a child care center that participates in the CACFP, child enrollment documentation is required.",
            correct: 2
        },
        {
            question: 'TEST QUESTION THREE',
            answers: ["THREE ONE", "THREE TWO", "THREE THREE"],
            explanation: "REPONSE THREE",
            correct: 2
        }
      ]

    }
  },

  computed: {
    questionTxt() {
      return this.allQuestions[this.currentQuestion].question
    },
    choice1() {
      return this.allQuestions[this.currentQuestion].answers[0];
    },
    choice2() {
      return this.allQuestions[this.currentQuestion].answers[1];
    },
    choice3() {
      return this.allQuestions[this.currentQuestion].answers[2];
    }
  },

  methods: { 
    previous() {
      this.currentSlide --;
      audio.pause();
      this.slideControl();
    },

    next() {
      this.playAttention = true;
      this.nextAttention = false;
      this.currentSlide++;
      audio.pause();
      this.slideControl();
    },

    playMedia() {
      audio.play();
      this.playAttention=false;
      audio.onended = function(e) {
        app.nextAttention = true;
      }
    },

    pauseMedia() {
      audio.pause();
    },

    slideWelcome() { 
      audio.src ="./assets/audio/test.mp3";
      audio.play();
      audio.onended = function(e) {
        app.showNav = true;
        app.next();
      }
    },

    slideFinish() {
      this.currentSlide = 0;
      this.showNav = true;
      this.playAttention = false;
      audio.pause();
      audio.autoplay = false;
      audio.src ="./assets/audio/test.mp3";
      this.previousEnabled = false;
    },

    rightAnswer() {
      this.rightAnswerMsg = true;
      this.wrongAnswerMsg = false;
      this.highlightAnswer = 'is-highlighted';
    },

    wrongAnswer() {
      this.rightAnswerMsg = false;
      this.wrongAnswerMsg = true;
    },

    slideControl() {
      if (this.currentSlide === 0) {
        audio.src = "./assets/audio/0.mp3"; 
        this.previousEnabled = false;
        this.playEnabled = false;
        this.pauseEnabled = false;
      } else {
        this.previousEnabled = true;
        this.playEnabled = true;
        this.pauseEnabled = true;
      }
      if (this.currentSlide === 1) {
        audio.src = "./assets/audio/1.mp3"
      }
      if (this.currentSlide === 2) {
        audio.src = "./assets/audio/2.mp3" 
      }
      if (this.currentSlide === 3) {
        audio.src = "./assets/audio/3.mp3"
      }
      if (this.currentSlide === 4) {
        audio.src = "./assets/audio/4.mp3"
        this.currentQuestion = 0;
      }
      if (this.currentSlide === 5) {
        audio.src = "./assets/audio/5.mp3"
      }
      if (this.currentSlide === 6) {
        audio.src = "./assets/audio/6.mp3" 
      }
      if (this.currentSlide === 7) {
        audio.src = "./assets/audio/7.mp3";
        this.bgImgSrc = "./assets/images/slide-standard.png"
      }
      if (this.currentSlide === 8) {
        audio.src = "";
        this.currentQuestion = 1;
      }
      if (this.currentSlide === 9) {
        audio.src = "./assets/audio/test.mp3";
      }

      if (this.currentSlide === 110) {
        audio.src = "./assets/audio/test.mp3";
        //reset the correct answer highlighting and message
        this.rightAnswerMsg = false;
        this.highlightAnswer = '';
        this.bgImgSrc = "./assets/images/slide-blank.png";
      }
      if (this.currentSlide === 11) {
        audio.src = "./assets/audio/11.mp3" 
      }
      if (this.currentSlide === 12) {
        audio.src = "./assets/audio/12.mp3" 
      }
      if (this.currentSlide === 13) {
        audio.src = "./assets/audio/13.mp3" 
      }
      if (this.currentSlide === 14) {
        audio.src = "./assets/audio/14.mp3" 
      }
      if (this.currentSlide === 15) {
        audio.src = "./assets/audio/15.mp3" 
      }
      if (this.currentSlide === 16) {
        audio.src = "./assets/audio/16.mp3" 
      }
      if (this.currentSlide === 17) {
        audio.src = "./assets/audio/17.mp3";
        this.showFinish = true;
        this.showNav = false;
        audio.autoplay = true;
      }
      audio.load();
    },

    quizSubmit() {
      //declaring the variable that retreives the user's selected radio button
      var selectedOption = document.querySelector('input[name="answer"]:checked').value;

      //resets the defaults and opens the quiz modal on click
      this.quizModalHeading = 'That is not correct. Please try again.';
      this.quizModalBody = '';
      this.modalQuiz = true;

      //This statement changes the feedback if the user gets the question right
      if (selectedOption == this.allQuestions[this.currentQuestion].correct) {
        this.quizModalHeading = "That is correct!";
        this.quizModalBody = (this.allQuestions[this.currentQuestion].explanation);
      }
    }
  }
});













/////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// FOR DELETION //////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////
// var questionText = document.getElementById("questionText");
// Display the first question's text and the possible answers. 
// questionText.innerHTML = this.allQuestions[0].question;
// document.getElementById("choice1").innerHTML = this.allQuestions[0].answers[0]; 
// document.getElementById("choice2").innerHTML = this.allQuestions[0].answers[1];
// document.getElementById("choice3").innerHTML = this.allQuestions[0].answers[2];



// var question0 = {
//     question: 'If you are unclear on any of the Civil Rights requirements in the CACFP, which of the following sources of information would you review for the most authoritative and comprehensive guidance?',
//     answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
//     explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//     correct: 1
//   };
// var question1 = {
//     question: 'TEST Question TWO',
//     answers: ["TestTwoOne", "TestTwoTwo", "TestTwoThree"],
//     explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//     correct: 1
//   };
// var question2 = {
//     question: 'TEST Question THREE',
//     answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
//     explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//     correct: 1
//   };
// //variable of all questions
// var this.allQuestions = [question0, question1, question2];

// //question objects
// const this.allQuestions = [
//   {
//       question: 'If you are unclear on any of the Civil Rights requirements in the CACFP, which of the following sources of information would you review for the most authoritative and comprehensive guidance?',
//       answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
//       explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//       correct: 1
//   },
//   {
//       question: 'If you are unclear on any of the Civil Rights requirements in the CACFP, which of the following sources of information would you review for the most authoritative and comprehensive guidance?',
//       answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
//       explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//       correct: 1
//   },
//   {
//       question: 'If you are unclear on any of the Civil Rights requirements in the CACFP, which of the following sources of information would you review for the most authoritative and comprehensive guidance?',
//       answers: ["7 CFR 266.5 FNS Ins", "FNS Instruction 113-1", "nutritionnc.com"],
//       explanation: "Remember that FNS Instruction 113-1 is an authoritative and comprehensive source regarding Civil Right compliance in the CACFP and it can be downloaded in the files section of this training portal.",
//       correct: 1
//   }
// ]



// //this statement will execute if all questions have been answered AND the score is higher than the threshold
      // if (this.currentQuestion == this.allQuestions.length && totalScore >= (this.allQuestions.length*0.80)) {
      //   document.getElementById("questionForm").style.display = "none"; //hides the HTML form containing the questions
      //   questionText.innerHTML = "Your score is " + totalScore + " of " + this.allQuestions.length + " You may now download your certificate.";
      //   navButton.style.display = "none"; //hides the button used to execute this function
      //   sudoDownloadButton.style.display = "block"; //reveals the <a> tag, that looks like a button, for downloading the file
      
      // //this statement will execute if all questions have been answered BUT the score is below the padding threshold
      // } else if (this.currentQuestion == this.allQuestions.length && totalScore < (this.allQuestions.length*0.80)) {
      //     document.getElementById("questionForm").style.display = "none"; //again, hides the form containing the questions
      //     questionText.innerHTML = "Your score is " + totalScore + " out of " + this.allQuestions.length + ". You must get at least 80% of the questions right in order to download the training certificate. Please click the button below to retake the quiz.";
      //     navButton.style.display = "none"; //as above, hides the button used to execute this function
      //     retakeButton.style.display = "block"; //reveals the button used to reload the entire quiz
        
      //this statement executes only when not all questions have been answered. This is the code used for dynamically populating the question and answers in the quiz
      // } else {
      //     questionText.innerHTML = this.allQuestions[this.currentQuestion].question;
      //     document.getElementById("choice1").innerHTML = this.allQuestions[this.currentQuestion].answers[0];
      //     document.getElementById("choice2").innerHTML = this.allQuestions[this.currentQuestion].answers[1];
      //     document.getElementById("choice3").innerHTML = this.allQuestions[this.currentQuestion].answers[2];
      // }