<template>
    <div class="container" :style="{ width: width ? `${width}px` : '' }">
        <div class="demos" :class="{ 'full-width': fullWidth }" v-if="hasDemos">
            <slot name="demos"/>
        </div>

        <div class="result" v-if="hasResult">
			<code>
				<slot name="result"/>
			</code>
		</div>
    </div>
</template>

<script>
export default {
	props: {
		fullWidth: Boolean,
		width: Number
	},
	computed: {
		hasDemos() {
			return this.$slots["demos"]
		},
		hasResult() {
			return this.$slots["result"]
		}
	}
}
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;

	.demos {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, auto));
		gap: 10px;
		justify-content: center;
	}

	.full-width {
		grid-template-columns: repeat(auto-fit, minmax(100%, auto)) !important;
	}

	.result {
		margin-top: 20px;
		color: #fff;
		padding: 0;
	}
}
</style>