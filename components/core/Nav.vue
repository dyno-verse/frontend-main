<template>
  <div class="w-full py-5 px-5 mt-2">
    <div class="flex justify-between">
      <div class="flex flex-row gap-x-5 items-center">
        <img src="/imgs/logo.svg" class="w-14" alt="Dynomenu logo"/>
        <h6 class="font-bold text-red-500 md:visible 2xl:visible xl:visible sm:invisible invisible">What's dyno
          menu?</h6>
        <p class="md:visible 2xl:visible xl:visible sm:invisible invisible">Pricing</p>
      </div>
      <div
          class="flex flex-row gap-x-5 items-center md:visible 2xl:visible xl:visible md:visible sm:invisible invisible">
        <p>EN <i class="fa-solid fa-caret-down"></i></p>
        <Button label="Log In" :type="ButtonTypes.Secondary"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

import Button from "~/components/units/Button.vue";
import {ButtonTypes} from "~/components/Constants";
</script>

<style scoped>

</style>
