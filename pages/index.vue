<template>
    <div class="w-100 d-flex flex-column align-items-center pt-4">
        <TheSlider/>
        <CategoryList />
        <div class="row justify-content-center m-0">
            <div class="row flex-wrap justify-content-space-between w-75 m-0">
                <b-card-group v-if="productList" class="m-5" columns deck>
                    <product-card v-for="(el, i) in productList" :key="i" :item="el"/>
                </b-card-group>        
            </div>
        </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import TheSlider from "../components/common/TheSlider"
import CategoryList from '../components/CategoryList.vue'
export default {
    components:{
        TheSlider,
        ProductCard,
        CategoryList,
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
