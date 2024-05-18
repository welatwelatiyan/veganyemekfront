<script setup lang="ts">
import { SettingsIcon, LogoutIcon} from 'vue-tabler-icons';
import { useAuhtStore } from '@/store/AuthStore';
const authStore = useAuhtStore();
</script>

<template>
  <div class="pa-4">
    <perfect-scrollbar style="height: calc(100vh - 200px); max-height: 120px">
      <v-list class="mt-3">
        <v-list-item color="secondary" rounded="md">
          <template v-slot:prepend>
            <SettingsIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2"> Account Settings</v-list-item-title>
        </v-list-item>

        <v-list-item @click="authStore.signOut()" color="secondary" rounded="md">
          <template v-slot:prepend>
            <LogoutIcon size="20" class="mr-2" />
          </template>
          <v-list-item-title class="text-subtitle-2"> Logout</v-list-item-title>
        </v-list-item>
      </v-list>
    </perfect-scrollbar>
  </div>
</template>
