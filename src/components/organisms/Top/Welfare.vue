<script setup lang="ts">
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
</script>

<template>
  <div
    class="flex h-full w-full justify-center overflow-hidden pc:max-h-[642px]"
  >
    <div
      class="relative flex h-full w-11/12 flex-col tb:flex-row tb:space-x-10 pc:max-w-[1200px]"
    >
      <MoleculesTopWelfareMenu class="h-full w-full"></MoleculesTopWelfareMenu>
      <div class="h-full w-full">
        <ScrollParallax :speed="0.05" direction="y">
          <MoleculesTopWelfareImages
            class="-translate-y-12 tb:-translate-y-8 pc:translate-y-0"
          ></MoleculesTopWelfareImages>
        </ScrollParallax>
      </div>
    </div>
  </div>
</template>
