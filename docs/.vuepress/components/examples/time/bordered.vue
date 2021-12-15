<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
    	<sf-time label="Default" v-model="value" border/>

		<span style="margin-top: 26px">Color</span>
		<sf-time label="Primary" v-model="timeValue" border color="primary"/>
		<sf-time label="Success" v-model="timeValue" border color="success"/>
		<sf-time label="Warn" v-model="timeValue" border color="warn"/>
		<sf-time label="Danger" v-model="timeValue" border color="danger"/>
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
