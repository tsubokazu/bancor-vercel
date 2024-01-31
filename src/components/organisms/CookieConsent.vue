<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  const store = useCookieConsentStore();
  const { consent } = storeToRefs(store);
  const { giveConsent, disableCookies } = store;

  onMounted(() => {
    console.log(`consent: ${consent.value}`);

    store.checkConsent();
  });
</script>

<template>
  <div
    v-show="consent === null"
    class="flex w-[95%] flex-col items-center justify-center gap-2 rounded-xl bg-white py-4 shadow-[0_0_2px_2px_rgba(0,0,0,0.1)] pc:h-[72px] pc:w-[850px] pc:flex-row pc:gap-8 pc:py-0"
  >
    <!-- 同意のメッセージとボタンを表示 -->
    <div class="w-[95%] pc:h-[40px] pc:w-[469px]">
      <p class="text-[12px] text-[#020617] pc:text-[14px]">
        こんにちは！私たちがより良い情報を提供できるように、<a
          href="/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          class="text-[#2563eb]"
          >プライバシーポリシー</a
        >に基づいたCookieの取得と利用に同意をお願いいたします。
      </p>
    </div>
    <div class="flex items-center gap-6">
      <button
        class="rounded-full bg-[#2563eb] py-2 px-6 text-center text-[15px] font-bold text-white pc:py-4 pc:px-10 pc:text-[17px]"
        @click="giveConsent"
      >
        同意する
      </button>
      <button
        class="rounded-full py-2 text-center text-[15px] text-[#2563eb] pc:py-4 pc:text-[17px]"
        @click="disableCookies"
      >
        Cookieを無効化
      </button>
    </div>
  </div>
</template>
