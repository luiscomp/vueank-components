<template>
	<div>
		<button
			type="button"
			@click="click"
			:disabled="disabled"
			:class="classes"
			:style="style"
		>
			<i v-if="icon" :class="`mdi mdi-${icon} icon`"></i>
			<slot></slot>
		</button>
	</div>
</template>

<script>
import ripple from '../../utils/ripple/ripple'
export default {
	name: 'sf-button',
	props: {
		border: Boolean,
		transparent: Boolean,
		disabled: Boolean,
		color: {
			type: String,
			default: 'primary'
		},
		icon: String
	},
	computed: {
		style() {
			return {
				color: !this.border && !this.transparent ? `white` : ``
			}
		},
		classes() {
			return [
				`sf-button--${this.color}`,
				{ 'sf-button': true },
				{ border: this.border },
				{ transparent: this.transparent },
				{ disabled: this.disabled }
			]
		}
	},
	mounted() {
		const buttons = document.getElementsByTagName('button')
		for (const button of buttons) {
			button.addEventListener('click', ripple)
		}
	},
	methods: {
		click(event) {
			event.target.blur()
			this.$emit('click', event)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
