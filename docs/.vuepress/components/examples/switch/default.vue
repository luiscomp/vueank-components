<template>
  <Example>
    <template #demos>
        <sf-switch v-model="value" on="Sim" off="Não"/>
    </template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: null
		}
	},
}
</script>
