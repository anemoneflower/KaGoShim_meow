<template>
    <div class="mypagecomp">
        <h1> MYPAGE </h1>
        <b-img v-bind="mainProps" thumbnail fluid :src='profimg' rounded="circle" alt="Circle image"></b-img>
        
        <img class="change-photo" src="@/assets/camera.png" alt="change photo"/>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'mypagecomp',
    data(){
        return{
            mainProps: { width: 150, height: 150, class: 'm1' },
            profimg: "https://placekitten.com/200/200"
        }
    },
    methods: {
        
    }
    
}
</script>
<style scoped>
    .change-photo{
        width: 40px;
        height: 30px;
    }
</style>
