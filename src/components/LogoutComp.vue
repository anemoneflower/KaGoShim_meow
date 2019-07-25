<template>
    <div class="logout">
        <h4>{{Logout()}}</h4>
    </div>
</template>


<script>
import firebase from 'firebase'
export default {
    name: 'logout',
    data() {
        return {
        }
    },
    methods: {
      Logout(){
        firebase.auth().signOut().then(()=>{
          console.log('logout succeed!')
        })
        this.$router.replace('/')
      }
    }
}
</script>