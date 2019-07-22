<template>

    <div class="supporthome">
        <router-link to="/supportwriter">Write new Support</router-link>
        <li v-for="n in parseInt(support.length/3)" v-bind:key=n>
            <b-card-group columns class="mx-auto md-1 m-5" style="width: 60%">
                <div  v-for="i in 3" v-bind:key=i>
                    <b-card v-if="(n+i-2) < support.length" style="height: 70px" class="mr-3 no-gutters" :title=support[n+i-2].title :img-src=support[n+i-2].imgurl img-alt="Image" img-top>
                        <b-card-text>
                            {{support[n+i-2].body.slice(0, 20)}}...
                        </b-card-text>
                        <b-card-text class="small text-muted">Progress</b-card-text>
                    </b-card>
                </div>
            </b-card-group>
<!-- v-for="(supportcomp, idx) in support" v-bind:key="supportcomp.title"> -->

            <!-- <b-card :title=supportcomp.title :img-src=imgpath[supportcomp.title] img-alt="Image" img-left class="mr-3">
                <b-card-text>
                    {{supportcomp.body}}
                </b-card-text>
                <b-card-text class="small text-muted">Progress</b-card-text>
            </b-card> -->
        </li>
        <b-card-group v-if="support.length%3 !== 0" columns class="mx-auto md-1 m-5" style="width: 60%">
                <div  v-for="i in 3" v-bind:key=i>
                    <b-card v-if="(parseInt(support.length/3)*3+i-1) < support.length" style=" height: 70px" :title=support[parseInt(support.length/3)*3+i-1].title :img-src=support[parseInt(support.length/3)*3+i-1].imgurl img-alt="Image" img-top class="mr-3 no-gutters">
                        <b-card-text>
                            {{support[parseInt(support.length/3)*3+i-1].body.slice(0, 20)}}...
                        </b-card-text>
                        <b-card-text class="small text-muted">Progres787s</b-card-text>
                    </b-card>
                </div>
        </b-card-group>
        <!-- <b-card-group columns class="mx-auto md-1 m-5" style="width: 60%">

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

        </b-card-group> -->
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
            imgpath: {}
        }
    },
    created: function() {
        db.collection('Support').get().then(QuerySnapshot => {
                        QuerySnapshot.forEach(doc =>{
                            this.support.push(doc.data())
                            console.log('SUPPORT: ',this.support)
                            this.support.sort(function(a, b){
                                return a.createdAt < b.createdAt ? -1:1;
                            })
                        })
        })
        
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
    /* .img-top {
        object-fit:cover;
    } */
</style>
