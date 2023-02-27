<script setup lang="ts">
  interface Props {
    title: string;
    outline: string;
    linkUrl?: string;
    subTitle: string;
    size?: string;
    isBold?: boolean;
    spaceY?: string;
    titleSpaceY?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    linkUrl: '',
    size: 'text-[32px]',
    isBold: true,
    spaceY: 'space-y-10',
    titleSpaceY: 'space-y-5',
  });
</script>

<template>
  <div class="flex flex-col" :class="spaceY">
    <AtomsBasicTitle
      :text="title"
      :size="size"
      :spaceY="titleSpaceY"
    ></AtomsBasicTitle>
    <AtomsBasicOutline :text="outline" :isBold="isBold"></AtomsBasicOutline>
    <MoleculesDetailButton
      v-if="linkUrl.length > 0"
      :linkUrl="linkUrl"
      :text="subTitle"
    ></MoleculesDetailButton>
  </div>
</template>
