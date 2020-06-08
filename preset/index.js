require('./overrides.sass')

const preset = {
    theme: {
        themes: {
            light: {
                primary: '#7A8B93',
                disabledPrim: '#ECF0F2',
                primaryMed: '#A5B6BF',
                secondary: '#003374',
                disabledSec: '#DBDDEC',
                accent: '#003374',
                error: '#D9573B',
                success: '#83B580',
                warning: '#EBAE4B',
                chartColor1: '#3EA3D7',
                chartColor2: '#EBAE4B',
                bsFontColor: '#3A4347',
                negative: '#FFFFFF'
            },
        },
    },
}

module.exports = { preset }