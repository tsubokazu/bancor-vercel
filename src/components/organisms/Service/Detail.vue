<script setup lang="ts">
  import type { Service } from '~/types/pages/service';
  const props = defineProps<{ service: Service; modalIndex: number }>();

  const isModalOpen = inject('isModalOpen') as Ref<boolean>;
  const currentModalIndex = inject('currentModalIndex') as Ref<number>;
  const openModal = () => {
    isModalOpen.value = true;
    currentModalIndex.value = props.modalIndex;
    console.log(`currentModalIndex: ${currentModalIndex.value}`);
  };
</script>

<template>
  <div class="relative flex w-full flex-col gap-4">
    <!-- サービスサムネイルとタイトル -->
    <div
      class="relative flex h-fit w-full flex-col overflow-hidden rounded-[10px] px-5 pt-8 pb-[32px] tb:pt-[90px] pc:px-[47px]"
    >
      <!-- 画像 -->
      <img
        v-if="service.image"
        :src="service.image"
        :alt="service.image"
        class="absolute top-0 left-0 -z-20 h-full w-full object-cover"
      />
      <div
        class="absolute top-0 left-0 -z-10 h-full w-full"
        :class="!service.image ? 'bg-[#111827]' : 'bg-black opacity-50'"
      ></div>
      <!-- サービス名 -->
      <div
        class="text-[18px] font-bold text-[#e2e8f0] tb:text-[24px] pc:text-[32px]"
      >
        # {{ service.name }}
      </div>
      <!-- タイトル -->
      <AtomsBasicTitle
        :text="`${service.title}`"
        size="text-[24px] tb:text-[32px] pc:text-[64px]"
        color="text-white"
        space-y="space-y-0"
      />
      <!-- サブタイトル -->
      <div
        class="mt-4 text-[18px] font-bold text-white tb:text-[24px] pc:text-[32px]"
      >
        {{ service.subTitle }}
      </div>
      <!-- 小さいタイトル（説明） -->
      <div class="mt-10 text-right text-[13px] text-white">
        {{ service.smallTitle }}
      </div>
    </div>
    <!-- サービス説明 -->
    <div class="flex flex-col gap-[18px] bg-white py-8 px-5 tb:px-12">
      <div class="flex items-center gap-3">
        <!-- アイコン -->
        <div class="h-8 w-8 flex-none">
          <img
            :src="service.infoIcon"
            :alt="service.name"
            class="h-full object-cover"
          />
        </div>
        <div class="text-[22px] font-bold">
          {{ service.outlineTitle }}
        </div>
      </div>
      <!-- 説明 -->
      <div class="text-[15px] leading-[1.8] text-[#64748b] tb:text-[17px]">
        {{ service.outlineBody }}
      </div>
      <!--　詳しくみるボタン -->
      <div class="flex items-center justify-end gap-4" v-if="service.helpIcon">
        <div class="text-[17px] text-[#64748b]">詳しくみる</div>
        <!-- ボタン -->
        <button
          @click="openModal"
          class="group relative h-12 w-12 rounded-full border border-[#cbd5e1]"
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
    </div>
    <!-- ボタンを押したときのモーダル -->
    <slot />
  </div>
</template>
