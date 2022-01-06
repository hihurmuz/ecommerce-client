import JWTDecode from "jwt-decode";
import cookieparser from "cookieparser";

export const state= ()=>({
    serverUrl: 'https://ecommerce-server-kappa.vercel.app/api',
    name:null,
    email:null,
    productList: []
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
            commit("setUser",{
                name:decoded.name,
                email:decoded.email,
              });
        }
    },
    getProductAll({ state, commit }, {page, limit}) {
        return this.$axios.$get(`${state.serverUrl}/product/list?page=${page}&limit=${limit}`)
            .then(res => {
                commit('SET_ALL_PRODUCT', res)
                console.log(res)
            })
            .catch((err) => {
                console.error(err)
            })
    },
}

export const mutations ={
    setUser(state,user){
        state.name= user.name;
        state.email= user.email;
    },
    deleteUser(state){
        state.name= null;
        state.email= null;
    },
    SET_ALL_PRODUCT( state, payload) {
        state.productList = payload
    }
}