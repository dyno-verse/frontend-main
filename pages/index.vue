<template>
  <div class="w-full">

    <div class="flex flex-row justify-center items-center w-5/6 mx-auto my-12">
      <div class="w-1/2 flex flex-col space-y-4">
        <h3 class="text-6xl font-bold">
          Let's handle your restaurant, while you focus on greatness.
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


    <div class="w-full bg-gray-50 text-center p-20">

      <span
          class="bg-green-100 text-green-800 my-5 text-sm font-medium px-5 py-1.5 rounded-2xl">Green</span>
      <h2 class="font-bold text-3xl mt-2">A simple recipe for success</h2>
      <p class="mb-12 text-sm text-gray-400 w-1/4 flex justify-center mx-auto">on what truly matters - delivering
        exceptional dining experiences.</p>

      <div class="grid grid-cols-3 gap-7 mx-20">
        <div class="bg-white h-72 rounded-lg overflow-hidden p-5"
             style="background-image: url('./assets/imgs/backdrop.png')"
             v-for="i in 6">
          <!--          <img src="" class="-mt-48 z-10"/>-->

          <div class="z-50">
            <h4 class="font-bold my-1 text-lg">Delight taste buds</h4>
            <p class="text-gray-500 text-sm">Start serving meals that satisfy cravings and bring smiles to those who
              savor your creations.</p>
          </div>
        </div>
      </div>

    </div>

    <div class="w-full h-[450px] bg-red-50">
      <div class="grid grid-cols-3">
        <div class="">

        </div>
      </div>
    </div>


    <div class="w-full bg-white justify-center flex py-24">
      <!--      <h2 class="font-bold text-3xl mb-12">Pricing</h2>-->
      <div class="grid grid-cols-3 gap-6 w-3/4 justify-center">
        <div class="h-[500px] bg-white border-gray-200 border rounded-lg" v-for="i in 3">

        </div>
      </div>
    </div>

    <div class="bg-red-50 w-full py-24 flex justify-center">
      <div class="flex flex-row  w-2/5 mx-20">
        <div class="flex flex-col space-y-2">
          <h3 class="text-3xl font-bold">Ready to elevate your business’s experience?</h3>
          <p>
            Free yourself from the day-to-day chaos of restaurant management and entrust us to ensure smooth operations,
            allowing you to focus on what truly matters - delivering exceptional dining experiences.
          </p>
          <button type="button"
                  class="text-white bg-red-500 font-medium w-1/4 rounded-lg text-sm px-5 py-2.5 mb-2">
            Book a demo
          </button>
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
