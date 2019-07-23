<template>
  <div>
    <div>
      <!-- <b-img src="https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/resources%2FKakaoTalk_20190721_221146212.jpg?alt=media&token=74e2054a-14b3-4502-859b-51354e6f6bd6"
      fluid rounded alt="Responsive Rounded image" ></b-img> -->
      <b-img 
        src="https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/resources%2FKakaoTalk_20190721_221146212.jpg?alt=media&token=74e2054a-14b3-4502-859b-51354e6f6bd6"
      fluid rounded alt="Responsive Rounded image"></b-img>
    </div>
    <div class="home">
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
    </div>
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

export default {
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
    .home{
      text-align:center;
    }
</style>
