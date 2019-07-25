<template>

    <div class="navbarclass">
        <vue-navigation-bar v-if="loginLink === 'login'" :options="navbarData_login" >
        </vue-navigation-bar>    
        <vue-navigation-bar v-else :options="navbarData_mypage" >
        </vue-navigation-bar>   
    </div>
     
</template>

<script>
    import firebase from 'firebase'
    import { userInfo } from 'os'

    import 'vue-navigation-bar/dist/vue-navigation-bar.css'
    import Vue from 'vue'
    import VueNavigationBar from 'vue-navigation-bar'
    Vue.component('vue-navigation-bar', VueNavigationBar)

    export default {
        name: 'banner',
        data () {
            return {
                loginLink: '',
                navbarData_login: {
                    elementId: 'main-navbar',
                    isUsingVueRouter: true,
                    mobileBreakpoint: 992,
                    brandImagePath: '/',
                    brandImage: require('@/assets/caticon.png'),
                    brandImageAltText: 'vue-navigation-bar',
                    collapseButtonStyle: 'dark',
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsLeft: [
                        {
                            type: 'link',
                            text: '카고쉼은',
                            path: '/about',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '소개',
                                    path: '/about',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: '역사',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '카고쉼 맵',
                                    path: '/',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '게시판',
                            path: '/posts',
                        },
                        {
                            type: 'link',
                            text: '굿즈 마켓',
                            path: '/goods',
                        },
                        {
                            type: 'link',
                            text: '갤러리',
                            path: '/gallery',
                        },
                        {
                            type: 'link',
                            text: '후원하기',
                            path: '/support',
                        }
                    ],
                    menuOptionsRight: [
                        // {
                        //     type: 'button',
                        //     text: 'Signup',
                        //     path: '/signup',
                        //     class: 'button-pink'
                        // },
                        {
                            type: 'button',
                            text: 'login',
                            path: '/login',
                            class: 'button-pink'
                        }
                    ]
                },
                navbarData_mypage: {
                    elementId: 'main-navbar',
                    isUsingVueRouter: true,
                    mobileBreakpoint: 992,
                    brandImagePath: '/',
                    brandImage: require('@/assets/caticon.png'),
                    brandImageAltText: 'vue-navigation-bar',
                    collapseButtonStyle: 'dark',
                    ariaLabelMainNav: 'Main Navigation',
                    menuOptionsLeft: [
                        {
                            type: 'link',
                            text: '카고쉼은',
                            path: '/about',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '소개',
                                    path: '/about',
                                },
                                {
                                    type: 'hr',
                                },
                                {
                                    type: 'link',
                                    text: '역사',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '카고쉼 맵',
                                    path: '/',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '게시판',
                            path: '/posts',
                        },
                        {
                            type: 'link',
                            text: '굿즈 마켓',
                            path: '/goods',

                        },
                        {
                            type: 'link',
                            text: '갤러리',
                            path: '/gallery',
                        },
                        {
                            type: 'link',
                            text: '후원하기',
                            path: '/support',
                        },
                    ],
                    menuOptionsRight: [

                        {
                            type: 'button',
                            text: 'mypage',
                            path: '/mypage',
                            class: 'button-pink'
                        },
                        {
                            type: 'button',
                            text: 'logout',
                            path: '/logout',
                            class: 'button-pink'
                        }
                    ]
                }
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
                this.loginLink = 'mypage'
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
        // Link: function(){
        //     if(this.loginLink === 'mypage'){
        //         this.$router.replace('mypage')
        //     }
        //     else if(this.loginLink === 'login'){
        //         this.$router.replace('login')
        //     }
        //     else{
        //         console.log("GOTOVERIFYPAGE")
        //     }
        // }
        signout(){
            firebase.auth().onAuthStateChanged((user)=>{
                user.signOut()
            })
        }
    
    }
}
</script>

<style lang="scss">
  @font-face { font-family: 'LeeHyunJi'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/LeeHyunJi.woff') format('woff'); font-weight: normal; font-style: normal; }
    *{        
        font-family: 'LeeHyunJi', cursive;
        font-size: 23px;
    }
    .vnb {
        background: transparent;// #fff;
        
        .button-pink {
            background: #B7C68B;

            &:hover {
                background: darken(#DED29E	, 10%);
            }
        }
    }
</style>