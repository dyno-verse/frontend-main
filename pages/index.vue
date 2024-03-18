<template>
  <div class="w-full container mx-auto">

    <div class="flex flex-row justify-center items-center my-12 w-full">
      <div class="w-1/2 flex flex-col space-y-4">
        <h3 class="text-6xl font-bold">
          Let's handle your <span class="text-red-500">restaurant</span>, while you focus on <span class="text-red-500">greatness</span>.
        </h3>
        <p class="text-gray-600 w-3/4">
          Free yourself from the day-to-day chaos of restaurant management and entrust us to ensure smooth operations,
          allowing you to focus on what truly matters - delivering exceptional dining experiences.
        </p>
        <button type="button"
                class="text-white bg-red-500 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 w-1/5">
          Book a demo
        </button>
      </div>
      <div class="w-1/2 h-96 bg-gray-50">

      </div>
    </div>


    <div class="w-full bg-gray-50 p-20">

      <div class="grid grid-cols-3 gap-7 mx-20">
        <div class="bg-red-50 h-72 rounded-lg" v-for="i in 6"></div>
      </div>

    </div>


    <div class="w-full bg-white py-5">
      <div class="grid grid-cols-3 justify-center">
        <div class="flex flex-col items-center space-y-2 text-center my-5 p-12" v-for="i in 6">
            <span class="bg-blue-50 w-12 h-12 rounded-full">

            </span>
          <p class="font-medium">No App install</p>
          <p class="text-2xs">Free yourself from the day-to-day chaos of restaurant management and</p>
        </div>
      </div>
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
