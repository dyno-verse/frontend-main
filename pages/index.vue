<template>
  <div class="w-full">
    <div class="">

      <div class="container mx-auto">
        <Header></Header>
      </div>

      <div class="container mx-auto">
        <!--Hero Section-->
        <div class="flex flex-row justify-center my-10 mx-5">
          <div class="w-1/2 text-left">
            <p>
              Restaurants, hotels, pubs, coffee <br/>shops and eating establishments
            </p>
            <LeadTitle label="We help you create a digital version of your menu." size="9"/>
            <Button :label="'Get Started'" :type="ButtonTypes.Primary"/>
          </div>
          <div class="w-1/2 text-left py-10">
            <img src="/imgs/hero-phone.svg" class="w-xl">
          </div>
        </div>
      </div>


      <!---Features-->
      <div class="container mx-auto">
        <div class="flex flex-row justify-left my-28 mx-5">
          <div class="w-1/3 py-10" v-for="i in 3">
            <div class="flex flex-row justify-center text-center px-5">
              <div class="mx-3 bg-blue-100 w-20 p-2 h-11 rounded-full">
                <img src="/imgs/ic-cloud.svg" class="w-20" alt="Dynomenu logo"/>
              </div>
              <div class="text-left">
                <h5 class="font-bold text-3xl">No app to install</h5>
                <p class="text-1xl mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!---Features-->
      <div class="flex flex-row justify-center my-28 w-full bg-yellow-50">
        <div class="container mx-auto">
          <div class="py-40 w-full">
            <h4 class="text-5xl font-bold">A simple recipe <br/>for success</h4>

            <div class="flex flex-row justify-between items-center my-5">
              <p>
                Create and share your menu <br/>in <span class="text-purple-600 font-bold">3 easy steps</span>
              </p>
              <Button label="Start now" :type="ButtonTypes.Primary"/>
            </div>

            <!--Cards-->
            <div class="flex flex-row justify-start my-5">
              <MarketingCard v-for="i in 3"></MarketingCard>
            </div>
          </div>
        </div>
      </div>


      <!---Features-->
      <div class="container mx-auto my-40">
        <div class="flex flex-row justify-center my-28 mx-5">
          <div class="w-1/2 text-center justify-center flex">
            <img src="/imgs/qr-code-illustration.svg" class="w-3/5"/>
          </div>

          <div class="w-1/2 text-start">
            <h3 class="text-5xl font-bold">Your menu is <br> a scan away!</h3>
            <p class="my-5">Your menu get a QR code of your<br> menu which you print in any<br> way you want to.</p>
            <Button :type="ButtonTypes.Primary" label="Get a QR Code"/>
          </div>
        </div>
      </div>

      <div class="container mx-auto w-full">
        <div class="flex flex-row justify-left my-30 mx-5">
          <div class="bg-center bg-no-repeat bg-cover w-full">
            <div style="background-image: url('/imgs/landing-page-backdrop-img.svg');height: 700px;"
                 class="bg-center bg-no-repeat bg-contain w-full items-center text-center flex justify-center">
              <img src="/imgs/smaple-qr-code-bill.svg" class="w-4/6 justify-center mt-40"/>
            </div>
          </div>

        </div>
      </div>


      <!---Call to Action-->
      <div class="container mx-auto w-full mt-48">
        <div class="flex flex-row justify-left mx-5">
          <div class="w-1/2 text-left flex justify-center">
            <div class="mt-32">
              <h3 class="text-6xl font-bold">Create your</h3>
              <h3 class="text-6xl font-bold text-red-500">digital menu</h3>
              <h3 class="text-6xl font-bold">in minutes</h3>
              <p class="mt-5">Sign up and start serving <br/> delicious meals to your customers</p>
              <Button :type="ButtonTypes.Primary" class="my-5" label="Get Started"/>
            </div>
          </div>

          <div class="w-1/2 text-left flex justify-center">
            <img src="/imgs/hand-illustration.svg" class="w-3/5"/>
          </div>

        </div>
      </div>

      <Footer></Footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/units/Button.vue";
import LeadTitle from "~/components/units/LeadTitle.vue";
import {ButtonTypes} from "~/components/Constants";
import Header from "~/components/base/Header.vue";
import MarketingCard from "~/components/units/MarketingCard.vue";
import Footer from "~/components/base/Footer.vue";

definePageMeta(
    {
      layout: 'default',
      name: 'Dyno Menu'
    }
)

</script>

<style scoped>

</style>
