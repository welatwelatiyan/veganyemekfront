import { defineStore } from 'pinia';

import {
    getAuth,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    UserCredential
} from "firebase/auth";
import router from '@/router';
import { throwStatement } from '@babel/types';

export const useAuhtStore = defineStore('auth', {
  state: () => ({
    user:{
        loggin:false,
        data:null,
        password:"",
        email:"",
        repasswor:"",
        errormg:"",
        reftoken:"",
        photourl:"",
        token:""
    }
  }),
  actions:{
    login(){
        const  auth = getAuth();
        signInWithEmailAndPassword(auth,this.user.email,this.user.password)
        .then((userCredential)=>{
            this.user.token=userCredential.user.getIdToken;
            this.user.reftoken=userCredential.user.refreshToken;
            this.user.photourl=userCredential.user.photoURL;
            this.login=true;
            router.push('/');
            console.log(this.user);
        }).catch((error)=>{
            this.user.errormg=error.message;
        })

    },
    async logingogle(){
        console.log("google");
        const auth=getAuth();
        const prow =  new GoogleAuthProvider();
        try{
            const res= await signInWithPopup(auth,prow);
            this.user.token =await res.user.getIdToken();
            this.user.email =res.user.email;
            this.user.photourl=res.user.photoURL;
            this.user.reftoken=res.user.refreshToken;
            this.user.loggin=true;
            console.log(this.user);
            router.push('/')
        }catch(error){
            this.user.errormg=error.message;
            console.log(error)
        }
    },
    register(){
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,this.user.email,this.user.password)
        .then((userCredential)=>{
            this.user.token=userCredential.user.getIdToken;
            this.user.reftoken=userCredential.user.refreshToken;
            this.user.photourl=userCredential.user.photoURL;
            this.login=true;
            router.push('/');
            console.log(this.user);
        }).catch((error)=>{
            this.user.errormg=error.message;
        })
    },
    signOut(){
        this.user.loggin=false;
        router.push('/auth')
    }
  }
})