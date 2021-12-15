<template>
  <Example fullWidth>
    <template #demos>
      <sf-input label="Name" v-model="value" border/>
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