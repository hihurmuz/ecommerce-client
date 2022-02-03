<template>
    <div>
        <TheNavbar/>
        <nuxt class="nuxt-container"/>
        <TheFooter class="w-100"/>
    </div>
</template>
<script>
import TheNavbar from "../components/common/TheNavbar"
import TheFooter from "../components/common/TheFooter"
export default {
    components:{
        TheNavbar,
        TheFooter,
    }
}
</script>
<style>
.nuxt-container {
  min-height: 80vh;
}
</style>
