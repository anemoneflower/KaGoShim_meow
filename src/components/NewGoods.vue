 <template>

  <section class="container">



    
    <h1>새 냐옹이 아이템이다냥</h1>
    <!-- <upload/>
    <newupload/> -->
    <form @submit.prevent="saveContact">
      <div class="field">

        <!-- <label class="label">상품명</label> -->
        <!-- <div class="control">
          <input class="input" type="text" placeholder="상품명" v-model="itemName" required>
        </div> -->
        <b-form-input
          v-model="itemName"
          size="lg"
          required
          placeholder="상품명을 입력하라냥"
          class="border-secondary shadow-none"
        ></b-form-input>
      </div>

      <!-- <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
        </div>
      </div> -->

      <div class="field">
        <!-- <label class="label">가격</label> -->
        <!-- <div class="control">
          <input class="input" type="text" placeholder="가격" v-model="price" required>
        </div> -->
        <b-form-input
          v-model="price"
          type="number"
          required
          placeholder="가격이 얼마냥?"
          class="border-secondary shadow-none"
        ></b-form-input>
      </div>
      <div class="field">
        <!-- <label class="label">가격</label> -->
        <!-- <div class="control">
          <input class="input" type="text" placeholder="가격" v-model="price" required>
        </div> -->
        <b-form-input
          v-model="link"
          type="text"
          required
          placeholder="링크가 있냥?"
          class="border-secondary shadow-none"
        ></b-form-input>
      </div>
      <div class="field">
        <!-- <label class="label">상세 설명</label> -->
        <!-- <div class="control">
          <input class="input" type="text" placeholder="설명" v-model="shortIntro" required>
        </div> -->
        <b-form-textarea
          v-model="shortIntro"
          placeholder="설명이 필요하다냥!"
          rows="13"
          no-resize
          required
          class="border-secondary shadow-none"
        ></b-form-textarea>
      </div>
      <div class="filepond">
        <file-pond
            name="test"
            ref="pond"
            labelIdle="이미지를 올려라냥 @.@"
            allowMultiple="true"
            acceptedFileTypes="image/jpeg, image/png"
            v-bind:files="myFiles"
            v-on:init="handleFilePondInit"/>
            <!-- <button @click="checkfilepond">Upload Image</button> -->
      </div>
      <div class="field">
        <b-button id="submitbtn" class="button is-link m-3" type="submit" variant="dark">올릴거냥?</b-button>
        <!-- <div class="control">
          
          <button type="submit" class="button is-link">Submit</button>
        </div> -->
      </div>

    </form>
  </section>

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
    // import FileUploader from './FileUploader'
    import upload from './Upload.vue'
    import newupload from './ImageDragUpload.vue'

    // Create a root reference
    var storageRef = storage.ref();

    export default {
      name: 'new-item',
      data () {
        return {
          myFiles: [],
          uploadTask:'',
          downloadURL: '',
          imgname: '',
          itemName: null,
          price: null,
          shortIntro: null,
          itemlink: null,
        }
      },

      methods: {
         handleFilePondInit: function() {
            console.log('FilePond has initialized');
            
            // FilePond instance methods are available on `this.$refs.pond`
        },
        // checkfilepond(){
        //     console.log(this.$refs.pond.getFiles())
        //     console.log(this.$refs.pond.getFiles()[0].file)
        //     var uploadRef = storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name)
        //     uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
        //     console.log('UPLOAD IMAGE')
        //     })
        //     this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[0].file)
        //       .then(hi => {
        //           storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
        //                       this.downloadURL = url
        //                       console.log("url OK: ", url)})

        //                   .catch(error => {
        //                       console.log("Getting file url error")
        //                   })
        //       })


        //     // this.$router.replace('/goods')
        // },
        saveContact () {
            console.log(this.$refs.pond.getFiles())
            console.log(this.$refs.pond.getFiles()[0].file)
            var uploadRef = storageRef.child('Goods/'+this.$refs.pond.getFiles()[0].file.name)
            uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
            console.log('UPLOAD IMAGE')
            })
            this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[0].file)
              .then(hi => {
                  storageRef.child('Goods/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
                      this.downloadURL = url
                      console.log("url OK: ", url)
                      
                      db.collection('MarketItemList').add({
                          itemName: this.itemName,
                          price: this.price,
                          shortIntro: this.shortIntro.replace(/(\r\n|\n|\r)/gm, "<br>"),
                          downloadURL: this.downloadURL,
                          link: this.link,
                          slug: this.generateUUID()
                      })
                          .then(function (docRef) {
                          console.log('Document written with ID: ', docRef.id)
                          })
                          .catch(function (error) {
                          console.error('Error adding document: ', error)
                          })
                      
                      })
                  .catch(error => {
                      console.log("Getting file url error")
                  })
                  this.$router.replace('/goods')
              })


        },
        generateUUID () {
          let d = new Date().getTime()
          let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0
            d = Math.floor(d / 16)
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
          })
          return uuid
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
    }
</script>

<style scoped>
@font-face { font-family: 'Goyang'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Goyang.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 400; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyMedium.woff') format('woff'); } @font-face { font-family: 'LotteMartHappy'; font-style: normal; font-weight: 700; src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/lottemart/LotteMartHappy/LotteMartHappyBold.woff') format('woff'); } .lottemarthappy * { font-family: 'LotteMartHappy', sans-serif; }
  *{
    font-family: 'Goyang'
  }
  /* section {
    height: 100vh;
  } */

  h1 {
    margin: 30px;
    /* font-family: 'LotteMartHappy' */
    font-weight: bolder;
  }

  /* .input {
    height: 40px;
  } */
  .field{
    margin: 10px;
    width:90%;
    margin-left:5%;
  }
  .filepond {
    width:90%;
    margin-left:5%;
    /* width: 50%;
    margin-left: 25%; */
  }
  /* .dropbox {
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
  } */
  /* .input-file{
    position: absolute;
    opacity: 0;
    width:100%;
    height:100%;
    top:0;
    left:0;
     z-index: 3;
  } */

</style>