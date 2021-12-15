<template>
	<div
		class="sf-input"
		:style="{ 'margin-bottom': hasMessage ? '20px' : '0px' }"
	>
		<div ref="icon" class="icon-content" v-if="icon">
			<i :class="`mdi mdi-${icon} icon`"></i>
		</div>
		<label for="" class="label">{{
			!labelPlaceholder ? label : null
		}}</label>
		<the-mask
			v-if="containsMask"
			:type="type"
			v-model="internalValue"
			:mask="mask"
			:masked="masked"
			:class="{ 'input-icon': icon }"
			@focus.native="onFocus"
			@blur.native="onBlur"
			@input="onInput"
			@change.native="onChange"
		/>
		<input
			v-if="!containsMask"
			:type="type"
			v-model="internalValue"
			:class="{ 'input-icon': icon }"
			:min="min"
			:max="max"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
		/>
		<div ref="border" class="input-focus" :class="borderClasses" />
		<p
			ref="placeholder"
			class="placeholder"
			:class="{ 'placeholder-icon': icon }"
		>
			{{ labelPlaceholder || placeholder }}
		</p>
		<div class="message">
			<slot name="message" />

			<div class="message--primary">
				<slot name="message-primary" />
			</div>

			<div class="message--success">
				<slot name="message-success" />
			</div>

			<div class="message--warn">
				<slot name="message-warn" />
			</div>

			<div class="message--danger">
				<slot name="message-danger" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sf-input',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: String,
		label: String,
		placeholder: String,
		labelPlaceholder: String,
		masked: {
			type: Boolean,
			default: false
		},
		mask: [Array, String],
		icon: String,
		color: String,
		border: Boolean,
		type: {
			type: String,
			default: 'text'
		},
		min: Number,
		max: Number
	},
	watch: {
		value(v) {
			if (v.length > 0) {
				this.applyFocusLayout()
			} else {
				this.removeFocusLayout()
			}
			this.internalValue = v
		}
	},
	data() {
		return {
			internalValue: ''
		}
	},
	computed: {
		typeInput() {
			let type = ['number', 'search', 'email', 'password', 'tel'].find(
				type => type === this.type
			)
			return type ? type : 'text'
		},
		containsMask() {
			return !!this.mask
		},
		unfocusedClasses() {
			return [
				'label-placeholder',
				'label-placeholder--icon',
				'placeholder-disappear',
				'icon-content--focus',
				`icon-content--${this.color}`
			]
		},
		placeholderClass() {
			return [
				this.labelPlaceholder
					? 'label-placeholder'
					: 'placeholder-disappear',
				this.icon ? 'label-placeholder--icon' : 'placeholder'
			]
		},
		borderClasses() {
			return [`input-focus--${this.color}`]
		},
		hasMessage() {
			return (
				!!this.$slots['message'] ||
				!!this.$slots['message-primary'] ||
				!!this.$slots['message-success'] ||
				!!this.$slots['message-warn'] ||
				!!this.$slots['message-danger']
			)
		}
	},
	methods: {
		onFocus(event) {
			this.applyFocusLayout()
			this.applyBorderLayout()

			this.$emit('focus', event)
		},
		onBlur(event) {
			if (event.target.value.length === 0) {
				this.removeFocusLayout()
			}
			this.removeBorderLayout()

			this.$emit('blur', event)
		},
		onInput(event) {
			if (this.containsMask) {
				this.$emit('input', event)
			} else {
				this.$emit('input', event.target.value)
			}
		},
		onChange(event) {
			this.$emit('change', event)
		},
		applyBorderLayout() {
			if (!this.border) return

			this.$refs.border.classList.add('input-focus--border')
			this.$refs.border.classList.remove('input-focus--nborder')
		},
		removeBorderLayout() {
			if (!this.border) return

			this.$refs.border.classList.remove('input-focus--border')
			this.$refs.border.classList.add('input-focus--nborder')
		},
		applyFocusLayout() {
			if (this.icon) {
				this.$refs.icon.classList.add(
					'icon-content--focus',
					`icon-content--${this.color}`
				)
			}
			this.$refs.placeholder.classList.add(...this.placeholderClass)
		},
		removeFocusLayout() {
			if (this.icon) {
				this.$refs.icon.classList.remove(...this.unfocusedClasses)
			}
			this.$refs.placeholder.classList.remove(...this.unfocusedClasses)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
