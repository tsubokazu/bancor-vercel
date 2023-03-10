<script setup lang="ts">
  import { KurocoUrlObject } from '~/types/kuroco';
  const config = useRuntimeConfig();
  const baseUrl = config.public.kurocoApiUrl;
  const headerEndpoint = config.public.kurocoHeader;
  const { data: posts } = (await useFetch(
    `${baseUrl}${headerEndpoint}`
  )) as any;

  const logoUrl: string = posts.value.details.ext_1.url;
  const menuTitles: Array<string> = posts.value.details.ext_2;
  const menuLinks: Array<string> = posts.value.details.ext_3;
  const megamenuTitles: Array<string> = posts.value.details.ext_4;
  const megamenuSubtitles: Array<string> = posts.value.details.ext_5;
  const contentTitlesArray: Array<Array<string>> = [
    posts.value.details.ext_7,
    posts.value.details.ext_10,
    posts.value.details.ext_13,
    posts.value.details.ext_16,
  ];
  const contentLinksArray: Array<Array<string>> = [
    posts.value.details.ext_8,
    posts.value.details.ext_11,
    posts.value.details.ext_14,
    posts.value.details.ext_17,
  ];
  const getUrlArray = (urlObj: KurocoUrlObject): string => {
    if (Object.keys(urlObj).length <= 0) return '';
    return 'url' in urlObj ? urlObj.url : '';
  };
  const contentImagesArray: Array<Array<string>> = [
    posts.value.details.ext_9.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
    posts.value.details.ext_12.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
    posts.value.details.ext_15.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
    posts.value.details.ext_18.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
  ];
  interface MegamenuContent {
    title: string;
    linkUrl: string;
    imgUrl: string;
  }

  interface HeaderMenuObject {
    title: string;
    linkUrl: string;
    enTitle: string;
    subTitle: string;
    contents: Array<MegamenuContent>;
  }
  const menuObjects: Array<HeaderMenuObject> = [];
  for (const [i, menuTitle] of menuTitles.entries()) {
    const contents: Array<MegamenuContent> = [];
    for (const [j, contentTitles] of contentTitlesArray.entries()) {
      if (contentTitles[i] == '' || contentTitles[i] == undefined) break;

      contents.push({
        title: contentTitles[i],
        linkUrl:
          Object.keys(contentLinksArray[j]).length >= i + 1
            ? contentLinksArray[j][i]
            : '',
        imgUrl:
          Object.keys(contentImagesArray[j]).length >= i + 1
            ? contentImagesArray[j][i]
            : '',
      });
    }
    menuObjects.push({
      title: menuTitle,
      linkUrl: menuLinks[i],
      enTitle: megamenuTitles[i],
      subTitle: megamenuSubtitles[i],
      contents: contents,
    });
  }

  const hoverFlag = ref(false);
  const hoverIndex = ref(-1);
  const hoverAnimation = ref('');
  interface Content {
    title: string;
    linkUrl: string;
    imgUrl: string;
  }
  const hoverMenuObject: {
    title: string;
    linkUrl: string;
    enTitle: string;
    subTitle: string;
    contents: Array<Content>;
  } = reactive({
    linkUrl: '',
    title: '',
    enTitle: '',
    subTitle: '',
    contents: [],
  });
  const mouseOverAction = (index: number) => {
    hoverFlag.value = true;
    hoverIndex.value = index;
    hoverAnimation.value = 'animate-scale-down-ver-top';
    hoverMenuObject.linkUrl = menuObjects[index].linkUrl;
    hoverMenuObject.title = menuObjects[index].title;
    hoverMenuObject.enTitle = menuObjects[index].enTitle;
    hoverMenuObject.subTitle = menuObjects[index].subTitle;
    hoverMenuObject.contents = menuObjects[index].contents;
  };
  const mouseLeaveAction = () => {
    hoverIndex.value = -1;
    hoverAnimation.value = 'animate-scale-up-ver-top';
  };

  const humbergerStore = useHumbergerStore();
</script>

<template>
  <nav
    @mouseleave="mouseLeaveAction()"
    class="pointer-events-auto flex flex-col items-center"
  >
    <div
      v-show="!humbergerStore.clickHumbergerFlag"
      class="flex w-[95%] items-center justify-between rounded-lg bg-white pr-4"
    >
      <div>
        <AtomsLogo :logoUrl="logoUrl" linkUrl="/"></AtomsLogo>
      </div>
      <div class="flex items-center space-x-8 pr-16">
        <MoleculesUnderLineTextButton
          v-for="(menuObject, index) in menuObjects"
          :key="menuObject.linkUrl"
          :linkUrl="menuObject.linkUrl"
          :hoverIndex="hoverIndex"
          :menuIndex="index"
          @mouseover="mouseOverAction(index)"
          class="hidden pc:block"
          >{{ menuObject.title }}</MoleculesUnderLineTextButton
        >
        <AtomsDivLine class="hidden pc:block"></AtomsDivLine>
        <AtomsButtonSearch></AtomsButtonSearch>
        <AtomsButtonOval
          linkUrl="/"
          bgColor="bg-bancor-blue300"
          :isGradient="true"
          fromColor="from-bancor-blue300"
          toColor="to-bancor-blue400"
          textColor="text-white"
          class="hidden tb:block"
          >お問い合わせ</AtomsButtonOval
        >
      </div>
    </div>
    <OrganismsMegaMenu
      v-show="
        hoverFlag &&
        hoverMenuObject.contents.length > 0 &&
        !humbergerStore.clickHumbergerFlag
      "
      class="relative top-2 w-[95%]"
      :class="hoverAnimation"
      :menuObject="hoverMenuObject"
    ></OrganismsMegaMenu>
    <OrganismsSiteMenu
      v-show="humbergerStore.clickHumbergerFlag"
      class="fixed -top-3 left-0 z-10"
    ></OrganismsSiteMenu>
    <AtomsButtonHamburger class="right-[3.5%] z-20"></AtomsButtonHamburger>
  </nav>
</template>
