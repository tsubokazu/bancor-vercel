<script setup lang="ts">
  const humbergerStore = useHumbergerStore();
</script>

<template>
  <div
    @click="humbergerStore.closeHumbergerMenu"
    class="flex h-screen w-full flex-col items-center justify-center overflow-auto bg-bancor-navy300 pc:min-h-screen"
  >
    <AtomsLogo
      linkUrl="/"
      logoUrl="/logo-white.png"
      class="absolute top-8 left-1 pc:top-[33px] pc:left-[31px]"
      width="189"
      height="39"
    ></AtomsLogo>
    <div
      class="flex h-full w-[90%] flex-col items-center pt-24 tb:items-start pc:max-w-[1200px] pc:flex-row pc:items-start pc:justify-center"
    >
      <div class="ml-8 flex flex-col tb:ml-0 pc:w-1/2">
        <MoleculesSiteMenuMap
          class="h-fit w-full flex-none"
        ></MoleculesSiteMenuMap>
        <MoleculesSiteMenuService
          class="mb-20 h-fit w-full"
        ></MoleculesSiteMenuService>
      </div>
      <MoleculesSiteMenuPickup class="h-fit pc:w-1/2"></MoleculesSiteMenuPickup>
    </div>
  </div>
</template>
