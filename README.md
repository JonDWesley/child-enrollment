# adult-enrollment

#TODO
* Make audio and video autoplay on each slide(?)
* Make the best practices topics, buttons with modal pop-ups
* Try to use v-show instead of v-if to see performance differance
* Seperate audio should play for answer or modal events
* Improve accesability
* Create a custom seek bar for videos
* Add a navigation menu
* Fix simulation document to show facility rep signature
* Animation nextAttention does not work in IE

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