<template>
    <div class="signinEmail">
    
        <h4 class="titles emailinput">이메일이다냥</h4>
        <b-form-input class= "inputs border-secondary shadow-none" style="width: 50%" type="email" v-model="email" size="lg" placeholder="NangNang@meow.com"></b-form-input>
    
        <h4 class="titles pwinput">비밀번호다냥</h4>
        <b-input-group class= "inputs" style="width: 50%" size="lg">
            <b-form-input class="pwinputs border-secondary shadow-none" :type="passwordFieldType" v-model="password"></b-form-input>
            <b-input-group-append>
                <b-button class="m-0 shadow-none" @click="switchVisibility()" type="password" variant="dark">Visible</b-button>
            </b-input-group-append>
        </b-input-group>
    
        <div>
            <b-button class="signbtn" variant="dark" @click="SignIn()">로그인하냥?</b-button>
            <b-button class="signbtn" variant="dark" @click="SignUp()">회원가입하라냥!</b-button>
        </div>

        <button @click="GoogleSignIn()" class="social-button">
            <img src="../assets/google_1.png"/>
        </button>
    
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
        SignUp(){
            this.$router.replace('signup')
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
        outline: 0;
        border: 0;
        background: transparent;
        margin-top: 50px;
    }
    .inputs{
        margin-left: 25%;
        margin-top: 10px;
        background: #ffd9df;
    }
    .inputs::placeholder{
        font-style: italic;
        color: #aba9a9
    }
    .titles{
        margin-top: 10%;
        margin-bottom: 50px;
    }
    .pwinput{
        margin-top: 7%;
        margin-bottom: 50px;
    }
    .pwspace{
        whitd-space: nowrap;
    }
    .pwinputs{
        background: #ffd9df;
    }
    .signbtn{
        margin: 5% 10px 20px 20px;
    }
    
</style>
