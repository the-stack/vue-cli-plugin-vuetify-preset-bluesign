
const {
    injectGoogleFontLink,
    VuetifyPresetGenerator,
} = require('@vuetify/cli-plugin-utils')

module.exports = api => {
    VuetifyPresetGenerator(api, 'bluesign', () => {
        injectGoogleFontLink(api, [
            'PT+Sans:400,400i,700,700i&display=swap'
        ])
    })
}