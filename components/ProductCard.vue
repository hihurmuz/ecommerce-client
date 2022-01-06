<template>
  <b-card
        tag="div"
        class="product-card-container container"
        @click="goProductDetail"
    >
        <b-card-title class=title>{{item.title}}</b-card-title>
        <b-img :src="item.photo[0]" :alt="item.description[0]"  height="200" />
            
        <b-row>            
            <b-col cols="8">
                <b-card-text>
                    {{ item.mainCategory }} / {{ item.subCategory }}
                </b-card-text>
            </b-col>
            <b-col cols="4">
                <b-card-text class="text-right" >
                    {{ item.price }} $
                </b-card-text>
            </b-col>
        </b-row>
        <b-card-text class="text-left summary" >
            {{ item.summary }}
        </b-card-text>        
    </b-card>
</template>

<script>
export default {
    props: {
        item: {
          type: Object,
          default: () => {
                return { 
                    title: '',
                    price: '',
                    description: [''],
                    photo:[''],
                    summary: ''
                }
          }  
        },

    },
    methods: {
        goProductDetail() {
            this.$router.push(`products/${this.item._id}`)
            console.log(this.item._id)
        }
    }
}
</script>

<style scoped>
.product-card-container {
    margin: 10px;
    min-width: 20rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-around;
    height: inherit;
    
}
.title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.summary {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}

</style>