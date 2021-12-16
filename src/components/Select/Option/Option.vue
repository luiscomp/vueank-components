<template>
	<div
		tabindex="0"
		class="sf-option"
		:class="{ 'sf-option--checked': isChecked }"
		@click="onClick"
		@keyup.enter="onClick"
		@keyup.space="onClick"
	>
		<span ref="text"><slot /></span>
		<sf-checkbox
			v-if="$parent.multiple"
			:checked="isChecked"
			tabindex="-1"
		/>
	</div>
</template>

<script>
export default {
	name: 'sf-option',
	props: {
		val: [String, Number, Object, Boolean, Array],
		keyId: String
	},
	data() {
		return {
			multiple: false
		}
	},
	mounted() {
		this.updateDisplayableValue()
	},
	computed: {
		isChecked() {
			if (
				this.$parent.internalValue &&
				this.$parent.internalValue.constructor.name === 'Array'
			) {
				if (this.val.constructor.name === 'Object') {
					return !!this.$parent.internalValue.find(
						obj => obj[this.keyId] === this.val[this.keyId]
					)
				} else {
					return !!this.$parent.internalValue.find(
						value => value === this.val
					)
				}
			}

			if (
				this.$parent.internalValue &&
				this.val &&
				this.val.constructor.name === 'Object'
			) {
				return (
					this.$parent.internalValue[this.keyId] ===
					this.val[this.keyId]
				)
			}

			return this.$parent.internalValue === this.val
		},
		displayableValue() {
			if (this.isChecked) {
				return this.$refs.text.innerHTML
			}
			return null
		}
	},
	methods: {
		onClick() {
			this.$parent.onInput({ val: this.val, keyId: this.keyId })
		},
		updateDisplayableValue() {
			this.$parent.updateDisplayableValue()
		}
	},
	watch: {
		'$parent.multiple': function(v) {
			this.multiple = v
		},
		'$parent.internalValue': function() {
			this.updateDisplayableValue()
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
