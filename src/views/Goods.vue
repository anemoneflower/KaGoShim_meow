<template>
  <div id="contactspage">
     
  <section class="container">
     <Carousel/>
    <div class="columns">
      <div class="column is-8">
        <div class="user-list" v-for="item in items" :key="item.id">
            <b-card no-body class="overflow-hidden" style="max-width: 1300px; max-height: 470px" >
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="item.itemimg" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6" class="p-3">
                    <b-card-title class="card-title">{{item.itemName}} </b-card-title>
                    <b-card-body class="p-0">
                      <b-card-text class="card-body p-0 md-5">
                          {{item.price}}
                      </b-card-text>
                      <b-link class="card-link" :href=item.link>
                          사러가기
                      </b-link>
                      <div class="body-text">
                        <b-card-text class="mt-1 intro" v-for="b in item.shortIntro" v-bind:key=b>
                          {{b}}
                        </b-card-text>
                      </div>
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

        </div>
        <b-button variant="dark"  v-if="canWrite" class="m-3">
            <router-link to="/goods/add" class="writerLink">냥이템 등록</router-link>
        </b-button>

      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import {db} from '../main'
  import {storage} from '../main'

  import Carousel from '../components/Carousel.vue'
  import Vue from 'vue'


  export default {
    name: 'goods',
    components: {
      Carousel
    },
    data () {
      return {
        items: [],
        loading: true,
        canWrite: false
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
            'shortIntro': doc.data().shortIntro.split("<br>"),
            'link': doc.data().link,
            'slug': doc.data().slug,
            'itemimg': doc.data().downloadURL
          }
          this.items.push(data)
        })
      })
      var user = firebase.auth().currentUser;
        if(user.emailVerified){
            this.canWrite = true
        }
    }
  }
</script>

<style lang="scss" scoped>

// #contactspage{
  
// }
  .temp-class{
    font-size: 4rem;
  }
  @font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'LeeHyunJi'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/LeeHyunJi.woff') format('woff'); font-weight: normal; font-style: normal; }

// @font-face { font-family: 'yg-jalnan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); font-weight: normal; font-style: normal; }
//   .temp{
//     font-family: 'yg-jalnan', sans-serif;
//   }
  *{
    font-family: 'Goyang'
  }
  .b-card-text{
      // font-family: 'LeeHyunJi', cursive;
      font-size: 100px;
  }
  .body-text{
    margin: 3rem;
  }

  .card-title{
      // font-family: 'LeeHyunJi', cursive;
      // font-size: 100px;
      font-weight: bold;
      margin: 1rem;
      font-size: 1rem;
  }
  .card-body{
      // font-family: 'LeeHyunJi', cursive;
      font-size: 30px;
      font-size: 1rem;
      // margin: 10px;
      // text-decoration: none;
  }
    .writerLink{
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
  }
  .intro{
    font-size: 0.8rem;
    margin: 0;
  }
  h1 {
    font-family: 'LeeHyunJi', cursive;
    font-size: 100px;
    margin: 30px 0;
  }
  .card-link{
    text-decoration: none;
    font-weight: bold;
    color: rgb(49, 110, 31);
    animation: blinker 1s linear infinite;
  }
  @keyframes blinker {
    50% {
      opacity: 0.3;
    }
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