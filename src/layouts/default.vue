<template>
  <div class="relative">
    <OrganismsHeader
      class="absolute top-3 left-1/2 z-50 w-full -translate-x-1/2"
    ></OrganismsHeader>
    <slot />
    <OrganismsFooter class="h-screen max-h-[620px] w-screen"></OrganismsFooter>
  </div>
</template>
