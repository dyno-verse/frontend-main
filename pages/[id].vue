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

        <!-- menus-->
        <CardStrip v-if="!isPending" v-for="menu in menus" @click="onClick(menu.id)"
                   :title="menu.name"></CardStrip>

        <Loader v-if="isLoadingMenus"/>
        <div class="">

          <div class="flex flex-row sticky bg-white mb-10 top-0 left-0 right-0 items-center"
               v-if="categories.length !== 0">
            <div class="pl-4 pr-2" @click="goBack()">
              <svg class="w-6 h-6 text-gray-800 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                   width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M5 12h14M5 12l4-4m-4 4 4 4"/>
              </svg>
            </div>
            <div
                class="py-5 bg-white z-50 px-5 overflow-x-scroll flex overflow-x-auto space-x-8">
              <span v-for="category in categories" class="flex-shrink-0">
                <a v-if="category.items.length !== 0" :href="`#${toKebabCase(category.name)}`"
                   class="p-3">{{ category.name }}</a>
              </span>
            </div>
          </div>


          <CardStripAction v-for="item in items.items" :title="item.name" :amount="item.price"
                           :img-url="item.imageUrl"/>

          <!--    Categories-->
          <div v-for="category in categories" class="">
            <span :id="toKebabCase(category.name)" v-if="category.items.length !== 0" class="mt-20">
              <h1 class="mx-5 mt-4 mb-2 text-xl font-medium">{{ category.name }}</h1>
            </span>
            <CardStripAction v-for="item in category.items" :title="item.name" :amount="item.price"
                             :img-url="item.imageUrl"/>
          </div>
        </div>

      </div>
    </div>

  </SectionWrapper>
</template>

<script lang="ts" setup>
import SectionWrapper from "~/components/base/SectionWrapper.vue";
import CardStrip from "~/components/units/CardStrip.vue";
import BusinessDetailsHeader from "~/components/core/BusinessDetailsHeader.vue";
import {IBusinessInfo} from "~/repository/models/ApiResponse";
import {useRoute} from "vue-router";
import CardStripAction from "~/components/units/CardStripAction.vue";
import Loader from "~/components/units/Loader.vue";
import EmptyState from "~/components/units/EmptyState.vue";

const {$api} = useNuxtApp();
const businessInfo = ref({} as IBusinessInfo)
const isPending = ref(true);
const hasError = ref(false);
const isLoadingMenus = ref(false);
const menuTitle = ref("");
const businessId = ref("");
const menus = ref([]);
const items = ref([]);
const categories = ref([]);

const route = useRoute();


const setTitle = (businessName: string) => {
  useHead({title: businessName.concat(" | DynoMenu")})
}

const onClick = (id: string) => {
  menus.value = [];
  getMenus(id)
}

const goBack = () => {
  menus.value = [];
  items.value = [];
  categories.value = [];
  menuTitle.value = "";
  getBusinessInfo()
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

    console.log(categories.value)


    isLoadingMenus.value = false

  }).catch(error => {
    isLoadingMenus.value = false
  })
}
const getBusinessInfo = () => {
  businessId.value = route.params.id.toString()
  isPending.value = true
  $api.business.getBusinessInfoBySlug(businessId.value).then(data => {
    businessInfo.value = data.data;
    menus.value = businessInfo.value.branches[0].menu;
    setTitle(businessInfo.value.name);

    isPending.value = false
  }).catch(error => {
    console.log(error.data)
    hasError.value = true;
    isPending.value = false
  })

}
onMounted(() => {
  getBusinessInfo()
});


</script>

<style scoped>

</style>






















