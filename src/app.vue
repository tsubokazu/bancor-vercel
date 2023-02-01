<script setup lang="ts">
  import { createApp } from 'vue';
  import App from './App.vue';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  const app = createApp(App);
  app.component('scroll-parallax', ScrollParallax);
</script>

<template>
  <div class="h-screen font-main">
    <NuxtLayout>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
