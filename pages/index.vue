<template>
  <div class="container mx-auto">
    <LazyBaseHeader></LazyBaseHeader>
    <div class="flex flex-row justify-center my-10 mx-5">
      <div class="w-1/2 text-left">
        <p>
          Restaurants, hotels, pubs, coffee <br/>shops and eating establishments
        </p>
        <h1 class="text-8xl font-bold my-5">
          We help you create a digital version of your menu.
        </h1>
        <button class="bg-pink px-10 text-white py-4 rounded-full"> Get started</button>
      </div>
      <div class="w-1/2 text-left"></div>
    </div>
    <LazyBaseFooter></LazyBaseFooter>
  </div>
</template>

<script lang="ts" setup>
definePageMeta(
    {
      layout: 'default'
    }
)

</script>

<style scoped>

</style>
