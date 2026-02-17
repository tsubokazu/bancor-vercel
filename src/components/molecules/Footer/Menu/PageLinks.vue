<script setup lang="ts">
  import type { FooterPageLinkObject } from '~/types/Footer';

  const props = defineProps<{
    pageLinkObjects: Array<FooterPageLinkObject>;
  }>();
</script>

<template>
  <div
    class="flex flex-col flex-wrap rounded-lg bg-bancor-navy200 py-8 px-10 tb:flex-row"
  >
    <AtomsLinkTitle
      v-for="obj in props.pageLinkObjects"
      color="text-white"
      size="text-sm"
      class="mr-8 mb-8"
      :text="obj.title"
      :linkUrl="obj.linkUrl"
      :key="obj.title"
    ></AtomsLinkTitle>
  </div>
</template>
