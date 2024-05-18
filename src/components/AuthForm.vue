

<template >
  <v-btn 
  size="120"
  block 
  color="primary" 
  variant="outlined" 
  class="text-lightText googleBtn" v-show="islogin" @click="signwithgoogle">
    <img :src="Google" alt="google" />
    <span class="ml-2">Sign in with Google</span></v-btn
  > 
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Google from '@/assets/images/auth/social-google.svg';
import { useAuhtStore } from '@/store/AuthStore';
const auth1 = useAuhtStore();
let islogin = ref(true);


async function signwithgoogle(){
 await auth1.logingogle();   
}
</script>

<style lang="scss">
.custom-devider {
  border-color: rgba(0, 0, 0, 0.08) !important;
}
.googleBtn {
  border-color: rgba(0, 0, 0, 0.08);
  margin: 30px 0 20px 0;
}
.outlinedInput .v-field {
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: none;
}
.orbtn {
  padding: 2px 40px;
  border-color: rgba(0, 0, 0, 0.08);
  margin: 20px 15px;
}
.pwdInput {
  position: relative;
  .v-input__append {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
}
.loginForm {
   
   
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>