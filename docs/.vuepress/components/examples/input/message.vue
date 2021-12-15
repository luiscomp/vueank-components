<template>
  <Example fullWidth>
    <template #demos>
      <span>Default</span>
      <sf-input label-placeholder="Message" type="email" v-model="value">
        <template #message>
          Input your e-mail
        </template>
      </sf-input>

      <span style="margin-top: 26px">Color</span>
      <sf-input label-placeholder="Primary Message" icon="send" v-model="value">
        <template #message-primary>
          You message here
        </template>
      </sf-input>

      <sf-input label-placeholder="Success Message" icon="check-all" v-model="value">
        <template #message-success>
          Valid
        </template>
      </sf-input>

      <sf-input label-placeholder="Warn Message" icon="alert-outline" v-model="value">
        <template #message-warn>
          Insecure password
        </template>
      </sf-input>

      <sf-input label-placeholder="Danger Message" icon="alert-circle-outline" v-model="value">
        <template #message-danger>
          Required
        </template>
      </sf-input>
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