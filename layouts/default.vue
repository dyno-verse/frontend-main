<template>
  <div class="container mx-auto">
    <div class="w-full flex flex-row justify-between w-5/6 mx-auto py-5">
      <div class="flex flex-row items-center space-x-6">
        <NuxtLink to="/" active-class="text-red-500 font-medium">
          <img src="assets/imgs/logo.svg" class="h-12 w-12">
        </NuxtLink>
        <NuxtLink to="solutions" active-class="text-red-500 font-bold" class="font-medium text-sm">
          What's dyno menu?
        </NuxtLink>
        <NuxtLink to="solutions" active-class="text-red-500 font-bold" class="font-medium text-sm">
          Solutions
        </NuxtLink>
        <NuxtLink to="pricing" active-class="text-red-500 font-bold" class="text-sm font-medium">
          Pricing
        </NuxtLink>
        <NuxtLink to="blog" class="text-sm font-medium">
          Blog
        </NuxtLink>
      </div>
      <!--Buttons-->
      <div class="flex flex-row space-x-2">
        <button type="button"
                class="text-red-500 bg-red-50 font-medium rounded-lg font-medium text-sm px-5 py-2.5 mb-2">
          Log In
        </button>
        <button type="button"
                class="text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2">
          Book a demo
        </button>
      </div>
    </div>
    <slot class="w-full"/>
    <div class="w-full">
      <LazyBaseFooter></LazyBaseFooter>
    </div>
  </div>
</template>


<script lang="ts" setup>


</script>

<style scoped>

</style>
