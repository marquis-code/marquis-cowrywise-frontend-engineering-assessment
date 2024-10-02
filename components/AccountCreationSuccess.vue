<template>
    <div class="flex flex-col items-center justify-center w-full h-screen">
      <div class="w-[500px]  flex flex-col justify-start items-start space-y-4">
        <h2 class="text-3xl font-bold text-[#323740] max-w-md mb-2">Your Account has been successfully created</h2>
        <p class="text-[#687181] leading-relaxed pb-4">
          Here’s your account details
        </p>
       <div class="space-y-3 w-full">
        <p class="font-medium text-[#7D8799] text-center w-full">tier 1 account</p>
        <div class="bg-green-50 text-green-600 py-3 px-6 rounded-md mb-4 w-full text-center">Transaction limit (₦0 - ₦50,000)</div>
       </div>
       <div class="w-full">
        <p class="text-3xl font-bold text-center w-full">0125771275</p>
        <p class="text-3xl font-bold mb-4 text-center w-full">Wesley Bank</p>
       </div>
        <div class="pt-6 w-full">
          <button type="submit" class="bg-[#2F6D67] w-full text-white py-3.5 rounded-md hover:bg-[#2F6D67] transition">Set Transaction PIN</button>
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
  