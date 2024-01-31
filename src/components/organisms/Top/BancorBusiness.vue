<script setup lang="ts">
  // Top02からデータを取得
  import { useTop02Store } from '~/stores/top02';
  import { Top02, BancorBusiness } from '~/types/top02';
  const top02Store = useTop02Store();
  if (Object.keys(top02Store.bancorNotionList).length == 0) {
    await top02Store.fetchTop02();
  }
  const top02Object: Top02 = top02Store;

  // スライダー用の記事取得
  const businessList: Array<BancorBusiness> = top02Object.bancorBusinessList;
  const businessNums = businessList.length;
  console.log(`!!!!!businessNums = ${businessNums}`);
  console.log(`businessList: ${JSON.stringify(businessList)}`);

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(1300);
  const isSmartPhone = computed(() => windowWidth.value < 768);
  const isTablet = computed(
    () => windowWidth.value >= 768 && windowWidth.value < 1280
  );
  const isPC = computed(() => windowWidth.value >= 1280);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  // スライダー用ボタンのメソッド
  const currentIndex = ref(0);
  const moveValue = computed(() =>
    isPC.value ? 1012 + 24 : isTablet.value ? 720 + 24 : 320 + 24
  );
  const currentPosition = ref(businessNums % 2 == 0 ? -moveValue.value / 2 : 0);
  const sliderIndexArray = Array.from(
    { length: businessNums * 3 },
    (_, i) => i % businessNums
  ); // スライダーの並び（businessNumsの数に合わせて自動生成）
  const sideItemsNum = 1; // センター記事のサイドにいくつ記事が見えるか
  const isTransition = ref(true);
  const move = async (direction: number) => {
    // インデックスが1→2と2→1になるときは事前にcurrentPositionを逆側にセットする
    if (direction > 0) {
      if (currentIndex.value == sideItemsNum) {
        isTransition.value = false;
        currentPosition.value =
          businessNums % 2 == 0
            ? moveValue.value * (sideItemsNum + 1) - moveValue.value / 2
            : moveValue.value * (sideItemsNum + 1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        isTransition.value = true;
      }
    } else {
      if (currentIndex.value == businessNums - sideItemsNum) {
        isTransition.value = false;
        currentPosition.value =
          businessNums % 2 == 0
            ? -moveValue.value * (sideItemsNum + 1) - moveValue.value / 2
            : -moveValue.value * (sideItemsNum + 1);
        await new Promise((resolve) => setTimeout(resolve, 50));
        isTransition.value = true;
      }
    }

    // インデックスは 0 to businessNums
    if (currentIndex.value + direction <= 0) {
      currentIndex.value = businessNums - 1;
    } else if (currentIndex.value + direction >= businessNums) {
      await resetNavigation();
    } else {
      currentIndex.value += direction;
    }
    currentPosition.value -= moveValue.value * direction;
  };

  const resetNavigation = async () => {
    currentIndex.value = -1;
    await new Promise((resolve) => setTimeout(resolve, 50));
    currentIndex.value = 0;
  };

  setInterval(() => {
    move(1);
  }, 6000);

  onMounted(() => {
    nextTick(() => {
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center justify-center overflow-hidden">
    <div
      class="flex w-full items-center justify-center gap-4 pc:h-[512px]"
      :class="{
        'transition-transform': isTransition,
        'duration-500': isTransition,
        'ease-in-out': isTransition,
      }"
      :style="{ transform: `translateX(${currentPosition}px)` }"
    >
      <NuxtLink
        v-for="(number, index) in sliderIndexArray"
        :to="businessList[number].linkUrl"
        class="duration-600 relative h-full w-[320px] flex-none overflow-hidden rounded-2xl shadow-lg transition-transform tb:w-[720px] pc:w-[1012px]"
      >
        <img
          :src="businessList[number].imgUrl"
          alt=""
          class="h-full w-full object-cover"
        />
        <div
          class="absolute top-[75%] left-[5%] w-[90%] text-[12px] font-bold text-white tb:text-[20px] pc:text-[30px]"
        >
          {{ businessList[number].title }}
        </div>
      </NuxtLink>
    </div>
    <!-- ナビゲーション -->
    <div class="mt-6 flex items-center justify-center gap-3 pc:mt-16 pc:gap-6">
      <div
        v-for="(data, index) in businessNums"
        class="h-1.5 w-1.5 pc:h-2.5 pc:w-2.5"
        :class="{
          'bg-[#cbd5e1]': index != currentIndex,
          'bg-[#020617]': index == currentIndex,
        }"
      ></div>
    </div>
  </div>
</template>
