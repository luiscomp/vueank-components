<template>
  <Example>
    <template #demos>
      <sf-switch v-model="value" label="Default"/>
      <sf-switch v-model="value" label="Primary" color="primary"/>
      <sf-switch v-model="value" label="Success" color="success"/>
      <sf-switch v-model="value" label="Warn" color="warn"/>
      <sf-switch v-model="value" label="Danger" color="danger"/>
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
