import { firebaseApp } from './firebase.js'
import firebase from 'firebase/app'
import 'firebase/storage'

//export const firestorage = firebaseApp.storage()
export const firestorage = firebase.storage(firebaseApp)