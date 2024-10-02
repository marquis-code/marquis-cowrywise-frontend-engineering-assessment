<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px]  flex flex-col justify-start items-start">
       <div class="flex justify-start items-start">
        <img src="@/assets/icons/password-recovery.svg" alt="" class="mx-auto mb-4 w-24" />
       </div>
        <h2 class="text-3xl font-medium text-[#323740] text-center mb-2">Recover passcode</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
            Seems you have forgotten your passcode, Lets assist you in getting a new one
        </p>
        <form class="w-full space-y-6" @submit.prevent="handleLogin">
          <div class="mb-4">
            <label class="block text-[#7D8799] font-medium mb-1 text-sm" for="phone">Phone number</label>
            <input type="text" id="phone" v-model="phone" class="w-full px-4 py-4  bg-[#F4F5F7] outline-none border-[0.5px] border-[#F4F5F7] rounded-md focus:outline-none focus:border-green-500" />
          </div>
        
          <div class="pt-6">
            <button type="submit" class="w-full bg-[#2F6D67] text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">Send OTP</button>
          </div>
        </form>
        <div class="mt-4 flex justify-between items-center w-full">
            <p class="text-[#687181]">Not Chinedu? <a href="/signup" class="text-[#2F6D67] font-semibold hover:underline">Sign out</a> </p>
  
            <p><a href="/signup" class="text-[#2F6D67] hover:underline font-semibold">Forgot passcode?</a></p>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const phone = ref('');
  const bvn = ref('');
  const passcode = ref('');
  
  const handleLogin = () => {
    console.log('Phone:', phone.value);
    console.log('BVN:', bvn.value);
    console.log('Passcode:', passcode.value);
  };


  const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

  const showPassword = ref(false);
  </script>
  