<template>
  <div class="supportWriter">
    <h1>Add New Support Component</h1>
    
    <article class="covers" v-for="(content, idx) in support" :key="idx">
      <div>
          <img style="margin: 10px" :src="content.image" height="291px" width="192px">
          <p >{{ content.title }}</p>
          <hr>
          <button class="button" @click="deleteSupport(content.id)">
            Delete
          </button>
      </div>
    </article>

    <form @submit="addSupport(title, myFiles, amount, body)">
      <input type="file" @change="onFileSelected">
      <input v-model="title" placeholder="Title" class="input" required>
      <input v-model="amount" placeholder="Amount" class="input" required>
      <hr>
      <input v-model="body" placeholder="Insert Body" class="input" required>
      <hr>
      <div class="filepond">
        <file-pond
            name="test"
            ref="pond"
            labelIdle="Drop files here..."
            allowMultiple="true"
            acceptedFileTypes="image/jpeg, image/png"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"/>
      </div>
      <hr>
      <button type="submit" class="button">Upload</button>
      
    </form>
    <button @click="checkfilepond" class="button">TESTMETADATA</button>
  </div>
</template>

<script>
// Import Vue FilePond
import vueFilePond from 'vue-filepond'
// Import FilePond styles
import 'filepond/dist/filepond.min.css'
// Import image preview plugin styles
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview);

import firebase from 'firebase'
import {db} from '../main'
import {storage} from '../main'
// Create a root reference
var storageRef = storage.ref();
export default {
    name: 'supportWriter',
    data: function() {
        return { myFiles: [],
        support: [],
            title: '',
            image:'',
            amount:'',
            body:'',
            imgsrc: "https://placekitten.com/500/350",
            storageRef:'',
            kittenRef:'',
            selectedFile: null
            
            };
        
    },
    firestore(){
        return{
            support: db.collection('Support').orderBy('createdAt'),
            // storageRef: firebase.stroage().ref(),
            // kittenRef: stroageRef.child("https://placekitten.com/500/350")
            
        }
    },
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');
            
            // FilePond instance methods are available on `this.$refs.pond`
        },
        checkfilepond(){
            console.log(this.$refs.pond.getFiles())
            console.log(this.$refs.pond.getFiles()[0].file)
            var uploadRef = storageRef.child('Support1/test1.jpg')
            uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
              console.log('UPLOAD IMAGE')
            })
        },
        addSupport (title, image, amount, body) {
            console.log(this.$refs.pond.getFiles())
            const createdAt = new Date()
            image = this.selectedFile
            console.log(image)
            var uploadRef = storageRef.child('Support/test.jpg')
            db.collection('Support').add({ title, amount, body, createdAt })
            uploadRef.put(image).then(function(snapshot){
              console.log('UPLOAD IMAGE')
            })
            // Clear values
            this.name = ''
            this.image = ''
        },
        deleteSupport (id) {
            db.collection('Support').doc(id).delete()
        },
        onFileSelected(event){
          console.log("uploadfile")
          this.selectedFile = event.target.files[0]
          console.log("sele: ", this.selectedFile)
        }
    },
    components: {
        FilePond
    }
};
</script>



<style scoped>
  .filepond {
    width: 50%;
    margin-left: 25%;
  }
  .dropbox {
    outline: 2px dashed #aaa;
    background: #7fb4dd;
    width: 300px;
    height: 300px;
    position: relative; 
     margin: 0 auto;
  } 
  .dropbox > h2{
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 2;
  }
  .input-file{
    position: absolute;
    opacity: 0;
    width:100%;
    height:100%;
    top:0;
    left:0;
     z-index: 3;
  }
</style>
