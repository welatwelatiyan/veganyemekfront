

<template>
  <v-app-bar elevation="0" height="60">
    <v-btn
      class="hidden-md-and-down text-secondary"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>
    <v-btn
      class="hidden-lg-and-up text-secondary ms-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <Menu2Icon size="20" stroke-width="1.5" />
    </v-btn>

    <!-- search mobile -->
    <v-btn
      class="hidden-lg-and-up text-secondary ml-3"
      color="lightsecondary"
      icon
      rounded="sm"
      variant="flat"
      size="small"
      @click="searchbox"
    >
      <SearchIcon size="17" stroke-width="1.5" />
    </v-btn>

    <v-sheet v-if="showSearch" class="search-sheet v-col-12">
      <Searchbar :closesearch="searchbox" />
    </v-sheet>

    <v-spacer />   

    <!-- ---------------------------------------------- -->
    <!-- Notification -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        
        <v-btn icon 
        class="text-secondary mx-3" 
        
        rounded="pill" 
        size="small" 
        variant="flat" 
        v-bind="props"
        stacked
        >
        <v-badge content="10">  
          <BellIcon />        
        </v-badge>   
      
          
        </v-btn>
      </template>
      <v-sheet rounded="md" width="330" elevation="12">
        <NotificationDD />
      </v-sheet>
    </v-menu>

    <!-- ---------------------------------------------- -->
    <!-- User Profile -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false">
      <template v-slot:activator="{ props }">
        <v-btn 
        icon
        color="lightsecondary" 
        rounded="pill" 
        size="small" 
        variant="flat" 
        v-bind="props"        
        >
          <v-avatar 
          :image="authstore.user.photourl"
          size="40"
          >
          </v-avatar>
        
        </v-btn>
      </template>
      <v-sheet rounded="md" width="200" elevation="12">
        <ProfileDD />
      </v-sheet>
    </v-menu>
    

  </v-app-bar>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useCustomizerStore } from '@/store/customizer';
import { useAuhtStore } from '@/store/AuthStore';
// Icon Imports
import { BellIcon, SearchIcon, Menu2Icon } from 'vue-tabler-icons';

// dropdown imports
import NotificationDD from './NotificationDD.vue';
import ProfileDD from './ProfileDD.vue';
import Searchbar from './SearchBarPanel.vue';

const customizer = useCustomizerStore();
const authstore = useAuhtStore();
const showSearch = ref(false);
function searchbox() {
  showSearch.value = !showSearch.value;
}
</script>
