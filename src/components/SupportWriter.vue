<template>
  <div class="supportWriter">
    <h1>새 후원 리스트라냥!</h1>
    <b-form class="formgroups" @submit="addSupport(title, myFiles, amount, body)">
      <b-form-group id="group-title">
        <b-form-input
          id="title"
          v-model="title"
          size="lg"
          required
          placeholder="새 후원 제목을 입력하라냥"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="group-amount">
        <b-form-input
          id="amount"
          v-model="amount"
          type="number"
          required
          placeholder="필요한 후원 금액이 얼마냥?"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="group-body">
        <b-form-textarea
          id="body"
          v-model="body"
          placeholder="집사들에게 어필해보라냥!"
          rows="13"
          no-resize
          required
        ></b-form-textarea>
      </b-form-group>

      <b-form-group id="group-img">
        <file-pond
            name="test"
            ref="pond"
            labelIdle="이미지를 올려라냥 @.@"
            allowMultiple="false"
            acceptedFileTypes="image/jpeg, image/png"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"
            required/>
      </b-form-group>

      <b-button id="submitbtn" type="submit" variant="dark">올릴거냥?</b-button>
    </b-form>

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
        return { 
          myFiles: [],
          title: '',
          amount:'',
          body:''
        };
    },
    
    methods: {
        handleFilePondInit: function() {
            console.log('FilePond has initialized');
            // FilePond instance methods are available on `this.$refs.pond`
        },
        addSupport (title, image, amount, body) {
            // console.log(this.$refs.pond.getFiles())
            const createdAt = new Date()
            image = this.$refs.pond.getFiles()[0].file
            console.log(image)
            var uploadRef = storageRef.child('Support/'+this.title)
            var imgurl
            uploadRef.put(image).then(success => 
              uploadRef.getDownloadURL()
                .then(url =>{
                    imgurl = url
                    console.log("url OK: ", imgurl)
                    db.collection('Support').doc(this.title).set({ title, amount, body, createdAt, imgurl })
                    // Clear values
                    this.name = ''
                    this.image = ''
                    this.body = ''
                    console.log("Router!!")
                    this.$router.replace('support')
                    
                  })
                .catch(error => {
                    console.log("Getting file url error")
                })
            )
            
            // .then(function(snapshot){
            //   console.log('UPLOAD IMAGE')
            // })


            
            
            
        },
        // deleteSupport (id) {
        //     db.collection('Support').doc(id).delete()
        // },
        // onFileSelected(event){
        //   console.log("uploadfile")
        //   this.selectedFile = event.target.files[0]
        //   console.log("sele: ", this.selectedFile)
        // }
    },
    components: {
        FilePond
    }
};
</script>



<style scoped>
@font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff'); } @font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff') format('woff'); } .lottemarthappy * { font-family: 'LotteMartHappy', sans-serif; }
  *{
    font-family: 'Goyang'
  }
  .filepond {
    width: 50%;
    margin-left: 25%;
  }
  .formgroups {
    width:70%;
    margin-left:15%;
  }
  h1{
    margin: 30px;
    font-family: 'LotteMartHappy'
  }
  /* .submitbtn {
    background-color:#ffd9df;
  } */
</style>
