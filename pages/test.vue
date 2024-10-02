<template>
    <div>
      <button @click="triggerSuccessToast" class="px-4 py-2 bg-green-600 text-white rounded-lg">
        Trigger Success Toast
      </button>
      
      <button @click="triggerErrorToast" class="px-4 py-2 bg-red-600 text-white rounded-lg ml-4">
        Trigger Error Toast
      </button>
  
      <!-- Dynamic Toast -->
      <CoreToast v-if="showToast" title="Success!" message="Your action was successful." toastType="success" />
      <CoreToast v-if="showErrorToast" title="Oops! Incorrect passcode" message="If forgotten, click on forgotten passcode" toastType="error" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useToast } from '@/composables/core/useToast';  
  const { showToast } = useToast(); // Get showToast function from composable
  const showErrorToast = ref(false);
  
  function triggerSuccessToast() {
    showToast(); // Trigger success toast
  }
  
  function triggerErrorToast() {
    showErrorToast.value = true;
    setTimeout(() => {
      showErrorToast.value = false;
    }, 3000); // Show error toast for 3 seconds
  }
  </script>
  