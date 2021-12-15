<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
    	<sf-date label="Date" v-model="value" border/>

		<span style="margin-top: 26px">Color</span>
    	<sf-date label="Date" v-model="value" border color="primary"/>
    	<sf-date label="Date" v-model="value" border color="success"/>
    	<sf-date label="Date" v-model="value" border color="warn"/>
    	<sf-date label="Date" v-model="value" border color="danger"/>
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
