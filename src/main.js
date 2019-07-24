import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import firebase from 'firebase'
import PortalVue from 'portal-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueFirestore from 'vue-firestore'
import ImageUploader from 'vue-image-upload-resize'
Vue.use(ImageUploader);
Vue.use(BootstrapVue)
Vue.use(VueFirestore)
Vue.use(PortalVue)


Vue.config.productionTip = false


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
            router,
            render: h => h(App)
        }).$mount('#app')
    }
})
export const db = firebase.firestore()
export const storage = firebase.storage()