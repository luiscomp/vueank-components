<template>
  <Example>
    <template #demos>
      <sf-date label="Date" v-model="value" :step="3"/>
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
