<template>
  <div id="contactspage">
    <contactsheader/>
  <section class="container">
    
    <div class="columns">
      <div class="column is-8">
        <h1>냥이 굿즈</h1>
       
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
        </div>

        <div class="user-list" v-for="item in items" :key="item.id">
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
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import db from '../main.js'
  import contactsheader from '../components/ContactHeader.vue'
  export default {
    name: 'goods',
    components: {
      contactsheader
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
// @font-face { font-family: 'yg-jalnan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); font-weight: normal; font-style: normal; }
//   .temp{
//     font-family: 'yg-jalnan', sans-serif;
//   }
  h1 {
    font-family: 'Hi Melody', cursive;
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
          font-family: 'Hi Melody', cursive;
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
      font-family: 'Hi Melody', cursive;
      font-size: 40px;
      font-weight: 700;
    }
    .user-list__sub {
      font-family: 'Hi Melody', cursive;
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