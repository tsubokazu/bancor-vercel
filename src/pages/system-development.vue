<script setup lang="ts">
  import { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';
  import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

  definePageMeta({
    layout: 'default',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const {
    headerBg,
    header,
    issues,
    dxDev,
    problems,
    team,
    bancor3min,
    devCase,
    features,
    freeSupport,
    nuvoContents,
    structure,
    maintenances,
    questions,
    contact,
    valueUpdate,
  }: SystemDevObject = pagesSystemDevStore;

  // デジタル課題のクリックフラグ
  const clickFlag = ref(false);
  const clickProblemButton = () => (clickFlag.value = !clickFlag.value);

  // ウィンドウサイズからスマホかどうかを判定
  const windowWidth = ref(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const isSmartPhone = computed(() => windowWidth.value < 768);

  const updateWidth = () => {
    if (typeof window !== 'undefined') {
      windowWidth.value = window.innerWidth;
    }
  };

  // NUVOのシステム開発関連
  const nuvoContentIsPause = ref(false);
  const nuvoContentIndex = ref(0);
  const nuvoContentOpacity = ref('opacity-100');
  const nuvoContentProgress = ref(0); // プログレスの状態
  let animationFrameId: number | null = null; // アニメーションフレームID
  let startTime: number | null = null; // アニメーション開始時刻
  let pausedTime = 0; // 一時停止した時点での経過時間

  // 次のインデックスに更新
  const nextNuvoContentIndex = () => {
    nuvoContentOpacity.value = 'opacity-0';
    setTimeout(() => {
      nuvoContentIndex.value =
        (nuvoContentIndex.value + 1) % nuvoContents.contents.length;
      nuvoContentOpacity.value = 'opacity-100';
    }, 300);
  };

  // 任意のインデックスに更新
  const updateNuvoContentIndex = (index: number) => {
    nuvoContentOpacity.value = 'opacity-0';
    resetAnimation();
    startAnimation();
    setTimeout(() => {
      nuvoContentIndex.value = index;
      nuvoContentOpacity.value = 'opacity-100';
    }, 300);
  };

  // アニメーションを更新する関数
  const updateAnimation = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime + pausedTime;
    const duration = 4000; // 4秒
    nuvoContentProgress.value =
      Math.min(100, (elapsedTime / duration) * 100) - 100;

    if (elapsedTime < duration) {
      animationFrameId = requestAnimationFrame(updateAnimation);
    } else {
      // アニメーションが完了したらリセット
      resetAnimation();
      startAnimation();
      nextNuvoContentIndex();
    }
  };

  // アニメーションを開始する関数
  const startAnimation = () => {
    if (!animationFrameId) {
      // アニメーションが既に実行中でない場合
      nuvoContentIsPause.value = false;
      animationFrameId = requestAnimationFrame(updateAnimation);
    }
  };

  // アニメーションを一時停止する関数
  const pauseAnimation = () => {
    if (animationFrameId && startTime) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
      pausedTime += performance.now() - startTime; // 一時停止した時点での経過時間を記録
      startTime = null;
      nuvoContentIsPause.value = true;
    }
  };

  // アニメーションを再開する関数
  const resumeAnimation = () => {
    if (!animationFrameId) {
      startTime = performance.now();
      animationFrameId = requestAnimationFrame(updateAnimation);
      nuvoContentIsPause.value = false;
    }
  };

  // ボタンの処理
  const clickNuvoContentButton = () => {
    if (nuvoContentIsPause.value) {
      resumeAnimation();
    } else {
      pauseAnimation();
    }
  };

  // アニメーションをリセットする関数
  const resetAnimation = () => {
    if (animationFrameId && startTime) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    startTime = null;
    pausedTime = 0;
    nuvoContentProgress.value = 0; // プログレスを0にリセット
  };

  onMounted(() => {
    startAnimation(); // コンポーネントがマウントされたらアニメーションを開始
  });

  onUnmounted(() => {
    if (animationFrameId && startTime) {
      cancelAnimationFrame(animationFrameId);
    }
  });

  // よくある質問関連
  const openQIndexes = ref<number[]>([]);
  const toggleOpenQIndexes = (index: number) => {
    if (openQIndexes.value.includes(index)) {
      openQIndexes.value = openQIndexes.value.filter((i) => i !== index);
      console.log(`openQIndexes: ${openQIndexes.value}`);
    } else {
      openQIndexes.value.push(index);
      console.log(`openQIndexes: ${openQIndexes.value}`);
    }
  };

  onMounted(() => {
    window.addEventListener('resize', updateWidth);
    document.documentElement.style.scrollBehavior = 'smooth';
    document.body.style.scrollBehavior = 'smooth';
  });

  onBeforeUnmount(() => {
    document.documentElement.style.scrollBehavior = '';
    document.body.style.scrollBehavior = '';
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div
    class="relative flex w-full flex-col items-center overflow-hidden scroll-smooth"
  >
    <!-- ヘッダー背景画像 -->
    <!-- ヘッダー -->
    <div
      class="relative flex h-[340px] w-full max-w-[1200px] flex-col items-center tb:h-[400px] tb:items-start pc:h-[450px]"
    >
      <div
        class="absolute top-0 right-0 -z-10 h-[200px] w-[346px] tb:h-[300px] tb:w-[520px] pc:h-[450px] pc:w-[780px]"
      >
        <img :src="headerBg.imgUrl" alt="" class="h-full w-full object-cover" />
      </div>
      <!-- タイトル画像 -->
      <div class="mt-[174px] mb-6 w-[95%] tb:h-[117px] tb:w-[534px]">
        <img
          :src="header.imgUrl"
          alt="タイトル画像"
          class="h-full w-full object-cover"
        />
      </div>
      <!-- サブタイトル -->
      <div
        class="w-[95%] rounded-md bg-[#020617] px-4 py-1 text-[16px] font-bold text-white pc:w-fit"
      >
        {{ header.subTitle }}
      </div>
    </div>
    <!-- ボディ -->
    <div class="relative flex w-full flex-col items-center">
      <!-- こんな課題を解決します -->
      <div id="test" class="mt-16 mb-14 flex w-full flex-col items-center">
        <!-- メニュータイトル -->
        <MoleculesDoubleSquareTagMenu
          class="w-[95%] pc:max-w-[1200px]"
          :title="issues.title"
          :subTitle="issues.subTitle"
        ></MoleculesDoubleSquareTagMenu>
      </div>

      <!-- カード -->
      <div
        class="mb-12 flex w-[95%] flex-col items-center justify-between space-y-4 tb:flex-row tb:space-y-0 pc:max-w-[1200px]"
      >
        <div
          v-for="(issue, index) in issues.issues"
          class="pc-[378px] relative flex h-[320px] w-[95%] flex-col items-center justify-between rounded-lg border border-bancor-gray600 bg-white py-5 px-8 tb:h-[320px] tb:w-[32%] tb:px-3 pc:h-[300px] pc:px-8"
          :key="issue.title"
        >
          <!-- Case N -->
          <AtomsFuturaMediumText
            class="absolute top-4 left-6"
            :text="issue.subTitle"
            size="text-lg"
          ></AtomsFuturaMediumText>
          <AtomsFuturaMediumText
            class="absolute top-7 left-4"
            :text="issue.outline"
            size="text-[47px]"
          ></AtomsFuturaMediumText>

          <!-- カード内イメージとタイトル -->
          <div class="mb-3 h-[148px] w-[148px] flex-none">
            <img
              :src="issue.imgUrl"
              alt=""
              class="h-full w-full object-cover"
            />
          </div>
          <AtomsParticleColorTitle
            spaceY="space-y-2"
            :text="issue.title"
            size="text-[18px] tb:text-[16px] pc:text-[18px]"
          ></AtomsParticleColorTitle>

          <!-- カードの吹き出し -->
          <div
            v-if="index == (isSmartPhone ? 2 : 1)"
            class="absolute -bottom-[19px] h-9 w-9 rotate-45 border-r border-b border-bancor-gray600 bg-white"
          ></div>
        </div>
      </div>

      <!-- アウトライン -->
      <div class="relative mb-40 flex w-full items-center justify-center px-1">
        <AtomsBasicOutline
          class="text-center"
          :text="issues.outline"
          color="text-white"
          size="text-[26px] tb:text-[32px]"
        ></AtomsBasicOutline>
        <!-- 黒背景 -->
        <div
          class="absolute -top-[132px] -z-20 h-[246px] w-full bg-bancor-navy200"
        ></div>
        <!-- 灰色マーカー -->
        <div
          class="absolute bottom-[4px] -z-10 hidden h-4 w-[800px] bg-gray-700 tb:block"
        ></div>
      </div>

      <!-- デジタル化の課題 -->
      <div
        v-fade-in
        id="resource"
        class="mb-24 flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-8 flex flex-col items-center space-y-12 tb:mb-16">
          <AtomsAsteriskSmallText
            class="items-center"
            :text="problems.title"
          ></AtomsAsteriskSmallText>
          <AtomsBasicOutline
            class="items-center"
            :text="problems.outline"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>

        <!-- 課題のグラフ -->
        <div
          class="flex w-[95%] flex-col justify-between space-y-10 pc:max-w-[1200px] pc:flex-row pc:space-y-0"
        >
          <!-- 課題の項目ボタン -->
          <div class="flex w-[238px] flex-col space-y-3">
            <AtomsButtonUnderLine
              v-for="(problem, index) in problems.problems"
              @click="clickProblemButton"
              :title="problem.title"
              :clickFlag="index ? clickFlag : !clickFlag"
              :key="problem.title"
            ></AtomsButtonUnderLine>
          </div>

          <!-- グラフ -->
          <div class="h-[200px] tb:h-[424px]">
            <AtomsBasicImage
              v-show="!clickFlag"
              :imgUrl="problems.problems[0].imgUrl"
              img-height="h-auto"
              imgWidth="w-[95%] tb:w-[700px] "
            ></AtomsBasicImage>
            <AtomsBasicImage
              v-show="clickFlag"
              :imgUrl="problems.problems[1].imgUrl"
              img-height="h-auto"
              imgWidth="w-[95%] tb:w-[700px]"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- DX推進時代の開発手法 -->
      <div
        v-fade-in
        class="mb-24 flex w-[95%] flex-col items-center justify-between space-y-8 tb:flex-row pc:max-w-[1200px] pc:space-y-0"
      >
        <!-- メニュー -->
        <div class="flex flex-col space-y-10 tb:w-[458px]">
          <AtomsBasicTitle
            :text="dxDev.title"
            size="text-[32px]"
          ></AtomsBasicTitle>
          <AtomsBasicOutline :text="dxDev.subTitle"></AtomsBasicOutline>
          <AtomsBasicOutline
            :text="dxDev.outline"
            :isBold="false"
          ></AtomsBasicOutline>
          <MoleculesDetailButton
            :linkUrl="dxDev.linkUrl"
          ></MoleculesDetailButton>
        </div>

        <!-- イメージ -->
        <AtomsBasicIcon
          :iconUrl="dxDev.imgUrl"
          size="h-[300px] pc:h-[435px]"
        ></AtomsBasicIcon>
      </div>

      <!-- パートナーとしてではなくチームの一員 -->
      <!-- デジタル化の課題 -->
      <div
        v-fade-in
        class="mb-24 flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <!-- タイトル -->
        <div class="mb-16 flex flex-col items-center space-y-12">
          <AtomsAsteriskSmallText
            class="items-center"
            :text="team.title"
            size="text-[20px] tb:text-[30px]"
          ></AtomsAsteriskSmallText>
          <AtomsBasicOutline
            class="items-center"
            :text="team.outline"
            :isBold="false"
          ></AtomsBasicOutline>
        </div>

        <!-- イメージ -->
        <AtomsBasicImage
          imgHeight="w-[95%] tb:w-[654px]"
          :imgUrl="team.imgUrl"
        ></AtomsBasicImage>
      </div>

      <!-- 開発支援事例 -->
      <div v-fade-in class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-14"
          :title="devCase.title"
          subTitle="Case Study"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード -->
        <div class="flex w-full flex-col space-y-14">
          <div
            class="flex w-full flex-col items-center justify-between gap-3 space-y-6 py-5 shadow-lg tb:flex-row pc:h-[586px] pc:space-y-0 pc:px-20"
          >
            <AtomsBasicImage
              img-height="h-auto"
              imgWidth="mb-4 pc:mb-0 w-full tb:w-[500px] px-2 tb:px-0"
              :imgUrl="devCase.imgUrl"
            ></AtomsBasicImage>
            <div
              class="flex w-[95%] flex-col space-y-5 tb:w-[520px] pc:flex-none"
            >
              <div class="text-[14px] font-bold text-[#475569]">
                MEMBERS株式会社
              </div>
              <AtomsBasicTitle
                :text="devCase.mainMessage"
                size="text-[19px] tb:text-[22px] pc:text-[28px]"
                :isBold="true"
                spaceY="space-y-2"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                size="text-[14px] pc:text-[16px]"
                :text="devCase.outline.slice(0, 165)"
                color="text-[#475569]"
                :isBold="false"
              ></AtomsBasicOutline>
              <div class="flex w-full flex-wrap gap-3">
                <div
                  class="rounded-full border border-[#93c5fd] bg-[#dbeafe] py-2 px-4 text-[15px] text-[#1e40af]"
                  v-for="tag in devCase.tags"
                >
                  {{ tag }}
                </div>
              </div>
              <MoleculesDetailButton
                v-if="devCase.linkUrl.length > 0"
                :linkUrl="devCase.linkUrl"
                text="詳しくみる"
              ></MoleculesDetailButton>
            </div>
          </div>
        </div>
      </div>

      <!-- 開発体制の特徴 -->
      <div v-fade-in class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-14"
          :title="features.title"
          :subTitle="features.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- カード -->
        <div class="flex w-full flex-col space-y-14">
          <div
            v-for="(feature, index) in features.features"
            class="flex w-full flex-col items-center justify-between space-y-6 shadow-lg tb:h-[311px] tb:px-20 pc:space-y-0"
            :class="[index % 2 == 0 ? 'tb:flex-row-reverse' : 'tb:flex-row']"
            :key="feature.title"
          >
            <MoleculesBasicMenu
              class="w-[95%] tb:w-[511px]"
              size="text-[20px] tb:text-[22px] pc:text-[28px]"
              outline-size="text-[14px] pc:text-[16px]"
              spaceY="space-y-5"
              titleSpaceY="space-y-2"
              :isBold="true"
              :title="feature.title"
              :subTitle="feature.subTitle"
              :outline="feature.outline"
              :linkUrl="feature.linkUrl"
              :isOutlineBold="false"
            ></MoleculesBasicMenu>
            <AtomsBasicImage
              img-height="h-auto"
              imgWidth="mb-4 pc:mb-0 w-[60%] tb:w-[300px]"
              :imgUrl="feature.imgUrl"
            ></AtomsBasicImage>
          </div>
        </div>
      </div>

      <!-- 支援開始前の無償サポート -->
      <div v-fade-in class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-4"
          :title="freeSupport.title"
          :subTitle="freeSupport.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- 説明 -->
        <AtomsBasicTitle
          :text="freeSupport.outline"
          :isBold="false"
          size="text-[16px] text-[#475569]"
          spaceY="space-y-2"
          class="mb-8"
        ></AtomsBasicTitle>
        <!-- カード -->
        <div class="flex w-full flex-col gap-3 overflow-y-scroll tb:flex-row">
          <div
            v-for="(card, index) in freeSupport.cards"
            class="flex w-[95%] flex-col items-center gap-4 py-5 px-3 shadow-lg tb:h-[435px] tb:w-[380px] tb:gap-0 tb:px-6"
            :key="card.title"
          >
            <AtomsBasicImage
              img-height="h-auto"
              imgWidth="w-full px-2 tb:w-[330px]"
              :imgUrl="card.imgUrl"
              class="mb-5"
            ></AtomsBasicImage>
            <div class="flex flex-col">
              <AtomsBasicTitle
                :text="card.title"
                size="text-[20px]"
                class="mb-3"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                size="text-[16px]"
                :text="card.outline"
                :isBold="false"
                class="mb-5 text-[#475569]"
              ></AtomsBasicOutline>
              <NuxtLink
                :to="card.linkUrl"
                class="w-fit rounded-full bg-[#0a50ae] px-8 py-3 text-white"
                >{{ card.linkTitle }}</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>

      <!-- NUVOのシステム開発 -->
      <div
        v-fade-in
        class="mb-14 flex w-[95%] flex-col items-center pc:max-w-[1200px]"
      >
        <MoleculesDoubleSquareTagMenu
          class="mb-4"
          :title="nuvoContents.title"
          :subTitle="nuvoContents.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- 説明 -->
        <AtomsBasicTitle
          :text="nuvoContents.outline"
          :isBold="false"
          size="text-[16px] text-[#475569]"
          spaceY="space-y-2"
          class="mb-[72px] text-center pc:max-w-[1000px]"
        ></AtomsBasicTitle>
        <!-- コンテンツ -->
        <div
          class="flex w-full flex-col tb:flex-row tb:justify-between pc:max-w-[1100px]"
        >
          <!-- コンテンツ詳細 -->
          <div class="flex w-full flex-col">
            <div
              class="flex flex-col transition-opacity duration-500"
              :class="nuvoContentOpacity"
            >
              <!-- 画像 -->
              <div class="mb-[50px] h-[200px]">
                <img
                  class="h-full object-cover"
                  :src="nuvoContents.contents[nuvoContentIndex].imgUrl"
                  :alt="nuvoContents.contents[nuvoContentIndex].title"
                />
              </div>
              <!-- タイトル -->
              <div class="relative mb-11 text-[32px] font-bold">
                {{ nuvoContents.contents[nuvoContentIndex].title }}
                <!-- 小さい数字 -->
                <span
                  class="absolute -top-[26px] -left-[6px] px-2 py-1 text-[14px] text-[#94a3b8]"
                >
                  {{ String(nuvoContentIndex + 1).padStart(2, '0') }}
                </span>
              </div>
              <!-- コンテンツ説明箇条書き -->
              <div class="flex h-[220px] flex-col gap-5 pr-3">
                <div
                  v-for="outline in nuvoContents.contents[nuvoContentIndex]
                    .outlines"
                  class="flex gap-2"
                >
                  <!-- アイコン -->
                  <div
                    class="flex h-4 w-4 translate-y-1 items-center justify-center rounded-full bg-[#e2e8f0]"
                  >
                    <font-awesome-icon
                      class="text-[9px] text-[#1d4ed8]"
                      :icon="['fas', 'check']"
                    />
                  </div>
                  <!-- 説明 -->
                  <div class="text-[16px] font-bold">
                    {{ outline }}
                  </div>
                </div>
              </div>
            </div>
            <!-- プログレスバー -->
            <div class="flex items-center pr-4">
              <!-- 再生・ポーズ -->
              <button
                @click="clickNuvoContentButton()"
                class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#94a3b8]"
              >
                <font-awesome-icon
                  v-if="nuvoContentIsPause"
                  class="translate-x-[1px] text-[16px] text-[#94a3b8]"
                  :icon="['fas', 'play']"
                />
                <font-awesome-icon
                  v-else
                  class="translate-x-0 text-[16px] text-[#94a3b8]"
                  :icon="['fas', 'pause']"
                />
              </button>
              <!-- バー -->
              <div
                class="relative h-[6px] w-[280px] overflow-hidden rounded-full bg-[#94a3b8] tb:w-[334px]"
              >
                <div
                  class="h-full w-full rounded-full bg-[#020617]"
                  :style="{
                    transform: `translateX(${nuvoContentProgress}%)`,
                  }"
                ></div>
              </div>
            </div>
          </div>
          <!-- コンテンツリスト -->
          <div
            class="flex w-[95%] flex-none flex-col rounded-[10px] p-6 shadow-lg pc:w-[600px]"
          >
            <!-- タイトル -->
            <div class="mb-5 text-[20px] font-bold">支援可能な領域</div>
            <!-- リスト -->
            <div class="flex flex-col gap-5">
              <div
                v-for="(content, index) in nuvoContents.contents"
                class="flex items-center gap-4"
              >
                <!-- アイコン -->
                <button
                  @click="updateNuvoContentIndex(index)"
                  class="flex h-[30px] w-[30px] items-center justify-center rounded-[10px]"
                  :class="
                    nuvoContentIndex === index ? 'bg-[#1e293b]' : 'bg-[#475569]'
                  "
                >
                  <img
                    :src="`/nuvo-sys-icons/${String(index + 1).padStart(
                      2,
                      '0'
                    )}.png`"
                    :alt="content.title"
                    class="h-[22px]"
                  />
                </button>
                <!-- テキスト -->
                <div
                  :class="
                    nuvoContentIndex === index
                      ? 'text-[#020617]'
                      : 'text-[#475569]'
                  "
                  class="text-[16px] font-bold"
                >
                  {{ content.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 開発体制 -->
      <div
        v-fade-in
        id="development"
        class="mb-24 flex w-[95%] pc:max-w-[1200px]"
      >
        <div class="mb-6 flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            class="mb-18"
            :title="structure.title"
            :subTitle="structure.subTitle"
            :outline="structure.outline"
          ></MoleculesDoubleSquareTagMenu>
          <!-- 画像 -->
          <div
            class="tb:gap-18 relative flex flex-col items-center justify-center gap-10 tb:flex-row pc:gap-28"
          >
            <img
              :src="structure.img01Url"
              alt="structure.title"
              class="w-[95%] tb:w-[360px] pc:w-[480px]"
            />
            <img
              :src="structure.imgArrowUrl"
              alt="structure.title"
              class="absolute left-1/2 top-1/2 w-[15%] -translate-x-1/2 -translate-y-1/2 -rotate-90 tb:w-[100px] pc:w-[150px] pc:rotate-0"
            />
            <img
              :src="structure.img02Url"
              alt="structure.title"
              class="w-[80%] tb:w-[260px] pc:w-[340px]"
            />
          </div>
        </div>
      </div>

      <!-- 保守・運用 -->
      <div v-fade-in class="mb-24 flex w-[95%] pc:max-w-[1200px]">
        <div class="flex flex-col justify-center space-y-10">
          <MoleculesDoubleSquareTagMenu
            :title="maintenances.title"
            :subTitle="maintenances.subTitle"
            :outline="maintenances.outline"
          ></MoleculesDoubleSquareTagMenu>
          <div
            class="grid w-full grid-cols-1 gap-y-4 tb:grid-cols-2 tb:gap-x-8"
          >
            <div
              v-for="maintenance in maintenances.maintenances"
              class="flex flex-col justify-center space-y-2 rounded-md border border-bancor-gray600 px-6 py-4 pc:h-[204px] pc:w-[520px] pc:py-0"
              :key="maintenance.title"
            >
              <AtomsBasicIcon
                size="h-[35px]"
                :iconUrl="maintenance.imgUrl"
              ></AtomsBasicIcon>
              <AtomsBasicTitle
                :text="maintenance.title"
                size="text-[22px]"
              ></AtomsBasicTitle>
              <AtomsBasicOutline
                size="text-[14px]"
                :text="maintenance.outline"
                :isBold="false"
              ></AtomsBasicOutline>
            </div>
          </div>
        </div>
      </div>

      <!-- よくあるご質問 -->
      <div v-fade-in class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-4"
          :title="questions.title"
          :subTitle="questions.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- 説明 -->
        <AtomsBasicTitle
          :text="questions.outline"
          :isBold="false"
          size="text-[16px] text-[#475569]"
          spaceY="space-y-2"
          class="mb-8"
        ></AtomsBasicTitle>
        <!-- 質問集 -->
        <div class="flex flex-col gap-5">
          <div
            v-for="(question, index) in questions.questions"
            class="flex h-fit max-h-fit flex-col gap-2 transition-all duration-300"
            :key="question.question"
          >
            <div
              class="flex flex-col gap-4 border-b border-bancor-gray600 py-4"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-5">
                  <div
                    class="flex h-14 w-14 flex-none items-center justify-center rounded-[10px] bg-[#1e293b] text-[26px] font-bold text-white"
                  >
                    Q
                  </div>
                  <div class="text-[16px] font-bold">
                    {{ question.question }}
                  </div>
                </div>
                <!-- アコーディオンボタン -->
                <button @click="toggleOpenQIndexes(index)">
                  <font-awesome-icon
                    v-if="openQIndexes.includes(index)"
                    :icon="['fas', 'angle-up']"
                    class="text-[16px] text-[#475569]"
                  />
                  <font-awesome-icon
                    v-else
                    :icon="['fas', 'angle-down']"
                    class="text-[16px] text-[#475569]"
                  />
                </button>
              </div>
              <div
                class="flex h-fit w-full items-center gap-5 transition-all duration-300 ease-linear"
                :class="
                  openQIndexes.includes(index)
                    ? 'max-h-full opacity-100'
                    : 'max-h-0 opacity-0'
                "
              >
                <div
                  class="flex h-14 w-14 flex-none items-center justify-center rounded-[10px] border border-[#1e293b] bg-white text-[26px] font-bold text-[#1e293b]"
                >
                  A
                </div>
                <div class="text-[16px] text-[#475569]">
                  {{ question.answer }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- お問い合わせ -->
      <div v-fade-in class="mb-14 flex w-[95%] flex-col pc:max-w-[1200px]">
        <MoleculesDoubleSquareTagMenu
          class="mb-4"
          :title="contact.title"
          :subTitle="contact.subTitle"
        ></MoleculesDoubleSquareTagMenu>
        <!-- 説明 -->
        <AtomsBasicTitle
          :text="contact.outline"
          :isBold="false"
          size="text-[16px] text-[#475569]"
          spaceY="space-y-2"
          class="mb-14"
        ></AtomsBasicTitle>
        <div
          class="relative flex h-fit w-full flex-col items-center justify-center overflow-hidden rounded-[10px] py-8 px-5 pc:h-[572px]"
        >
          <img
            :src="contact.contentImgUrl"
            class="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            alt="contact.contentTitle"
          />
          <!-- タイトル -->
          <AtomsBasicTitle
            class="mb-6 text-center text-[24px] font-bold text-white tb:text-[56px]"
            :text="contact.contentTitle"
            spaceY="space-y-0"
          ></AtomsBasicTitle>
          <!-- 仕切り -->
          <div class="mb-6 h-1 w-12 rounded-full bg-white"></div>
          <!-- 説明 -->
          <AtomsBasicOutline
            class="mb-14 text-center text-[15px] text-white"
            :text="contact.contentOutline"
            :isBold="false"
          ></AtomsBasicOutline>
          <!-- お問い合わせボタン -->
          <NuxtLink
            :to="contact.contentLink"
            class="relative mb-5 flex w-[95%] cursor-pointer items-center justify-center rounded-[10px] bg-white py-8 text-[22px] font-bold text-[#ef4444] transition-all duration-300 hover:translate-y-[5px] tb:w-[410px] tb:px-[95px]"
          >
            お問い合わせはこちら
            <font-awesome-icon
              class="absolute right-4 top-1/2 -translate-y-1/2 text-[20px] text-[#ef4444] tb:right-8"
              :icon="['fas', 'angle-right']"
            />
          </NuxtLink>
          <div class="text-[13px] text-white">
            {{ contact.contentSubTitle }}
          </div>
        </div>
      </div>

      <!-- Value Update -->
      <div
        v-fade-in
        class="relative h-[400px] w-[95%] tb:h-[834px] pc:max-w-[1200px]"
      >
        <!-- Value Updateの大きなタイトル -->
        <AtomsBasicTitle
          class="font-futuraBold"
          spaceY="-space-y-12 tb:-space-y-24"
          size="text-[100px] tb:text-[200px]"
          :text="valueUpdate.title"
        ></AtomsBasicTitle>

        <!-- Value Updateの小さなサブタイトル -->
        <AtomsBasicOutline
          class="absolute top-[148px] left-[620px]"
          size="text-[20px]"
          :text="valueUpdate.outline"
        ></AtomsBasicOutline>

        <!-- パララックスイメージ -->
        <div class="absolute top-0 left-4 h-full w-full overflow-hidden">
          <div class="relative flex h-full w-full justify-between px-10">
            <!-- 1枚目 -->
            <ScrollParallax
              class="absolute left-0 -top-[130%] z-50"
              :speed="0.15"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[0].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 2枚目 -->
            <ScrollParallax
              class="absolute left-1/4 top-[210%] z-50"
              :speed="0.13"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[1].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 3枚目 -->
            <ScrollParallax
              class="absolute left-2/4 -top-[105%] z-50"
              :speed="0.12"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[2].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>

            <!-- 4枚目 -->
            <ScrollParallax
              class="absolute left-3/4 top-[210%] z-50"
              :speed="0.14"
              :up="false"
              :down="true"
              direction="y"
            >
              <AtomsBasicImage
                :imgUrl="valueUpdate.imgUrls[3].imgUrl"
                imgHeight="h-[200px] tb:h-[280px]"
                imgWidth="w-[140px] tb:w-[200px]"
              ></AtomsBasicImage>
            </ScrollParallax>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* フェードトランジションのスタイル */
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
</style>
