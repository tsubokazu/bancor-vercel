<script setup lang="ts">
  const props = defineProps<{
    linkUrl: string;
    hoverIndex: number;
    text: string;
    menuIndex: number;
  }>();

  // ホバー時のアニメーション
  const hoverClass = computed(() =>
    props.hoverIndex == props.menuIndex ? 'opacity-70' : 'opacity-100'
  );
</script>

<template>
  <NuxtLink :to="linkUrl">
    <div
      class="flex h-[56px] w-full items-center space-x-3 bg-bancor-navy200 pl-6 text-base text-white"
    >
      <!-- 右矢印 -->
      <div class="text-base text-white" :class="hoverClass">
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </div>
      <!-- テキスト -->
      <div class="text-base font-bold text-white" :class="hoverClass">
        {{ `${text}一覧` }}
      </div>
    </div>
  </NuxtLink>
</template>
