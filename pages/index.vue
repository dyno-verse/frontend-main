<template>
  <div class="w-full">
    <div class="">
      <div class=""></div>

    </div>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'default'
})

const gettingStartedSteps = [
  {step: 1, action: 'Sign up'},
  {step: 2, action: 'Add your menu'},
  {step: 3, action: 'Start serving meals'}
]

const features = [
  {
    name: "No mobile app to",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-blue-100',
    icon: '/imgs/globe.svg'

  },
  {
    name: "Always accessible",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Always accessible",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  }
]

useHead({title: 'Dyno Menu'})
definePageMeta(
    {
      layout: 'default',
      name: 'Dyno Menu'
    }
)

</script>

<style scoped>

</style>
