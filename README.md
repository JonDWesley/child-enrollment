# adult-enrollment

#Build process:
1. Run "npx babel script.js --watch --out-file ./dist/main-compiled.js" to create the build, zip the entire /dist folder and upload to Adobe Connect.

#TODO:
1. make question pdf full screen and scollable
2. make question answer come up on a modal and make nav bar sticky with a white background
6. get second audio for answers to play only on a correct answer
13. fix reference in audio track to nutritionnc.com home page in footer (incorrect)
14. Senario #2 has an akward delay in the start of the audio
16. fix intro video to correctly illistrate how nav buttons work
17. fix nextAttention animation in IE
18. remane any slides with named functions attached to them to the same name as their function (add a notes about why you did this)
21. clean up code
22. improve notes within code

NOTES ADD them to the code???
    
    //this is the logic that is run "on load" of each slide
    //this logic is common to all slides
    //differing logic is possible through the iff statements



Things I deleted or didn't go with:


    // slideVideo() {
    //   var video = document.createElement('video');
    //   video.src = "./assets/video/8.mp4";
    //   video.setAttribute("width", "95%");
    //   video.setAttribute("controls", "controls");
    //   video.setAttribute("autoplay", "true")
    //   document.getElementById('videoForm').appendChild(video);
    //   // this.showNav = false;
    //   video.onended = function() {
    //     document.getElementById('videoForm').removeChild(video);
    //     // app.showNav = true;
    //   }
    // },


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
