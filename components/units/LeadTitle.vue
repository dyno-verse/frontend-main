<template>
  <div>
    <h1 :class="size.toString()">
      {{ props.label }}
    </h1>
  </div>
</template>

<script lang="ts" setup>

interface LeadTitleProps {
  label: string,
  size?: number
}

const size = computed(() => {
  // if (props.size <= 9) {
  //   return `text-${props.size}xl font-bold my-5`
  //   // return 'text-8xl font-bold my-5'
  // }
  return '2xl:text-8xl xl:text-8xl md:text-6xl sm:text-5xl text-6xl font-bold my-5 text-black dark:text-white'
})

const props = withDefaults(defineProps<LeadTitleProps>(), {
  label: '',
  size: 9
})

</script>

<style scoped>

</style>
