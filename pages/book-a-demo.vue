<template>
  <div class="w-full">
    <SectionWrapper>
      <div class="flex justify-center flex-row min-h-screen max-h-fit">
        <div class="md:w-1/2 2xl:w-1/2 w-full align-middle">


          <div class="flex flex-col w-full text-center align-middle mt-60">
            <h3 class="text-4xl font-extrabold my-5">Book a demo</h3>
            <p class="text-lg font-light">Opening/ running a restaurant in Ghana? <br/>Great! We’ll reach out within 24
              hours <br/>
              to schedule your free demo.</p>

            <div class="w-full sm:w-2/5 md:w-2/5 lg:w-3/5 2xl:w-2/5 justify-items-center items-center mx-auto mt-5">

              <div v-if="responseIn" id="alert-additional-content-1"
                   class="p-4 mb-4 text-green-700 border border-green-500 rounded-lg bg-green-100 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
                   role="alert">
                <div class="flex items-center">
                  <h3 class="text-lg font-medium text-start">
                    {{ responseTitle }}
                  </h3>
                </div>
                <div class="mt-2 mb-4 text-sm text-start">
                  {{ responseMessage }}
                </div>
              </div>

              <div class="flex-col flex items-center">
                <input id="name" placeholder="Full name" type="text"
                       v-model="fullName"
                       class="border border-neutral-100 focus:border-red-600 w-full rounded-lg p-4 my-2">
                <input id="name" placeholder="Restaurant  name" type="text"
                       v-model="restaurantName"
                       class="border border-neutral-100 focus:border-red-600 w-full rounded-lg p-4 my-2">
                <input id="name" placeholder="Phone number" type="text"
                       v-model="phoneNumber"
                       class="border border-neutral-100 focus:border-red-600 w-full rounded-lg p-4 my-2">
                <input id="name" placeholder="E-mail" type="text"
                       v-model="email"
                       class="border border-neutral-100 focus:border-red-600 w-full rounded-lg p-4 my-2">
                <!--                  <label for="name" class="float-left">Your Name</label>-->
              </div>


              <Button v-if="!pending" :label="'Request A Demo'" :type="ButtonTypes.Primary"
                      class="w-full mt-7 disabled:bg-red-100"
                      @click="onButtonClicked()"
              />
              <button v-else disabled type="button"
                      class="mt-5 w-full justify-center text-white bg-red-200 px-10 text-white font-bold  py-4 rounded-lg inline-flex items-center">
                <svg aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"/>
                  <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"/>
                </svg>
                Loading...
              </button>

            </div>


          </div>
        </div>
        <div
            class="md:w-1/2 bg-red-800 max-h-fit min-h-screen flex justify-center">
          <img src="../assets/imgs/logo_alt.svg" class="">
        </div>
      </div>


    </SectionWrapper>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/units/Button.vue";
import {ButtonTypes} from "~/components/Constants";
import {ICreateRequestDemo} from "~/repository/models/inputModels";
import {initFlowbite} from 'flowbite'

const snackbar = useSnackbar();


const {$api} = useNuxtApp();
const pending = ref(false)
const responseIn = ref(false)
const fullName = ref('')
const restaurantName = ref('')
const email = ref('')
const phoneNumber = ref('')
const responseTitle = ref('')
const responseMessage = ref('')


async function onButtonClicked() {
  let request = {} as ICreateRequestDemo
  request.fullName = fullName.value
  request.email = email.value
  request.phoneNumber = phoneNumber.value
  request.restaurantName = restaurantName.value

  console.log(request)

  pending.value = true
  await $api.demo.create(request).then(data => {
    pending.value = false
    responseIn.value = true
    responseTitle.value = data.data.title
    responseMessage.value = data.data.message
    snackbar.add({
      type: 'success',
      title: data.data.title,
      text: data.data.message
    })
    resetInputField()
  }).catch(error => {
    pending.value = false
    responseIn.value = true
    resetInputField()
  })
}

const resetInputField = () => {
  fullName.value = ''
  email.value = ''
  phoneNumber.value = ''
  restaurantName.value = ''
}


onMounted(() => {
  // initFlowbite();
})

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
