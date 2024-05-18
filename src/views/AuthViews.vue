

<template>
  <v-row class="h-screen" no-gutters>
    <!---Left Part-->
    <v-col cols="12" class="d-flex align-center bg-lightprimary">
      <v-container>
        <div class="pa-7 pa-sm-12">
          <v-row justify="center">
            <v-col 
            cols="12" 
            lg="10" 
            xl="6" 
            md="7">
              <v-card 
              class="loginBox" 
              background-color="red">
                    <!---Left Part Form-->
                    <AuthForm />
                    <!---Left Part Form-->
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </v-col>
    <!---Left Part-->
  </v-row>
</template>

<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue';
</script>

<style lang="scss">
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>