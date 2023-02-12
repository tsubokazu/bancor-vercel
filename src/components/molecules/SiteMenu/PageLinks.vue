<script setup lang="ts">
  import { LinkObject, PageLinkObject } from '~/types/SiteMenu';
  const props = defineProps<{ pageLinkObject: PageLinkObject }>();
  const humbergerStore = useHumbergerStore();
</script>
<template>
  <div class="flex flex-col space-y-3">
    <AtomsLinkMoveArrowTitle
      @click="humbergerStore.toggleHumbergerFlag"
      :text="props.pageLinkObject.title"
      :linkUrl="props.pageLinkObject.linkUrl"
      color="text-white"
      size="text-xl"
    ></AtomsLinkMoveArrowTitle>
    <div class="flex flex-col space-y-4">
      <AtomsLinkUnderlineArrowTitle
        @click="humbergerStore.toggleHumbergerFlag"
        v-for="linkObject in pageLinkObject.linkObjects"
        :text="linkObject.title"
        :linkUrl="linkObject.linkUrl"
        color="text-white"
        size="text-sm"
        arrowSize="text-xs"
      ></AtomsLinkUnderlineArrowTitle>
    </div>
  </div>
</template>
