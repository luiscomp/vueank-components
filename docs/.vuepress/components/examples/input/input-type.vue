<template>
  <Example fullWidth>
    <template #demos>
      </sf-input>
        <sf-input label-placeholder="Password" type="password" icon="dots-horizontal" v-model="valuePassword" border>
        <template :slot="messageType">
          {{ messagePassword }}
        </template>
      </sf-input>

      <sf-input label-placeholder="Search" type="search" v-model="valueSearch" icon="eraser"/>
      <sf-input label-placeholder="Number" type="number" :min="0" :max="10" icon="numeric" v-model="valueNumber"/>
      <sf-input label-placeholder="Tel" type="tel" :mask="['(##) #####-####', '(##) ####-####']" icon="phone" v-model="valuePhone"/>
    </template>
  </Example>
</template>


<script>
export default {
    data() {
        return {
          valuePassword: '',
          valueSearch: '',
          valueNumber: '',
          valuePhone: ''
        }
    },
    computed: {
      messagePassword() {
        let value = this.valuePassword.length
        switch(true) {
          case (value < 4):
            return 'Weak'
          case (value < 8):
            return 'Good'
          default:
            return 'Strong'
        }
      },
      messageType() {
        let value = this.valuePassword.length
        switch(true) {
          case (value < 4):
            return 'message-danger'
          case (value < 8):
            return 'message-warn'
          default:
            return 'message-success'
        }
      }
    }
}
</script>