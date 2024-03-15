<template>
  <!--Card Strip-->
  <div class="flex flex-col mx-5 bg-white rounded-2xl mb-5 border border-gray-300">
    <div class="flex flex-col p-5">
      <!--      <img :src="props.imgUrl" class="w-full h-20">-->
      <object
          v-if="props.imgUrl"
          class="w-full bg-black h-40 bg-blend-color-burn rounded-b-lg"
          style="object-fit: contain;"
          :data="props.imgUrl"></object>
      <div class="flex flex-col">
        <div class="flex flex-row justify-between">
          <h3 class="font-bold text-lg">{{ props.title }}</h3>
          <p class="font-medium text-end">GHS {{ props.amount }}</p>
        </div>
        <p class="text-gray-600">{{ props.description }}</p>
      </div>
    </div>
    <button type="button"
            class="text-gray-500 bg-gray-200 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-b-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
      Add to Order
    </button>
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
