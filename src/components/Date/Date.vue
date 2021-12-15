<template>
	<div
		class="sf-date"
		:style="{ 'margin-bottom': hasMessage ? '20px' : '0px' }"
	>
		<label for="" class="label">{{ label }}</label>
		<input
			v-model="internalValue"
			type="date"
			:min="minDate"
			:max="maxDate"
			@focus="onFocus"
			@blur="onBlur"
			@input="onInput"
			@change="onChange"
			:readonly="readonly"
			:step="step"
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
import { browserDateFormat } from '../../utils/dateUtils'
export default {
	name: 'SfDate',
	model: {
		prop: 'value',
		event: 'input'
	},
	props: {
		value: String,
		label: String,
		color: String,
		border: Boolean,
		format: String,
		min: String,
		max: String,
		readonly: Boolean,
		step: {
			type: Number,
			default: 1
		}
	},
	watch: {
		value(v) {
			if (v.length > 0) {
				this.applyFocusLayout()
			} else {
				this.removeFocusLayout()
			}

			this.internalValue = this.$luxon.DateTime.fromFormat(
				v,
				this.format ? this.format : browserDateFormat
			).toISODate()
		}
	},
	data() {
		return {
			internalValue: this.$luxon.DateTime.fromFormat(
				this.value,
				this.format ? this.format : browserDateFormat
			).toISODate(),
			dateNow: new Date()
		}
	},
	computed: {
		minDate() {
			return this.min
				? this.min
				: this.$luxon.DateTime.local()
						.plus({ year: -100 })
						.toISODate()
		},
		maxDate() {
			return this.max
				? this.max
				: this.$luxon.DateTime.local()
						.plus({ year: 100 })
						.toISODate()
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
			let date = this.$luxon.DateTime.fromFormat(
				event.target.value,
				'yyyy-MM-dd'
			).toFormat(this.format ? this.format : browserDateFormat)

			this.$emit('input', date)
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
