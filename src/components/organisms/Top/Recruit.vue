<script setup lang="ts"></script>

<template>
  <div class="relative flex w-full items-center justify-center pt-24">
    <div
      class="flex w-11/12 flex-col-reverse items-center justify-between gap-6 tb:flex-row tb:gap-0 tb:space-x-10 pc:max-w-[1300px]"
    >
      <!-- 画像イラスト -->
      <div class="w-full max-w-[631px] tb:w-1/2 pc:h-[468px]">
        <img src="/top-recruit.png" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- メッセージコンテンツ -->
      <div class="flex w-full flex-col tb:w-1/2 pc:max-w-[565px]">
        <!-- タイトル -->
        <div class="text-[30px] font-bold">採用情報</div>
        <!-- メッセージ -->
        <div class="mt-10 text-[16px] text-[#18181b]">
          Bancorは、一緒に挑戦する仲間を募集しています。<br />
          ビジョン、会社紹介、募集職種などさまざまな情報を公開していますのでぜひご確認ください。
        </div>
        <!-- 採用ページリンク -->
        <NuxtLink
          to="/recruit-dx"
          class="group mt-10 flex items-center gap-3 text-[#94a3b8] transition-colors duration-300 hover:text-[#020617]"
        >
          <div class="text-[16px] font-bold">もっとみる</div>
          <font-awesome-icon
            class="text-[16px] transition-transform duration-700 group-hover:translate-x-1"
            :icon="['fas', 'right-long']"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
