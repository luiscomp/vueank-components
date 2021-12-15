<template>
  <Example>
    <template #demos>
		<sf-checkbox v-model="arrayItems" val="Luis" label="Luis"/>
		<sf-checkbox v-model="arrayItems" val="Eduardo" label="Eduardo"/>
		<sf-checkbox v-model="arrayItems" val="Miranda" label="Miranda"/>
		<sf-checkbox v-model="arrayItems" val="Ferreira" label="Ferreira"/>
    </template>

    <template #result>
  	  {{ arrayItems }}
    </template>
  </Example>
</template>

<script>

export default {
	data() {
		return {
			arrayItems: ['Eduardo'],
		}
	}
}
</script>
