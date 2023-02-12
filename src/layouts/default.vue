<script setup lang="ts"></script>

<template>
  <div class="relative w-full">
    <OrganismsHeader class="absolute top-3 z-50 w-full"></OrganismsHeader>
    <slot />
    <OrganismsFooter class="h-screen max-h-[676px] w-full"></OrganismsFooter>
  </div>
</template>
