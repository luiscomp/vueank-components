<template>
	<div class="sf-group">
		<div class="title">
			<span>{{ title }}</span>
		</div>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'sf-option-group',
	props: {
		title: String
	},
	data() {
		return {
			multiple: this.$parent.multiple,
			internalValue: this.$parent.internalValue
		}
	},
	computed: {
		displayableValue() {
			return this.$children
				.map(child => child.displayableValue)
				.filter(value => !!value)
		}
	},
	methods: {
		onInput(value) {
			this.$parent.onInput(value)
		},
		updateDisplayableValue() {
			this.$parent.updateDisplayableValue()
		}
	},
	watch: {
		'$parent.multiple': function(v) {
			this.multiple = v
		},
		'$parent.internalValue': function(v) {
			this.internalValue = v
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
