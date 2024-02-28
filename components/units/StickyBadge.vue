<template>
  <div class="flex justify-center">
     <span id="badge-dismiss-default"
           class="inline-flex mb-5 sticky border border-black-900 top-0 z-40 items-center px-2 py-1 me-2 text-sm font-medium text-black-900 bg-gray-100 rounded-lg dark:bg-blue-900 dark:text-blue-300">
          <h2 class="text-2xl font-bold px-2">{{props.title}}</h2>
        <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        <span class="sr-only">Remove badge</span>
        </span>
  </div>
</template>

<script lang="ts" setup>

interface StickyBadgeProps {
  title: string
  // size?: number
}

//Declares defaults and specifies the defaults
const props = withDefaults(defineProps<StickyBadgeProps>(), {
  title: 'Message',
  // size: 0
})


</script>

<style scoped>

</style>
