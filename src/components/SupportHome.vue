<template>

    <div class="supporthome">
        <router-link to="/supportwriter">Write new Support</router-link>
        <li v-for="(supportcomp, idx) in support" v-bind:key="supportcomp.title">
            <b-card :title=supportcomp.title :img-src="imgpath[idx]" img-alt="Image" img-left class="mr-3">
                <b-card-text>
                    {{supportcomp.body}}
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>
        </li>
<!-- :img-src="getimg(support.indexOf(supportcomp))" -->
        <b-btn @click="getimgpath()">dksf</b-btn>
        <b-card-group columns class="mx-auto md-1 m-5" style="width: 60%">

            <b-card title=Support img-src="https://placekitten.com/500/350" img-alt="Image" img-left class="mr-3">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="ml-3">

                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="ml-3">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

        </b-card-group>
        <b-card-group columns class="mx-auto md-1 m-5" style="width: 60%">

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="m-3">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="m-3">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="m-3">
                <b-card-text>
                    This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card>

        </b-card-group>
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
            imgpath: []
        }
    },
    created: function() {
        db.collection('Support').get().then(QuerySnapshot => {
                        QuerySnapshot.forEach(doc =>{
                            console.log(doc.id,"=>", doc.data())
                            var imgRef;
                            storageRef.child('Support/'+doc.data().title).getDownloadURL()
                                                .then(url =>{
                                                    imgRef = url
                                                    console.log("url OK: ", imgRef)
                                                    this.imgpath.push(imgRef)})
                                                .catch(error => {
                                                    console.log("Getting file url error")
                                                })
                            
                            this.support.push(doc.data())
                        })
        })
    },
    firestore(){
        return{
            // imgpath: getimgpath()
        }
    },
    methods: {
        getimgpath(){
            console.log("Support: ", this.support)
            console.log(this.support[0].title)
            console.log(this.imgpath)
            // var xhr = new XMLHttpRequest();
            // xhr.responseType = 'blob';
            // xhr.onload = function(event) {
            //     var blob = xhr.response;
            // };
            // xhr.open('GET', this.imgpath[0]);
            // console.log(xhr)
            // console.log("hi?", db.collection('Support').get())
            // db.collection('Support').get().then(function(QuerySnapshot){
            //     QuerySnapshot.forEach(function(doc){
            //         console.log(doc.id,"=>", doc.data())
            //         support.push(doc)
            //     })
                
            // })
            // console.log(this.support)
            // console.log(this.support[0])
        },
        // getimg(idx){
        //     console.log("PATH: ",imgpath[idx])
        // }
    }
}
</script>

<style scoped>

</style>
