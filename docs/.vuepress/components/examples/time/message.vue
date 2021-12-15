<template>
  <Example fullWidth>
    <template #demos>
		<span>Default</span>
		<sf-time label="Message" v-model="value">
			<template #message>
				Input Hour
			</template>
		</sf-time>

		<span style="margin-top: 26px">Color</span>
		<sf-time label="Message Primary" v-model="value">
			<template #message-primary>
				Primary message
			</template>
		</sf-time>

		<sf-time label="Message Success" v-model="value">
			<template #message-success>
				Success message
			</template>
		</sf-time>

		<sf-time label="Message Warn" v-model="value">
			<template #message-warn>
				Warn message
			</template>
		</sf-time>

		<sf-time label="Message Danger" v-model="value">
			<template #message-danger>
				Danger message
			</template>
		</sf-time>
    </template>
  </Example>
</template>

<script>
export default {
	data() {
		return {
			value: ''
		}
	}
}
</script>
