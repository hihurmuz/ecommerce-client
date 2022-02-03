<template>
  <div class="footer-container d-flex flex-column align-items-center">
       <b-row class="m-0">           
            <b-col cols="12" md="4">
                <span class="brand-header">Udemy Shop</span>
                <p class="infoText">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, adipisci quo excepturi saepe alias quam ex odio.
                </p>
                <span class="phoneText">Phone : +90 000 000 0000</span> <br>
                <span>help@udemyshop.com</span> <br>
                <img 
                    v-for="i in 3" 
                    :key="i" 
                    class="img-instagram" 
                    src="https://www.transparentpng.com/thumb/logo-instagram/hF2oFI-best-logo-instagram-png.png" 
                    alt="Best Logo Instagram PNG @transparentpng.com"
                />

            </b-col>
              
            <b-col cols="12" md="4">
                <h3>Company</h3>
                <b-col v-for="el in linkList" :key="el">
                    <nuxt-link class="text-white" to="/">{{el}}</nuxt-link>
                </b-col>
            </b-col>
              
            <b-col cols="12" md="4">
                <h5>Help</h5>
                <h5>Payment</h5>
                <h5>Terms and Conditions</h5>
                <h5>Privacy Policy</h5>
            </b-col>
        </b-row>
          
        <b-col class="justify-content-center  text-center">
            <div>©{{new Date().getFullYear()}} All Right Reserved</div>
        </b-col>
  </div>
</template>

<script>
export default {
    data() {
        return {
            linkList: [
                "About Us",
                "Contact",
                "Help",
                "Blog"
            ]
        }
    }

}
</script>

<style>
.footer-container{
    background-color: #333C35;
    height: auto;
    color: white;
}
.brand-header{
    font-size: 22px;
    font-weight: 700;
}
.img-instagram{
    width: 60px;
    height: 60px;
}
</style>