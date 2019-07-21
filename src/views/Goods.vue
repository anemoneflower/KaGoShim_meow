<template>
  <div id="contactspage">
     
  <section class="container">
     <Carousel/>
    <div class="columns">
      <div class="column is-8">
        <h1>냥이 굿즈다냥!</h1>
        <div>
            <router-link to="/goods/add">냥이템 등록</router-link>
    
        </div>
       <div>
            <b-card
                class="b-card-text"
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                title="고양이 슬리퍼"
                sub-title="좋아용"
            >
                <b-card-text>
                따뜻하고 폭신하고 귀욤뽀짝한 슬리퍼 사라냥 "3"
                </b-card-text>
            </b-card>
        </div>
        <!-- <div>
            <b-card no-body class="overflow-hidden" style="max-width: 1300px;">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body title="Horizontal Card">
                    <b-card-text>
                        This is a wider card with supporting text as a natural lead-in to additional content.
                        This content is a little bit longer.
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div> -->


        <div class="user-list" v-for="item in items" :key="item.id">
            <b-card no-body class="overflow-hidden" style="max-width: 1300px;">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img src="https://picsum.photos/400/400/?image=20" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-title class="card-title">{{item.itemName}} </b-card-title>
                    <b-card-body >
                    <b-card-text class="card-body">
                        {{item.price}}
                    </b-card-text>
                    <b-card-text class="card-body">
                        {{item.shortIntro}}
                    </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div>

        <div class="loader-section" v-if="loading">
          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/contacts/user">자세히 보기</router-link>
              </div>
            </div>
          </div>

          <!-- <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/contacts/user">자세히 보기</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/contacts/user">자세히 보기</router-link>
              </div>
            </div>
          </div>

          <div class="user-list">
            <div class="columns">
              <div class="column is-8">
                <p class="user-list__header animated-background__header"></p>
                <p class="user-list__sub animated-background__sub"></p>
                <p class="user-list__sub animated-background__sub"></p>
              </div>
              <div class="column is-4 right">
                <router-link class="button is-primary" to="/contacts/user">자세히 보기</router-link>
              </div>
            </div>
          </div> -->
        </div>

        <!-- <div class="user-list" v-for="item in items" :key="item.id">
          <div class="columns">
            <div class="column is-8">
              <p class="user-list__header">{{item.itemName}} </p>
              <div class="inner">
                <div class="left">
                  <p class="user-list__sub"><strong>가격</strong>: {{item.price}}</p>
                </div>
                <div class="right">
                  <p class="user-list__sub"><strong>설명</strong>: {{item.shortIntro}}</p>
                </div>
              </div>
            </div>
            <div class="column is-4 right">
              <router-link class="button is-primary" v-bind:to="{ name: 'view-item', params: { item: item.slug }}">자세히 보기</router-link>
            </div>
          </div>
        </div> -->
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import db from '../main.js'
  import Carousel from '../components/Carousel.vue'
  import Vue from 'vue'


  // import slideshow from '../components/Slideshow.vue'
  export default {
    name: 'goods',
    components: {
      Carousel
    },
    data () {
      return {
        items: [],
        loading: true
      }
    },
    created () {
      db.collection('MarketItemList').get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'id': doc.id,
            'itemName': doc.data().itemName,
            'price': doc.data().price,
            'shortIntro': doc.data().shortIntro,
            'slug': doc.data().slug
          }
          this.items.push(data)
        })
      })
    }
  }
</script>

<style lang="scss" scoped>

.temp-class{
  font-size: 4rem;
}
  @font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'LeeHyunJi'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/LeeHyunJi.woff') format('woff'); font-weight: normal; font-style: normal; }

// @font-face { font-family: 'yg-jalnan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); font-weight: normal; font-style: normal; }
//   .temp{
//     font-family: 'yg-jalnan', sans-serif;
//   }
    .b-card-text{
        font-family: 'LeeHyunJi', cursive;
        font-size: 100px;
    }

    .card-title{
        font-family: 'LeeHyunJi', cursive;
        font-size: 100px;
    }
    .card-body{
        font-family: 'LeeHyunJi', cursive;
        font-size: 30px;
    }
  h1 {
    font-family: 'LeeHyunJi', cursive;
    font-size: 100px;
    margin: 30px 0;
  }
 
  .user-list {
    margin-top: 30px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.05);
    .column {
      height: 200px;
    }
    .inner {
      .left {
        width: 30%;
        float: left;
        text-align: left;
      }
      .right {
        width: 70%;
        float: left;
        text-align: left;
        p {
          width: 100%;
          text-align: left;
          font-family: 'LeeHyunJi', cursive;
          font-size: 30px;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      justify-content: center;
      button {
        background: #4B75FF;
      }
    }
    .user-list__header {
      font-family: 'LeeHyunJi', cursive;
      font-size: 40px;
      font-weight: 700;
    }
    .user-list__sub {
      font-family: 'LeeHyunJi', cursive;
      font-size: 30px;
      margin-top: 10px;
    }
  }
  @keyframes placeHolderShimmer{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
  .animated-background__header {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 800px 104px;
    background-size: 800px 104px;
    height: 20px;
    width: 400px;
    position: relative;
  }
  .animated-background__sub {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: placeHolderShimmer;
    animation-name: placeHolderShimmer;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    background: #f6f7f8;
    background: #eeeeee;
    background: -webkit-gradient(linear, left top, right top, color-stop(8%, #eeeeee), color-stop(18%, #dddddd), color-stop(33%, #eeeeee));
    background: -webkit-linear-gradient(left, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    -webkit-background-size: 800px 104px;
    background-size: 800px 104px;
    height: 20px;
    width: 200px;
    position: relative;
  }
</style>