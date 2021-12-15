<template>
	<div
		class="sf-time"
		:style="{ 'margin-bottom': hasMessage ? '20px' : '0px' }"
	>
		<label for="" class="label">{{ label }}</label>
		<input
			v-model="internalValue"
			type="time"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
			:readonly="readonly"
			:step="60"
		/>
		<div ref="border" class="input-focus" :class="borderClasses" />
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
	name: 'SfTime',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: String,
		label: String,
		color: String,
		border: Boolean,
		readonly: Boolean
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
			internalValue: this.value,
			dateNow: new Date()
		}
	},
	computed: {
		unfocusedClasses() {
			return [
				'label-placeholder',
				'label-placeholder--icon',
				'placeholder-disappear',
				'icon-content--focus',
				`icon-content--${this.color}`
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
			this.$emit('input', event.target.value)
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
		},
		removeFocusLayout() {
			if (this.icon) {
				this.$refs.icon.classList.remove(...this.unfocusedClasses)
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
