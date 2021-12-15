<template>
  <Example fullWidth>
    <template #demos>
      <sf-input label-placeholder="Name" v-model="value"/>
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