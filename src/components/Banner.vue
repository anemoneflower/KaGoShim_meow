<template>
    <vue-navigation-bar v-if="loginLink === 'login'" :options="navbarData_login" >
    </vue-navigation-bar>    
    <vue-navigation-bar v-else :options="navbarData_mypage" >
    </vue-navigation-bar>    
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
                            path: '/',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '핫한 글',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '전체 글',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '제보하기',
                                    path: '/',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '굿즈 마켓',
                            path: '/goods',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '전체보기',
                                    path: '/goods',
                                },
                                {
                                    type: 'hr',
                                    text: '카테고리'
                                },
                                {
                                    type: 'link',
                                    text: '인형',
                                    path: '/goods',
                                },
                                {
                                    type: 'link',
                                    text: '스티커',
                                    path: '/goods',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '후원하기',
                            path: '/',
                        },
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
                    brandImage: require('@/assets/logo.png'),
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
                            path: '/',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '핫한 글',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '전체 글',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '제보하기',
                                    path: '/',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '굿즈 마켓',
                            path: '/goods',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '전체보기',
                                    path: '/goods',
                                },
                                {
                                    type: 'hr',
                                    text: '카테고리'
                                },
                                {
                                    type: 'link',
                                    text: '인형',
                                    path: '/goods',
                                },
                                {
                                    type: 'link',
                                    text: '스티커',
                                    path: '/goods',
                                },
                            ]
                        },
                        {
                            type: 'link',
                            text: '후원하기',
                            path: '/support',
                        },
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
                            text: 'mypage',
                            path: '/mypage',
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

<style lang="scss">
    .vnb {
        .button-pink {
            background: hsl(3, 89%, 82%);

            &:hover {
                background: darken(rgb(156, 132, 131), 10%);
            }
        }
    }
</style>