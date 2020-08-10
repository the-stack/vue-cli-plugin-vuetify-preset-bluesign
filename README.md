# bluesign Vuetify preset plugin
Custom Vuetify Preset for bluesign technology ag

created by the Stack

## 1,2,3... usage

1) Create a new Vue project (vue cli recommended)
2) add vuetify to the project
3) Integrate the bluesign Vuetify plugin

## Integration of the bluesign Vuetify plugin in a Vue project

### package.json
add the following lines to your dependencies:

`"@mdi/font": "^4.8.95",`  
`"material-design-icons-iconfont": "^5.0.1",`

add the following line to your dev-dependencies:

`"vue-cli-plugin-vuetify-preset-bluesign": "git+ssh://git@156.67.38.189:theStack/vue-cli-plugin-vuetify-preset-bluesign.git",`

run `yarn install`

### plugins - vuetify.js

**before importing Vue:**

import `'@mdi/font/css/materialdesignicons.css'`

import `'material-design-icons-iconfont/dist/material-design-icons.css'`

import `'vue-cli-plugin-vuetify-preset-bluesign/assets/_bs-font.scss'`

**after importing Vue and Vuetify:**

import `{ preset } from 'vue-cli-plugin-vuetify-preset-bluesign/preset'`

**add the following lines to new Vuetify default export (vuetify.js):**

    preset,
    theme: {
        options: {
            customProperties: true,
        },
    },
    icons: {
        iconfont: 'md'||'mdi'||'bi',
    },


Happy coding!