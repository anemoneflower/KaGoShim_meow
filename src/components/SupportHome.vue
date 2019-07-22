<template>

    <div class="supporthome">
        <router-link to="/supportwriter">Write new Support</router-link>

        <b-card-group columns class="mx-auto md-1 m-5" style="width: 60%">

            <b-card title="Title" img-src="https://placekitten.com/500/350" img-alt="Image" img-top class="mr-3">
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
// Get a reference to the database service
export default {
    name: 'supporthome',
    data() {
        return {
            support: []
        }
    },
    firestore(){
        return{
            support: db.collection('Support').orderBy('createdAt')
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>
