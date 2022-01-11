<template>
  <div class="mainContainer">
    
    <div class="centerArea">
      <div class="productContent">
          <div class="topArea">
              <div class="imgArea">
                <img :src="item.photo[imgIndex]" class="fullSizeImage"/> 
                <div class="smallSizeImagesArea">
                    <img 
                     v-for="(link,index) in item.photo" 
                     :key="index" 
                     :src="link" 
                     class="smallSizeImages"
                     @click="changeFullImage(index)"
                     /> 
                </div>               
              </div>
              <div class="infoArea">
                  <h4>{{item.title}}</h4>
                  <span>ID:{{item._id}}</span>
                  <h5>$ {{item.price}}</h5>
                  <div>{{item.summary}}</div>
                  <b-form-spinbutton id="demo-sb" v-model="value" min="1" max="100"></b-form-spinbutton>
                  <span>Stock : {{item.stockNumber}}</span>
                  <div>
                      <b-button variant="danger">Buy now</b-button>
                      <b-button variant="warning">Add to cart</b-button>
                  </div>
                  <b-form-rating v-model="item.rating"></b-form-rating>
              </div> 
          </div>
          <div class="productDescription">
            <b-tabs content-class="mt-3">
                <b-tab v-if="item.description" title="Description" active>
                    <p v-for="(el, i) in item.description" :key="i">{{el}}</p>
                </b-tab>
                <b-tab v-if="item.features" title="Features" active>
                    <p v-for="(el, i) in item.features" :key="i">{{el}}</p>
                </b-tab>
            </b-tabs>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import{ mapActions, mapState } from 'vuex';

import CategoriesAccordionMenu from "../../components/CategoriesAccordionMenu"
export default {
  components:{    
    CategoriesAccordionMenu
  },
  data() {
      return {
          item: {
              photo: [],
              description: []
          },
          imgSrc:[
              "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
              "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png",
              "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
              "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png",
              "https://static.wixstatic.com/media/04839a_b4d0c16c316d49b68c12dee6f0920ce4.jpg",
              "https://octopus-electronics.com/uploads/products/1553687764Screenshot_2019-03-16_UPDATE_PRODUCT.png",
          ],
          imgIndex:0,
          value:1,
      }
  },
  created(){
      this.getProduct({id: this.$route.params.id}).then(()=>{
          this.item = this.product
      })
  },
  methods: {
       ...mapActions([
            'getProduct',
        ]),
      changeFullImage(index){
          this.imgIndex = index
      }
  },
  computed: {
      ...mapState(['product'])
  }
}
</script>

<style scoped>
.mainContainer{
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
.centerArea{
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 100%;
}
.accordionMenu{
  width: 20%;
  margin-left: 20px;
  padding: 10px;
  background-color: #f5f5f5;
}
.productContent{
  display: flex;
  flex-direction: column;
  width: 100%;
  
}
.topArea{
  display: flex;
  flex-direction: row;
}
.imgArea{
  display: flex;
  flex-direction: column;
  width: 60%;
}
.fullSizeImage{
   width: 500px; 
   height: 400px;
   padding: 20px;
}
.smallSizeImagesArea{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}
.smallSizeImages{
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
}
.infoArea{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 0 0;
}
.productDescription{
    margin: 20px;
}
</style>
