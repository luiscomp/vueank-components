<template>
  <Example fullWidth>
    <template #demos>
      <span>Default</span>
      <sf-input label-placeholder="Primary" icon="palette" color="primary" v-model="value"/>
      <sf-input label-placeholder="Success" icon="palette" color="success" v-model="value"/>
      <sf-input label-placeholder="Warn" icon="palette" color="warn" v-model="value"/>
      <sf-input label-placeholder="Danger" icon="palette" color="danger" v-model="value"/>

      <span style="margin-top: 26px">Bordered</span>
      <sf-input label-placeholder="Primary" icon="palette" color="primary" v-model="value" border/>
      <sf-input label-placeholder="Success" icon="palette" color="success" v-model="value" border/>
      <sf-input label-placeholder="Warn" icon="palette" color="warn" v-model="value" border/>
      <sf-input label-placeholder="Danger" icon="palette" color="danger" v-model="value" border/>
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