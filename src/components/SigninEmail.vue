<template>
    <div class="signinEmail">
    
        <h4>이메일이다냥</h4>
    
        <input v-model="email" type="text">
    
        <h4>
            비밀번호다냥
            <button type="password" @click="switchVisibility()"> visible </button>
        </h4>
    
        <input :type="passwordFieldType" v-model="password">
    
        <div>
    
            <button @click="SignIn()">로그인하냥?</button>
            <button>
                <router-link to="/signup">회원가입하라냥!</router-link>
            </button>
    
        </div>
    
    </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"


// import BootstrapVue from 'bootstrap-vue'

// Vue.use(BootstrapVue)

export default {
    name: 'SigninEmail',
    data() {
        return {
            email: '',
            password: '',
            passwordFieldType: 'password'
        }
    },
    methods: {
        SignIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) =>{
                    console.log(user)
                })
                // .catch((error)=>{
                //     this.$bvToast.toast('가입안했으면 회원가입하라냥!', {
                //         title: 'Wrong Email or Password',
                //         toaster: 'b-toaster-top-center',
                //         solid: true,
                //         variant: "primary",
                //         autoHideDelay: 10000
                //     })
                // })
                .catch(function(error){
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // console.log(this.email)
                    // console.log(this.password)
                    console.log("ERROR", error.message)
                    // makeToast()
                })

            // firebase.auth().onAuthStateChanged(function(user) {
            //     if (user) {
            //         console.log(user)
            //     } else {
            //         console.log("NOUSER")
            //     }
            // });
        },
        switchVisibility(){
            this.passwordFieldType = this.passwordFieldType==='password' ? 'text' : 'password'
        }
      
    }

}
</script>
<style scoped>
button{
    margin:20px;
    margin-left: 10px;
}
</style>
