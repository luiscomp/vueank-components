<template>
	<transition :enter-active-class="this.in" :leave-active-class="this.out">
		<slot />
	</transition>
</template>

<script>
export default {
	name: 'sf-transition',
	props: {
		in: {
			type: String,
			required: false,
			default: 'collapseIn'
		},
		out: {
			type: String,
			required: false,
			default: 'collapseOut'
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'style.scss';
</style>
