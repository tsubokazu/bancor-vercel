<template>
  <div
    class="flex h-auto w-full justify-center overflow-auto bg-bancor-navy300"
  >
    <AtomsLogo
      linkUrl="/"
      logoUrl="/logo-white.png"
      class="absolute top-8 left-1 pc:top-[33px] pc:left-[31px]"
    ></AtomsLogo>
    <div
      class="flex h-full max-h-[1200px] w-full max-w-[1200px] flex-col flex-wrap items-center pt-24"
    >
      <MoleculesSiteMenuMap class="h-fit w-1/2"></MoleculesSiteMenuMap>
      <div class="mb-6 h-px w-5/12 bg-gray-700"></div>
      <MoleculesSiteMenuService class="h-fit w-1/2"></MoleculesSiteMenuService>
      <MoleculesSiteMenuPickup class="h-fit w-1/2"></MoleculesSiteMenuPickup>
    </div>
  </div>
</template>
