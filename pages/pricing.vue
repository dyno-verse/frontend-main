<template>
  <SectionWrapper>
    <Header></Header>
  </SectionWrapper>

  <SectionWrapper>
    <div class="flex md:flex-row justify-between my-10 mx-5 space-x-3">
      <div>
        <LeadTitle label="Pricing Plans" :size="5"/>
        <p>
          Flexible packages to suit your use-case.
        </p>
      </div>

      <div class="flex flex-col w-1/3 justify-center text-center" v-for="i in 2" >
       <div class="border border-b-neutral-500 px-10 pb-5 text-center rounded-2xl" >

         <div class="bg-black-900 p-4 rounded-b-2xl w-1/2 mx-auto flex justify-center">
              <h5 class="font-bold text-white">Lite</h5>
         </div>

         <LeadTitle label="Ghs 50" :size="3"/>
         <p>paid per month. Billed $107.88</p>
         <Badge>
           save $24
         </Badge>
         <Button label="Start now" :type="ButtonTypes.Primary" class="py-5"></Button>
       </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import Header from "~/components/base/Header.vue";
import SectionWrapper from "~/components/base/SectionWrapper.vue";
import LeadTitle from "~/components/units/LeadTitle.vue";
import Button from "~/components/units/Button.vue";
import {ButtonTypes} from "~/components/Constants";
import Badge from "~/components/units/Badge.vue";
</script>

<style scoped>

</style>
