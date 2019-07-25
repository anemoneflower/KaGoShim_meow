<template>
    <div class="signupEmail">

        <b-form-group
            :invalid-feedback="invalidFeedback_name"
            :valid-feedback="validFeedback_name"
            :state="state_name"
            >
            <h4 class="title-email">집사를 뭐라고 부르면 되냥?</h4>
            <b-form-input class= "inputs border-secondary" style="width: 50%" :state="state_name" type="text" v-model="name" size="lg"></b-form-input>
        </b-form-group>

        <b-form-group
            :invalid-feedback="invalidFeedback_email"
            :valid-feedback="validFeedback_email"
            :state="state_email"
            >
            <h4 class="title-email">이메일이뭐냥?</h4>
            <b-form-input class= "inputs border-secondary" style="width: 50%" :state="state_email" type="email" v-model="email" size="lg" placeholder="NangNang@meow.com"></b-form-input>
        </b-form-group>

        <b-form-group
            :invalid-feedback="invalidFeedback_pwd"
            :state="state_pwd">
            <h4 class="title-pw">비밀번호넣으라냥!</h4>
            <b-input-group 
                class= "inputs" style="width: 50%" size="lg">
                <b-form-input :state="state_pwd" class="pwinputs border-secondary" :type="passwordFieldType" v-model="password"></b-form-input>
                <b-input-group-append>
                    <b-button class="m-0 shadow-none" @click="switchVisibility()" variant="dark">Visible</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>
        <b-form-group
            :invalid-feedback="invalidFeedback_pwd_check"
            :valid-feedback="validFeedback_pwd_check"
            :state="state_pwd_check">
            <label class="pwconfiglabel" for="pwgroup"> 비밀번호 확인하라냥! </label>
            <b-input-group id="pwgroup" class= "inputs" style="width: 50%" size="lg">
                <b-form-input :state="state_pwd_check" class="pwinputs border-secondary" :type="passwordFieldType_check" v-model="password_check"></b-form-input>
                <b-input-group-append>
                    <b-button class="m-0 shadow-none" @click="switchVisibility_check()" variant="dark">Visible</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>
    
        <div>
            <b-button class="signbtn" size="lg" variant="dark" @click="SignUp()">가입하냥?!</b-button>
        </div>

        <h2> {{verificationmsg}} </h2>
    
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'SignupEmail',
    computed: {
        state_name(){
            return this.name !== ''
        },
        invalidFeedback_name(){
            return this.state_name === false ? '이름이나 별명을 알려달라냥~' : ''
        },
        validFeedback_name(){
            return this.state_name === true ? '잘했다냥 ^*^' : ''
        },
        state_email(){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.email);
        },
        invalidFeedback_email(){
            return this.state_email === false ? '이곳으로 인증 메일을 보낸다냥! 제대로 된 이메일을 넣으라냥 @.@' : ''
        },
        validFeedback_email(){
            return this.state_email === true ? '잘했다냥 ^*^' : ''
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
    data() {
        return {
            name: '',
            email: '',
            password: '',
            password_check: '',
            passwordFieldType: 'password',
            passwordFieldType_check: 'password',
            verificationmsg: '',
            default_img: 'https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/profile%2Fdefault_profile.png?alt=media&token=c095635d-739e-4f39-b767-d98a64cde8e7'
        }
    },
    methods: {
        SignUp() {
            if(this.state_pwd_check && this.state_email && this.state_name){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((userData) => {
                        this.verificationmsg = '인증 이메일을 발송했다냥!'
                        console.log(userData)
                        userData.user.sendEmailVerification().then(function() { 
                            console.log('인증메일 발송 성공') 
                        }).catch(function(error) { 
                            console.error('인증메일 발송 에러', error); 
                        });
                        userData.user.updateProfile({
                            displayName: this.name,
                            photoURL: this.default_img
                        }).catch((error) => {
                            console.log(error)
                        })
                        this.$router.replace('verification')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
            else{
                this.$bvToast.toast('안 적은 항목이 있냥??', {
                        title: '회원가입에 실패했다냥!',
                        autoHideDelay: 5000,
                        solid: true,
                        variant: 'danger',
                        toaster: 'b-toaster-bottom-center'
                    })
            }
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
@font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff'); } @font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff') format('woff'); } .lottemarthappy * { font-family: 'LotteMartHappy', sans-serif; }
    *{
        font-family:'LotteMartHappy';
    }
    button {
        margin: 40px;
    }
    .title-email, .title-name, .title-pw{
        font-family: 'Goyang';
        font-weight: bold;
    }
    button{
        font-family: 'Goyang';
    }
    .title-name{
        margin-top: 10%;
        margin-bottom: 30px;
    }
    .title-email{
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .inputs{
        margin-left: 25%;
        margin-top: 10px;
        background: #ffd9df;
    }
    .inputs::placeholder{
        font-style: italic;
        color: #aba9a9
    }
    .title-pw{
        margin-top: 50px;
        margin-bottom: 20px;
    }
    .pwinputs{
        background: #ffd9df;
    }
    .signbtn{
        margin: 5% 10px 20px 20px;
    }
    .pwconfiglabel{
        margin-top: 3%;
    }
</style>

