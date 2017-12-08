# vue-material-icon
Vue.js (2.5+) functional component to display material icon.


## Installation
Using NPM:
```
npm install vue-material-icon
```


## Usage
In your main.js file:
```js
import VueMaterialIcon from 'vue-material-icon'

Vue.component(VueMaterialIcon.name, VueMaterialIcon)
```

In your components template:
```html
  <vue-material-icon name="favorite" :size="32"></vue-material-icon>
```
- **name** - material icon name which can be find [here](https://material.io/icons/)
- **size** - icon size in px (24 is default)
