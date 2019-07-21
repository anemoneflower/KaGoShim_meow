<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024px"
      img-height="480px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        class="carousel-text"
        caption="따끈따끈 신상!!!"
        text="모찌모찌한 냥이 쿠션이당<3"
        img-src="https://cdn.univ20.com/wp-content/uploads/2018/06/94b733c36e12d247cdbd51b0482fe43f.png"
        img-width="1024px"
      img-height="480px"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide 
        img-src="https://tumblbug-pci.imgix.net/ecb5f2d41403eeada85f3ca258f97370a82f873a/2c70899a07f90874d006c710fe47195b31747c81/79f7a0bb28c32cb3aa956ed9680f8d61975c6ccf/1935f10c-2055-4dcc-be85-0cf2e69096cd.png?ixlib=rb-1.1.0&w=1240&h=930&auto=format%2Ccompress&lossless=true&fit=crop&s=c460418ce11df3e19cf1617778cf1865"
        img-width="1024px"
      img-height="480px"
        >
        <h1>고양이 달력은 어떄!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid w-100"
          width="1024"
          height="480"
          src="https://picsum.photos/1024/480/?image=55"
          alt="image slot"
        >
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
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
        sliding: null
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
    h1 {
        font-family: 'LeeHyunJi', cursive;
        font-size: 100px;
        margin: 30px 0;
    }

    p {
        width: 100%;
        text-align: left;
        font-family: 'LeeHyunJi', cursive;
        font-size: 30px;
    }

    .carousel{
        /* height:  */
        /* overflow: hidden; */
    }
    
    .carousel-text{
        font-family: 'LeeHyunJi', cursive;
    }
</style>
