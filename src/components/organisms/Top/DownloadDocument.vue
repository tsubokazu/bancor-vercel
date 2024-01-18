<script setup lang="ts"></script>

<template>
  <div class="relative flex w-full items-center justify-center pt-24">
    <div
      class="flex w-11/12 flex-col items-center justify-between gap-6 rounded-2xl bg-white p-6 tb:flex-row tb:gap-0 tb:space-x-10 pc:max-w-[1300px]"
    >
      <!-- メッセージコンテンツ -->
      <div class="flex flex-col">
        <!-- アイコン -->
        <div class="h-[50px] w-[38px] pc:h-[100px] pc:w-[76px]">
          <img src="/top-document-icon.png" alt="" />
        </div>
        <!-- メッセージ -->
        <div
          class="mt-4 text-[20px] font-bold text-[#94a3b8] tb:text-[24px] pc:text-[40px]"
        >
          NUVO M&A<span class="text-[#020617]">独自の価値基準</span
          >に基づき<br />
          プロダクトを<span class="text-[#020617]">スピーディーに改善。</span
          ><br />
          その<span class="text-[#020617]">ノウハウ</span>を一部公開
        </div>
        <!-- ダウンロードページリンク -->
        <NuxtLink
          to="/materials/130"
          class="mt-[20px] flex items-center gap-2 text-[14px] text-[#94a3b8] transition-colors duration-300 hover:text-[#020617] pc:mt-[72px] pc:text-[18px]"
        >
          <div>ダウンロード</div>
          <font-awesome-icon :icon="['fas', 'download']" />
        </NuxtLink>
      </div>
      <!-- 画像イラスト -->
      <div class="w-full max-w-[532px] tb:w-1/2 pc:h-[420px]">
        <img
          src="/top-document.png"
          alt=""
          class="h-full w-full object-cover"
        />
      </div>
    </div>
  </div>
</template>
