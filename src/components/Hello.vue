<template>
    <div class="helloworld">
        <h4>이메일</h4>
        <input v-model="email" type="text">
        <h4>패스워드</h4>
        <input v-model="password" type="password">
        <div>
            <button @click="SignUp()">가입하기</button>
        </div>
    </div>
</template>


<script>
import firebase from 'firebase'
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js PWA',
            email: '',
            password: ''
        }
    },
    methods: {
        SignUp() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
