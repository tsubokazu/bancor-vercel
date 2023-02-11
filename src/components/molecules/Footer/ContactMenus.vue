<script setup lang="ts">
  import { FooterContactMenuObject } from '~/types/Footer';
  const footerContactMenuObjects = inject<Array<FooterContactMenuObject>>(
    'footerContactMenuObjects'
  ) as Array<FooterContactMenuObject>;
</script>

<template>
  <div class="flex h-full w-full">
    <MoleculesFooterContactMenu
      v-for="obj in footerContactMenuObjects"
      :obj="obj"
      :key="obj.title"
    >
    </MoleculesFooterContactMenu>
  </div>
</template>
