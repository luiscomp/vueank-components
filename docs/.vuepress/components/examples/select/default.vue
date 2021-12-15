<template>
  <Example>
    <template #demos>
    	<sf-select v-model="value" label-placeholder="Tool">
			<sf-option v-for="(option, index) in options" :key="index" :val="option">{{ option }}</sf-option>
		</sf-select>
    </template>
    <template #result>
		{{ value }}
	</template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: 'Vs Code',
			options: [ 'Vs Code', 'Eclipse', 'Intellij']
		}
	},
}
</script>
