<template>
  <Example>
    <template #demos>
    	<sf-date label="Date" v-model="value"/>
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
