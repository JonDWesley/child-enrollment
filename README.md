# adult-enrollment

#TODO
* Make audio and video autoplay on each slide(?)
* Make the best practices topics, buttons with modal pop-ups
* Seperate audio should play for answer or modal events
* Improve accesability
* Improve notes within code
* Create a custom seek bar for videos
* Add a navigation menu
* Fix simulation (could be in audio discription) to know that facility rep signature is not error
* Get .box to always stay in the center of the body
* combine simulation nav buttons into the normal ones
* improve video object manipulation

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

### Build process:
Run "npx babel script.js --watch --out-file ./dist/main-compiled.js" to create the build, zip the entire /dist folder and upload to Adobe Connect.
Replace the development CDN with the production one