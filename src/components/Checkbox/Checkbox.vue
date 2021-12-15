<template>
	<div class="sf-checkbox">
		<label class="checkbox bounce">
			<input
				type="checkbox"
				:checked="internalValue"
				@input="onInput"
				:color="color"
			/>
			<svg viewBox="0 0 21 21">
				<polyline points="5 10.75 8.5 14.25 16 6"></polyline>
			</svg>
			<span v-if="label">{{ label }}</span>
		</label>
	</div>
</template>

<script>
function toggleArrayItem(array, value) {
	var i = array.indexOf(value)
	if (i === -1) array.push(value)
	else array.splice(i, 1)
}
function toggleArrayObject(array, value, key) {
	var obj = array.find(item => item[key] === value[key])

	if (!obj) {
		array.push(value)
	} else {
		let i = array.indexOf(obj)
		array.splice(i, 1)
	}
}

export default {
	name: 'sf-checkbox',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: [Boolean, String, Array, Object],
		val: [String, Number, Object, Boolean, Array],
		keyId: String,
		label: String,
		color: String,
		checked: Boolean
	},
	watch: {
		checked(v) {
			this.internalValue = v
		},
		value(v) {
			this.internalValue = (() => {
				if (v && v.constructor.name === 'String') {
					return v.indexOf(this.val) !== -1
				}

				if (v && v.constructor.name === 'Array') {
					if (v.length !== 0 && v[0].constructor.name !== 'Object') {
						return v.indexOf(this.val) !== -1
					} else {
						return !!v.find(
							item => item[this.keyId] === this.val[this.keyId]
						)
					}
				}

				console.log('Watch')

				return this.value || this.checked
			})()
		}
	},
	data() {
		return {
			internalValue: (() => {
				if (this.value && this.value.constructor.name === 'String') {
					return this.value.indexOf(this.val) !== -1
				}

				if (this.value && this.value.constructor.name === 'Array') {
					if (
						this.value.length !== 0 &&
						this.value[0].constructor.name !== 'Object'
					) {
						return this.value.indexOf(this.val) !== -1
					} else {
						return !!this.value.find(
							item => item[this.keyId] === this.val[this.keyId]
						)
					}
				}

				return this.value || this.checked
			})()
		}
	},
	methods: {
		onInput(event) {
			this.internalValue = event.target.checked

			this.emitEventBasedType(event)
		},
		emitEventBasedType(event) {
			if (this.value && this.value.constructor.name === 'Boolean') {
				this.emitEventBoolean(event)
			} else if (this.value && this.value.constructor.name === 'String') {
				this.emitEventString(event)
			} else if (this.value && this.value.constructor.name === 'Array') {
				this.emitEventArray()
			} else if (this.value && this.value.constructor.name === 'Object') {
				this.emitEventObject()
			} else {
				this.$emit('input', this.val ? this.val : event.target.checked)
			}
		},
		emitEventObject(event) {
			this.$emit('input', event ? this.val : null)
		},
		emitEventString(event) {
			this.$emit('input', event.target.checked ? this.val : null)
		},
		emitEventArray() {
			let array = this.value
			if (array.length !== 0 && array[0].constructor.name !== 'Object') {
				toggleArrayItem(array, this.val)
			} else {
				toggleArrayObject(array, this.val, this.keyId)
			}

			this.$emit('input', array)
		},
		emitEventBoolean(event) {
			this.$emit('input', event.target.checked)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
