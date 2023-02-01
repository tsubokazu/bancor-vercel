<script setup lang="ts">
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
</script>

<template>
  <div class="flex h-screen max-h-[642px] justify-center">
    <div class="mt-24 flex h-full w-full max-w-[1200px] space-x-10">
      <MoleculesTopWelfareMenu></MoleculesTopWelfareMenu>
      <scroll-parallax direction="y">
        <MoleculesTopWelfareImages></MoleculesTopWelfareImages>
      </scroll-parallax>
    </div>
  </div>
</template>
