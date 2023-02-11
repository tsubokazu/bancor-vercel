<script setup lang="ts">
  import { PageLinkObject } from '~/types/Footer';

  const props = defineProps<{
    pageLinkObjects: Array<PageLinkObject>;
  }>();
</script>

<template>
  <div class="flex flex-wrap rounded-lg bg-bancor-navy200 py-8 px-10">
    <AtomsLinkTitle
      v-for="obj in props.pageLinkObjects"
      color="text-white"
      size="text-sm"
      class="mr-8 mb-8"
      :text="obj.title"
      :linkUrl="obj.linkUrl"
    ></AtomsLinkTitle>
  </div>
</template>
