<template>
  <Example>
    <template #demos>
    	<sf-select v-model="value" label-placeholder="Tool">
			<sf-option-group title="IDE's">
				<sf-option v-for="(option, index) in options" :key="index" :val="option">{{ option }}</sf-option>
			</sf-option-group>
			<sf-option-group title="SGBD's">
				<sf-option v-for="(option, index) in options2" :key="index" :val="option">{{ option }}</sf-option>
			</sf-option-group>
			<sf-option-group title="App Server">
				<sf-option v-for="(option, index) in options3" :key="index" :val="option" keyId="id">{{ option.nome }}</sf-option>
			</sf-option-group>
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
			options: [ 'Vs Code', 'Eclipse', 'Intellij'],
			options2: [ 'Workbench', 'Dbeaver', 'SQL Developer'],
			options3: [{id: 1, nome: 'Tomcat'}, {id: 2, nome: 'JBoss'}]
		}
	},
}
</script>
