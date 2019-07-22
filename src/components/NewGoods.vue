 <template>

  <section class="container">



    
    <h1>Add New Cat Item</h1>
    <!-- <upload/>
    <newupload/> -->
    <form @submit.prevent="saveContact">
      <div class="field">

        <label class="label">상품명</label>
        <div class="control">
          <input class="input" type="text" placeholder="상품명" v-model="itemName" required>
        </div>
      </div>

      <!-- <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Last Name" v-model="lastname" required>
        </div>
      </div> -->

      <div class="field">
        <label class="label">가격</label>
        <div class="control">
          <input class="input" type="text" placeholder="가격" v-model="price" required>
        </div>
      </div>

      <div class="field">
        <label class="label">상세 설명</label>
        <div class="control">
          <input class="input" type="text" placeholder="설명" v-model="shortIntro" required>
        </div>
      </div>
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
            <!-- <button @click="checkfilepond">Upload Image</button> -->
      </div>

      <hr>
      

      <div class="field">
        <div class="control">
          
          <button type="submit" class="button is-link">Submit</button>
        </div>
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
    import {firestore} from '../firebase/firestore.js'
    import { firestorage } from '../firebase/firestorage.js'
    // import FileUploader from './FileUploader'
    import upload from './Upload.vue'
    import newupload from './ImageDragUpload.vue'

    // Create a root reference
    var storageRef = firestorage.ref();

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
          shortIntro: null
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
            var uploadRef = storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name)
            uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
            console.log('UPLOAD IMAGE')
            })
            this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[0].file)
                                    .then(hi => {
                                        storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
                                                    this.downloadURL = url
                                                    console.log("url OK: ", url)})
            
                                                .catch(error => {
                                                    console.log("Getting file url error")
                                                })
                                    })
            //console.log("HHHH", this.uploadTask.snapshot.ref.getDownloadURL())
        
            // this.uploadTask.snapshot.ref.
            // storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
            //                                         this.downloadURL = url
            //                                         console.log("url OK: ", url)})
            
            //                                     .catch(error => {
            //                                         console.log("Getting file url error")
            //                                     })

            // this.$router.replace('/goods')
        },
        saveContact () {
            console.log(this.$refs.pond.getFiles())
            console.log(this.$refs.pond.getFiles()[0].file)
            var uploadRef = storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name)
            uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
            console.log('UPLOAD IMAGE')
            })
            this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[0].file)
                                    .then(hi => {
                                        storageRef.child('test/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
                                                    this.downloadURL = url
                                                    console.log("url OK: ", url)
                                                    
                                                    firestore.collection('MarketItemList').add({
                                                        itemName: this.itemName,
                                                        price: this.price,
                                                        shortIntro: this.shortIntro,
                                                        downloadURL: this.downloadURL,
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
                                    })







        //   firestore.collection('MarketItemList').add({
        //     itemName: this.itemName,
        //     price: this.price,
        //     shortIntro: this.shortIntro,
        //     downloadURL: this.downloadURL,
        //     slug: this.generateUUID()
        //   })
        //     .then(function (docRef) {
        //       console.log('Document written with ID: ', docRef.id)
        //     })
        //     .catch(function (error) {
        //       console.error('Error adding document: ', error)
        //     })
            //this.$router.replace('/goods')
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

  section {
    height: 100vh;
  }

  h1 {
    font-size: 30px;
    margin: 30px 0;
  }

  .input {
    height: 40px;
  }

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