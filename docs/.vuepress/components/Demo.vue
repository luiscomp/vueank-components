<template>
  <div class="demo-container">
    <component :is="componentName"/>
  </div>
</template>

<script>
  export default {
    props: {
      componentName: { type: String, required: true }
    }
  }
</script>

<style lang="scss" scoped>
.demo-container {
  padding: 40px;
  background-color: #FFF;
  border: 2px solid #353b48;
  border-radius: 6px 6px 0px 0px;
  margin-top: 14px

}
</style>
