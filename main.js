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
      currentSlide: 0,
      bgImgSrc: './assets/images/slide-standard.png',
      audio: '',
      showModal: false,
      showModalTwo: false,
      showFinish: false,

      //////////////////////////////////
      // navigation button properties
      //////////////////////////////////
      showNav: false,
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
      highlightAnswer: false,

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

  mounted() {
    const audio = new Audio();
    this.audio = audio;
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
      this.audio.pause();
      this.slideControl();
    },

    next() {
      this.playAttention = true;
      this.nextAttention = false;
      this.currentSlide++;
      this.audio.pause();
      this.slideControl();
    },

    //FIX: a way to play a video object the same way audio is played
    //FIX: set first intruction video to autoplay
    playMedia() {
      this.playAttention=false;
      if (this.currentSlide === 1) {
        const video = document.getElementById("videoOne");
        video.play();
        video.onended = function() {
          app.nextAttention = true;
        }
      } else if (this.currentSlide === 14) {
        const video = document.getElementById("videoOne");
        video.play();
        video.onended = function() {
          app.nextAttention = true;
        }
      } else {
        this.audio.play();
        this.audio.onended = function() {
          app.nextAttention = true;
        }
      }
    },

    pauseMedia() {
      if (this.currentSlide === 1) {
        const video = document.getElementById("videoOne");
        video.pause();
      } else if (this.currentSlide === 14) {
        const video = document.getElementById("videoOne");
        video.pause();
      } else {
        this.audio.pause();
      }
    },

    //FIX: Why is this audio onended firing each and everytime!?
    slideWelcome() { 
      this.audio.src ="./assets/audio/0.mp3";
      this.audio.pause();
      this.audio.play();
      this.audio.onended = function() {
        app.showNav = true;
        app.next();
      }
    },

    slideFinish() {
      this.audio.pause();
      this.audio.autoplay = false;
      this.currentSlide = 0;
      this.showNav = true;
      this.previousEnabled = false;
      this.playEnabled = false;
      this.pauseEnabled = false;
      this.audio.src ="./assets/audio/0.mp3";
    },

    rightAnswer() {
      this.rightAnswerMsg = true;
      this.wrongAnswerMsg = false;
      this.highlightAnswer = true;
    },

    //FIX: the wrong answer dialogue box should go away on its own
    wrongAnswer() {
      if (this.wrongAnswerMsg === true) {
        this.wrongAnswerMsg = false;
      } else {
      this.wrongAnswerMsg = true;
      }
      this.rightAnswerMsg = false;
      this.highlightAnswer = false;
    },

    slideControl() {
      //resets values every slide unless different in if statement
      this.bgImgSrc = "./assets/images/slide-standard.png";
      this.showNav = true;

      //start if statements for each slide
      if (this.currentSlide === 0) {
        this.previousEnabled = false;
        this.playEnabled = false;
        this.pauseEnabled = false;
      } else {
        this.previousEnabled = true;
        this.playEnabled = true;
        this.pauseEnabled = true;
      };

      if (this.currentSlide === 1) {
        this.bgImgSrc = "./assets/images/slide-blank.png"
      } 
    
      if (this.currentSlide === 2) {
        this.audio.src = "./assets/audio/2.mp3";
      }

      if (this.currentSlide === 3) {
        this.audio.src = "./assets/audio/3.mp3";
      }

      if (this.currentSlide === 4) {
        this.currentQuestion = 0;
        this.audio.src = "./assets/audio/4.mp3";
      }

      if (this.currentSlide === 5) {
        this.audio.src = "./assets/audio/5.mp3";
      }

      if (this.currentSlide === 6) {
        this.audio.src = "./assets/audio/6.mp3";
      }

      if (this.currentSlide === 7) {
        this.audio.src = "./assets/audio/7.mp3";
      }

      if (this.currentSlide === 8) {
        this.currentQuestion = 1;
        this.audio.src = "./assets/audio/8.mp3";
      }

      if (this.currentSlide === 9) {
        this.audio.src = "./assets/audio/9.mp3";
      }

      if (this.currentSlide === 10) {
        this.audio.src = "./assets/audio/10.mp3";
      }

      if (this.currentSlide === 11) {
        this.audio.src = "./assets/audio/11.mp3";
      }

      if (this.currentSlide === 12) {
        this.audio.src = "./assets/audio/12.mp3";
      }

      if (this.currentSlide === 13) {
        this.audio.src = "./assets/audio/13.mp3";
      }

      if (this.currentSlide === 14) {
        this.bgImgSrc = "./assets/images/slide-standard.png";
      }

      if (this.currentSlide === 15) {
        this.audio.src = "./assets/audio/15.mp3";
        this.bgImgSrc = "./assets/images/child-enroll-sim1.jpg";
        this.showNav = false;
        this.showModal = true;
      }

      if (this.currentSlide === 16) {
        this.audio.src = "./assets/audio/16.mp3";
        this.bgImgSrc = "./assets/images/slide-standard.png";
      }
      if (this.currentSlide === 17) {
        this.audio.src = "./assets/audio/17.mp3";
      }

      if (this.currentSlide === 18) {
        this.audio.src = "./assets/audio/18.mp3";
      }
      
      if (this.currentSlide === 19) {
        this.audio.src = "./assets/audio/19.mp3";
      }
      
      if (this.currentSlide === 20) {
        this.audio.src = "./assets/audio/20.mp3";
      }
      
      if (this.currentSlide === 21) {
        this.audio.src = "./assets/audio/21.mp3";
      }
      
      if (this.currentSlide === 22) {
        this.audio.src = "./assets/audio/22.mp3";
        this.showFinish = true;
        this.showNav = false;
        this.audio.autoplay = true;
      }

      //FIX: this hack to cancel the effect of calling of audio.onend 
      //function which executes 'next()' bringing the users to a blank screen.
      if (this.currentSlide === 23) {
        this.audio.autoplay = false;
        this.showNav = false;
        this.currentSlide = 20;
      }
      
      this.audio.load();

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