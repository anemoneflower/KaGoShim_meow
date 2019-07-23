<template>
  <div>
    <router-link to="/gallery/add">갤러리 사진 추가</router-link>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
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
  .image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
</style>