<template>
    <div class="flex flex-col items-center justify-center w-full h-screen bg-white p-10">
      <div class="w-96 bg-white shadow-md rounded-md p-8 text-center">
        <img src="/profile-picture.jpg" alt="Profile Picture" class="w-20 h-20 rounded-full mx-auto mb-4" />
        <h2 class="text-2xl font-bold mb-2">Welcome back Chinedu</h2>
        <p class="text-gray-600 mb-4">kindly type in your passcode to log into your LoaniQ account.</p>
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="passcode">Your Passcode</label>
          <div class="relative">
            <input type="password" id="passcode" class="w-full px-4 py-2 border rounded-md" />
            <span class="absolute right-3 top-3">
              <img src="/icons/fingerprint-icon.png" alt="Fingerprint Icon" class="w-6 h-6" />
            </span>
          </div>
        </div>
        <button class="w-full bg-green-600 text-white py-2 rounded-md">Login</button>
        <div class="flex justify-between mt-4 text-gray-600">
          <a href="#" class="text-green-600">Sign out</a>
          <a href="#" class="text-green-600">Forgot passcode?</a>
        </div>
      </div>
    </div>
  </template>
  