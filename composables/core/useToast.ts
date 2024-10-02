import { ref } from 'vue';

const visible = ref(false);

export function useToast() {
  const showToast = () => {
    visible.value = true;
    setTimeout(() => {
      visible.value = false;
    }, 3000); // You can make this dynamic by passing a duration parameter
  };

  return {
    visible,
    showToast,
  };
}
