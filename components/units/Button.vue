<template>
  <div v-if="props.type === ButtonTypes.Primary">
    <button :class="buttonStyles">{{ props.label }}</button>
  </div>
  <div v-else-if="props.type === ButtonTypes.Secondary">
    <button :class="buttonStyles">{{ props.label }}</button>
  </div>
  <div v-else>
    <button class="bg-red-500 px-10 text-white py-4 rounded-full">{{ props.label }}</button>
  </div>
</template>

<script lang="ts" setup>
import {ButtonStates, ButtonTypes} from "~/components/Constants";

interface ButtonProps {
  label: string
  type?: ButtonTypes,
  state?: ButtonStates
  // size?: number
}


const buttonStyles = computed(() => {
  switch (props.type) {
    case ButtonTypes.Primary:
      return 'bg-red-500 px-10 text-white font-bold py-4 rounded-full';
    case ButtonTypes.Secondary:
      return 'border-red-500 border px-10 font-bold text-red-500 py-4 rounded-full';
  }
  return 'border-red-500 border px-10 font-bold text-red-500 py-4 rounded-full'
})


//Declares defaults and specifies the defaults
const props = withDefaults(defineProps<ButtonProps>(), {
  label: 'Button',
  type: ButtonTypes.Secondary,
  state: ButtonStates.Active,
  // size: 0
})

</script>

<style scoped>

</style>
