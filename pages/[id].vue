<template>
  <SectionWrapper class="bg-neutral-100 pb-10">
    <div class="flex flex-col justify-center text-center items-center pb-10">
      <div id="backdrop" class="w-full h-48 bg-red-500 rounded-b-3xl">

      </div>
      <img src="/imgs/la_comida.png" class="w-1/5 -mt-10"/>
      <h3 class="font-bold">La Comida</h3>
      <p class="text-neutral-300">
        Your favorite food on every corner.
      </p>
      <p>Kokomlemle, Accra-Ghana</p>
    </div>

    <!--Card Strip-->
    <div class="flex flex-col mx-5 py-5 px-5 bg-white rounded-2xl mb-5 drop-shadow-md" v-for="i in 2">
      <div class="flex flex-row items-center justify-between">
        <div>
          <h3 class="font-bold my-2">Sandwiches</h3>
          <p>Juicy flavors in between your breaded</p>
        </div>

        <img src="/imgs/ic-arrow-black.svg">
      </div>
    </div>


    <!--Card Strip-->
    <div class="flex flex-col mx-5 py-5 px-5 bg-white rounded-2xl mb-5 drop-shadow-md" v-for="i in 2">
      <div class="flex flex-row items-start justify-between">
        <img src="/imgs/la_comida.png" class="w-1/5">
        <div>
          <h3 class="font-bold my-1">Sandwiches</h3>
          <p>Juicy flavors in between your breaded</p>
          <div class="flex flex-row justify-start mt-2">
            <p class="bg-green-700 text-sm rounded-full px-2 py-1 font-bold text-white">GHS 90.00</p>
          </div>
        </div>
      </div>
    </div>

  </SectionWrapper>
</template>

<script lang="ts" setup>
import SectionWrapper from "~/components/base/SectionWrapper.vue";

const {$api} = useNuxtApp();

onMounted(() => {
//   await $api.employer.update(request, id).then(data => {
//     pending.value = false
//     snackbar.add({
//       type: 'success',
//       text: 'Update successfully made'
//     })
//     loadEmployers()
//   }).catch(error => {
//     pending.value = false
//   })
//
// }

  $api.business.getBusinessInfoBySlug("dkkdkdkdkkd").then(data => {
    console.log(data)

  }).catch(error => {

  })

});


</script>

<style scoped>

</style>






















