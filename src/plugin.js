import VueMaterialIcon from './components/VueMaterialIcon'

export default {
  install: function (Vue, options) {

    // If basePath is defined then updated default prop value
    if (options && options.basePath) {
      SVGIcon.props.basePath.default = options.basePath
    }

    // Register component
    Vue.component(SVGIcon.name, SVGIcon)
  }
}
