<template>
    <div class="mypagecomp">
        <h1> MYPAGE </h1>
        <button @click="logout"> Logout</button>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'mypagecomp',
    methods: {
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace('login')
            })
        }
    }
    
}
</script>
