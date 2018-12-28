"use strict";

Vue.component('modal', {
  template: "#modal-template"
});
var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      currentSlide: 0,
      bgImgSrc: './assets/images/slide-standard.png',
      showNav: false,
      isAttention: true,
      isDisabled: true,
      rightAnswerMsg: false,
      wrongAnswerMsg: false,
      highlightAnswer: '',
      modalThreeOne: false,
      modalFourOne: false,
      modalFourTwo: false,
      modalFiveOne: false,
      modalSixOne: false
    };
  },
  methods: {
    getStarted: function getStarted() {
      this.currentSlide++;
      this.showNav = true;
      this.isDisabled = true;
      this.isAttention = true;
    },
    next: function next() {
      this.currentSlide++; // fixes ei playing multiple audio files from previously visited slides

      document.getElementById('media').pause(); // Make sure answer and nav related objects are reset with each new screen

      this.isDisabled = true;
      this.isAttention = true;
      this.rightAnswerMsg = false;
      this.highlightAnswer = '';
      this.bgImgSrc = './assets/images/slide-standard.png';
    },
    previous: function previous() {
      // if (this.currentSlide < 0) { this.currentSlide = 1; }
      this.currentSlide--;
      this.bgImgSrc = './assets/images/slide-standard.png';
    },
    playMedia: function playMedia() {
      document.getElementById('media').play();
      this.isDisabled = false;
      this.isAttention = false;
    },
    pauseMedia: function pauseMedia() {
      document.getElementById('media').pause();
    },
    chngBg: function chngBg(newBg) {
      this.bgImgSrc = newBg;
    },
    rightAnswer: function rightAnswer() {
      this.rightAnswerMsg = true;
      this.wrongAnswerMsg = false;
      this.highlightAnswer = 'is-highlighted';
    },
    wrongAnswer: function wrongAnswer() {
      this.rightAnswerMsg = false;
      this.wrongAnswerMsg = true;
    }
  }
});
