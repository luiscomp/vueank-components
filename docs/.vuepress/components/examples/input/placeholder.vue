<template>
  <Example fullWidth>
    <template #demos>
      <sf-input placeholder="Type your name" v-model="value"/>
      <sf-input label="Name" placeholder="Type your name..." v-model="value" border/>
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