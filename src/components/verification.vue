<template>
    <div class="verification">
        <h2> 인증 이메일을 발송해두었다냥! 이메일을 인증해야한다냥! </h2>
        <b-button class="signbtn" variant="dark" @click="gotoHome()">홈으로 갈거냥?!</b-button>
    </div>
</template>

<script>
export default {
    name: 'verification',

    data() {
        return {
            verificationmsg: '인증 이메일을 발송했다냥!'
        }
    },
    methods: {
        gotoHome(){
            this.$router.replace('/')
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
</style>

