<template>
    <div class="signupEmail">
    
        <h4>이메일이다냥</h4>
        <input v-model="email" type="text">
    
        <h4>
            비밀번호6자리이상이다냥
            <button type="password" @click="switchVisibility()"> visible </button>
        </h4>
        <input :type="passwordFieldType" v-model="password">
    
        <div>
            <button @click="SignUp()">가입하냥?</button>
        </div>
        <h2> {{verificationmsg}} </h2>
    
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'SignupEmail',
    data() {
        return {
            email: '',
            password: '',
            passwordFieldType: 'password',
            verificationmsg: ''
        }
    },
    methods: {
        SignUp() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then((userData) => {
                    this.verificationmsg = '인증 이메일을 발송했다냥!'
                    console.log(userData)
                    userData.user.sendEmailVerification().then(function() { 
                        console.log('인증메일 발송 성공') 
                    }).catch(function(error) { 
                        console.error('인증메일 발송 에러', error); 
                    });

                })
                .catch((error) => {
                    console.log(error)
                })
        },
        switchVisibility(){
            this.passwordFieldType = this.passwordFieldType==='password' ? 'text' : 'password'
        }
    }

}
</script>

<style scoped>
h4 {
    margin: 20px;
}

button {
    margin: 40px;
}

button:hover{
    background: #6666
}

</style>

