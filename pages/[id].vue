<template>
  <SectionWrapper class="bg-neutral-100 pb-10">
    <BusinessDetailsHeader :name="businessInfo.name"
                           :business-logo="businessInfo.logo"
                           :description="businessInfo.tag"
                           :backdrop-image="businessInfo.banner"
    ></BusinessDetailsHeader>
    <CardStrip v-for="i in 3"></CardStrip>
    <CardStripAction v-for="i in 3"></CardStripAction>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import SectionWrapper from "~/components/base/SectionWrapper.vue";
import CardStripAction from "~/components/units/CardStripAction.vue";
import CardStrip from "~/components/units/CardStrip.vue";
import BusinessDetailsHeader from "~/components/core/BusinessDetailsHeader.vue";
import {IBusinessInfo} from "~/repository/models/ApiResponse";

const {$api} = useNuxtApp();
const businessInfo = ref({} as IBusinessInfo)

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
    businessInfo.value = data;
  }).catch(error => {

  })

});


</script>

<style scoped>

</style>






















