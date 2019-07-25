<template>
  <div>
    <section class="mycontainer">
      <div class="columns">
        <a href="/#/gallery/add" class="btn"> 사진 추가하기 </a>
        <div class="columns is-8">
          
          <!-- <div><router-link to="/gallery/add">갤러리 사진 추가</router-link></div> -->
          <gallery :images="images" :index="index" @close="index = null"></gallery>
          <div
            class="image"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
  import VueGallery from 'vue-gallery';
  import firebase from 'firebase'
  import {db} from '../main'
  import {storage} from '../main'
  export default {
    name: 'mygallery',
    components: {
      'gallery': VueGallery
    },
    data () {
      return {
        images: [],
        index: null
      };
    },

    created: function() {
      db.collection('Gallery').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.images.push(doc.data().downloadURL)
          console.log('Inserted url: ', doc.data().downloadURL)
        })
      })
    }
  }
  
</script> 

<style scoped>
  .mycontainer{
    /* text-align: center;
    align-self: center; */
    width: 80%;
    margin: auto;
    /* margin-left: 15rem;
    margin-right: 15rem; */
    /* 100rem; */
  }
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    /* border: 1rem solid #ebebeb; */
    margin: 0.1rem;
    width: 12rem;
    height: 10rem;
  }

  .btn{
    display: inline-block;
    color: #fff;
    text-decoration: none;
    padding: 0.6rem 2rem;
    font-size: 1rem;
    background: hsl(4, 90%, 88%);
    border-radius: 30px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition-property: background;
    transition-duration: 0.3s;

  }

  .btn:hover{
    background: rgb(221, 188, 187);
    color: #fff;
  }
</style>