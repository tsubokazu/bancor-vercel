<script setup lang="ts">
  import { FooterContactMenuObject } from '~/types/Footer';
  const footerContactMenuObjects = inject<Array<FooterContactMenuObject>>(
    'footerContactMenuObjects'
  ) as Array<FooterContactMenuObject>;
</script>

<template>
  <div class="flex flex-col tb:flex-row">
    <MoleculesFooterContactMenu
      v-for="obj in footerContactMenuObjects"
      :obj="obj"
      :key="obj.title"
    >
    </MoleculesFooterContactMenu>
  </div>
</template>
