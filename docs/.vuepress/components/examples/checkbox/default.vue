<template>
  <Example>
    <template #demos>
      <sf-checkbox v-model="value" label="Default"/>
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
			value: false
		}
	}
}
</script>
