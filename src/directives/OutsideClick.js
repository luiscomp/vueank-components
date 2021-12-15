function getLastParent(parentNode) {
	if (parentNode.parentNode === null) {
		return parentNode
	}

	return getLastParent(parentNode.parentNode)
}

export default {
	bind: function(el, binding, vnode) {
		el.clickOutsideEvent = function(event) {
			if (!(el == event.target || el.contains(event.target))) {
				vnode.context[binding.expression](event)
			}
		}

		let lastParent = getLastParent(document.body.parentNode)
		lastParent.addEventListener('click', el.clickOutsideEvent)
	},
	unbind: function(el) {
		let lastParent = getLastParent(document.body.parentNode)
		lastParent.removeEventListener('click', el.clickOutsideEvent)
	}
}
