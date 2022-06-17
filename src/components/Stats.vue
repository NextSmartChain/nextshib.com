<template>
  <section class="pt-8 pb-2 bg-gradient-to-b from-gray-700 to-gray-600 shadow-lg">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap -mx-3">

        <div class="hidden">
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Initial Cap</p>
            <span class="text-5xl lg:text-4xl font-bold font-heading">$500k</span>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Initial Price per Token</p>
            <span class="text-5xl lg:text-4xl font-bold font-heading">$0.000005</span>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Private Presale </p>
            <span class="text-5xl lg:text-4xl font-bold font-heading">20B</span>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Public Sale <span class="italic rounded-md px-2 bg-yellow-300 text-yellow-900">Live</span>
            </p>
            <span class="text-5xl lg:text-4xl font-bold font-heading">50B</span>
          </div>
        </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">$NEXTSHIB Burned 🔥</p>
            <span class="text-4xl lg:text-3xl font-bold font-heading" v-text="burnAmount"></span>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">In Circulation</p>
            <span class="text-4xl lg:text-3xl font-bold font-heading" v-text="totalSupply"></span>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Gain Since Launch</p>
            <span class="text-4xl lg:text-3xl font-bold font-heading"><span class="rounded-md px-2 bg-black text-yellow-300">+ {{  gains }}% </span></span><br>
            </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div class="p-8 text-center ">
            <p class="mb-2 text-2xl md:text-base">Max Total Supply</p>
            <span class="text-4xl lg:text-3xl font-bold font-heading">{{ maxSupply }} B</span>
          </div>
        </div>
      </div>
      <span class="text-xs" v-if="networkId == 1">* Above statistics are from the Ethereum Network</span>
      <span class="text-xs" v-if="networkId == 56">* Above statistics are from the Binance Smart Chain Network</span>
      <span class="text-xs" v-if="networkId == 137">* Above statistics are from the Polygon Network</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Stats",
  props: ['burnAmount', 'totalSupply', 'priceUsd', 'networkId'],
  computed: {
    maxSupply() {
      return (Number(this.totalSupply) + Number(this.burnAmount)) / 1e9;
    },
    gains() {
      const presaleprice = '0.000005';
      return (100 / (presaleprice / this.priceUsd)).toFixed(0);
    }
  }
}
</script>

<style>

</style>
