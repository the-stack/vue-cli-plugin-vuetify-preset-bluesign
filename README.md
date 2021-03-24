# bluesign Vuetify preset plugin
Custom Vuetify Preset for bluesign technology ag. 

# Branch: v2
Preset for vuetify-version > 2.4.2

**Note: this is a private project and ONLY runs on bluesign applications!** 

created by the Stack, 2020

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

`"vue-cli-plugin-vuetify-preset-bluesign": "^1.0.3",`

run `yarn install`

### plugins - vuetify.js

**before importing Vue:**

import `'@mdi/font/css/materialdesignicons.css'`

import `'material-design-icons-iconfont/dist/material-design-icons.css'`

import `'vue-cli-plugin-vuetify-preset-bluesign/assets/_bs-font.scss'`
import `'vue-cli-plugin-vuetify-preset-bluesign/assets/_bs-material-design-icon-variants.scss'`

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

**changes**

Happy coding!

# TODO
Move back to npm, delete repo and make a fresh git history :-)
