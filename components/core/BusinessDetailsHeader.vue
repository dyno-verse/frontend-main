<template>
  <div class="flex flex-col justify-center text-center items-center pb-10">
    <div id="backdrop"
         class="w-full h-40 rounded-b-3xl z-20">
      <object
          class="w-full bg-black h-40 bg-blend-color-burn rounded-b-lg"
          style="border-radius: 0 0 3rem 3rem; height:12rem; object-fit: cover;"
          :data="backdropImage"></object>
    </div>

    <object :data="props.businessLogo" class="w-1/5 z-30 -mt-3 rounded-full border border-white drop-shadow-lg w-36 h-36"
            style="height:6rem; width:6rem; object-fit: contain; padding: 0.2rem;"/>

    <h3 class="font-bold text-3xl">{{ props.name }}</h3>
    <p>{{ props.location }}</p>
    <p class="text-gray-500 text-sm">
      {{ props.contact }}
    </p>
  </div>
</template>

<script lang="ts" setup>


export interface BusinessDetailsProps {
  businessLogo?: string
  name?: string
  description?: string
  contact?: string,
  location?: string
  themeColor: string
  backdropImage?: string
}

const props = withDefaults(defineProps<BusinessDetailsProps>(), {
  businessLogo: '/imgs/la_comida.png',
  name: 'A Restaurant',
  description: '  Your favorite food on every corner.',
  contact: '',
  backdropImage: '',
  location: 'Kokomlemle, Accra-Ghana',
})

</script>

<style scoped>

</style>
