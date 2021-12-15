import * as luxon from 'luxon'
export default {
	install(Vue) {
		Vue.prototype.$luxon = luxon
	}
}
