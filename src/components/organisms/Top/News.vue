<template>
  <!-- ニュース -->
  <div class="flex h-full w-full justify-center pc:max-h-[486px]">
    <div class="flex h-full w-11/12 flex-col pc:max-w-[1200px] pc:flex-row">
      <!-- ニュースメニュー -->
      <MoleculesTopNewsMenu class="mb-[52px] pc:mb-0"></MoleculesTopNewsMenu>
      <div
        class="flex h-full w-full flex-col tb:flex-row tb:justify-between pc:w-[850px]"
      >
        <!-- プレスリリース ニュースリスト -->
        <MoleculesTopNewsPressRelease
          class="mb-8 h-full w-full tb:mb-0 tb:w-1/2"
        ></MoleculesTopNewsPressRelease>
        <!-- サービスニュース ニュースリスト -->
        <MoleculesTopNewsServiceNews
          class="h-full w-full tb:w-1/2"
        ></MoleculesTopNewsServiceNews>
      </div>
    </div>
  </div>
</template>
