"use strict";

Vue.component('modal', {
  template: "#modal-template"
});
var app = new Vue({
  el: '#app',
  data: function data() {
    return {
      current: 0,
      bgImgSrc: './assets/images/slide-standard.png',
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
    next: function next() {
      this.current++; // fixes ei playing multiple audio files from previously visited slides

      document.getElementById('audio').pause(); // Make sure answer and nav related objects are reset with each new screen

      this.rightAnswerMsg = false;
      this.highlightAnswer = '';
      this.bgImgSrc = './assets/images/slide-standard.png';
    },
    previous: function previous() {
      if (this.current <= 0) this.current = 1;
      this.current--;
      this.bgImgSrc = './assets/images/slide-standard.png';
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
