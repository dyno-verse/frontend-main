<template>
  <!--Card Strip-->
  <div class="flex flex-col mx-5 bg-white rounded-2xl mb-5 border border-gray-300">
    <div class="flex flex-col p-4">
      <!--      <img :src="props.imgUrl" class="w-full h-20">-->
      <object
          v-if="props.imgUrl"
          class="w-full bg-black h-40 bg-blend-color-burn rounded-b-lg"
          style="object-fit: contain;"
          :data="props.imgUrl"></object>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <h3 class="font-bold text-lg">{{ props.title }}</h3>
          <p class="font-medium grow text-end w-64">GHS {{ props.amount }}</p>
        </div>
        <p class="text-gray-600">{{ props.description }}</p>
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <button type="button"
              class="text-gray-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg m-4 font-medium text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <svg class="w-8 h-8 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>

export interface CardStripActionProps {
  title?: string
  imgUrl?: string
  description?: string
  amount?: number,
  currency?: string
}

const props = withDefaults(defineProps<CardStripActionProps>(), {
  title: 'Lasagna',
  imgUrl: '/imgs/la_comida.png',
  description: 'Something sweet must be eaten',
  amount: 40.0,
  currency: 'GHS '
})

</script>

<style scoped>

</style>
