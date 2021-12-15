<template>
  <Example>
    <template #demos>
		<sf-switch v-model="arrayItems" val="Luis" label="Luis"/>
		<sf-switch v-model="arrayItems" val="Eduardo" label="Eduardo"/>
		<sf-switch v-model="arrayItems" val="Miranda" label="Miranda"/>
		<sf-switch v-model="arrayItems" val="Ferreira" label="Ferreira"/>
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
