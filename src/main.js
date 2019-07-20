import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

Vue.config.productionTip = false
let app;
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBv2nclaViHPFgmZuuogaJht0o7rbxfuB8",
    authDomain: "kagosim-meow.firebaseapp.com",
    databaseURL: "https://kagosim-meow.firebaseio.com",
    projectId: "kagosim-meow",
    storageBucket: "",
    messagingSenderId: "436058054311",
    appId: "1:436058054311:web:68e13fc17dea2f23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().onAuthStateChanged(function(user) {
        if (!app) {
            app = new Vue({
                router,
                render: h => h(App)
            }).$mount('#app')
        }
    })
    // new Vue({
    //     router,
    //     render: h => h(App)
    // }).$mount('#app')