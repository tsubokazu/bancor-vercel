<script setup lang="ts">
  // entry storeから取得
  const entryStore = usePagesEntryStore();
</script>

<template>
  <div
    class="flex w-full flex-col items-center bg-bancor-gray700 pt-[72px] pb-[128px]"
  >
    <!-- 送信完了イメージ -->
    <AtomsBasicImage
      class="mt-[90px] mb-[80px]"
      img-url="/Envelope-rafiki.png"
    ></AtomsBasicImage>
    <!-- 送信完了メッセージ -->
    <div class="flex flex-col items-center space-y-8">
      <AtomsBasicTitle
        size="text-[28px]"
        text="ご応募ありがとうございました。"
      ></AtomsBasicTitle>
      <AtomsBasicOutline
        size="text-[16px]"
        :text="`登録されたメールアドレスへ人事担当者からメールをお送りいたします。\r\n${entryStore.entryFormObject.email}の受信箱をご確認ください。`"
      ></AtomsBasicOutline>
    </div>
    <!-- TOPへ戻るボタン -->
    <NuxtLink to="/">
      <div
        class="mb-24 rounded-full bg-bancor-black400 py-[21px] px-[50px] text-sm font-bold text-white"
      >
        修正する
      </div>
    </NuxtLink>
  </div>
</template>
