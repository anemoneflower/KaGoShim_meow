import { firebaseApp } from './firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'

//export const firestore = firebaseApp.firestore()
export const firestore = firebase.firestore(firebaseApp)