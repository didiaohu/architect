<template>
  <div class="product">
    <h5>mapGetters获取的值分别为</h5>
    <span>{{productsPeach}}</span>
    <br/>
    <span>{{productsApple}}</span>
    <br/>
    <h4>home传入的值为:{{homeToProduct}}</h4>
    <br/>  

    <!-- 注册容器型组件 -->
    <pre-product :productToPre='productToPre'></pre-product>

    <el-button @click="productToHome">点击将值传入home</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import preProduct from './components/preProduct'
import * as homeProduct from '@/page/pageTalk/homeProduct'
export default {
  computed: mapGetters({
    productsPeach: 'allProductsPeach',
    productsApple: 'allProductsApple',
    homeToProduct:'homeToProduct'
  }),
  methods:{
    ...mapActions([
    'getAllProductsPeach'
    ]),
    productToHome(){
      console.log('单机时间出发啦')
      // homeProduct.productToHome()
      homeProduct.secondColleague.send('我是product将值传入home到啦')
      this.$router.push({path:'/'})
    }
  },
  components:{preProduct},
  data(){
    return{
      productToPre:{
        name:'李白',
        age:'42岁',
        sex:'男'
      }
    }
  },
  // methods:{
  //   productToHome(){
  //     console.log('单机时间出发啦')
  //     // homeProduct.productToHome()
  //     homeProduct.secondColleague.send("")
  //     this.$router.push({path:'/'})
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product{
  font-size: 18px;
}
</style>
