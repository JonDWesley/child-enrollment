# adult-enrollment

#Build process:
1. Run "npx babel script.js --watch --out-file ./dist/main-compiled.js" to create the build, zip the entire /dist folder and upload to Adobe Connect.

#TODO:
*. Make practice page larger
1. Create Training Portal. Add instruction video to portal. Add html presentation to portal (and link back to portal). Add useful links/files to portal. 
1. move vanilla JS play() and Pause() to VueJS (Wait) - either bind directly to the method, or use the Vue #ref object.
2. Make listening to the full audio track and visiting the buttons manditory and make Nav arrow change when it is possible to move to next section
3. Add your progress bar
4. Improve nav controls when video is playing
5. Make the current incrementing stop at last slide.
6. Once an arrow is enabled in a slide, it should always be enabled for that slide.
7. get second audio for answers to play only on a correct answer.
8. create a simple alert animation for each button that must still be clicked (turn off after first click)
9. do not load nav buttons on first slide
10. change the slide background on the practice sections



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
