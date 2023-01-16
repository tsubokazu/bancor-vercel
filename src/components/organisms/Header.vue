<script setup lang="ts">
  const menuObjects = [
    {
      linkName: '/company-info',
      title: '会社案内',
      categories: [
        {
          linkName: '/company-profile',
          title: '会社概要',
          imgUrl: '/public/会社概要.png',
        },
        {
          linkName: '/message',
          title: '代表メッセージ',
          imgUrl: '/public/代表メッセージ.png',
        },
        {
          linkName: '/vision',
          title: 'ビジョン',
          imgUrl: '/public/ビジョン.jpg',
        },
      ],
    },
    {
      linkName: '/service',
      title: '事業内容',
      categories: [
        {
          linkName: '/system-development',
          title: 'システム開発',
          imgUrl: '/public/システム開発.jpg',
        },
        {
          linkName: '/web-marcketing',
          title: 'ウェブマーケティング事業',
          imgUrl: '/public/代表メッセージ.png',
        },
        {
          linkName: '/nurse-welfare',
          title: '介護・福祉施設向けシステム開発',
          imgUrl: '/public/介護福祉.jpg',
        },
        {
          linkName: '/dx-support',
          title: 'DX支援',
          imgUrl: '/public/DX支援.jpg',
        },
      ],
    },
    { linkName: '/journal', title: 'Bancor Journal', categories: [] },
    {
      linkName: '/recruit',
      title: '採用情報',
      categories: [
        {
          linkName: '/dx-recruit',
          title: 'DX支援事業での募集カテゴリ',
          imgUrl: '/public/DX支援.jpg',
        },
        {
          linkName: '/web-marcket-recruit',
          title: 'ウェブマーケティング事業での募集カテゴリ',
          imgUrl: '/public/ウェブマーケティング募集.jpg',
        },
        {
          linkName: '/system-dev-recruit',
          title: 'システム開発事業での募集カテゴリ',
          imgUrl: '/public/システム開発.jpg',
        },
      ],
    },
    {
      linkName: '/news',
      title: 'ニュースルーム',
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
  const hoverMenuObject = ref({
    linkName: '',
    title: 'string',
    categories: [{}],
  });
  const mouseOverAction = (index: number) => {
    hoverFlag.value = true;
    hoverIndex.value = index;
    hoverAnimation.value = 'animate-scale-down-ver-top';
    hoverMenuObject.value.linkName = menuObjects[index].linkName;
    hoverMenuObject.value.title = menuObjects[index].title;
    hoverMenuObject.value.categories = menuObjects[index].categories;
  };
  const mouseLeaveAction = () => {
    //hoverFlag.value = false;
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
          @mouseover="mouseOverAction(index)"
          >{{ menuObject.title }}</MoleculesUnderLineMenuButton
        >
        <AtomsMenuBar></AtomsMenuBar>
        <AtomsSearchIcon></AtomsSearchIcon>
        <AtomsOvalButton
          color="bancor-blue300"
          isGradient="true"
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
