<template>
  <div class="mainContainer">
    <TheSlider/>
    <div class="centerArea">
      <div class="productsList">
        <b-card-group v-if="productList" class="m-5" columns deck>
          <product-card v-for="(el, i) in productList" :key="i" :item="el"/>
        </b-card-group>        
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import TheSlider from "../components/TheSlider"
export default {
  components:{
    TheSlider,
    ProductCard,
  },
  data() {
    return {
      productList: []
    }
  },
  created() {
    this.$store.dispatch('getProductAll', {page: 0, limit: 10}).then(() =>{
      this.productList = this.$store.state.productList.result
    })
  }
}
</script>

<style>
.mainContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.centerArea{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.accordionMenu{
  width: 20%;
  margin-left: 20px;
  padding: 10px;
  background-color: #f5f5f5;
}
.productsList{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  padding-left: 20px;
  padding-right: 20px;

}
</style>
