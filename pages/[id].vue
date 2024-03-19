<template>
  <SectionWrapper class="pb-10" :style="{'backgroundColor': businessInfo.primaryColor}">


    <div v-if="hasError" class="h-screen">
      <EmptyState/>
    </div>
    <div v-else>
      <Loader v-if="isPending" class="py-80"/>
      <div v-else class="pb-5">
        <BusinessDetailsHeader :name="businessInfo.name"
                               :business-logo="businessInfo.logoUrl"
                               :description="businessInfo.tag"
                               :backdrop-image="businessInfo.bannerUrl"
                               :location="businessInfo.address"
                               :contact="businessInfo.phoneNumber"
                               :theme-color="businessInfo.primaryColor"
        ></BusinessDetailsHeader>

        <div v-if="setScreen === Screens.MENU">
          <!-- menus-->
          <CardStrip v-if="!isPending" v-for="menu in menus" @click="onMenuSelected(menu.id)"
                     :title="menu.name"></CardStrip>
        </div>
        <div v-if="setScreen === Screens.ITEMS">

          <Loader v-if="isLoadingMenus"/>
          <div class="" v-else>

            <div class="flex flex-row sticky  mb-10 top-0 left-0 right-0 items-center drop-shadow-md"
                 v-if="categories.length !== 0" :style="{'backgroundColor': businessInfo.primaryColor}">
              <div class="pl-4 pr-2" @click="goBack()">
                <svg class="w-6 h-6 text-gray-800 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                     width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M5 12h14M5 12l4-4m-4 4 4 4"/>
                </svg>
              </div>
              <div
                  class="py-5 z-50 px-5 overflow-x-scroll flex overflow-x-auto space-x-8">
              <span v-for="category in categories" class="flex-shrink-0"
                    :style="{'backgroundColor': businessInfo.primaryColor}">
                <a v-if="category.items.length !== 0" :href="`#${toKebabCase(category.name)}`"
                   class="p-3 font-bold">{{ category.name }}</a>
              </span>
              </div>
            </div>


            <CardStripAction v-for="item in items.items" :title="item.name" :amount="format('GHc', item.price)"
                             :img-url="item.imageUrl" @add-to-cart="addToCart(item)"/>

            <!--    Categories-->
            <div v-for="category in categories" class="" v-if="categories.length !== 0">
            <span :id="toKebabCase(category.name)" v-if="category.items.length !== 0" class="mt-20">
              <h1 class="mx-5 mt-4 mb-2 font-bold">{{ category.name }}</h1>
            </span>
              <CardStripAction v-for="item in category.items" :title="item.name" :amount="format('GHc', item.price)"
                               :img-url="item.imageUrl" @add-to-cart="addToCart(item)"/>
            </div>
            <div v-if="categories.length === 0">
              <div class="flex flex-col h-auto items-center space-y-2">
                <p class="text-lg text-gray-500">No items found</p>
                <button @click="goBack()" type="button"
                        class="text-white bg-red-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="relative" v-if="getItemsCount() !== 0">
      <div
          class="fixed bottom-0 left-0 right-0 drop-shadow-lg bg-white border-t border-gray-200 px-5 py-2 flex flex-row justify-between items-center">
        <div class="flex flex-col  justify-start">
          <h3 class="text-2xl font-bold m-0 p-0">{{ format('GHC', getCartTotal()) }}</h3>
          <small class="text-gray-400">{{ getItemsCount() }} items</small>
        </div>

        <button type="button"
                @click="openCart()"
                data-drawer-target="drawer-example" data-drawer-show="drawer-example" aria-controls="drawer-example"
                class="text-white bg-red-400 font-medium rounded-lg text-sm px-5 py-2.5">
          View Order
        </button>

      </div>
    </div>


    <!-- drawer component -->
    <div id="drawer-example"
         ref="drawerId"
         class="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800"
         tabindex="-1" aria-labelledby="drawer-label">

      <div class="">
        <div v-for="(cartItem, index) in cartItems" class="flex flex-col justify-start w-full  py-3">
          <h4 class="font-medium">{{ cartItem.name }}</h4>

          <div class="flex flex-row justify-between items-center">
            <div>
              <div class="flex-row flex space-x-3 py-2 items-center">
                <button type="button"
                        @click="itemQuantityDecrease(index)"
                        class="text-white bg-red-50 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center">
                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14"/>
                  </svg>
                </button>
                <p class="text-gray-400">{{ cartItem.quantity }}</p>
                <button type="button"
                        @click="itemQuantityIncrease(index)"
                        class="text-white bg-red-50 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center">
                  <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M5 12h14m-7 7V5"/>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <h3 class="font-bold">GHS {{ format('GHc', (cartItem.price * cartItem.quantity)) }}</h3>
            </div>
          </div>

        </div>
      </div>

      <div class="">
        <div
            class="absolute bottom-0 left-0 right-0 p-5 bg-white border-t border-gray-200 p-3 flex flex-row justify-between items-center">
          <button type="button"
                  @click="createOrder()"
                  class="text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-3 w-full">
            Order Now
          </button>

        </div>
      </div>
    </div>

  </SectionWrapper>
</template>

<script lang="ts" setup>
import {format} from 'money-formatter';


import SectionWrapper from "~/components/base/SectionWrapper.vue";
import CardStrip from "~/components/units/CardStrip.vue";
import BusinessDetailsHeader from "~/components/core/BusinessDetailsHeader.vue";
import {IBusinessInfo, IItem, IOrders, OrderItem, IOrder} from "~/repository/models/ApiResponse";
import {useRoute} from "vue-router";
import CardStripAction from "~/components/units/CardStripAction.vue";
import Loader from "~/components/units/Loader.vue";
import EmptyState from "~/components/units/EmptyState.vue";
import {Drawer, DrawerOptions} from "flowbite";

const {$api} = useNuxtApp();
const businessInfo = ref({} as IBusinessInfo)
const isPending = ref(true);
const hasError = ref(false);
const isLoadingMenus = ref(false);
const menuTitle = ref("")
const businessSlug = ref("")
const menus = ref([])
const items = ref([])
const branchId = ref('')
const businessId = ref('')
const cartItems = ref([])
const categories = ref([])
const drawer = ref({})
const drawerId = ref(null)

enum Screens {
  MENU,
  ITEMS
}

const setScreen = ref(Screens.MENU)

const route = useRoute();


const setTitle = (businessName: string) => {
  useHead({title: businessName.concat(" | DynoMenu")})
}

const onMenuSelected = (id: string) => {
  setScreen.value = Screens.ITEMS
  getMenus(id)
}


const goBack = () => {
  setScreen.value = Screens.MENU
}

function toKebabCase(sentence: string): string {
  return sentence.toLowerCase().replace(/\s+/g, '-');
}


const getMenus = (menuId: string) => {
  isLoadingMenus.value = true
  $api.menu.getMenuItems(menuId).then(data => {
    items.value = data.data;
    menuTitle.value = items.value.name;
    categories.value = data.data.categories;

    isLoadingMenus.value = false

  }).catch(error => {
    isLoadingMenus.value = false
  })
}
const getBusinessInfo = () => {
  businessSlug.value = route.params.id.toString()
  isPending.value = true
  $api.business.getBusinessInfoBySlug(businessSlug.value).then(data => {
    businessInfo.value = data.data;
    menus.value = businessInfo.value.branches[0].menu;
    setTitle(businessInfo.value.name);

    businessId.value = businessInfo.value.branches[0].businessId
    branchId.value = businessInfo.value.branches[0].id

    isPending.value = false
  }).catch(error => {
    console.log(error.data)
    hasError.value = true;
    isPending.value = false
  })

}

const transformOrderItems = (cartItem: []): OrderItem[] => {
  const orderItems: OrderItem[] = []
  cartItems.value.forEach(item => {
    orderItems.push({
      itemId: item.id,
      quantity: item.quantity
    })
  })
  return orderItems
}

const createOrder = () => {

  const data: IOrder = {
    kitchenNote: '',
    orderItems: transformOrderItems(cartItems.value),
    branchId: branchId.value,
    businessId: businessId.value,
    tableNumber: 1
  }

  $api.order.createOrder(data).then(data => {
    drawer.value.hide()
    cartItems.value.length = 0
    // router.push(`/pos/orders/payment/${data.data.id}`)
  }).catch(error => {
  })
}


const addToCart = (item: IItem) => {
  const pos = returnItemPosition(item)
  if (pos < 0) {
    //Separate this
    item.quantity = 1
    cartItems.value.push(item)
  } else {
    itemQuantityIncrease(pos)
  }
}

// const
const getCartTotal = () => {
  let sum: number = 0;
  cartItems.value.forEach(a => sum += (a.price * a.quantity));
  return sum
}

const getItemsCount = () => {
  return cartItems.value.length;
}

function returnItemPosition(item: IItem): number {
  return cartItems.value.findIndex(a => a.id === item.id)
}

const itemQuantityIncrease = (itemPosition: number) => {
  const theItem = (cartItems.value[itemPosition] as IItem)
  if (theItem.quantity !== undefined) {
    theItem.quantity++
    cartItems.value.splice(itemPosition, 1, theItem)
  }

}

const itemQuantityDecrease = (itemPosition: number) => {
  const theItem = (cartItems.value[itemPosition] as IItem)
  if (theItem.quantity !== undefined) {
    theItem.quantity--
    if (theItem.quantity <= 0) {
      deleteCartItem(itemPosition)
    } else {
      cartItems.value.splice(itemPosition, 1, theItem)
    }
  }
}

const deleteCartItem = (position: number) => {
  cartItems.value.splice(position, 1)
}

const openCart = () => {
  const options: DrawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: true,
    backdropClasses:
        'bg-gray-900/50 fixed inset-0 z-30',
    onHide: () => {
      console.log('drawer is hidden');
    },
    onShow: () => {
      console.log('drawer is shown');
    },
    onToggle: () => {
      console.log('drawer has been toggled');
    },
  };

  drawer.value = new Drawer(drawerId.value, options)
  drawer.value.show()
}


onMounted(() => {
  getBusinessInfo()
});

definePageMeta({
  layout:'main'
})


</script>

<style scoped>

</style>






















