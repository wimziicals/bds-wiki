import DefaultTheme from 'vitepress/theme'
import PropertiesGenerator from './PropertiesGenerator.vue'
import ErrorLookup from './ErrorLookup.vue'
import './style.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PropertiesGenerator', PropertiesGenerator)
    app.component('ErrorLookup', ErrorLookup)
  }
}
