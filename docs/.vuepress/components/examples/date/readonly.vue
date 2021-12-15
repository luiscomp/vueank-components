<template>
  <Example>
    <template #demos>
      <sf-date label="Date" v-model="value" readonly/>
    </template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: new Date().toLocaleString('pt-Br', { dateStyle: 'short'})
		}
	}
}
</script>
