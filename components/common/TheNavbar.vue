<template>
   <b-navbar toggleable="sm" type="light" variant="light">
        <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

        <b-navbar-brand href="/">Udemy Shop</b-navbar-brand>

        <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>   

        <b-navbar-nav class="ml-auto"  v-if="!this.$store.state.email">
            <b-nav-item @click="$bvModal.show('login-modal')">Login</b-nav-item>
        </b-navbar-nav>        

        <b-dropdown :text="this.$store.state.email" variant="outline-dark" size="sm" class="m-2 ml-auto" right v-else>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="userLogout">Logout</b-dropdown-item>
        </b-dropdown>

        <div>
            <b-modal id="login-modal" hide-footer>
                <template v-slot:modal-title>
                    Login
                </template>
                <user-login-card />
            </b-modal>
        </div>
    </b-navbar>
</template>

<script>
import UserLoginCard from '../user/LoginCard.vue';
export default {
  components: { UserLoginCard },  
}
</script>
