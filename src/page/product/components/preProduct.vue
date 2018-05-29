<template>
  <div class="productCon">
    <h4>我是展示型组件,我接收页面值为:{{productToPre}}</h4>
  </div>
</template>

<script>
export default {
  props:['productToPre'],
  // computed:{
  //   preData(){
  //     return this.productToPre;
  //   }
  // }
}
</script>

<style scoped>

</style>


