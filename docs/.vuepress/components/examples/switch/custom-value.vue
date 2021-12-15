<template>
  <Example>
    <template #demos>
		<sf-switch v-model="value" val="Luis Eduardo" label="Luis Eduardo"/>
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
			value: null,
		}
	}
}
</script>
