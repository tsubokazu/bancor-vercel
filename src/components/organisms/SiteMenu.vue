<script setup lang="ts">
  const humbergerStore = useHumbergerStore();
</script>

<template>
  <div
    @click="humbergerStore.closeHumbergerMenu"
    class="flex h-screen w-full flex-col items-center justify-center overflow-auto bg-bancor-navy300 pc:h-screen pc:flex-row"
  >
    <AtomsLogo
      linkUrl="/"
      logoUrl="/logo-white.png"
      class="absolute top-8 left-1 pc:top-[33px] pc:left-[31px]"
      width="189"
      height="39"
    ></AtomsLogo>
    <div
      class="flex h-full w-[90%] flex-col items-center pt-24 pc:max-h-[1400px] pc:max-w-[1200px] pc:flex-wrap"
    >
      <MoleculesSiteMenuMap class="h-fit pc:w-1/2"></MoleculesSiteMenuMap>
      <MoleculesSiteMenuService
        class="mb-20 h-fit pc:w-1/2"
      ></MoleculesSiteMenuService>
      <MoleculesSiteMenuPickup class="h-fit pc:w-1/2"></MoleculesSiteMenuPickup>
    </div>
  </div>
</template>
