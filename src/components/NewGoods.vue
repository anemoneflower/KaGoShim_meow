 <template>

  <section class="container">
    <h1>Add New Cat Item</h1>
    <upload/>
    <newupload/>
    <form @submit.prevent="saveContact">
      <div class="field">

        <label class="label">상품명</label>
        <div class="control">
          <input class="input" type="text" placeholder="상품명" v-model="firstname" required>
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
          <input class="input" type="text" placeholder="가격" v-model="emailaddress" required>
        </div>
      </div>

      <div class="field">
        <label class="label">상세 설명</label>
        <div class="control">
          <input class="input" type="text" placeholder="설명" v-model="phonenumber" required>
        </div>
      </div>

      <div class="field">
        <div class="control">
          <button type="submit" class="button is-link">Submit</button>
        </div>
      </div>

    </form>
  </section>

</template>
 
 <script>
    import {firestore} from '../firebase/firestorage.js'
    // import { firestorage } from '../firebase/firestorage'
    // import FileUploader from './FileUploader'
    import upload from './Upload.vue'
    import newupload from './ImageDragUpload.vue'
    export default {
      name: 'new-contact',
      components: {
          upload,
          newupload
      },
    
      data () {
        return {
          firstname: null,
          lastname: null,
          emailaddress: null,
          phonenumber: null
        }
      },
      methods: {
        saveContact () {
          firestore.collection('contacts').add({
            firstname: this.firstname,
            lastname: this.lastname,
            emailaddress: this.emailaddress,
            phonenumber: this.phonenumber,
            slug: this.generateUUID()
          })
            .then(function (docRef) {
              console.log('Document written with ID: ', docRef.id)
            })
            .catch(function (error) {
              console.error('Error adding document: ', error)
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
        }
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

</style>