<template>
    <b-card
        tag="div"        
        @click="goProductDetail"
        class="m-2"
        style="min-width: 20rem;max-width: 20rem;cursor: pointer;"
    >
        <b-row>
            <b-col >
                <b-card-img style="max-height: 10rem;object-fit: contain;" :src="item.photo[0]" alt="Image" class="rounded-0" />
            </b-col>
        </b-row>
        
        <b-card-title class=title>{{item.title}}</b-card-title>
            
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
        }
    }
}
</script>

<style scoped>
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