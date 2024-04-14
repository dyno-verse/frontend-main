<template>
  <div class="w-full">

    <div class="flex md:flex-row lg:flex-row flex-col space-x-5  justify-center items-center w-5/6 mx-auto mt-10 mb-20">

      <div  class="2xl:hidden xl:hidden lg:hidden md:hidden w-full bg-gray-50 my-5">
        <img src="../assets/imgs/woman.jpg" class="w-full rounded-lg"/>
      </div>

      <div class="md:w-1/2 lg:w-1/2 2xl:w-1/2 xl:w-1/2 w-full mx-0 flex flex-col space-y-4">
        <h3 class="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-lg text-4xl font-bold">
          Let's handle your restaurant, while you focus on greatness.
        </h3>
        <p class="text-gray-600 2xl:w-3/4 md:w-5/6 lg:w-3/4 2xl:text-xl xl:text-xl md:text-xs lg:text-sm text-2xs">
          Free yourself from the day-to-day chaos of restaurant management and entrust us to ensure smooth operations,
          allowing you to focus on what truly matters.
        </p>
        <button type="button"
                @click="openModal()"
                class="text-white bg-red-500 font-medium rounded-lg md:w-1/2 text-sm px-5 py-2.5 mb-2 w-3/6 2xl:w-1/4 xl:w-1/4 lg:w-2/5">
          Book a demo
        </button>
      </div>

      <div id="hero_image" class="w-1/2 bg-gray-50 lg:visible xs:hidden">
        <img src="../assets/imgs/woman.jpg" class="h-auto w-full rounded-lg"/>
      </div>

    </div>


    <div class="w-full bg-gray-50 text-center py-10">

      <div class="px-20">
            <span
                class="bg-green-100 text-green-800 my-5 text-sm font-medium px-5 py-1.5 rounded-2xl">Green</span>
        <h2 class="font-bold xl:text-3xl md:text-2xl mt-2">A simple recipe for success</h2>
        <p class="text-sm text-gray-500 sm:w-2/3 xl:w-1/4 lg:w-2/4 md:w-1/2 2xl:w-1/4 w-full flex justify-center mx-auto my-2">
          on what truly matters - delivering
          exceptional dining experiences.</p>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 2xl:mx-20 lg:mx-20 mx-10 my-12">
        <div class="bg-white py-10 rounded-lg overflow-hidden p-5 items-center flex"
             style="background-image: url('./assets/imgs/backdrop.png')"
             v-for="feature in features">
          <div class="z-50">
            <h4 class="font-bold my-1 text-lg">{{ feature.name }}</h4>
            <p class="text-gray-500 text-sm">Start serving meals that satisfy cravings and bring smiles to those who
              savor your creations.</p>
          </div>
        </div>
      </div>

    </div>

            <div class="w-full bg-red-50 hidden">
              <div class="grid grid-cols-3">
                <div
                    class="col-span-3 bg-cover bg-center bg-no-repeat bg-fixed bg-[url('../../assets/imgs/delighted_customers.jpg')]">

                  <div class="container mx-auto">
                    <div
                        class="backdrop-blur-xl bg-white/30 w-2/5 h-[500px] mx-24 my-5 p-5 text-white rounded-lg items-center flex">
                      <div>
                        <h4 class="text-6xl">Ready to elevate your business’s experience?</h4>
                        <p class="text-2xl">
                          Free yourself from the day-to-day chaos of restaurant management and entrust us to ensure smooth
                          operations, allowing you to focus on what truly matters - delivering exceptional dining experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


    <div class="w-full bg-white py-10">

      <div class="flex flex-col space-y-2 text-center lg:w-2/3 w-4/6 justify-center mx-auto mb-10">
        <h4 class="xl:text-3xl md:text-2xl text-3xl lg:text-2xl"> A plan for every need</h4>
        <p class="text-sm text-gray-500 2xl:text-lg lg:w-2/3 w-full justify-center mx-auto"> Our plans are designed to
          meet the requirements of both beginners and players. Get the right plan that suits
          you.</p>
      </div>

      <div class="flex  justify-center mx-auto mb-10">
        <ul class="grid grid-cols-2 gap-1">
          <li class="text-center">
            <input type="radio" id="hosting-small" name="hosting" :value="PlanPeriods.MONTHLY" v-model="billingPeriod"
                   value="hosting-small" class="hidden peer" required/>
            <label for="hosting-small"
                   class="inline-flex items-center justify-between py-2  px-5 text-gray-700 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:font-bold peer-checked:bg-red-50 peer-checked:border-red-600 peer-checked:text-red-600">
              <div class="w-full text-2xs">Monthly</div>
            </label>
          </li>
          <li class="text-center">
            <input type="radio" id="hosting-big" name="hosting" :value="PlanPeriods.YEARLY" v-model="billingPeriod"
                   class="hidden peer">
            <label for="hosting-big"
                   class="inline-flex items-center justify-between py-2 px-6 text-gray-700 bg-white border border-gray-300 rounded-lg cursor-pointer peer-checked:font-bold peer-checked:bg-red-50 peer-checked:border-red-600 peer-checked:text-red-600">
              <div class="w-full text-2xs">Yearly</div>
            </label>
          </li>
        </ul>
      </div>

      <div class="justify-center flex">
        <div
            class="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 2xl:w-3/4 xl:w-5/6 lg:w-5/6 md:w-3/4 w-5/6 justify-center">
          <div class="bg-white border-gray-200 border rounded-lg p-5 flex flex-col"
               :class="[index === 1 ? 'border-2 border-red-500' : '']"
               v-for="(bill,index) in billing">
            <h4 class="font-medium text-3xl">{{ bill.name }}</h4>
            <p>A standard plan for small teams.</p>
            <div class="flex flex-wrap flex-row items-center mt-10 mb-5">
              <h3 class="text-4xl">{{ format('GHC', getBillingCost(billingPeriod, bill.pricing)) }}</h3> <span
                class="text-end">/{{ selectBillingPeriod(billingPeriod) }}</span>
            </div>
            <button type="button"
                    @click="openModal()"
                    class="text-red-500 bg-red-50 font-medium w-3/4 rounded-lg text-sm px-5 py-2.5 mb-2">
              Book a demo
            </button>

            <div class="flex flex-col">
              <div class="flex flex-row space-x-2 items-center" v-for="feature in bill.features">
                  <span class="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-center">

                    <svg class="w-4 h-4 text-red-600 font-bold" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         width="20" height="20" fill="none" viewBox="0 0 24 24">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"
            d="M5 11.917 9.724 16.5 19 7.5"/>
    </svg>

                  </span>
                <p class="py-2">{{ feature }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="bg-red-50 w-full py-24 flex justify-center">
      <div class="flex flex-row 2xl:w-2/5 xl:w-2/5 lg:w-3/5 md:w-4/5 2xl:mx-10 mx-10">
        <div class="flex flex-col space-y-2">
          <h3 class="text-3xl font-bold">Ready to elevate your business’s experience?</h3>
          <p>
            Free yourself from the day-to-day chaos of restaurant management and entrust us to ensure smooth operations,
            allowing you to focus on what truly matters - delivering exceptional dining experiences.
          </p>
          <button type="button"
                  @click="openModal()"
                  class="text-white bg-red-500 font-medium 2xl:w-1/4 xl:w-1/4 lg:w-1/4 w-3/5 rounded-lg text-sm px-5 py-2.5 mb-2">
            Book a demo
          </button>
        </div>

      </div>
    </div>


    <div id="authentication-modal" ref="modalId" tabindex="-1" aria-hidden="true"
         class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div class="relative p-4 w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow">
          <!-- Modal header -->
          <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 class="text-xl font-semibold text-gray-900">
              Request A Demo
            </h3>
            <button type="button"
                    @click="modal.hide()"
                    class="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                    data-modal-hide="authentication-modal">
              <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
              <span class="sr-only">Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <div class="space-y-4">
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                  Full name</label>
                <input type="text" name="email" id="email"
                       v-model="request.fullName"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="" required/>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                  Email</label>
                <input type="email" name="email" id="email"
                       v-model="request.email"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="" required/>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Phone
                  number</label>
                <input type="text" name="email" id="email"
                       v-model="request.phoneNumber"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="" required/>
              </div>
              <div>
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900">
                  Restaurant name</label>
                <input type="email" name="email" id="email"
                       v-model="request.restaurantName"
                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                       placeholder="" required/>
              </div>
              <button @click="requestDemo()"
                      class="w-full text-white my-5 bg-red-500 font-medium rounded-lg text-sm px-5 py-3 text-center">
                Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script lang="ts" setup>
import {Dropdown, DropdownOptions, Modal, ModalOptions} from "flowbite";
import {ICreateRequestDemo} from "~/repository/models/inputModels";
import {format} from 'money-formatter';

const modal = ref({})
const modalId = ref()
const request = ref({} as ICreateRequestDemo)
const {$api} = useNuxtApp()
const snackbar = useSnackbar()

enum PlanPeriods {
  MONTHLY,
  YEARLY
}

const billingPeriod = ref(PlanPeriods.MONTHLY)


onMounted(() => {
  // options with default values
  const modalOptions: ModalOptions = {
    placement: 'bottom-right',
    backdrop: 'dynamic',
    backdropClasses:
        'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
    closable: true,
    onHide: () => {
      console.log('modal is hidden');
    },
    onShow: () => {
      console.log('modal is shown');
    },
    onToggle: () => {
      console.log('modal has been toggled');
    },
  };
  modal.value = new Modal(modalId.value, modalOptions);
})

const requestDemo = () => {

  $api.demo.create(request.value).then(data => {
    snackbar.add({
      type: 'success',
      title: data.data.title,
      text: data.data.message
    })
  }).catch(error => {

  })
}


const openModal = () => {
  modal.value.show()
}

definePageMeta(
    {
      layout: 'default',
      name: 'Dyno Menu'
    }
)

const gettingStartedSteps = [
  {step: 1, action: 'Sign up'},
  {step: 2, action: 'Add your menu'},
  {step: 3, action: 'Start serving meals'}
]


const billing = [
  {
    name: 'Lite',
    pricing: '50',
    features: ['Inventory Management', 'Online Ordering', 'QR Code (digital menu)']
  },
  {
    name: 'Pro',
    pricing: '150',
    features: ['Inventory Management', 'Online Ordering', 'QR Code (digital menu)',
      'Customers management', 'Point of sale (POS)',
      'Kitchen Display System']
  },
  {
    name: 'Premium',
    pricing: '250',
    features: ['Inventory Management', 'Online Ordering', 'QR Code (digital menu)',
      'Customers management', 'Point of sale (POS)', 'Kitchen Display System',
      'Reservation', 'Loyalty', 'Gift cards']
  }
]

const getBillingCost = (billingPeriod: PlanPeriods, monthlyCost: string) => {
  switch (billingPeriod) {
    case PlanPeriods.MONTHLY:
      return parseInt(monthlyCost)
    case PlanPeriods.YEARLY:
      return parseInt(monthlyCost) * 12
  }
}

const selectBillingPeriod = (billingPeriod: PlanPeriods) => {
  switch (billingPeriod) {
    case PlanPeriods.MONTHLY:
      return "month"
    case PlanPeriods.YEARLY:
      return "year"
  }
}


const features = [
  {
    name: "No contact quest experience",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-blue-100',
    icon: '/imgs/globe.svg'

  },
  {
    name: "Back of House",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Digital Ordering",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Guest Management",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Guest Management",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Guest Management",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'
  }
]


useHead({title: 'Dyno Menu'})


</script>

<style scoped>

@media only screen and (max-width: 600px) {
  #hero_image {
    display: none;
  }
}

</style>
