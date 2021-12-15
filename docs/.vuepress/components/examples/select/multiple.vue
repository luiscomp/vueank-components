<template>
  <Example>
    <template #demos>
    	<sf-select v-model="value" label-placeholder="SGBD's" multiple style="width: 250px">
				<sf-option v-for="(option, index) in options" :key="index" :val="option">{{ option }}</sf-option>
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
			value: '',
			options: [ 'Workbench', 'Dbeaver', 'SQL Developer'],
		}
	},
}
</script>
