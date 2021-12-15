<template>
	<div class="sf-radio">
		<label :for="id" class="radio">
			<input
				type="radio"
				:name="name"
				:id="id"
				class="hidden"
				:value="value"
				:color="color"
				v-model="internalValue"
				@focus="onFocus"
				@blur="onBlur"
				@input="onInput"
				@change="onChange"
			/>
			<span class="input" color="primary"></span>
			<span>{{ label }}</span>
		</label>
	</div>
</template>

<script>
function makeid(length) {
	var result = ''
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	var charactersLength = characters.length
	for (var i = 0; i < length; i++) {
		result += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		)
	}
	return result
}

export default {
	name: 'sf-radio',
	model: {
		prop: 'data',
		event: 'input'
	},
	props: {
		data: [String, Number, Array, Object],
		label: String,
		name: String,
		color: String,
		value: [String, Number, Array, Object]
	},
	watch: {
		data(v) {
			this.internalValue = v
		}
	},
	data() {
		return {
			id: makeid(5),
			internalValue: this.data
		}
	},
	methods: {
		onFocus(event) {
			this.$emit('focus', event)
		},
		onBlur(event) {
			this.$emit('blur', event)
		},
		onInput() {
			this.$emit('input', this.value)
		},
		onChange(event) {
			this.$emit('change', event)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
