<template>
  <Example fullWidth>
    <template #demos>
      <sf-input placeholder="Carn Number" mask="#### #### #### ####" icon="credit-card-outline" v-model="value"/>
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