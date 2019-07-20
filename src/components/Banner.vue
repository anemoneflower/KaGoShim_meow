<template>
    <vue-navigation-bar :options="navbarData" >
        <!-- Custom Slot -->
                    <template v-slot:custom-section>
                        <div class="custom-section-content">
                            <div class="input-group input-group-sm">
                                <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
                                <div class="input-group-append">
                                    <button class="btn btn-primary" type="button" id="button-addon1" text="search"><i class="fa fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </template>
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
                navbarData: {
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
                            path: '/',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '소개',
                                    path: '#',
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
                            path: '/',
                            subMenuOptions: [
                                {
                                    type: 'link',
                                    text: '전체보기',
                                    path: '/',
                                },
                                {
                                    type: 'hr',
                                    text: '카테고리'
                                },
                                {
                                    type: 'link',
                                    text: '인형',
                                    path: '/',
                                },
                                {
                                    type: 'link',
                                    text: '스티커',
                                    path: '/',
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
                            text: 'Login',
                            path: '/login',
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