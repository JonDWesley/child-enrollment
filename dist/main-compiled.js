"use strict";

var audio = new Audio();
var video = document.getElementById("videoOne");
Vue.component('modal', {
  template: "#modal-template"
});
Vue.component('my-footer', {
  template: "#footer-template"
});
var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      currentSlide: 0,
      bgImgSrc: './assets/images/slide-standard.png',
      showNav: true,
      showFinish: false,
      previousDisabled: false,
      playDisabled: false,
      pauseDisabled: false,
      playAttention: false,
      nextAttention: false,
      rightAnswerMsg: false,
      wrongAnswerMsg: false,
      highlightAnswer: '',
      modalTwoOne: false,
      modalFourOne: false,
      modalFourTwo: false,
      modalFiveOne: false,
      modalSixOne: false
    };
  },
  methods: {
    previous: function previous() {
      this.currentSlide--;
      audio.pause();
      this.slideControl();
    },
    next: function next() {
      this.playAttention = true;
      this.nextAttention = false;
      this.currentSlide++;
      audio.pause();
      this.slideControl();
      console.log(this.rightAnswerMsg);
    },
    playMedia: function playMedia() {
      audio.play();
      this.playAttention = false;

      audio.onended = function (e) {
        app.nextAttention = true;
      };
    },
    pauseMedia: function pauseMedia() {
      audio.pause();
    },
    slideWelcome: function slideWelcome() {
      audio.src = "./assets/audio/0.mp3";
      audio.play();

      audio.onended = function (e) {
        app.showNav = true;
        app.next();
      };
    },
    slideFinish: function slideFinish() {
      this.currentSlide = 0;
      this.showNav = true;
      this.playAttention = false;
      audio.pause();
      audio.autoplay = false;
      audio.src = "./assets/audio/0.mp3";
      this.previousDisabled = true;
    },
    rightAnswer: function rightAnswer() {
      this.rightAnswerMsg = true;
      this.wrongAnswerMsg = false;
      this.highlightAnswer = 'is-highlighted';
    },
    wrongAnswer: function wrongAnswer() {
      this.rightAnswerMsg = false;
      this.wrongAnswerMsg = true;
    },
    modalTwoOneFunc: function modalTwoOneFunc() {
      console.log("modal open");
      this.modalTwoOne = true;
      audio.src = "./assets/audio/test.mp3";
      audio.play();
    },
    closeModal: function closeModal() {
      console.log("modal closed");
      this.modalTwoOne = false;
      audio.src = "";
      audio.pause();
    },
    slideControl: function slideControl() {
      if (this.currentSlide === 0) {
        audio.src = "./assets/audio/0.mp3";
        this.previousDisabled = true;
      }

      if (this.currentSlide === 1) {
        audio.src = "./assets/audio/1.mp3";
        this.previousDisabled = false;
      }

      if (this.currentSlide === 2) {
        audio.src = "./assets/audio/2.mp3";
      }

      if (this.currentSlide === 3) {
        audio.src = "./assets/audio/3.mp3";
      }

      if (this.currentSlide === 4) {
        audio.src = "./assets/audio/4.mp3";
      }

      if (this.currentSlide === 5) {
        audio.src = "./assets/audio/5.mp3";
      }

      if (this.currentSlide === 6) {
        audio.src = "./assets/audio/6.mp3";
      }

      if (this.currentSlide === 7) {
        audio.src = "./assets/audio/7.mp3";
        this.pauseDisabled = false;
        this.playDisabled = false;
        this.bgImgSrc = "./assets/images/slide-standard.png";
      }

      if (this.currentSlide === 8) {
        audio.src = "";
        this.pauseDisabled = true;
        this.playDisabled = true;
        this.bgImgSrc = "./assets/images/slide-blank.png";
      }

      if (this.currentSlide === 9) {
        audio.src = "./assets/audio/9.1.mp3";
        this.pauseDisabled = false;
        this.playDisabled = false;
        this.bgImgSrc = "./assets/images/slide-blank.png";
      }

      if (this.currentSlide === 10) {
        audio.src = "./assets/audio/10.1.mp3"; //reset the correct answer highlighting and message

        this.rightAnswerMsg = false;
        this.highlightAnswer = '';
        this.bgImgSrc = "./assets/images/slide-blank.png";
      }

      if (this.currentSlide === 11) {
        audio.src = "./assets/audio/11.mp3";
        this.bgImgSrc = "./assets/images/slide-standard.png";
      }

      if (this.currentSlide === 12) {
        audio.src = "./assets/audio/12.mp3";
      }

      if (this.currentSlide === 13) {
        audio.src = "./assets/audio/13.mp3";
      }

      if (this.currentSlide === 14) {
        audio.src = "./assets/audio/14.mp3";
      }

      if (this.currentSlide === 15) {
        audio.src = "./assets/audio/15.mp3";
      }

      if (this.currentSlide === 16) {
        audio.src = "./assets/audio/16.mp3";
      }

      if (this.currentSlide === 17) {
        audio.src = "./assets/audio/17.mp3";
        this.showFinish = true;
        this.showNav = false;
        audio.autoplay = true;
      }

      audio.load();
    }
  }
});
