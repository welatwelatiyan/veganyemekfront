<script setup lang="ts">
import { RouterView } from 'vue-router';
import CompanyInfoForm from '@/components/CompanyInfoForm.vue';
import FooterPanel from '@/layouts/full/footer/FooterPanel.vue';
import { useCustomizerStore } from '@/store/customizer';
import MainComp from '@/components/shared/MainComp.vue';
const customizer = useCustomizerStore();
</script>

<template>
  <v-locale-provider>
    <v-app
      theme="PurpleTheme"
      :class="[customizer.fontTheme, customizer.mini_sidebar ? 'mini-sidebar' : '', customizer.inputBg ? 'inputWithbg' : '']"
    > 
    <MainComp></MainComp>
    
      <v-main>
        <v-container fluid class="page-wrapper">
          <div>
            <RouterView />           
            <CompanyInfoForm></CompanyInfoForm>
           
          </div>
        </v-container>
        <v-container fluid class="pt-0">
          <div>
            <FooterPanel />
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-locale-provider>
</template>
