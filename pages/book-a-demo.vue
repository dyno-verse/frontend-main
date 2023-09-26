<template>
  <div class="w-full">
    <SectionWrapper>
      <div class="flex justify-center flex-row align-middle">
        <div class="md:w-1/2">
          <div class="flex flex-col text-center">
            <LeadTitle label="Book a demo"></LeadTitle>
            <p class="text-3xl">You're obe step closer in turning</p>
            <p class="text-3xl">hunger to happiness</p>

            <div class="flex flex-col w-full items-center">
              <input type="text" class="border w-1/2 rounded-lg p-2 my-2">
              <input type="text" class="border w-1/2 rounded-lg p-2 my-2">
              <input type="text" class="border w-1/2 rounded-lg p-2 my-2">
              <input type="text" class="border w-1/2 rounded-lg p-2 my-2">
            </div>

            <Button :label="'Request a demo'" :type="ButtonTypes.Primary" class="w-full"/>
          </div>
        </div>
        <div class="md:w-1/2 bg-red-800 max-h-fit min-h-screen">

        </div>
      </div>
    </SectionWrapper>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/units/Button.vue";
import LeadTitle from "~/components/units/LeadTitle.vue";
import {ButtonTypes} from "~/components/Constants";
</script>

<style scoped>

</style>
