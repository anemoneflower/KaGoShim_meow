<template>
  <div class="outer">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="800px"
      img-height="280px"
      style="text-shadow: 1px 4px 10px #333333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
  
      <b-carousel-slide img-src="https://firebasestorage.googleapis.com/v0/b/kagosim-meow.appspot.com/o/mycat.jpg?alt=media&token=78166405-fa53-4a63-995e-67d8cf8e6bc3">
        <h1 class="title-text">{{title}}</h1>
        <b-button class="hoowon" href="#/support" > 후원 페이지 {{'\n'}} 바로가기</b-button>
      </b-carousel-slide>
    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { CarouselPlugin } from 'bootstrap-vue'
Vue.use(CarouselPlugin)
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        title: "우리들의 목소리를 들어주세요"
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
    @font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
    @font-face { font-family: 'LeeHyunJi'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/LeeHyunJi.woff') format('woff'); font-weight: normal; font-style: normal; }

    *{
      text-align: right;
      vertical-align: text-top;
      background: transparent;
    }
  
    /* .outer{
      vertical-align: text-top;
    }
    .topcent {
        vertical-align: text-top;
    } */
    .outer{
      width: 100%;
      height: 90%;
      background: transparent;
    }
    h1 {
        font-family: 'LeeHyunJi', cursive;
        font-size: 100px;
        /* vertical-align: text-top; */
    }

    p {
        width: 100%;
        text-align: left;
        font-family: 'LeeHyunJi', cursive;
        font-size: 30px;
    }


    .carousel{
        height:  14rem;
        overflow: hidden;
        background: transparent;
    }
    .title-text{
      /* position:inherit; */
      /* margin: 20% 10%; */
      margin: 5px;
      margin-bottom:1rem;
      text-align: center;
      font-weight: 700;
    }    
    .hoowon {
      margin-bottom: 33rem;
      margin-left:60rem;
      width: 9.5rem;
      padding: 1rem;
      border-radius: 1rem;
      font-size: 1.5rem;
      background: rgb(170, 184, 129);
      border: none;
    }

    .hoowon:hover{
    background: #DED29E;
    color: #fff;
  }
    .carousel-text{
        font-family: 'LeeHyunJi', cursive;
    }
</style>
