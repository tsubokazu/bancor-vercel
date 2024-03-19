<script setup lang="ts">
  import { MemberInfo } from '~/types/pages/board-member';
  const props = defineProps<{
    member: MemberInfo;
    memberIndex: number;
  }>();

  const firstNameEn = props.member.nameEn.split(' ')[0];
  const lastNameEn = props.member.nameEn.split(' ')[1];

  const currentMemberIndex = inject('currentMemberIndex') as Ref<number>;
  console.log(`currentMemberIndex: ${currentMemberIndex.value}`);

  // メンバー詳細を表示
  const showMemberDetail = (index: number) => {
    isShowDetail.value = true;
    currentMemberIndex.value = index;
    console.log(`currentMemberIndex: ${currentMemberIndex.value}`);
  };

  const isShowDetail = inject('isShowDetail') as Ref<boolean>;
</script>

<template>
  <div class="group flex flex-col items-center">
    <!-- 写真 -->
    <div class="relative mb-[14px] flex w-full flex-col items-center">
      <div
        class="relative flex h-[360px] w-full justify-center overflow-hidden rounded-[10px]"
      >
        <!-- グラデーションフィルター -->
        <div
          class="absolute top-0 left-0 z-10 h-full w-full rounded-[10px] bg-gradient-to-tr opacity-100 transition-opacity duration-500 group-hover:opacity-0"
        ></div>
        <!-- メンバー画像 -->
        <img
          :src="member.imgUrl"
          class="h-full scale-100 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <!-- 名前（英語） -->
      <div class="absolute left-[-5%] z-20 h-full w-full overflow-hidden">
        <div
          class="absolute bottom-0 left-0 flex w-full flex-col transition-transform duration-500 group-hover:translate-x-[-100%]"
        >
          <AtomsFuturaBoldText
            :text="firstNameEn"
            color="text-[#94a3b8]"
            size="text-[40px]"
            :isBold="true"
          />
          <AtomsFuturaBoldText
            :text="lastNameEn"
            color="text-[#94a3b8]"
            size="text-[40px]"
            :isBold="true"
          />
        </div>
      </div>
    </div>
    <!-- テキストとボタン -->
    <div class="mb-[22px] flex w-full items-center justify-between">
      <!-- 役職と名前 -->
      <div class="flex flex-col gap-2">
        <!-- 役職 -->
        <p class="text-[15px] font-bold text-[#94a3b8]">
          {{ member.position }}
        </p>
        <!-- 名前 -->
        <p class="text-[24px] font-bold">{{ member.name }}</p>
      </div>
      <!-- ボタン -->
      <button
        class="relative h-12 w-12 rounded-full border border-[#cbd5e1]"
        @click="showMemberDetail(memberIndex)"
      >
        <img
          class="absolute top-[21px] left-[24px] z-50 h-[14px] transition-transform duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[6px]"
          src="/images/board-member/plus-icon.png"
        />
        <img
          class="absolute top-[8px] left-[10px] z-40 h-[28px] transition-transform duration-300 group-hover:translate-x-[8px] group-hover:translate-y-[2px] group-hover:rotate-45 group-hover:scale-[85%]"
          src="/images/board-member/card-icon.png"
        />
        <img
          class="absolute top-[8px] left-[10px] z-30 h-[28px] transition-transform duration-300 group-hover:translate-x-[-4px]"
          src="/images/board-member/card-icon.png"
        />
      </button>
    </div>
    <!-- ボーダーライン -->
    <div class="relative h-[1px] w-full overflow-hidden bg-[#cbd5e1]">
      <div
        class="absolute z-10 h-full w-full -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0"
      ></div>
    </div>
  </div>
</template>
