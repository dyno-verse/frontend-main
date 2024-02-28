<template>
  <div class="w-full">

    <SectionWrapper>
      <Header></Header>
    </SectionWrapper>

    <SectionWrapper>

      <div class="w-full mt-20 mb-10 mx-5">
        <LeadTitle label="Pricing Plans" :size="5"/>
        <p class="w-2/3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div class="flex md:flex-row justify-between my-10 mx-5 space-x-3">

        <div class="flex flex-col w-1/3 justify-center text-center" v-for="tier in pricingTiers">
          <div class="border px-10 pb-5 text-center rounded-2xl ">
            <div class="bg-black-900 p-4 rounded-b-2xl w-1/2 mx-auto flex justify-center">
              <h5 class="font-bold text-white">{{ tier.name }}</h5>
            </div>
            <LeadTitle :label=tier.price :size="3"/>
            <ul class="list-image-[url(checkmark.png)] text-start list-inside">
              <li>Everything in the basic plan</li>
              <li>Cloud based point of sale</li>
              <li>Online ordering</li>
              <li>Real-time sales report</li>
              <li>Payment collection</li>
              <li>Kitchen display system</li>
              <li>QR digital menu</li>
            </ul>
            <Button label="Start now" :type="ButtonTypes.Primary" class="py-5"></Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </div>

</template>

<script lang="ts" setup>
import Header from "~/components/base/Header.vue";
import SectionWrapper from "~/components/base/SectionWrapper.vue";
import LeadTitle from "~/components/units/LeadTitle.vue";
import Button from "~/components/units/Button.vue";
import {ButtonTypes} from "~/components/Constants";
import Badge from "~/components/units/Badge.vue";

const pricingTiers = [
  {name: 'Lite', price: '65'},
  {name: 'Pro', price: '150'},
  {name: 'Premium', price: '400'},
]

</script>

<style scoped>

</style>
