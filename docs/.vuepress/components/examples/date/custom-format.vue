<template>
  <Example>
    <template #demos>
      	<sf-date label="Date" v-model="value" :format="customFormat" />
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
			customFormat: 'yyyy-MM-dd',
			value: '',
		}
	}
}
</script>
