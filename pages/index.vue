<template>
  <main>
=
<section class="bg-[#DDE2E6] py-32">
  <div v-if="!searchList.length && !isSearchLoading" class="max-w-6xl mx-auto mb-8 pt-20 ">
    <div class="relative w-full">
      <input
        v-model="payload.searchTerm"
        type="text"
        placeholder="Search for photo"
        class="w-full px-4 py-6 rounded-md border pl-14 border-gray-100 outline-none"
      />
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 11a4 4 0 100-8 4 4 0 000 8zm8 2a6 6 0 00-12 0 6 6 0 0012 0zm-3 4h.01M13 16h.01"
        /> -->
      <!-- </svg> -->
      <svg class="h-5 w-5 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="#9b9b9b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
    </div>
  </div>
  <p class="max-w-6xl mx-auto mb-8 text-4xl pt-20" v-if="searchList.length && !isSearchLoading">Search Results for "{{payload.searchTerm}}"</p>
</section>
    <div v-if="isSearchLoading" class="grid -mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 pt-20">
      <div v-for="n in 6" :key="n" class="bg-gray-200 animate-pulse h-64 rounded-lg"></div>
    </div>
    <div v-else-if="isInitialLoading" class="grid -mt-32 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8 pt-20">
      <div v-for="n in 6" :key="n" class="bg-gray-200 animate-pulse h-64 rounded-lg"></div>
    </div>
    <div v-else class="max-w-7xl mx-auto py-12 -mt-32">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <div 
          v-for="(image, index) in photoList" 
          :key="image.id" 
          class="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer" 
          @click="showImageModal(image)"
          :class="getImageClass(index)">
          <img :src="image?.urls?.regular" :alt="image.alt_description" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent px-4 py-3">
            <h3 class="text-white text-lg font-semibold">{{ image?.user?.name }}</h3>
            <p class="text-gray-200 text-sm">{{ image?.user?.location }}</p>
          </div>
        </div>
      </div>
    </div>
    <BaseModal v-if="selectedPhoto" :isOpen="isModalOpen" @close="isModalOpen = false">
      <div class="flex justify-center">
        <img :src="selectedPhoto?.urls?.regular" alt="Selected photo" class="object-cover max-h-screen w-full" />
      </div>
      <div class="mt-4 o=ll-3">
        <h2 class="text-lg font-semibold">{{ selectedPhoto?.user?.name }}</h2>
        <p class="text-gray-600">{{ selectedPhoto?.user?.location }}</p>
      </div>
    </BaseModal>
  </main>
</template>

<script setup lang="ts">
import { useFetchPhotos } from "@/composables/useFetchPhotos";
const { 
  photoList, 
  isInitialLoading, 
  isSearchLoading, 
  fetchInitialPhotos, 
  payload,
  searchList
} = useFetchPhotos();
const selectedPhoto = ref(null);
const isModalOpen = ref(false);
const showImageModal = (image) => {
  selectedPhoto.value = image;
  isModalOpen.value = true;
};
fetchInitialPhotos();
const getImageClass = (index: number) => {
  if (index === 0) return 'row-span-2'; 
  if (index === 3) return 'row-span-2'; 
  return '';
};
</script>

<style scoped>
.group:hover img {
  transform: scale(1.1);
}
</style>
