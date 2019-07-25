<template>
    <div class="Mypagecomp">
        <h1> MYPAGE </h1>
        
        <b-container class="mypage-layout">
            <b-row>
                <b-col align-self="start" cols="2">
                    <b-img v-bind="mainProps" :src='profimg' rounded="circle" alt="profile image"></b-img>
                    <br>
                    <label for="image">
                        <input type="file" name="image" id="image" style="display:none;" @change="detectFiles($event)"/>
                        <img class="change-photo" src="@/assets/camera.png" alt="change photo"/>
                    </label>
                </b-col>
                <b-col v-if="change === false" cols="8" class="show-profile">
                    <b-row>
                        <h2 class="show-name"> {{displayName}} </h2>
                    </b-row>

                    <b-row>
                        <h4> 이메일: {{email}}</h4>
                    </b-row>

                    <b-row v-if="(emailVerified === false)">
                        <b-col> 이메일 인증이 안되었다냥! 인증해달라냥!! </b-col>
                    </b-row>
                    <b-row align-h="end">
                        <b-button @click="if_change()" class="button-change" size="sm" variant="secondary">수정할거냥?</b-button>
                    </b-row>
                </b-col>
                <b-col v-else class="change-mypage">
                    <b-row class="name-change">
                        <b-col cols="4">
                            <h4>뭐라고 부르냥?</h4>
                        </b-col>
                        <b-col cols="8">
                            <b-form-input class= "border-secondary" style="width: 50%" v-model="displayName" :placeholder="displayName"></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4">
                            <h4>이메일이다냥! </h4>
                        </b-col>
                        <b-col cols="8">
                            <b-form-group
                                :valid-feedback="validFeedback_email"
                                :state="state_email"
                                style="width: 50%"
                                >
                                <b-form-input class= "inputs border-secondary" :state="state_email" type="email" v-model="new_email" :placeholder="email"></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4">
                            <h4>비밀번호를 바꾸냥? </h4>
                        </b-col>
                        <b-col cols="8">
                            <b-form-group
                                :invalid-feedback="invalidFeedback_pwd"
                                :state="state_pwd"
                                style="width: 50%">
                                <b-input-group 
                                    class= "inputs" >
                                    <b-form-input :state="state_pwd" class="pwinputs border-secondary" :type="passwordFieldType" v-model="password"></b-form-input>
                                    <b-input-group-append>
                                        <b-button class="m-0 shadow-none" @click="switchVisibility()" variant="dark">Visible</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="4">
                            <h4>비밀번호를 확인하라냥! </h4>
                        </b-col>
                        <b-col cols="8">
                            <b-form-group
                                :invalid-feedback="invalidFeedback_pwd_check"
                                :valid-feedback="validFeedback_pwd_check"
                                :state="state_pwd_check"
                                 style="width: 50%">
                                <b-input-group id="pwgroup" class= "inputs">
                                    <b-form-input :state="state_pwd_check" class="pwinputs border-secondary" :type="passwordFieldType_check" v-model="password_check"></b-form-input>
                                    <b-input-group-append>
                                        <b-button class="m-0 shadow-none" @click="switchVisibility_check()" variant="dark">Visible</b-button>
                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    
                </b-col>
            </b-row>
            <b-row v-if="change !== false" align-h="center">
                    <b-button @click="save()" size="sm" variant="secondary">저장하면되냥?</b-button>
            </b-row>
        </b-container>
    </div>
</template>
<script>
import firebase from 'firebase';
import {storage} from '../main'
var storageRef = storage.ref();
export default {
    name: 'mypagecomp',
    computed:{
        state_email(){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.new_email);
        },
        // invalidFeedback_email(){
        //     return this.state_email === false ? '이곳으로 인증 메일을 보낸다냥! 제대로 된 이메일을 넣으라냥 @.@' : ''
        // },
        validFeedback_email(){
            return this.state_email === true ? '이곳으로 인증 메일을 보내겠다냥 ^*^' : ''
        },
        state_pwd(){
            return this.password.length >= 6;
        },
        invalidFeedback_pwd(){
            return this.state_pwd === false ? '비밀번호는 6자리 이상 넣어야한다냥!' : ''
        },
        state_pwd_check(){
            return this.state_pwd && (this.password === this.password_check) && (this.password.length !== 0)
        },
        invalidFeedback_pwd_check(){
            return this.state_pwd_check === false ? '비밀번호를 다시 확인하라냥!!!!!!' : ''
        },
        validFeedback_pwd_check(){
            return this.state_pwd_check === true ? '잘했다냥 ^*^' : ''
        }
    },
    data(){
        return{
            mainProps: { width: 150, height: 150, class: 'm1 border border-dark' },
            profimg: "https://placekitten.com/200/200",
            image: '',
            displayName: '',
            email: '',
            new_email: '',
            emailVerified: '',
            change: false,
            user: '',
            pwUpdate: false,
            password: '',
            password_check: '',
            passwordFieldType: 'password',
            passwordFieldType_check: 'password',
        }
    },
    created: function(){
        this.user = firebase.auth().currentUser;
        console.log('user has url: ', this.user.photoURL)
        this.profimg = this.user.photoURL
        if(this.user.displayName != null){
            // console.log('user has displayName: ', user.displayName)
            this.displayName = this.user.displayName
        }
        if(this.user.email != null){
            // console.log('user has email: ', user.email)
            this.email = this.user.email
            if(this.user.emailVerified === false){
                console.log('email not verified')
            }
        }
        this.emailVerified = this.user.emailVerified
    },
    methods: {
        detectFiles (e) {
            let fileList = e.target.files || e.dataTransfer.files
            Array.from(Array(fileList.length).keys()).map(x => {
                this.upload(fileList[x])
            })
        },
        upload (file) {
            firebase.auth().onAuthStateChanged((user) =>{
                var uploadRef = storageRef.child("profile/"+user.email)
                uploadRef.put(file).then(success=>{
                    uploadRef.getDownloadURL()
                        .then(url =>{
                            user.updateProfile({
                                photoURL: url
                            })
                            this.profimg = url
                            this.$router.go(this.$router.currentRoute)
                        })
                })
            })
        },
        if_change(){
            this.change = true
        },
        save(){
            this.user.updateProfile({
                displayName: this.displayName
            }).then(()=>{
                console.log('update profile succeed')
            })
            if(this.state_pwd_check){
                this.user.updatePassword(this.password).then(function(){
                    console.log('pw update succeed')
                })
            }
            if(this.new_email !== ''){
                this.user.updateEmail(this.new_email).then(()=>{
                    console.log('email update succeed')
                })
                this.user.sendEmailVerification().then(function() {
                    console.log('send verification succeed')
                }).catch(function(error) {
                    console.log(error)
                });
            }
            this.$router.replace('/')
        },
        switchVisibility(){
            this.passwordFieldType = this.passwordFieldType==='password' ? 'text' : 'password'
        },
        switchVisibility_check(){
            this.passwordFieldType_check = this.passwordFieldType_check==='password' ? 'text' : 'password'
        }
    }
    
}
</script>
<style scoped>
@font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff'); } @font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff') format('woff'); } .lottemarthappy * { font-family: 'LotteMartHappy', sans-serif; }
@font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
    *{
        font-family: 'Goyang';
    }
    .change-photo{
        width: 40px;
        height: 30px;
        margin-top: 5px;
    }
    h1{
        font-family: 'LotteMartHappy';
        margin: 50px 0px 30px 0px;
    }
    .change-mypage{
        padding: 10px;
    }
    .name-change{
        margin-bottom: 18px;
    }
    .show-profile{
        margin-left: 20px;
    }
    .show-name{
        margin-bottom: 15px;
        font-weight: bold;
    }
    .button-change{
        margin-bottom: 15px;
    }

</style>
