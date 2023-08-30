<template>
  <div class="w-full">
    <div class="">

      <SectionWrapper>
        <Header></Header>
      </SectionWrapper>

      <!--Hero Section-->
      <SectionWrapper>
        <div class="flex flex-row justify-center my-10 mx-5">
          <div class="2xl:w-1/2 md:w-1/2 sm:w-5/6  text-left">
            <p>
              Restaurants, hotels, pubs, coffee <br/>shops and eating establishments
            </p>
            <LeadTitle label="We help you create a digital version of your menu." :size="6"/>
            <Button :label="'Get Started'" :type="ButtonTypes.Primary"/>
          </div>
          <div class="w-1/2 text-left md:visible 2xl:visible xl:visible sm:invisible invisible py-10">
            <img src="/imgs/hero-phone.svg" class="w-xl">
          </div>
        </div>
      </SectionWrapper>


      <!---Features-->
      <SectionWrapper>
        <div
            class="flex md:flex-row flex-col sm:mx-5 2xl:flex-row xl:flex-row justify-center my-36 xl:space-x-20 md:space-x-5 2xl:space-x-20">
          <div class="w-11/12 md:w-1/3 py-10 self-center" v-for="i in features">
            <div class="flex flex-row justify-center text-center">
              <div class="mx-3 p-2 h-10 rounded-full">
                <img :src="i.icon" class="w-28" alt="Dynomenu logo"/>
              </div>
              <div class="text-left">
                <h5 class="font-bold text-3xl md:text-2xl xl:text-3xl 2xl:text-3xl">{{ i.name }}</h5>
                <p class="text-1xl mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>


      <!---Features-->
      <div class="flex flex-row justify-center my-28 w-full bg-yellow-50 dark:bg-purple-900">
        <SectionWrapper>
          <div class="py-40 w-full px-5">
            <h4 class="text-5xl font-bold dark:text-red-500">A simple recipe <br/>for success</h4>

            <div class="flex flex-row justify-between items-center my-5">
              <p>
                Create and share your menu <br/>in <span class="text-purple-600 dark:text-red-500 font-bold">3 easy steps</span>
              </p>
              <!--this is invisible on smaller screens-->
              <Button class="2xl:visible xl:visible md:visible invisible" label="Start now"
                      :type="ButtonTypes.Primary"/>
            </div>

            <!--Cards-->
            <div class="flex flex-col md:flex-row space-x-0 md:space-x-10 justify-center my-5">
              <MarketingCard class="w-full my-5 md:w-1/2 xl:w-1/3 2xl:w-1/3" v-for="(x,i) in gettingStartedSteps"
                             :step="i+1" :action="x.action"></MarketingCard>
            </div>

            <Button class="2xl:invisible xl:invisible md:invisible visible text-center my-5" label="Start now"
                    :type="ButtonTypes.Primary"/>
          </div>
        </SectionWrapper>
      </div>


      <!---Features-->
      <SectionWrapper>
        <div class="flex flex-col md:flex-row justify-center my-28 mx-5">
          <div class="w-full md:w-1/2 text-center justify-center flex">
            <img src="/imgs/qr-code-illustration.svg" class="w-3/5 md:w-4/5 2xl:w-3/5 xl:w-3/5"/>
          </div>

          <div class="w-full md:w-1/2 md:text-start xl:text-start 2xl:text-start text-center my-10 justify-center flex">
            <div>
              <h3 class="text-5xl font-bold">Your menu is <br> a scan away!</h3>
              <p class="my-5">Your menu get a QR code of your<br> menu which you print in any<br> way you want to.</p>
              <Button :type="ButtonTypes.Primary" label="Get a QR Code"/>
            </div>
          </div>
        </div>
      </SectionWrapper>


      <SectionWrapper>
        <div class="flex flex-row justify-left my-30 mx-5">
          <div class="bg-center bg-no-repeat bg-cover w-full">
            <div style="background-image: url('/imgs/landing-page-backdrop-img.svg');"
                 class="bg-center bg-no-repeat bg-contain w-full items-center text-center flex justify-center pt-48">
              <img src="/imgs/smaple-qr-code-bill.svg"
                   class="w-5/6 justify-center md:mt-48 xl:mt-56 2xl:mt-56 2xl:w-5/6 xl:w-4/6"/>
            </div>
          </div>

        </div>
      </SectionWrapper>


      <SectionWrapper>
        <div class="flex flex-col md:flex-row justify-left mx-5 mt-10">
          <div class="w-full text-left md:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center my-10">
            <div class="mt-32">
              <h3 class="text-6xl font-bold">Create your</h3>
              <h3 class="text-6xl font-bold text-red-500">digital menu</h3>
              <h3 class="text-6xl font-bold">in minutes</h3>
              <p class="mt-5">Sign up and start serving <br/> delicious meals to your customers</p>
              <Button :type="ButtonTypes.Primary" class="my-5" label="Get Started"/>
            </div>
          </div>

          <div class="w-full md:w-1/2 xl:w-1/2 2xl:w-1/2 text-left flex justify-center">
            <img src="/imgs/hand-illustration.svg" class="w-4/5"/>
          </div>

        </div>
      </SectionWrapper>

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
import SectionWrapper from "~/components/base/SectionWrapper.vue";

const gettingStartedSteps = [
  {step: 1, action: 'Sign up'},
  {step: 2, action: 'Add your menu'},
  {step: 3, action: 'Start serving meals'}
]

const features = [
  {
    name: "No mobile app to install",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-blue-100',
    icon: '/imgs/globe.svg'

  },
  {
    name: "Always accessible",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-green-100',
    icon: '/imgs/cloud.svg'

  },
  {
    name: "Add more meal information",
    subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum, gravida in ac cursus.',
    color: 'bg-purple-100',
    icon: '/imgs/info.svg'

  }
]

useHead({title: 'Dyno Menu'})
definePageMeta(
    {
      layout: 'default',
      name: 'Dyno Menu'
    }
)

</script>

<style scoped>

</style>
