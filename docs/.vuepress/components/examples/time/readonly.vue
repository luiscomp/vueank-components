<template>
  <Example fullWidth>
    <template #demos>
    	<sf-time label="Readonly" v-model="value" readonly/>
    </template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: '12:15',
		}
	}
}
</script>
