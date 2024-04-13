<template>
  <!--Card Strip-->
  <div class="flex flex-col mx-5 bg-white rounded-lg mb-5 border border-gray-300">
    <div class="flex flex-col">
      <!--      <img :src="props.imgUrl" class="w-full h-20">-->
      <div v-if="props.imgUrl" class="w-full bg-gray-50 rounded-t-lg p-2">
        <object
            class="w-full bg-black h-40 bg-blend-color-burn rounded-t-2xl"
            style="object-fit:contain;"
            :data="props.imgUrl"></object>
      </div>

      <div class="flex flex-col px-4 pt-4">
        <div class="flex flex-row justify-between">
          <p class="font-medium text-gray-700 text-2xs w-2/3">{{ props.title }}</p>
          <p class="font-medium text-gray-700 flex-auto text-end w-1/3">{{ props.amount }}</p>
        </div>
        <p class="text-gray-600">{{ props.description }}</p>
      </div>
    </div>
    <div class="flex flex-row justify-end">
      <button type="button"
              @click="emit('addToCart')"
              class="text-gray-300 rounded-lg m-2 font-medium text-sm px-1 py-1">
        <svg class="w-8 h-8 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['addToCart'])

export interface CardStripActionProps {
  title?: string
  imgUrl?: string
  description?: string
  amount?: string,
  currency?: string
}

const props = withDefaults(defineProps<CardStripActionProps>(), {
  title: 'Lasagna',
  imgUrl: '/imgs/la_comida.png',
  description: '',
  amount: 40.0,
  currency: 'GHS '
})

</script>

<style scoped>

</style>
