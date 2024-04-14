<template>
  <div class="">
    <div class="hidden flex flex-row items-center justify-between mx-auto py-5 w-5/6">
      <div class="flex flex-row items-center space-x-6">
        <NuxtLink to="/" active-class="text-red-500 font-medium">
          <img src="assets/imgs/logo.svg" class="h-12 w-12">
        </NuxtLink>
<!--        <NuxtLink to="solutions" active-class="text-red-500 font-bold" class="font-medium text-sm">-->
<!--          What's dyno menu?-->
<!--        </NuxtLink>-->
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
                ref="dropdownId"
                @click="dropdown.show()"
                class="text-red-500 bg-red-50 font-medium rounded-lg font-medium text-sm px-5 py-2.5">
          Log In
        </button>
        <button type="button"
                class="text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5">
          Book a demo
        </button>
      </div>
    </div>
    <slot class="w-full"/>
    <div class="w-full">
      <LazyBaseFooter></LazyBaseFooter>
    </div>

    <!-- Dropdown menu -->
    <div id="dropdownDotsHorizontal"
         ref="dropdownMenu"
         class="z-40 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
        <li>
          <a href="#"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#"
             class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
      </ul>
      <div class="py-2">
        <a href="#"
           class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated
          link</a>
      </div>
    </div>
  </div>
</template>


<script lang="ts" setup>
import {Dropdown, DropdownOptions} from "flowbite";

const dropdown = ref({})
const dropdownMenu = ref(null)
const dropdownId = ref(null)


onMounted(() => {
  const options: DropdownOptions = {
    placement: 'bottom',
    triggerType: 'click',
    offsetSkidding: 0,
    offsetDistance: 10,
    delay: 300,
    onHide: () => {
      console.log('dropdown has been hidden');
    },
    onShow: () => {
      console.log('dropdown has been shown');
    },
    onToggle: () => {
      console.log('dropdown has been toggled');
    },
  };

  dropdown.value = new Dropdown(dropdownMenu.value,
      dropdownId.value,
      options
  );
})

</script>

<style scoped>

</style>
