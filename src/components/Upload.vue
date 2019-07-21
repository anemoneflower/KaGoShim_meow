<template>
    <div>
        <input id="input-file" type="file" v-on:change="uploadFile()">
        <hr>
        <img id="imgUpload" src="" width="100vw">
    </div> 
</template>

<script>
import imgdb from '../firebasestorage.js'
export default {
    name: 'upload',
    data(){
        return{
            files : null 
        }
    },
    methods: {
        uploadFile(){
            var fileVal = document.getElementById('input-file').value;
            console.log(fileVal)
            const storageRef = imgdb.ref();
            const horseRef=storageRef.child('horse.jpg');
            const file = file.item(0);
            const task = horseRef.put(file)

            task.then(snapshot => {
                console.log(snapshot)
                const url = snapshot.downloadURL
                document.querySelector('#imgUpload').setAttribute('src',url)
            })
        }
    }
}

// function uploadFile(files){
//     const storageRef = firebase.storage().ref();
//     const horseRef=storageRef.child('horse.jpg');
//     const file = file.item(0);
//     const task = horseRef.put(file)

//     task.then(snapshot => {
//         console.log(snapshot)
//         const url = snapshot.downloadURL
//         document.querySelector('#imgUpload').setAttribute('src',url)
//     })
// }
</script>
