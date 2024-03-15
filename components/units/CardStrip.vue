<template>
  <!--Card Strip-->
  <div class="flex flex-col mx-5 py-5 px-5 bg-white rounded-2xl mb-5 border border-gray-300">
    <div class="flex flex-row items-center justify-between">
      <div>
        <h3 class="font-bold text-lg">{{ props.title }}</h3>
        <!--        <p>{{ props.description }}</p>-->
      </div>

      <svg class="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
           width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M19 12H5m14 0-4 4m4-4-4-4"/>
      </svg>

    </div>
  </div>
</template>

<script lang="ts" setup>

export interface CardStripProps {
  title?: string
  description?: string

}

const props = withDefaults(defineProps<CardStripProps>(), {
  title: 'Sandwiches',
  description: 'Juicy flavors in between your breaded'
})

</script>

<style scoped>

</style>
