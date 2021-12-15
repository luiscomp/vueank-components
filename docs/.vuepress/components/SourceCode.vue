<!-- SourceCode.vue -->
<template>
  <div class="container">
    <div class="item" >
      <div class="tooltip">
        <img :src="$withBase('/icons/code.svg')" alt="Código" @click="expanded = !expanded">
        <span class="tooltiptext">Code</span>
      </div>
    </div>
    <div ref="collapse" class="collapsed" :style="{ 'max-height': expanded ? `${collapseHeight}px` : '0px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  	name: 'Source',
	data() {
		return {
				expanded: false,
				collapseHeight: Number
		}
	},
	mounted() {
		this.collapseHeight = this.$refs.collapse.scrollHeight
	}
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    border: 2px solid #353b48;
    border-top: 0;
    padding: 6px 12px;
    outline: none;
    transition: background-color 400ms;

    img {
      position: relative;
      cursor: pointer;
      top: 3px;
    }
  }

  .collapsed {
    padding: 0 18px;
    max-height: 0;
    overflow: hidden;
    background-color: #f1f1f1;
    transition: max-height 200ms ease-out;
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    opacity: 0;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 150%;
    left: 50%;
    margin-left: -60px;
    transition: opacity 300ms ease-in-out;
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent transparent black transparent;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
}
</style>
