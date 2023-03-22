import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase-config";

export function registration(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response);
        })
        .catch(e => console.log(e))
}

export function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then(response => {
            console.log(response);
        })
        .catch(e => console.log(e))
}

export function logout() {
    signOut(auth)
        .then(response => console.log(response))
        .catch(e => console.log(e))
}