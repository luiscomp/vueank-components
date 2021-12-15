<template>
  <Example>
    <template #demos>
		<sf-switch v-model="value" :val="obj" label="Luis Eduardo"/>
    </template>

    <template #result>
  	  {{ value ? value : 'null' }}
    </template>
  </Example>
</template>

<script>

export default {
	data() {
		return {
			obj: { id: 1, name: 'Eduardo' },
			value: null,
		}
	}
}
</script>
