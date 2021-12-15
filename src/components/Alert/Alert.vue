<template>
	<div :class="classes" v-show="closedValue">
		<div :class="classLine" />
		<i
			v-if="closable"
			:class="`mdi mdi-window-close close`"
			@click="close"
		></i>

		<div class="icon-content" v-if="icon">
			<i :class="`mdi mdi-${icon} icon`"></i>
		</div>
		<div class="alert-content">
			<h4 class="title">
				<slot name="title" />
			</h4>

			<p class="text">
				<slot></slot>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'sf-alert',
	props: {
		border: Boolean,
		type: {
			type: String,
			default: 'primary'
		},
		shadow: Boolean,
		icon: String,
		closable: Boolean,
		closed: Boolean
	},
	data() {
		return {
			closedValue: !this.closed
		}
	},
	computed: {
		classLine() {
			return [`line`, `line--${this.type}`]
		},
		classes() {
			return [
				`sf-alert`,
				`sf-alert--${this.type}`,
				{ shadow: this.shadow },
				{ border: this.border },
				{ [`border--${this.type}`]: this.border }
			]
		}
	},
	methods: {
		close(event) {
			this.closedValue = false
			this.$emit('close', event)
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style';
</style>
