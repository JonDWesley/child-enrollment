# adult-enrollment

#Build process:
1. Run "npx babel script.js --watch --out-file ./dist/main-compiled.js" to create the build, zip the entire /dist folder and upload to Adobe Connect.

#TODO:
NEXT STEP: fix right answer highlighting!
1. remove the play and pause button from the video screen
2. out all if statements into one function that get callled with both the next and previous buttons.
1. improve practice, exercise and quiz sections
1. create link to transcript PDF
3. add your progress bar
4. improve nav controls when video is playing
7. get second audio for answers to play only on a correct answer.
13. Making a reference in audio track to nutritionnc.com home page in footer (incorrect)
14. Senario #2 has an akward delay in the start of the audio
16. no mention in introduction of next button showing ready state after audio
17. turn each slide template into a actual vue template (?)
20. nextAttention broke in IE...
2. remane any slides with named functions attached to them to the same name as their function (add a notes about why you did this)
21. clean up code

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
