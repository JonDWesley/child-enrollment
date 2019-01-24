# adult-enrollment

#TODO Keep these notes in order to move changes to other modules :
* make question pdf full screen and scollable
* make question answer come up on a modal and make nav bar sticky with a white background
* get second audio for answers to play only on a correct answer
* fix reference in audio track to nutritionnc.com home page in footer (incorrect)
* Senario #2 has an akward delay in the start of the audio
* fix intro video to correctly illistrate how nav buttons work
* fix nextAttention animation in IE
* remane any slides with named functions attached to them to the same name as their function (add a notes about why you did this)
* clean up code
* improve notes within code
* Make sure Navigation for simulation is working
* Make a close button for simulation feedback modals
* make it possible to select the next button without firing wrong answer modal
* Improve accesability
* use a switch() function to fire SlideControl()
* make sure their is a footer on every page!
* Tie video controls to the nav bar play/pause buttons
* make sure your final slide contains the correct nds

## Resources, links, and files needed:

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

### Build process:
Run "npx babel script.js --watch --out-file ./dist/main-compiled.js" to create the build, zip the entire /dist folder and upload to Adobe Connect.

###. Production Mode:
replace the development CDN with the production one