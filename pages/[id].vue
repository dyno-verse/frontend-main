<template>
  <SectionWrapper class="bg-neutral-100 pb-10">


    <BusinessDetailsHeader :name="businessInfo.name"
                           :business-logo="businessInfo.logo"
                           :description="businessInfo.tag"
                           :backdrop-image="businessInfo.banner"
                           :location="businessInfo.address"
    ></BusinessDetailsHeader>

    <!--    mmenus-->
    <CardStrip v-if="!isPending" @click="onClick(menu.id)" v-for="menu in items"
               :title="menu.name"></CardStrip>

    <!--    Categories-->
    <div v-for="category in categories" class="">
      <h1 class="mx-5 mt-4 mb-2 text-2xl">{{ category.name }}</h1>
      <CardStripAction v-for="item in category.items" :title="item.name"/>
    </div>


    <!--    <div role="status">-->
    <!--      <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">-->
    <!--        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>-->
    <!--        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>-->
    <!--      </svg>-->
    <!--      <span class="sr-only">Loading...</span>-->
    <!--    </div>-->

  </SectionWrapper>
</template>

<script lang="ts" setup>
import SectionWrapper from "~/components/base/SectionWrapper.vue";
import CardStrip from "~/components/units/CardStrip.vue";
import BusinessDetailsHeader from "~/components/core/BusinessDetailsHeader.vue";
import {IBusinessInfo} from "~/repository/models/ApiResponse";
import {useRoute} from "vue-router";
import CardStripAction from "~/components/units/CardStripAction.vue";

const {$api} = useNuxtApp();
const businessInfo = ref({} as IBusinessInfo)
const isPending = ref(true);
const businessId = ref("");
const menus = ref([]);
const items = ref([]);
const categories = ref([]);
const categoryItems = ref([]);

const route = useRoute();


const setTitle = (businessName: string) => {
  useHead({title: businessName.concat(" | DynoMenu")})
}

const onClick = (id: string) => {
  console.log(id)
  getMenus(id)
}

const getMenus = (menuId: string) => {
  $api.menu.getMenuItems(menuId).then(data => {
    items.value = data.data.items;
    categories.value = data.data.categories;
    // categoryItems.value = data.data.categories.items;
  }).catch(error => {

  })
}

onMounted(() => {
  businessId.value = route.params.id.toString()
  isPending.value = true
  $api.business.getBusinessInfoBySlug(businessId.value).then(data => {
    businessInfo.value = data.data;
    // items.value.push(businessInfo.value.branches[0].menu);
    items.value = businessInfo.value.branches[0].menu;
    setTitle(businessInfo.value.name)
    isPending.value = false
  }).catch(error => {
    console.log(error.data)
    isPending.value = false
  })

});


</script>

<style scoped>

</style>






















