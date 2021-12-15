<template>
  <Example fullWidth>
    <template #demos>
    	<sf-time label="Default" v-model="value"/>
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
			value: ''
		}
	}
}
</script>
