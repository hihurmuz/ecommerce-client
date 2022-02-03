<template>
    <div class="d-block text-center">
        <div>
            <b-tabs content-class="mt-3" align="center">
                <b-tab title="Sign In" active>
                    <div>
                        <b-form-group>
                            <b-form-input class="my-3" placeholder="Email" id="input-1" v-model="email" type="email" trim />
                            <b-form-input class="my-3" placeholder="Password" id="input-2" v-model="password" type="password" trim />
                        </b-form-group>
                        <b-button variant="outline-primary" @click="userSignIn" block>Sign In</b-button>
                    </div>
                </b-tab>
                <b-tab title="Sign Up">
                    <div>
                        <b-form-group>
                            <b-form-input class="my-3" placeholder="Enter your email" id="input-3" v-model="email" type="email" trim></b-form-input>
                            <b-form-input class="my-3" placeholder="Enter your name" id="input-4" v-model="name" trim></b-form-input>
                            <b-form-input class="my-3" placeholder="Enter your password"  id="input-5" v-model="password" type="password" trim></b-form-input>
                            <b-form-textarea class="my-3" placeholder="Enter your address"  id="input-6" v-model="address" trim></b-form-textarea>
                            <b-form-input class="my-3" placeholder="Enter your phone number"  id="input-7" v-model="phone" trim></b-form-input>
                            <b-button variant="outline-primary" block @click="userSignUp">Sign Up</b-button>
                        </b-form-group>
                    </div>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

import Cookie from "js-cookie";
export default {  
    data() {
        return {
            name:null,
            email:null,
            password:null,
            phone:null,
            address:null
        }
    },
    methods: {
        ...mapActions([
            'userRegister',
            'userLogin'
        ]),
        userSignUp() {      
            this.userRegister({
                name:this.name,
                email:this.email,
                password:this.password,
                phone:this.phone,
                address:this.address
            })
            .then(() =>{
                this.$bvmodal.hide('login-modal');
            })
        },

        userLogout(){
            Cookie.remove("access_token");  
            this.$store.commit("REMOVE_USER");
        },

        userSignIn(){
            this.userLogin({
                email:this.email,
                password:this.password,
            })
        }
    },
}
</script>
