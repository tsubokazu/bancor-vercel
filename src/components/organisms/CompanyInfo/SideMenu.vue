<template>
  <!-- サイド -->
  <div
    class="relative flex h-fit w-[238px] flex-none flex-col gap-3 rounded-[10px] border border-[#cbd5e1] bg-white px-4 py-7"
  >
    <!-- タイトル -->
    <NuxtLink to="/company-info" class="text-[22px] font-bold text-[#1e293b]"
      >会社案内</NuxtLink
    >
    <!-- メニュー -->
    <div class="flex flex-col text-[17px] font-bold text-[#64748b]">
      <NuxtLink
        to="/company-profile"
        class="flex items-center justify-between py-2"
      >
        <div>会社概要・アクセス</div>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </NuxtLink>
      <div class="my-1.5 h-[1px] w-full bg-[#e2e8f0]"></div>
      <NuxtLink to="/message" class="flex items-center justify-between py-2">
        <div>トップメッセージ</div>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </NuxtLink>
      <div class="my-1.5 h-[1px] w-full bg-[#e2e8f0]"></div>
      <NuxtLink
        to="/board-member"
        class="flex items-center justify-between py-2"
      >
        <div>役員・責任者紹介</div>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </NuxtLink>
      <div class="my-1.5 h-[1px] w-full bg-[#e2e8f0]"></div>
      <NuxtLink to="/vision" class="flex items-center justify-between py-2">
        <div>ビジョン・パーパス</div>
        <font-awesome-icon icon="fa-solid fa-angle-right" />
      </NuxtLink>
    </div>
  </div>
</template>
