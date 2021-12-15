<template>
  <Example fullWidth>
    <template #demos>
      <sf-input label="Label" v-model="value"/>
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