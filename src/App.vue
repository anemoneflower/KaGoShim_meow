<template>
  <div id="app">
    <banner/>
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | -->
      <button @click="Link()"> {{loginLink}}</button>
      <!-- <router-link to="checkuser()">{{loginLink}}</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase'
import { userInfo } from 'os'
import banner from './components/Banner.vue'
export default {
  name: 'App',
  components: {
        banner
    },
  data(){
    return{
      loginLink: ''
    }

  },
  created: function(){
    console.log(this)
    firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        console.log("USER: ",user)
          if(user.emailVerified === true){
            console.log("ALREADY LOGGED IN")
            this.loginLink = 'mypage'
            // this.$router.replace('mypage')
          }
          else{
            console.log("NOT VERYFIED")
            this.loginLink = 'verify'
            // this.verificationmsg = '인증 이메일을 발송했다냥!'
            //         console.log(user)
            //         user.sendEmailVerification().then(function() { 
            //             console.log('인증메일 발송 성공') 
            //         }).catch(function(error) { 
            //             console.error('인증메일 발송 에러', error); 
            //         });
          }
      }
      else{
          console.log("DID NOT LOGGED IN")
          this.loginLink='login'
          // this.$router.replace('login')
        }
      })
  },
  methods:{
    Link: function(){
      if(this.loginLink === 'mypage'){
        this.$router.replace('mypage')
      }
      else if(this.loginLink === 'login'){
        this.$router.replace('login')
      }
      else{
        console.log("GOTOVERIFYPAGE")
      }
    }
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
