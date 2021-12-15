<template>
  <Example>
    <template #demos>
		<sf-switch v-model="objectArray" :val="thays" keyId="id"  :label="thays.name"/>
		<sf-switch v-model="objectArray" :val="ferreira" keyId="id" :label="ferreira.name"/>
		<sf-switch v-model="objectArray" :val="dos" keyId="id" :label="dos.name "/>
		<sf-switch v-model="objectArray" :val="santos" keyId="id" :label="santos.name"/>
    </template>

    <template #result>
  	  {{ JSON.stringify(objectArray, null, 2) }}
    </template>
  </Example>
</template>

<script>

export default {
	data() {
		return {
			thays: {
				id: 1,
				name: 'Thays'
			},
			ferreira: {
				id: 2,
				name: 'Ferreira'
			},
			dos: {
				id: 3,
				name: 'dos'
			},
			santos: {
				id: 4,
				name: 'Santos'
			},
			objectArray: [{
				id: 1,
				name: 'Thays'
			}]
		}
	}
}
</script>
