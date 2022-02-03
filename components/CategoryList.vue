<template>
    <b-card border-variant="dark" align="center" no-body class="overflow-hidden" >
        <b-row class="m-3">
            <div 
                v-for="(el,i) in category" :key="i"
                class="d-flex flex-column text-center mx-5" 
                style="cursor: pointer"
                @click="getProductByCategory(el)"
            >
                <img 
                    :src="el.src" 
                    class="category-icon" 
                />
                <h6>{{el.name}}</h6>
            </div>
        </b-row>
    </b-card>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return { 
            category: [
                {src: require('~/static/images/man.svg'), name: 'man'},
                {src: require('~/static/images/women.svg'), name: 'women'},
                {src: require('~/static/images/jewelery.svg'), name: 'jewelery'},
                {src: require('~/static/images/electronics.svg'), name: 'electronics'}
            ]
        }
    },
    methods: {
        ...mapActions([
            'getProductAll',
        ]),
        getProductByCategory(item){
            this.getProductAll(item.name)
        }
    },
}
</script>


<style>
.category-icon {
    width: 60px;
}
</style>