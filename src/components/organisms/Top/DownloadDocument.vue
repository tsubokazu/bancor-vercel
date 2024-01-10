<script setup lang="ts"></script>

<template>
  <div class="relative flex w-full items-center justify-center pt-24">
    <div
      class="flex w-11/12 items-center justify-between space-x-10 pc:max-w-[1300px]"
    >
      <!-- メッセージコンテンツ -->
      <div class="flex flex-col">
        <!-- アイコン -->
        <div class="h-[100px] w-[76px]">
          <img src="/top-document-icon.png" alt="" />
        </div>
        <!-- メッセージ -->
        <div class="mt-4 text-[40px] font-bold text-[#94a3b8]">
          NUVO M&A<span class="text-[#020617]">独自の価値基準</span
          >に基づき<br />
          プロダクトを<span class="text-[#020617]">スピーディーに改善。</span
          ><br />
          その<span class="text-[#020617]">ノウハウ</span>を一部公開
        </div>
        <!-- ダウンロードページリンク -->
        <NuxtLink
          to="/materials/130"
          class="mt-[72px] flex items-center gap-2 text-[18px] text-[#94a3b8] transition-colors duration-300 hover:text-[#020617]"
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
