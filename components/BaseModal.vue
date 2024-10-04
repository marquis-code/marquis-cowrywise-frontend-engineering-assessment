<template>
    <main>
      <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 z-40" @click="close"></div>
      </transition>
      <transition name="scale">
        <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 p-4">
          <div
            class="bg-white rounded-lg shadow-lg max-w-4xl w-full p-6 relative"
            @click.stop
          >
            <slot></slot>
          </div>
        </div>
      </transition>
      <button v-if="isOpen" @click="close" class="fixed top-32 right-96 text-gray-500 hover:text-gray-800 z-50">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </main>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
  });
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  
  <style scoped>
  /* Transitions */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .scale-enter-active,
  .scale-leave-active {
    transition: transform 0.3s ease;
  }
  .scale-enter-from,
  .scale-leave-to {
    transform: scale(0.95);
  }
  </style>
  