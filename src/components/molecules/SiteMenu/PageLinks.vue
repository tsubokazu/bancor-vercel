<script setup lang="ts">
  import { LinkObject, PageLinkObject } from '~/types/SiteMenu';
  const props = defineProps<{ pageLinkObject: PageLinkObject }>();
  const humbergerStore = useHumbergerStore();
</script>
<template>
  <div class="flex flex-col space-y-4">
    <!-- 矢印付きタイトルリンク -->
    <AtomsLinkMoveArrowTitle
      @click="humbergerStore.closeHumbergerMenu"
      :text="props.pageLinkObject.title"
      :linkUrl="props.pageLinkObject.linkUrl"
      color="text-white"
      size="text-xl"
    ></AtomsLinkMoveArrowTitle>
    <!-- アンダーラインの色が変わるメニューリンク -->
    <div class="flex flex-col space-y-6">
      <AtomsLinkUnderlineArrowTitle
        @click="humbergerStore.closeHumbergerMenu"
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
