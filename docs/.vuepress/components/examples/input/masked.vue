<template>
  <Example fullWidth>
    <template #demos>
      <sf-input label-placeholder="CPF" mask="###.###.###-##" masked v-model="value">
        <template #message>
          {{ value }}
        </template>
      </sf-input>
      <sf-input label-placeholder="CNPJ" mask="##.###.###/####-##" v-model="valueNotMaked">
        <template #message>
          {{ valueNotMaked }}
        </template>
      </sf-input>
    </template>
  </Example>
</template>


<script>
export default {
    data() {
        return {
          value: null,
          valueNotMaked: ''
        }
    }
}
</script>