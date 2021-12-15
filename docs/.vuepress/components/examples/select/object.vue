<template>
  <Example>
    <template #demos>
    	<sf-select v-model="value" label-placeholder="Servers">
			<sf-option v-for="(option, index) in options" :key="index" :val="option" keyId="id">{{ option.nome }}</sf-option>
		</sf-select>
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
			value: null,
			options: [{id: 1, nome: 'Tomcat'}, {id: 2, nome: 'JBoss'}]
		}
	},
}
</script>
