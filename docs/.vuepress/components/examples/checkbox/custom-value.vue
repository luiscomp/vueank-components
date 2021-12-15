<template>
  <Example>
    <template #demos>
		<sf-checkbox v-model="customValue" val="Luis Eduardo" label="Luis Eduardo"/>
    </template>

    <template #result>
  	  {{ customValue ? customValue : 'null' }}
    </template>
  </Example>
</template>

<script>

export default {
	data() {
		return {
			customValue: null,
		}
	}
}
</script>
