<template>
  <Example fullWidth>
    <template #demos>
		<sf-radio name="obj" :label="obj1.name" :value="obj1" v-model="value"/>
		<sf-radio name="obj" :label="obj2.name" :value="obj2" v-model="value"/>
		<sf-radio name="obj" :label="obj3.name" :value="obj3" v-model="value"/>
		<sf-radio name="obj" :label="obj4.name" :value="obj4" v-model="value"/>
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
			obj1: {
				id: 1,
				name: 'Luis'
			},
			obj2: {
				id: 2,
				name: 'Eduardo'
			},
			obj3: {
				id: 3,
				name: 'Miranda'
			},
			obj4: {
				id: 4,
				name: 'Ferreira'
			},
			value: null
		}
	}
}
</script>
