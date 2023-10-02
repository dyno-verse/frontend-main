<template>
  <div class="w-full">
    <SectionWrapper>
      <div class="flex justify-center flex-row min-h-screen max-h-fit">
        <div class="md:w-1/2 align-middle">
          <div class="flex flex-col text-center align-middle mt-60">
            <LeadTitle label="Book a demo"></LeadTitle>
            <p class="text-3xl">You're obe step closer in turning</p>
            <p class="text-3xl">hunger to happiness</p>

            <div class="flex flex-col w-full items-center">
              <form class="w-full">
                <div>
                  <input id="name" type="text" class="border border-neutral-100 focus:border-red-600 w-1/2 rounded-lg p-4 my-2">
                  <label for="name" class="float-left">Your Name</label>
                </div>
              </form>
            </div>

            <Button :label="'Request a demo'" :type="ButtonTypes.Primary" class="w-120"/>
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
form > div {
  position: relative;
}

form > div > label {
  position: absolute;
}

form label {
  position: absolute;
  top: 25px;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: 0.2s;
}

form input:focus + label {
  /*top: 100%;*/
  margin-top: -16px;
  margin-left: -10px;
  transform: scale(0.7);

}


</style>
