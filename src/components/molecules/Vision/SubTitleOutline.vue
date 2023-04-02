<script setup lang="ts">
  interface Props {
    subTitle: string;
    outline: string;
    underLine?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    underLine: false,
  });
</script>

<template>
  <div
    class="flex w-full flex-col"
    :class="[
      { 'space-y-7 tb:space-y-14': !underLine },
      { 'space-y-6': underLine },
    ]"
  >
    <!-- サブタイトル -->
    <AtomsBasicTitle
      :text="subTitle"
      size="text-base"
      class="text-[22px] tb:text-[32px]"
    ></AtomsBasicTitle>

    <!-- アウトライン -->
    <AtomsBasicOutline :text="outline"></AtomsBasicOutline>

    <!-- アンダーライン -->
    <div class="h-px w-full bg-bancor-gray600" v-if="underLine"></div>
  </div>
</template>
