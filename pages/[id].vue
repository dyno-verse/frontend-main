<template>
  <SectionWrapper class="pb-10" :style="{'backgroundColor': businessInfo.primaryColor}">


    <div v-if="hasError" class="h-screen">
      <p class="text-4xl font-black text-gray-900 dark:text-white align-middle text-center py-40">Page not found</p>

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
          <h1 class="mx-5 mt-4 mb-2 "></h1>
          <StickyBadge :title="menuTitle" v-if="menuTitle.length !== 0" @click="goBack()"/>
          <CardStripAction v-for="item in items.items" :title="item.name" :amount="item.price"
                           :img-url="item.imageUrl"/>

          <!--    Categories-->
          <div v-for="category in categories" class="">
            <h1 v-if="category.items.length !== 0" class="mx-5 mt-4 mb-2 text-xl font-medium">{{ category.name }}</h1>
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
import StickyBadge from "~/components/units/StickyBadge.vue";
import Loader from "~/components/units/Loader.vue";

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






















