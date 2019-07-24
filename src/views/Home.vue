<template>
    <div class="homecontainer">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section">
              <h1 data-aos="flip-up" data-aos-duration="3000">>AOS test</h1>
              <h1 class="animated bounceInDown delay-0.5s myeffect">카고쉼에 오신 것을 </h1>
              <h1 class="animated slideInLeft delay-0.5s myeffect">환영합니다 </h1>
              <a href="/#/about" class="btn animated fadeIn delay-0.5s myeffect"> 더 알아보기 </a>
            </div>
            <div class="section">
              <!-- <h1 data-aos="flip-up" data-aos-duration="3000"> 화이팅</h1> -->
              <b-img 
                class="revealOnScroll" data-animation="fadeInUp"
                src="https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/resources%2FKakaoTalk_20190721_221146212.jpg?alt=media&token=74e2054a-14b3-4502-859b-51354e6f6bd6"
                fluid rounded alt="Responsive Rounded image" width=1200rem>
              </b-img>
            </div>
            <div class="section">
              <b-container fluid class="bv-example-row">
                <b-row>
                  <b-col>
                    <h1 data-aos="flip-up" data-aos-duration="3000"> 오늘의 냥이비디오당 </h1>
                    <iframe 
                      width="560" height="315" src="https://www.youtube.com/embed/2gCiWrSm-04" 
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                  </b-col>
                  <b-col>
                    <h1 data-aos="flip-up" data-aos-duration="3000">핫한 냥수다~</h1>
                    </b-col>
                  <b-col>
                    <h1>오늘의 냥템</h1>
                  </b-col>
                </b-row>
              </b-container>
            </div>
        </full-page>
    </div>
  
  <!-- <div class="homecontainer">
    <div>
      <b-img 
        src="https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/resources%2FKakaoTalk_20190721_221146212.jpg?alt=media&token=74e2054a-14b3-4502-859b-51354e6f6bd6"
        fluid rounded alt="Responsive Rounded image" width=3000rem>
        </b-img>
    </div>
    <homecarousel/>
    <HelloWorld msg="보고싶었다냥"/>
    <b-container fluid class="bv-example-row">
      <b-row>
        <b-col>
          <h1> 오늘의 냥이비디오당 </h1>
          <iframe 
            width="560" height="315" src="https://www.youtube.com/embed/2gCiWrSm-04" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
          </iframe>
        </b-col>
        <b-col>
          <h1>핫한 냥수다~</h1>
          </b-col>
        <b-col>
          <h1>오늘의 냥템</h1>
        </b-col>
      </b-row>
    </b-container>
  </div> -->
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
    background-color: #eee;
  }
  .myeffect{
    animation-duration: 3s;
  }

  h1 {
    font-size: 4rem;
    font-weight: 800;

  }

  .btn{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 2rem;
    font-size: 1.5rem;
    background: hsl(4, 90%, 88%);
    border-radius: 30px;
    margin-top: 5rem;
    transition-property: background;
    transition-duration: 0.3s;

  }

  .btn:hover{
    background: rgb(221, 188, 187);
    color: #fff;
  }

  .sec2 {
    margin: auto;
  }


  
  .imgclass {

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
