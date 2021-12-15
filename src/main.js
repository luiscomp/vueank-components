import * as components from './components'
import VueTheMask from 'vue-the-mask'
import Luxon from './plugins/luxon'
import OutsideClick from './directives/OutsideClick'

const VueAnk = {
	install(Vue) {
		require('./assets/scss/main.scss')
		require('@mdi/font/css/materialdesignicons.css')
		for (const componentName in components) {
			const component = components[componentName]

			Vue.component(component.name, component)
		}
		Vue.use(VueTheMask)
		Vue.use(Luxon)

		Vue.directive('click-outside', OutsideClick)
	}
}

export default VueAnk

if (typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(VueAnk)
}
