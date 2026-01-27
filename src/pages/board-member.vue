<script setup lang="ts">
  import type { BoardMemberObject } from '~/types/pages/board-member';
  import { usePagesBoardMemberStore } from '~/stores/pages/board-member';

  // layoutを指定
  definePageMeta({
    layout: 'company',
  });

  // 事業内容ページ情報をPiniaから取得
  const pagesBoardMemberStore = usePagesBoardMemberStore();
  if (Object.keys(pagesBoardMemberStore.departments).length == 0) {
    await pagesBoardMemberStore.fetchPagesBoardMember();
  }
  if (Object.keys(pagesBoardMemberStore.common).length == 0) {
    await pagesBoardMemberStore.fetchPagesBoardMemberCommon();
  }
  const { departments, common }: BoardMemberObject = pagesBoardMemberStore;

  // 全部署のメンバーを統合した配列を作成（メンバー詳細表示用）
  const allMembers = computed(() => {
    const members: Array<{ member: any; departmentIndex: number; memberIndex: number }> = [];
    departments.forEach((department, departmentIndex) => {
      department.members.forEach((member, memberIndex) => {
        members.push({ member, departmentIndex, memberIndex });
      });
    });
    return members;
  });

  // 部署インデックスとメンバーインデックスから全部署統合後のインデックスを取得する関数
  const getGlobalMemberIndex = (departmentIndex: number, memberIndex: number): number => {
    let globalIndex = 0;
    for (let i = 0; i < departmentIndex; i++) {
      globalIndex += departments[i].members.length;
    }
    return globalIndex + memberIndex;
  };

  // メンバーインデックス（全部署統合後のインデックス）
  const currentMemberIndex = ref(0);
  provide('currentMemberIndex', currentMemberIndex);

  // メンバー詳細を表示するかどうか
  const isShowDetail = ref(false);
  provide('isShowDetail', isShowDetail);

  // サイドバーの固定まわり
  const sidebar = ref(null);
  const main = ref(null);

  const handleScroll = () => {
    if (isSmartPhone.value) return;
    // sidebarがHTMLElementであることをTypeScriptに伝える
    const sidebarElement = sidebar.value as HTMLElement | null;
    const mainElement = main.value as HTMLElement | null;
    if (!sidebarElement) return;
    if (!mainElement) return;

    const sidebarTop = sidebarElement.getBoundingClientRect().top;
    console.log(`sidebarTop: ${sidebarTop}`);
    console.log(`scrollY: ${window.scrollY}`);

    // mainの高さを取得
    const mainHeight = mainElement.offsetHeight;
    console.log(`mainHeight: ${mainHeight}`);

    if (
      sidebarTop <= 144 &&
      window.scrollY > 170 &&
      window.scrollY <= mainHeight - 500
    ) {
      sidebarElement.style.position = 'fixed';
      sidebarElement.style.top = '144px';
    } else if (window.scrollY > mainHeight - 500) {
      sidebarElement.style.position = 'fixed';
      sidebarElement.style.top = `${
        144 - (window.scrollY - (mainHeight - 500))
      }px`;
    } else {
      sidebarElement.style.position = 'relative';
      sidebarElement.style.top = 'auto';
    }
  };

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

  onMounted(() => {
    nextTick(() => {
      updateWidth();
    });
    window.addEventListener('resize', updateWidth);
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
    window.removeEventListener('scroll', handleScroll);
  });
</script>

<template>
  <div
    class="relative flex w-full flex-col items-center justify-between overflow-hidden"
  >
    <!-- 背景 -->
    <div class="absolute top-0 left-0 -z-50 h-full w-full bg-[#f3f7fa]"></div>
    <!-- ヘッダー -->
    <div class="flex h-[180px] w-[95%] tb:h-[320px] pc:max-w-[1460px]">
      <div class="mt-[100px] flex flex-col gap-1 tb:mt-[160px] tb:gap-3">
        <!-- 小さなタイトル -->
        <div class="text-[14px] font-bold tb:text-[16px]">役員・責任者紹介</div>
        <!-- 大きなタイトル -->
        <AtomsFuturaBoldText
          text="Board Member"
          size="text-[28px] tb:text-[40px]"
        />
      </div>
    </div>
    <!-- 背景アニメーション -->
    <div
      class="fixed top-[-130px] right-[-400px] -z-10 h-[731px] w-[960px] overflow-hidden tb:right-[-150px]"
    >
      <video autoplay loop muted playsinline class="h-full w-full object-cover">
        <source src="/movies/sc.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- ボディ -->
    <div
      class="flex w-[95%] flex-col gap-4 tb:flex-row pc:max-w-[1460px] pc:gap-8"
    >
      <!-- サイド -->
      <div class="relative w-[238px] flex-none">
        <div ref="sidebar">
          <OrganismsCompanyInfoSideMenu />
        </div>
      </div>
      <!-- メイン -->
      <div ref="main" class="mb-[128px] flex w-full flex-col gap-14">
        <div
          class="relative flex w-full flex-col items-center rounded-[10px] border border-[#cbd5e1] bg-white py-8"
        >
          <!-- メンバー紹介等 -->
          <div class="mb-[156px] flex w-full flex-col items-center px-12">
            <!-- 役職見出し -->
            <div class="mb-6 w-full border-b border-[#cbd5e1] py-[14px]">
              <p class="text-[28px] font-bold">構成メンバー</p>
            </div>
            <!-- 部署ごとのメンバーカード一覧 -->
            <div class="flex w-full flex-col gap-12">
              <div
                v-for="(department, departmentIndex) in departments"
                :key="department.department"
                class="flex w-full flex-col gap-6"
              >
                <!-- 部署名 -->
                <div class="mb-2 text-[24px] font-bold">
                  {{ department.department }}
                </div>
                <!-- メンバーカード一覧 -->
                <div
                  class="flex w-full flex-col gap-5 pl-[20px] pc:flex-row pc:flex-wrap pc:justify-between pc:gap-0"
                >
                  <MoleculesBoardMemberCard
                    v-for="(member, memberIndex) in department.members"
                    :key="`${department.department}-${member.name}`"
                    :member="member"
                    :memberIndex="getGlobalMemberIndex(departmentIndex, memberIndex)"
                    class="w-full tb:w-[324px]"
                  />
                  <!-- 3つ未満の場合は見えない要素で埋める -->
                  <div
                    v-for="n in Math.max(0, 3 - department.members.length)"
                    :key="`placeholder-${n}`"
                    class="hidden w-full tb:w-[324px] pc:block pc:opacity-0 pc:pointer-events-none"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <!-- 全世界80億人の為のインフラを。 -->
          <div v-fade-in class="mb-[156px] flex flex-col items-center">
            <!-- 画像 -->
            <div class="relative flex h-[450px] w-full items-center">
              <div class="h-[360px] w-full overflow-hidden">
                <img :src="common.imgUrl" class="h-full object-cover" />
              </div>
              <div
                class="absolute top-0 right-[83px] h-[50px] w-[371px] bg-[#60a5fa]"
              ></div>
              <div
                class="absolute top-[276px] right-[192px] h-[27px] w-[27px] bg-[#60a5fa]"
              ></div>
              <div
                class="absolute bottom-[43px] left-[47px] h-[88px] w-[74px] bg-[#1e40af]"
              ></div>
              <div
                class="absolute bottom-0 right-[47px] h-[139px] w-[139px] bg-[#1e40af]"
              ></div>
            </div>
            <!-- サブタイトル -->
            <div class="mb-[40px] text-[24px] font-bold">
              {{ common.subTitle }}
            </div>
            <!-- メインメッセージ -->
            <AtomsBasicTitle
              size="text-[36px] pc:text-[48px]"
              spaceY="space-y-[40px]"
              color="text-gradient-bancor-blue"
              :text="common.title"
              class="mb-[48px] w-[290px] text-center pc:w-[390px]"
            ></AtomsBasicTitle>
            <!-- 説明 -->
            <AtomsBasicOutline
              size="text-[24px] text-[16px]"
              color="text-[#64748b]"
              :text="common.outline"
              :isbold="false"
              class="mb-[48px] w-[95%] text-center pc:w-[554px]"
            ></AtomsBasicOutline>
            <!-- ビジョン・パーパスへのボタン -->
            <MoleculesDetailButton
              v-if="common.linkUrl.length > 0"
              :linkUrl="common.linkUrl"
              :text="common.linkTitle"
            ></MoleculesDetailButton>
          </div>
        </div>
        <!-- パンくずリスト -->
        <div
          class="flex w-full items-center gap-2 rounded-xl border border-[#cbd5e1] py-5 px-6 font-bold text-[#101010]"
        >
          <font-awesome-icon :icon="['fas', 'house']" class="text-[10px]" />
          <NuxtLink to="/" class="text-xs">TOP</NuxtLink>
          <div class="text-xs">></div>
          <NuxtLink to="/journal" class="text-xs">役員・責任者紹介</NuxtLink>
        </div>
      </div>
    </div>

    <!-- メンバー詳細 -->
    <OrganismsBoardMemberDetail
      v-if="allMembers[currentMemberIndex]"
      :member="allMembers[currentMemberIndex].member"
      :memberBg="common.memberBg"
    />
    <!-- メンバー詳細時のグレーフィルター -->
    <div
      v-if="isShowDetail"
      class="fixed top-0 left-0 z-40 h-screen w-screen bg-[#000000] bg-opacity-50"
      @click="isShowDetail = false"
    ></div>
  </div>
</template>
