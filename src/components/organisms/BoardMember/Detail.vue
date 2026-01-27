<script setup lang="ts">
  import type { MemberInfo } from '~/types/pages/board-member';
  const props = defineProps<{
    member: MemberInfo;
    memberBg: string;
  }>();

  const isShowDetail = inject('isShowDetail') as Ref<boolean>;
  const closeDetail = () => {
    isShowDetail.value = false;
  };
</script>

<template>
  <div
    class="fixed top-0 right-0 z-50 w-full pb-[40px] transition-transform duration-500 ease-in-out tb:px-[32px] tb:py-10 pc:min-h-[1080px] pc:w-fit pc:px-[64px] pc:pt-[78px] pc:pb-[80px]"
    :class="isShowDetail ? 'translate-x-0' : 'translate-x-full'"
  >
    <!-- 背景 -->
    <div class="absolute top-0 left-0 -z-10 h-full w-full">
      <img :src="memberBg" class="h-full w-full rounded-[10px] object-cover" />
    </div>
    <div
      class="flex flex-col items-center gap-6 tb:flex-row tb:items-start tb:gap-[54px]"
    >
      <!-- 紹介文 -->
      <div class="flex w-[95%] flex-col tb:w-[466px]">
        <!-- 名前 -->
        <div class="mt-[83px] mb-[18px] text-[40px] font-bold">
          {{ member.name }}
        </div>
        <!-- 名前（英語） -->
        <AtomsFuturaBoldText
          :text="member.nameEn"
          size="text-[15px]"
          color="text-[#94a3b8]"
          class="mb-[22px]"
        ></AtomsFuturaBoldText>
        <!-- 役職 -->
        <div class="mb-[54px] text-[18px] font-bold">{{ member.position }}</div>
        <!-- 紹介文 -->
        <AtomsBasicTitle
          :text="member.message"
          :isBold="false"
          size="text-[15px]"
          spaceY="space-y-1"
          class="mb-[54px]"
        ></AtomsBasicTitle>
        <!-- リンク -->
        <div
          class="flex w-full flex-col gap-3 rounded-[10px] border border-[#cbd5e1] bg-[#f8fafc] px-6 py-4"
        >
          <!-- 外部リンクタイトル -->
          <div class="flex items-center gap-2">
            <!-- アイコン -->
            <div
              class="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#cbd5e1]"
            >
              <img src="/tag-icon.png" class="h-[12px] w-[12px]" />
            </div>
            <div class="text-[18px] font-bold">外部リンク</div>
          </div>
          <!-- リンクリスト -->
          <div class="flex flex-col gap-2">
            <div v-for="(link, index) in member.links" :key="index">
              <NuxtLink
                :to="link.url"
                target="_blank"
                class="text-[15px] text-[#3b82f6] hover:underline"
              >
                {{ link.title }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <!-- 写真 -->
      <div
        class="h-[320px] w-[95%] overflow-hidden rounded-[10px] tb:h-[654px] tb:w-[420px] pc:flex-none"
      >
        <img :src="member.imgUrl" class="h-full w-full object-cover" />
      </div>
    </div>
    <!-- 閉じるボタン -->
    <div
      class="absolute bottom-[-80px] left-[10px] flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-full bg-[#dbeafe] pc:bottom-[30px] pc:left-[-100px]"
      :class="isShowDetail ? 'translate-x-0' : 'translate-x-[100px]'"
      @click="closeDetail"
    >
      <!-- バツ印 -->
      <div
        class="absolute top-1/2 left-1/2 h-[2px] w-[24px] -translate-x-1/2 -translate-y-1/2 rotate-45 transform rounded-full bg-[#1e40af]"
      ></div>
      <div
        class="absolute top-1/2 left-1/2 h-[2px] w-[24px] -translate-x-1/2 -translate-y-1/2 -rotate-45 transform rounded-full bg-[#1e40af]"
      ></div>
    </div>
  </div>
</template>
