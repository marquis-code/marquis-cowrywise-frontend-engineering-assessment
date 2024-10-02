<template>
<main>
    <div class="flex flex-col items-center justify-center w-full h-screen">
        <div class="w-[500px]  flex flex-col justify-start items-start">
         <div class="flex justify-start items-start">
          <img src="@/assets/img/logo.png" alt="LoaniQ Logo" class="mx-auto mb-4 w-24" />
         </div>
          <h2 class="text-3xl font-medium text-[#323740] text-center mb-2">Welcome! Sign Up on LoaniQ</h2>
          <form class="w-full space-y-6" @submit.prevent="handleLogin">
            <div class="mb-4">
              <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="phone">Enter Your Phone Number</label>
              <input type="text" id="phone" v-model="phone" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
            </div>
            <div class="mb-4">
              <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="bvn">Enter your BVN</label>
              <input type="text" id="bvn" v-model="bvn" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
              <p class="text-[#8F9BB3] text-sm mt-1">Check your BVN via *565*0#</p>
            </div>
            <div class="pt-6">
              <button :disabled="loading" type="submit" class="w-full disabled:cursor-not-allowed disabled:opacity-25 bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">{{loading ? 'processing...' : 'Create New Account'}}</button>
            </div>
          </form>
          <div class="text-center mt-4 flex items-center gap-y-4 flex-col w-full">
            <p class="text-[#2E3A59] text-center">By signing up, you accept our <span class="text-[#2C64E3]">Terms & Conditions</span></p>
            <p class="text-[#687181] flex items-center gap-x-3">Already have an account? <NuxtLink to="/login" class="text-[#2F6D67] hover:underline">Log in</NuxtLink> <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 4.86165L13.3333 10.695L7.5 16.5283" stroke="#2F6D67" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </p>
          </div>
        </div>
      </div>
      <CoreToast v-if="showToast" title="Success!" message="Signup was successful." toastType="success" />
</main>
  </template>
  
  <script setup lang="ts">
    import { useToast } from '@/composables/core/useToast';  
  const { showToast } = useToast(); 
  const router = useRouter()
  const loading = ref(false)
  
  const phone = ref('');
  const bvn = ref('');
  
  const handleLogin = () => {
    loading.value = true
    console.log('Phone:', phone.value);
    console.log('BVN:', bvn.value);
    showToast(); 
    setTimeout(() => {
        loading.value = false
        router.push('Login')
    }, 3000); // Show error toast for 3 seconds
  };
  </script>