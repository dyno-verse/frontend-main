<template>
  <div class="w-full">

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

definePageMeta({
  layout: 'main'
})

</script>

<style scoped>

</style>
