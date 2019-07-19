<template>
    <div class="signinEmail">
    
        <h4>이메일이다냥</h4>
    
        <input v-model="email" type="text">
    
        <h4>비밀번호다냥</h4>
    
        <input v-model="password" type="text">
    
        <div>
    
            <button @click="SignIn()">로그인하냥?</button>
    
        </div>
    
    </div>
</template>

<script>
import * as firebase from "firebase/app"
import "firebase/auth"

export default {
    name: 'SigninEmail',
    data() {
        return {
            msg:'',
            email: '',
            password: ''
        }
    },
    methods: {
        SignIn() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(this.email)
                console.log(this.password)
                console.log("ERROR", error.message)
            });

            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log(user)
                } else {
                    console.log("NOUSER")
                }
            });
        }
    }

}
</script>