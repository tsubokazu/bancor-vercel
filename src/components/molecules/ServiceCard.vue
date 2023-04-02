<script setup lang="ts">
  interface Props {
    imgUrl: string;
    title: string;
    outline: string;
  }
  const props = defineProps<Props>();
</script>

<template>
  <div
    class="flex h-[380px] w-full flex-col items-center justify-center rounded-lg bg-white shadow-md tb:h-[370px] tb:w-[500px]"
  >
    <!-- カード画像 -->
    <AtomsShadowImage
      :imgUrl="imgUrl"
      imgHeight="h-[210px]"
      imgWidth="w-full"
      radius="rounded-t-lg"
    ></AtomsShadowImage>
    <!-- カードボディ -->
    <div class="flex h-[160px] w-full flex-col space-y-4 pt-6">
      <!-- ボディタイトル -->
      <div
        class="flex h-7 w-full items-center border-l-4 border-bancor-blue200 pl-7"
      >
        <AtomsBasicTitle
          :text="title"
          size="text-[20px] tb:text-[28px]"
        ></AtomsBasicTitle>
      </div>
      <!-- ボディアウトライン -->
      <div class="w-full px-7">
        <AtomsBasicOutline
          size="text-sm tb:text-base"
          :text="outline"
        ></AtomsBasicOutline>
      </div>
    </div>
  </div>
</template>
