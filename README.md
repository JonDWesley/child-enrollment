# adult-enrollment

#Build process:
1. Run "npx babel main.js --out- create the build, zip the entire /dist folder and upload to Adobe Connect.

#TODO:
1. Do not reveal next() button until audio has finished.
1. Fix Modals
2. move vanilla JS play() and Pause() to VueJS (Wait) - either bind directly to the method, or use the Vue #ref object.
3. Put pohoto credits as a hover text effect.
4. Make listening to the full audio track and visiting the buttons manditory and make Nav arrow change when it is possible to move to next section
6. Keep all buttons the same size regardless of the content (text) inside.
7. Add your progress bar
8. Add title with image source for each photo
9. Improve nav controls when video is playing
10. Make the current incrementing stop at last slide.
11. Once an arrow is enabled in a slide, it should always be enabled for that slide.
12. This program should break out of the confines of the "elearning box" and move into the custom realm of the SPA with an entire learning ecosystem (this is your value product in comparison to Elearning Authoring Tools like Captivate and Articulate).
13. transfer program over to the Vue CLI ecosystem with components instead of template tags.
14. get second audio for answers to play only on a correct answer.


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
