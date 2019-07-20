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
        <p>
            or Sign in with Google <br>
            <button @click="GoogleSignIn()" class="social-button">
                GoogleLogin
            </button>
        </p>
    
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
        switchVisibility(){
            this.passwordFieldType = this.passwordFieldType==='password' ? 'text' : 'password'
        },
        SignIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) =>{
                    console.log(user)
                    this.$router.replace('mypage')
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
        
        GoogleSignIn(){
            const provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then((result) => {
                this.$router.replace('home');
            }).catch((err)=>{
                alert('Oops. '+err.message)
            })
        }
      
    }

}
</script>
<style scoped>
button{
    margin:20px;
    margin-left: 10px;
}

.social-button{
    width: 75px;
    background: white;
    padding: 10px;
    border-radius: 100%;
    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0,2); */
    outline: 0;
    border: 0;
}
.social-button:active{
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
