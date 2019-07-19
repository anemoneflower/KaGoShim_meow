<template>
    <div class="SignOut">
        <button @click="logout"> Logout</button>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'signout',
    methods: {
        logout(){
            firebase.auth().signOut().then(()=>{
                this.$router.replace('login')
            })
        }
    }
    
}
</script>

