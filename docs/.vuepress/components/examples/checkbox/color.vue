<template>
  <Example>
    <template #demos>
      <sf-checkbox v-model="value" label="Default"/>
      <sf-checkbox v-model="value" label="Primary" color="primary"/>
      <sf-checkbox v-model="value" label="Success" color="success"/>
      <sf-checkbox v-model="value" label="Warn" color="warn"/>
      <sf-checkbox v-model="value" label="Danger" color="danger"/>
    </template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: false
		}
	}
}
</script>
