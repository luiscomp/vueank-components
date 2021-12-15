<template>
  <Example>
    <template #demos>
      <sf-date label="Date" v-model="value" color="danger" min="2020-12-20" max="2020-12-25"/>
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
