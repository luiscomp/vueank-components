<template>
  <Example fullWidth>
    <template #demos>
    	<sf-radio name="tec" label="Phyton" value="Phyton" v-model="value"/>
    	<sf-radio name="tec" label="Java" value="Java" v-model="value"/>
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
