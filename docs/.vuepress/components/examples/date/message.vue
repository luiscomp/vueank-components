<template>
  <Example fullWidth>
    <template #demos>
      <span>Default</span>
      <sf-date label="Date" v-model="value">
        <template #message>
          Input your birthday
        </template>
      </sf-date>


      <span style="margin-top: 26px">Color</span>
      <sf-date label="Date Primary" v-model="value">
        <template #message-primary>
          Primary message
        </template>
      </sf-date>

      <sf-date label="Date Success" v-model="value">
        <template #message-success>
          Success message
        </template>
      </sf-date>

      <sf-date label="Date Warn" v-model="value">
        <template #message-warn>
          Warn message
        </template>
      </sf-date>

      <sf-date label="Date Danger" v-model="value">
        <template #message-danger>
          Danger message
        </template>
      </sf-date>
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
