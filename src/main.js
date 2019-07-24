import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import PortalVue from 'portal-vue'
import JQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFirestore from 'vue-firestore'
import VueFullPage from 'vue-fullpage.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'animate.css'
import 'fullpage-vue/src/fullpage.css'
//import VueFullpage from 'fullpage-vue'


Vue.use(BootstrapVue)
Vue.use(VueFirestore)
Vue.use(PortalVue)

Vue.use(VueFullPage);

Vue.config.productionTip = false

// let app;
// // Your web app's Firebase configuration
// var firebaseConfig = {
//     apiKey: "AIzaSyBv2nclaViHPFgmZuuogaJht0o7rbxfuB8",
//     authDomain: "kagosim-meow.firebaseapp.com",
//     databaseURL: "https://kagosim-meow.firebaseio.com",
//     projectId: "kagosim-meow",
//     storageBucket: "",
//     messagingSenderId: "436058054311",
//     appId: "1:436058054311:web:68e13fc17dea2f23"
// };
// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// export default firebaseApp.firestore();
// firebase.auth().onAuthStateChanged(function(user) {
//         if (!app) {
//             app = new Vue({
//                 router,
//                 render: h => h(App)
//             }).$mount('#app')
//         }
//     })


let app;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv2nclaViHPFgmZuuogaJht0o7rbxfuB8",
    authDomain: "kagosim-meow.firebaseapp.com",
    databaseURL: "https://kagosim-meow.firebaseio.com",
    projectId: "kagosim-meow",
    storageBucket: "gs://kagosim-meow.appspot.com/",
    messagingSenderId: "436058054311",
    appId: "1:436058054311:web:68e13fc17dea2f23"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore();
firebase.auth().onAuthStateChanged(function(user) {
        if (!app) {
            app = new Vue({
                created(){
                    AOS.init();
                },
                el: '#app',
                router,
                components: {App},
                template: '<App/>',
                render: h => h(App)
            }).$mount('#app')
        }
    })
export const db = firebase.firestore()
export const storage = firebase.storage()