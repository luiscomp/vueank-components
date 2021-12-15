<template>
  <Example fullWidth>
    <template #demos>
    	<sf-radio name="tec" label="Primary" value="Primary" v-model="value" color="primary"/>
		<sf-radio name="tec" label="Success" value="Success" v-model="value" color="success"/>
		<sf-radio name="tec" label="Warn" value="Warn" v-model="value" color="warn"/>
		<sf-radio name="tec" label="Danger" value="Danger" v-model="value" color="danger"/>
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
			value: null,
		}
	}
}
</script>
