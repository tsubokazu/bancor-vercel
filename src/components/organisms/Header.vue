<script setup lang="ts">
  const menuObjects = [
    {
      linkName: '/company-info',
      title: '会社案内',
      enTitle: 'COMPANY',
      categories: [
        {
          linkName: '/company-profile',
          title: '会社概要',
          imgUrl: '/会社概要.png',
        },
        {
          linkName: '/message',
          title: '代表メッセージ',
          imgUrl: '/代表メッセージ.png',
        },
        {
          linkName: '/vision',
          title: 'ビジョン',
          imgUrl: '/ビジョン.jpg',
        },
      ],
    },
    {
      linkName: '/service',
      title: '事業内容',
      enTitle: 'Service',
      categories: [
        {
          linkName: '/system-development',
          title: 'システム開発',
          imgUrl: '/システム開発.jpg',
        },
        {
          linkName: '/web-marcketing',
          title: 'ウェブマーケティング事業',
          imgUrl: '/代表メッセージ.png',
        },
        {
          linkName: '/nurse-welfare',
          title: '介護・福祉施設向けシステム開発',
          imgUrl: '/介護福祉.jpg',
        },
        {
          linkName: '/dx-support',
          title: 'DX支援',
          imgUrl: '/DX支援.jpg',
        },
      ],
    },
    {
      linkName: '/journal',
      title: 'Bancor Journal',
      enTitle: 'Bancor Journal',
      categories: [],
    },
    {
      linkName: '/recruit',
      title: '採用情報',
      enTitle: 'Recruit',
      categories: [
        {
          linkName: '/dx-recruit',
          title: 'DX支援事業での募集カテゴリ',
          imgUrl: '/DX支援.jpg',
        },
        {
          linkName: '/web-marcket-recruit',
          title: 'ウェブマーケティング事業での募集カテゴリ',
          imgUrl: '/ウェブマーケティング募集.jpg',
        },
        {
          linkName: '/system-dev-recruit',
          title: 'システム開発事業での募集カテゴリ',
          imgUrl: '/システム開発.jpg',
        },
      ],
    },
    {
      linkName: '/news',
      title: 'ニュースルーム',
      enTitle: 'NewsRoom',
      categories: [
        {
          linkName: '/press-release',
          title: 'プレスリリース',
          imgUrl: '',
        },
        {
          linkName: '/service-news',
          title: 'サービスニュース',
          imgUrl: '',
        },
      ],
    },
  ];
  const hoverFlag = ref(false);
  const hoverIndex = ref(-1);
  const hoverAnimation = ref('');
  interface Category {
    linkName: string;
    title: string;
    imgUrl: string;
  }
  const hoverMenuObject: {
    linkName: string;
    title: string;
    enTitle: string;
    categories: Array<Category>;
  } = reactive({
    linkName: '',
    title: '',
    enTitle: '',
    categories: [],
  });
  const mouseOverAction = (index: number) => {
    hoverFlag.value = true;
    hoverIndex.value = index;
    hoverAnimation.value = 'animate-scale-down-ver-top';
    hoverMenuObject.linkName = menuObjects[index].linkName;
    hoverMenuObject.title = menuObjects[index].title;
    hoverMenuObject.enTitle = menuObjects[index].enTitle;
    hoverMenuObject.categories = menuObjects[index].categories;
  };
  const mouseLeaveAction = () => {
    //hoverFlag.value = false;
    hoverIndex.value = -1;
    hoverAnimation.value = 'animate-scale-up-ver-top';
  };
</script>

<template>
  <nav @mouseleave="mouseLeaveAction()">
    <div
      class="h-18 container mx-auto flex items-center justify-between rounded-lg bg-white px-12"
    >
      <div>
        <AtomsLogo></AtomsLogo>
      </div>
      <div class="flex items-center space-x-8">
        <MoleculesUnderLineMenuButton
          v-for="(menuObject, index) in menuObjects"
          :key="menuObject.linkName"
          :linkName="menuObject.linkName"
          :hoverIndex="hoverIndex"
          :menuIndex="index"
          @mouseover="mouseOverAction(index)"
          >{{ menuObject.title }}</MoleculesUnderLineMenuButton
        >
        <AtomsMenuBar></AtomsMenuBar>
        <AtomsSearchIcon></AtomsSearchIcon>
        <AtomsOvalButton
          linkName="/"
          bgColor="bancor-blue300"
          :isGradient="true"
          toColor="bancor-blue400"
          textColor="white"
          >お問い合わせ</AtomsOvalButton
        >
        <AtomsHamburgerButton></AtomsHamburgerButton>
      </div>
    </div>
    <OrganismsMegaMenu
      v-show="hoverFlag"
      class="relative top-2"
      :class="hoverAnimation"
      :menuObject="hoverMenuObject"
    ></OrganismsMegaMenu>
  </nav>
</template>
