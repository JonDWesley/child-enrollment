Vue.component ('modal', {
  template: "#modal-template"
})

var app = new Vue({
  el: '#app',
  data() {
    return {
      currentSlide: 17,
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
      modalSixOne: false,
    };
  },
  methods: { 
    getStarted() {
      this.currentSlide = 1;
      this.showNav = true;
      this.isDisabled = true;
      this.isAttention = true;
    },
    next() {
      this.currentSlide++;
      // fixes ei playing multiple audio files from previously visited slides
      document.getElementById('media').pause();
      // Make sure answer and nav related objects are reset with each new screen
      this.isDisabled = true;
      this.isAttention = true;
      this.rightAnswerMsg = false;
      this.highlightAnswer = '';
      this.bgImgSrc = './assets/images/slide-standard.png';
    },

    previous() {
      // if (this.currentSlide < 0) { this.currentSlide = 1; }
      this.currentSlide --;
      this.bgImgSrc = './assets/images/slide-standard.png';
    },

    playMedia() {
      document.getElementById('media').play();
      this.isDisabled = false;
      this.isAttention = false
    },

    pauseMedia() {
      document.getElementById('media').pause()
    },

    chngBg(newBg) {
      this.bgImgSrc = newBg;
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
  },
});