<script setup lang="ts">
  interface Props {
    item: string;
    name: string;
    linkTitle?: string;
    linkUrl?: string;
    linkDirRow?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    linkTitle: '',
    linkUrl: '',
    linkDirRow: true,
  });
</script>

<template>
  <div class="flex w-full flex-col items-center space-y-4">
    <!-- 内容 -->
    <div class="flex w-full pc:max-w-[1000px]">
      <!-- 項目 -->
      <div class="w-3/12">
        <AtomsBasicTitle :text="item" size="text-base"></AtomsBasicTitle>
      </div>
      <!-- 情報 -->
      <div
        class="flex w-9/12"
        :class="[
          { 'flex-col': !linkDirRow },
          { 'items-center': linkDirRow },
          { 'space-x-8': linkDirRow },
          { 'space-y-4': !linkDirRow },
        ]"
      >
        <AtomsBasicOutline
          :text="name"
          size="text-base"
          :isBold="false"
        ></AtomsBasicOutline>
        <AtomsLinkMoveArrowTitle
          v-if="linkTitle.length > 0"
          :linkUrl="linkUrl"
          :text="linkTitle"
          size="text-[13px]"
          arrowSize="text-[12px]"
        ></AtomsLinkMoveArrowTitle>
      </div>
    </div>
    <!-- ライン -->
    <div class="relative h-px w-full pc:max-w-[1000px]">
      <div class="h-px w-full bg-bancor-gray600"></div>
      <div class="absolute left-0 h-px w-12 bg-bancor-blue200"></div>
    </div>
  </div>
</template>
