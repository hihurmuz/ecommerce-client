import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";
import Cookie from "js-cookie";

export const state= ()=>({
    serverUrl: 'https://ecommerce-server-kappa.vercel.app/api',
    name:null,
    email:null,
    productList: [],
    product: {}
})

export const actions={
    nuxtServerInit({commit},{req}){
        if(process.server && process.static) return
        if(!req.headers.cookie) return

        const parsedCookie = cookieparser.parse(req.headers.cookie);
        const parsedToken = parsedCookie.access_token;

        if(!parsedToken) return

        const decoded = JWTDecode(parsedToken)
        
        if(decoded){
            commit("SET_USER",{
                name:decoded.name,
                email:decoded.email,
              });
        }
    },
    getProductAll({ state, commit }, {page, limit, product}) {
        return this.$axios.$get(`${state.serverUrl}/product/list?page=${page}&limit=${limit}`, {product})
            .then(res => {
                commit('SET_ALL_PRODUCT', res)
            })
            .catch((err) => {
                console.error(err)
            })
    },
    getProduct({ state, commit }, {id}) {
        return this.$axios.$get(`${state.serverUrl}/product/${id}`)
            .then(res => {
                commit('SET_PRODUCT', res.product)
            })
            .catch((err) => {
                console.error(err)
            })
    },
    
    async userRegister({ state, commit },payload) {
        let result = await this.$axios.$post(`${state.serverUrl}/authentication/signup`,payload)
        
        if(result.success){
            Cookie.set("access_token",result.token);
            commit("SET_USER",{
                name:this.name,
                email:this.email,
            });
        }
    },
    
    async userLogin({ state, commit },payload) {
        let result = await this.$axios.$post(`${state.serverUrl}/authentication/signin`,payload)
        Cookie.set("access_token",result.token)
        commit("SET_USER",{
            name:result.user.name,
            email:result.user.email,
        });
    }
}

export const mutations ={
    SET_USER(state,user){
        state.name= user.name;
        state.email= user.email;
    },
    REMOVE_USER(state){
        state.name= null;
        state.email= null;
    },
    SET_ALL_PRODUCT( state, payload) {
        state.productList = payload
    },
    SET_PRODUCT( state, payload) {
        state.product = payload
    }
}