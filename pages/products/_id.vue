<template>
    <div class="d-flex flex-column align-items-center w-100 mt-5">
        <div class="d-flex flex-column center-area">
            <div class="d-flex flex-row">
                <div class="d-flex flex-column col-12  col-md-4">
                    <img :src="item.photo[imgIndex]" class="full-size-image" />
                    <div class="d-flex flex-row flex-wrap">
                        <img
                            v-for="(link, index) in item.photo"
                            :key="index"
                            :src="link"
                            class="small-size-images"
                            @click="changeFullImage(index)"
                        />
                    </div>
                </div>
                <div class="d-flex flex-column col-12 col-md-8 pt-5">
                    <h1>{{ item.title }}</h1>
                    <div class="row justify-content-between px-3">
                        <span>ID:{{ item._id }}</span>
                        <h5>$ {{ item.price }}</h5>
                    </div>
                    <h6>{{ item.summary }}</h6>
                    <div class="d-flex flex-row justify-content-between w-100 mt-5">
                        <b-form-spinbutton
                            class="w-75"
                            v-model="value"
                            min="1"
                            :max="item.stockNumber"
                        />
                        <span>Stock : {{ item.stockNumber }}</span>
                    </div>
                    <div class="d-flex flex-row w-100 my-5 mb-4">
                        <b-button class="mr-2 my-0" variant="danger" block>
                            Buy now
                        </b-button>
                        <b-button class="ml-2 my-0" variant="warning" block>
                            Add to cart
                        </b-button>
                    </div>
                    <b-form-rating v-model="item.rating" disabled />
                </div>
            </div>
            <b-tabs class="mt-3">
                <b-tab v-if="item.description" title="Description" active>
                    <p v-for="(el, i) in item.description" :key="i">{{ el }}</p>
                </b-tab>
                <b-tab v-if="item.features" title="Features" active>
                    <p v-for="(el, i) in item.features" :key="i">{{ el }}</p>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
    name: "productDetail",
    data() {
        return {
            item: {
                photo: [],
                description: [],
            },
            imgIndex: 0,
            value: 1,
        };
    },
    created() {
        this.getProduct({ id: this.$route.params.id })
            .then(() => {
                this.item = this.product;
            });
    },
    methods: {
        ...mapActions(["getProduct"]),
        changeFullImage(index) {
            this.imgIndex = index;
        },
    },
    computed: {
        ...mapState(["product"]),
    },
};
</script>

<style scoped>
.center-area {
  max-width: 1200px;
}
.full-size-image {
  width: 100%;
  object-fit: cover;
  padding: 20px;
}
.small-size-images {
  width: 100px;
  object-fit: cover;
  margin: 0 20px;
}
</style>
