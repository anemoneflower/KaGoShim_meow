 <template>

  <section class="container">  
    <h1>Add New Image</h1>
    <form @submit.prevent="saveContact">
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
    import {db} from '../main'
    import {storage} from '../main'
    // import FileUploader from './FileUploader'
    import upload from '../components/Upload.vue'
    import newupload from '../components/ImageDragUpload.vue'

    // Create a root reference
    var storageRef = storage.ref();

    export default {
      name: 'new-gallery',
      data () {
        return {
          myFiles: [],
          uploadTask:'',
          downloadURL: '',
          imgname: '',
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
            var uploadRef = storageRef.child('gallery/'+this.$refs.pond.getFiles()[0].file.name)
            uploadRef.put(this.$refs.pond.getFiles()[0].file).then(function(snapshot){
            console.log('UPLOAD IMAGE')
            })
            this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[0].file)
                                    .then(hi => {
                                        storageRef.child('gallery/'+this.$refs.pond.getFiles()[0].file.name).getDownloadURL().then(url =>{
                                                    this.downloadURL = url
                                                    console.log("url OK: ", url)})
            
                                                .catch(error => {
                                                    console.log("Getting file url error1111")
                                                })
                                    })
        },
        saveContact () {
            console.log(this.$refs.pond.getFiles())
            // console.log(this.$refs.pond.getFiles()[0].file)
            // console.log(this.$refs.pond.getFiles()[1].file)
            // console.log(this.$refs.pond.getFiles()[2].file)
            // console.log(this.$refs.pond.getFiles()[3].file)
            const myfilearray = this.$refs.pond.getFiles()
            console.log('From array: ', myfilearray[0].file)
            // console.log('From array: ', myfilearray[1].file)
            // console.log('From array: ', myfilearray[2].file)
            // console.log('From array: ', myfilearray[3].file)

            myfilearray.forEach(el=>{
                var uploadRef = storageRef.child('gallery/'+el.file.name)
                uploadRef.put(el.file).
                    then(snapshot=>{
                        console.log('UPLOAD IMAGE')
                        console.log('FILE CHECK:' , el.file)
                        console.log('uploadRef: ', uploadRef)
                        console.log('this', this)
                        this.uploadTask = uploadRef.put(el.file)
                                                .then(hi => {
                                                    console.log('current el3: ', el.file)
                                                    storageRef.child('gallery/'+el.file.name).getDownloadURL().then(url =>{
                                                                this.downloadURL = url
                                                                console.log("url OK: ", url)
                                                                
                                                                db.collection('Gallery').add({
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
                                                                console.log("Getting file url error222")
                                                            })
                                                }) 
                    })






            })

            // var uploadRef = storageRef.child('gallery/'+(this.$refs.pond.getFiles()[i]).file.name)
            //     uploadRef.put(this.$refs.pond.getFiles()[i].file).then(function(snapshot){
            //     console.log('UPLOAD IMAGE')
            //     })
            //     this.uploadTask = uploadRef.put(this.$refs.pond.getFiles()[i].file)
            //                             .then(hi => {
            //                                 storageRef.child('gallery/'+(this.$refs.pond.getFiles()[i]).file.name).getDownloadURL().then(url =>{
            //                                             this.downloadURL = url
            //                                             console.log("url OK: ", url)
                                                        
            //                                             db.collection('Gallery').add({
            //                                                 downloadURL: this.downloadURL,
            //                                                 slug: this.generateUUID()
            //                                             })
            //                                                 .then(function (docRef) {
            //                                                 console.log('Document written with ID: ', docRef.id)
            //                                                 })
            //                                                 .catch(function (error) {
            //                                                 console.error('Error adding document: ', error)
            //                                                 })
            //                                             })  
            //                                         .catch(error => {
            //                                             console.log("Getting file url error222")
            //                                         })
            //                             }) 


            


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