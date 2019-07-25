<template>

    <div class="supporthome">
        <h1> 예쁜 우리들을 후원하라냥! </h1>
        <h3> 우리 1002-554-820807 (카고쉼)</h3>
        <h5> 보내는 사람에 키워드를 적어주면 원하는 곳에 후원하겠다냥! </h5>
        <h5> 예를 들면... "아름관"(+"이름")</h5>
        <b-card 
            v-for="k in support.length" v-bind:key=k 
            no-body
            fluid
            class="mx-auto md-1 m-5 overflow-hidden border-dark" 
            style="width: 60%">
            <b-row no-gutters>
                <b-col>
                    <b-card-body :title=support[k-1].title>
                        <b-progress :max="parseInt(support[k-1].amount)" class="m-4">
                            <b-progress-bar variant="success" :value="parseInt(support[k-1].earn)" :label="`${((parseInt(support[k-1].earn) / parseInt(support[k-1].amount)) * 100).toFixed(2)}%`"></b-progress-bar>
                        </b-progress>
                        <b-card-text v-for="b in support_body[k-1]" v-bind:key=b>
                            {{b}}
                        </b-card-text>
                    </b-card-body>
                </b-col>
                <!-- <b-col cols="2"></b-col> -->
                <b-col cols="3">
                    <b-card-img :src=support[k-1].imgurl class="m-0"/>
                </b-col>
            </b-row>
        </b-card>

        <b-button variant="dark"  v-if="canWrite">
            <router-link to="/supportwriter" class="writerLink">Write new Support</router-link>
        </b-button>
        
    </div>
</template>


<script>
import firebase from 'firebase'
import {db} from '../main'
import {storage} from '../main'
var storageRef = storage.ref();
// Get a reference to the database service
export default {
    name: 'supporthome',
    data() {
        return {
            support: [],
            support_body: [],
            imgpath: {},
            canWrite: false
        }
    },
    created: function() {
        db.collection('Support').get().then(QuerySnapshot => {
                        QuerySnapshot.forEach(doc =>{
                            this.support.push(doc.data())
                            console.log('SUPPORT: ',this.support)
                            console.log(parseInt(doc.data().amount))
                            this.support_body.push(doc.data().body.split("<br>"))
                            this.support.sort(function(a, b){
                                return a.createdAt < b.createdAt ? -1:1;
                            })
                        })
        })
        var user = firebase.auth().currentUser;
        if(user.emailVerified){
            this.canWrite = true
        }
        
    },
    firestore(){
        return{
            // imgpath: getimgpath()
        }
    },
    methods: {
    }
}
</script>

<style scoped>
@font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff'); } @font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff') format('woff'); } .lottemarthappy * { font-family: 'LotteMartHappy', sans-serif; }
  *{
    font-family: 'Goyang'
  }
  h1{
    margin: 30px;
    font-family: 'LotteMartHappy'
  }
  .writerLink{
      text-decoration: none;
      color: #ffffff;
  }
  .b-card{
      border:none;
  }
</style>
