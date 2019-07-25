<template>
    <div class="homecontainer">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
              <h1 class="animated bounceInDown delay-0.5s myeffect">카고쉼에 오신 것을 </h1>
              <h1 class="animated slideInLeft delay-0.5s myeffect">환영합니다 </h1>
              <a href="/#/about" class="btn animated shadow-none fadeIn delay-0.5s myeffect"> 더 알아보기 </a>
            </div>
            <div class="section myc">
              
            <homecarousel/>
            </div>
            <div class="section">
              <b-container fluid class="bv-example-row">
                <b-row>
                  <b-col>
                    <h2  class="animated bounceInDown delay-6s myeffect"> 오늘의 냥이비디오당 </h2>
                    <iframe 
                     class="myvid animated bounceInDown delay-6s myeffect"
                      width="560" height="315" src="https://www.youtube.com/embed/2gCiWrSm-04" 
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                  </b-col>
                  <b-col>
                    <h2  class="animated bounceInDown delay-6s myeffect">핫한 냥수다~</h2>
                    <a href="/#/posts" class="btn shadow-none animated fadeIn delay-0.5s myeffect"> 게시판 바로가기 </a>
                    </b-col>
                  <b-col>
                    <h2>오늘의 냥템</h2>
                    <a href="/#/goods" class="btn shadow-none animated fadeIn delay-0.5s myeffect"> 굿즈 마켓 바로가기 </a>
                  </b-col>
                </b-row>
              </b-container>
            </div>
        </full-page>
    </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import { EmbedPlugin } from 'bootstrap-vue'
Vue.use(EmbedPlugin)
import HelloWorld from '@/components/Hello.vue'
import homecarousel from '@/components/HomeCarousel.vue'
import {db} from '../main'
import {storage} from '../main'
import AOS from 'aos'

export default {
  components: {
    homecarousel
  },
  created(){
    AOS.init()
  },
  name: 'home',
  data() {
    return{
      
      mainProps: {
        center:true,
        fluidGrow:true,
        blank: true,
        blankColor: '#bbb',
        width: 300,
        height: 400,
        class: 'my-5'
      }
    }
  },
  components: {
    homecarousel,
    HelloWorld
  }
}



</script>

<style scoped>
  @font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }

*{
    font-family: 'LeeHyunJi', cursive;
    margin:0;
    padding:0;
    text-align: center;
}
  .homecontainer{
    /* width: 80%;
    margin:auto; */
    background-color: rgb(255, 255, 255);
  }
  .myeffect{
    animation-duration: 3s;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;
    color: #685642;

  }

  .btn{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
    background: #B7C68B;
    /* background: hsl(4, 90%, 88%); */
    border-radius: 30px;
    margin-top: 5rem;
    transition-property: background;
    transition-duration: 0.15s;

  }

  .btn:hover{
    background: #DED29E;
    color: #fff;
  }

  .sec2 {
    margin: auto;
  }

  .myvid {
    margin: 2rem;
  }

  .imgclass {

  }

  .myc{
    width: 90%;
    margin: auto;
  }

  /* h1 {
  font-size: 5rem;
  animation: heading;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  }

  @keyframes heading {
    0% {top: -50px}
    100% {top: 200px}
  }
  h2{
    animation-name: content;
    animation-duration: 3s;
    animation-fill-mode: forwards;
  }

  @keyframes content {
    0% {left: -1000px;}
    100%{left: 0;}
  } */
</style>
