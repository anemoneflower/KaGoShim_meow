<template>
    <div class="signupEmail">
        <h4>이메일이다냥</h4>
        <input type="text">
        <h4>비밀번호6자리이상이다냥</h4>
        <input type="text">
        <div>
            <button @click="SignUp()">가입하냥?</button>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'SignupEmail',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        SignUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }
    
}
</script>

<style scoped>
h4{
    margin: 40px;
}
</style>

