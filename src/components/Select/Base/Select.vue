<template>
	<div v-click-outside="onBlur" class="sf-select">
		<div class="select">
			<div class="input" @click="onClick()">
				<label for="" class="label">{{
					!labelPlaceholder ? label : null
				}}</label>
				<div ref="ivalues" class="input--values">
					<div
						class="values"
						:class="{ 'values--multiple': multiple }"
						v-for="(value, index) in displayableValue"
						:key="index"
					>
						<span v-if="value && value.length > 0">{{
							value
						}}</span>
					</div>
				</div>
				<img
					src="../../../assets/icons/menu-down.svg"
					:class="{ 'img-show': this.showOptions }"
					tabindex="0"
					@focus="onFocus()"
				/>
				<span ref="placeholder" class="placeholder">
					{{ labelPlaceholder || placeholder }}
				</span>
			</div>
			<div
				ref="refOpt"
				class="options"
				:position="showPosition"
				:class="classesOptions"
			>
				<div class="scroll-wrapper">
					<slot />
				</div>
			</div>
			<div ref="refOptWrapper" class="options-wapper" />
		</div>
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
	name: 'SfSelect',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: [String, Number, Object, Boolean, Array],
		multiple: Boolean,
		label: String,
		placeholder: String,
		labelPlaceholder: String
	},
	watch: {
		value(v) {
			this.setFocus(v)
			this.internalValue = v
		}
	},
	data() {
		return {
			displayableValue: [],
			internalValue: this.value,
			showOptions: false,
			showOptionsInViewport: false
		}
	},
	mounted() {
		this.setFocus(this.value)
	},
	computed: {
		showPosition() {
			return this.showOptionsInViewport ? 'top' : 'bottom'
		},
		classesOptions() {
			return [this.showOptions ? `show-options-${this.showPosition}` : '']
		},
		unfocusedClasses() {
			return ['label-placeholder', 'placeholder-disappear']
		},
		placeholderClass() {
			return [
				this.labelPlaceholder
					? 'label-placeholder'
					: 'placeholder-disappear'
			]
		}
	},
	methods: {
		onInput({ val, keyId }) {
			if (!this.multiple) {
				this.showOptions = false
			}

			let newValue = this.internalValue

			if (this.multiple) {
				if (
					this.internalValue &&
					this.internalValue.constructor.name === 'Array'
				) {
					if (val.constructor.name !== 'Object') {
						toggleArrayItem(newValue, val)
					} else {
						toggleArrayObject(newValue, val, keyId)
					}

					if (this.internalValue.length === 1) {
						newValue = this.internalValue[0]
					}
				} else if (
					this.internalValue &&
					this.internalValue.constructor.name === 'Object'
				) {
					if (newValue[keyId] !== val[keyId]) {
						newValue = [newValue, val]
					} else {
						newValue = null
					}
				} else if (this.internalValue) {
					if (newValue !== val) {
						newValue = [newValue, val]
					} else {
						newValue = null
					}
				} else {
					newValue = val
				}

				this.$emit('input', newValue)
			} else {
				this.$emit('input', val)
			}
		},
		onClick(event) {
			this.onFocus()
			this.$emit('click', event)
		},
		onFocus(event) {
			this.showOptions = true
			this.showOptionsInViewport = !this.optionsInViewport()
			this.$emit('focus', event)
		},
		onBlur(event) {
			this.showOptions = false
			this.$emit('blur', event)
		},
		optionsInViewport() {
			const rect = this.$refs.refOptWrapper.getBoundingClientRect()
			return (
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <=
					(window.innerHeight ||
						document.documentElement.clientHeight) &&
				rect.right <=
					(window.innerWidth || document.documentElement.clientWidth)
			)
		},
		setFocus(value) {
			if (value && value.constructor.name !== 'Object') {
				if (value.length > 0) {
					this.applyFocusLayout()
				} else {
					this.removeFocusLayout()
				}
			} else if (value && value.constructor.name === 'Object') {
				this.applyFocusLayout()
			} else {
				this.removeFocusLayout()
			}
		},
		applyFocusLayout() {
			this.$refs.placeholder.classList.add(...this.placeholderClass)
		},
		removeFocusLayout() {
			this.$refs.placeholder.classList.remove(...this.unfocusedClasses)
		},
		updateDisplayableValue() {
			this.displayableValue = this.displayableValues()
		},
		displayableValues() {
			let values = []
			this.$children.forEach(child => {
				if (child.$el._prevClass === 'sf-option') {
					if (child.displayableValue)
						values.push(child.displayableValue)
				} else {
					if (
						child.displayableValue &&
						child.displayableValue.constructor.name === 'Array'
					) {
						values.push(child.displayableValue[0])
					} else {
						values.push(child.displayableValue)
					}
				}
			})

			return values
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
