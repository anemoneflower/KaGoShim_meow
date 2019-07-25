<template>
  <div id="contactspage">
    <h1 class="animated bounceInDown delay-0.5s myeffects">카고쉼 게시판</h1>

  <section class="mycontainer animated slideInLeft delay-0s myeffect">
    
    <div class="columns">
      <div class="column is-8">

        <form @submit.prevent="savepost">

          <div class="postfield">
            <b-form-textarea
              class="myoutline ppp shadow-none border-light"
              id="textarea-default"
              v-model="content"
              placeholder="Enter something..."
              no-resize
              rows="3"
            ></b-form-textarea>
            <button type="submit" class="button is-link btn shadow-none">Submit</button>


            <!-- <a type="submit" class="btn"> 게시물 등록하기 </a> -->
          </div>
        </form>
        <div>

            <div class="post-list" v-for="post in posts" :key="post.id">
                <b-card class="cont myoutline">
                  <b-media>
                  <b-img slot="aside" :src="post.profilepicurl" width="64" alt="placeholder"></b-img>
                  <h5 class="mt-0 timestamp" >{{post.time}}</h5>
                  <p class="namestamp">
                      {{post.username}}
                  </p>
                  <p class="contentstamp" v-for="b in post.content" v-bind:key=b>
                      {{b}}
                  </p>
                  </b-media>
              </b-card>
            </div>
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
      </div>
    </div>
  </section>
  </div>
</template>

<script>
  import {db} from '../main'
  import {storage} from '../main'
  import Carousel from '../components/Carousel.vue'
  import Vue from 'vue'
  import firebase from 'firebase'


  // import slideshow from '../components/Slideshow.vue'
  export default {
    name: 'posts-page',
    components: {
    },
    data () {
      return {
        text: '',
        posts: [],
        loading: true,
        user: '',
        content: '',
        profilepicurl: '',
        time: null,
        username:'',
        now: '',
        timenum: ''
        
      }
    },

    created () {
      console.log('Posts page created')
      var postsref = db.collection("Community");
      // postsref.orderBy("content").limit(7);
      // console.log("postsref",postsref)
      postsref.get().then((querySnapshot) => {
        this.loading = false
        querySnapshot.forEach((doc) => {
          let data = {
            'id': doc.id,
            'username': doc.data().username,
            'content': doc.data().content.split("<br>"),
            'time': doc.data().time,
            'timenum': doc.data().timenum,
            'profilepicurl': doc.data().profilepicurl,
          }
          this.posts.push(data)
          console.log("data: ", data)
          this.posts.sort(function(a,b) {return b.timenum - a.timenum})
        })

      })

      this.user=firebase.auth().currentUser;
      if(this.user.photoUrl !== null){
            console.log('user has url: ', this.user.photoURL)
            this.profilepicurl = this.user.photoURL
            console.log('userprofilepic uploaded')
        }
      if(this.user.displayName != null){
          // console.log('user has displayName: ', user.displayName)
          this.username = this.user.displayName
          console.log('username uploaded')
      }


    },

    methods: {
      

      savepost(){
          console.log('Entered savepost method')
          var d = Date(Date.now());
          var e = new Date().getTime();
          // now = 
          // console.log('now2: ', now)
          // now: d.toString()
          db.collection('Community').add({
              content: this.content.replace(/(\r\n|\n|\r)/gm, "<br>"),
              profilepicurl: this.profilepicurl,
              time: d.toString(),
              username: this.username,
              timenum: e,
              id: e
          })
              .then(docRef=> {
              console.log('Document written with ID: ', docRef.id)
              this.$router.go(this.$router.currentRoute)
              })
              .catch(function (error) {
              console.error('Error adding document: ', error)
              })

      }
    }

    
  }
</script>

<style lang="scss" scoped>


#contactspage{
  width: 100%;
}
.temp-class{
  font-size: 4rem;
}
  @font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'LeeHyunJi'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/LeeHyunJi.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'GyeonggiBatang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/GyeonggiBatang.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'BMJUA'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff'); font-weight: normal; font-style: normal; }
  @font-face { font-family: 'BBTreeGL'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGL.woff') format('woff'); font-weight: normal; font-style: normal; }
// @font-face { font-family: 'yg-jalnan'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff') format('woff'); font-weight: normal; font-style: normal; }
//   .temp{
//     font-family: 'yg-jalnan', sans-serif;
//   }
.myeffect{
    animation-duration: 2s;
  }
.mycontainer{
  background-color: rgb(211, 216, 165);
  padding: 3rem;
  margin: auto;
  width: 95%;
  border-radius: 5rem;
}
    .ppp {
      padding: 1rem;
      width:80%;
      margin: auto;
    }
    .myoutline{
        border-radius: 2rem;
        background-color: rgb(244, 247, 221);

      // border: solid;
      // border-color: #DED29E; //rgb(182, 202, 120);
    }
    .postfield{
      font-family: 'Goyang';
      padding: 1rem;
    }
    .cont {
      margin: 2rem;
      text-align: left;
    }
    .b-card-text{
        font-family: 'Goyang', cursive;
        font-size: 100px;
    }

    .timestamp{
      margin-top: 0.5rem;
      font-family: 'Goyang';
      margin-bottom: 0.1rem;
      font-size: 0.8rem;
      color: #B3A580;
      position: left;
    }
    .namestamp{
      font-family: 'Goyang';
      color: hsl(0, 1%, 61%);
      margin-top: 0.1rem;
      font-size: 0.8rem;
    }
    .contentstamp{
      font-family: 'Goyang';
      font-size: 1.1rem;
      // line-height: 0.7rem;
      text-align: center;
      margin: 0.2rem;
      font-weight: 550;
      color: #685642;
    }



    .btn{
      display: inline-block;
      color: #fff;
      text-decoration: none;
      padding: 0.3rem 1rem;
      font-size: 1.2rem;
      background: #B7C68B;
      border-radius: 0.7rem;
      margin-top: 1rem;
      transition-property: background;
      transition-duration: 0.13s;

    }

    .btn:hover{
      background: #DED29E;
      color: #fff;
    }

    .card-title{
        font-family: 'Goyang', cursive;
        font-size: 100px;
    }
    .card-body{
        font-family: 'Goyang', cursive;
        font-size: 30px;
    }
  h1 {
    font-family: 'LeeHyunJi', cursive;
    font-weight: 900;
    font-size: 4rem;
    padding: 30px;
    //margin: 30px 10px;
    color: #685642;// hsl(3, 87%, 91%);
    //text-shadow:  2px 0 hsl(0, 1%, 34%), 0 -2px hrgb(75, 75, 75)//-1px0 20px hsl(3, 25%, 51%)//grey;
    //background-color:hsl(4, 90%, 88%);
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