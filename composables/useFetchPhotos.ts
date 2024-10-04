import { unsplash_api } from '@/apiFactory/modules/photos';
import { useCustomToast } from '@/composables/core/useCustomToast';
import { ref, watch } from 'vue';
import { debounce } from 'lodash'; // Import lodash debounce for efficient API calls

const payload = ref({
  searchTerm: ''
});

export const useFetchPhotos = () => {
  const isInitialLoading = ref(false);  // For initial load
  const isSearchLoading = ref(false);   // For search operation
  const searchList  = ref([])
  const photoList = ref([] as any[]);
  const { $_get_photos, $_search_photos } = unsplash_api;  // Assuming both endpoints exist
  const { showToast } = useCustomToast();

  // Fetch initial photos
  const fetchInitialPhotos = async () => {
    isInitialLoading.value = true;
    try {
      const res = await $_get_photos() as any;
      if (res.type !== 'ERROR') {
        photoList.value = res?.data;
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "Error getting initial photos",
        toastType: "error",
        duration: 3000
      });
    } finally {
      isInitialLoading.value = false;
    }
  };

  // Search for photos based on user input
  const searchPhotos = debounce(async () => {
    if (!payload.value.searchTerm) return;
    isSearchLoading.value = true;
    try {
      const res = await $_search_photos(payload.value.searchTerm) as any;
      if (res.type !== 'ERROR') {
        photoList.value = res?.data?.results;
        searchList.value = res?.data?.results;
      }
    } catch (error) {
      showToast({
        title: "Error",
        message: "Error getting searched photos",
        toastType: "error",
        duration: 3000
      });
    } finally {
      isSearchLoading.value = false;
    }
  }, 300);  // Debounce for 300 milliseconds

  // Watch for changes in the search term and trigger search
  watch(() => payload.value.searchTerm, () => {
    searchPhotos();
  });

  return {
    photoList,
    isInitialLoading,
    isSearchLoading,
    fetchInitialPhotos,
    searchList,
    searchPhotos,
    payload
  };
};
