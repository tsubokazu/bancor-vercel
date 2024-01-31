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
    posts.value.details.ext_19,
    posts.value.details.ext_22,
  ];

  const contentOutlinesArray: Array<Array<string>> = [
    posts.value.details.ext_6,
    posts.value.details.ext_25,
    posts.value.details.ext_26,
    posts.value.details.ext_27,
    posts.value.details.ext_28,
    posts.value.details.ext_29,
  ];

  const contentLinksArray: Array<Array<string>> = [
    posts.value.details.ext_8,
    posts.value.details.ext_11,
    posts.value.details.ext_14,
    posts.value.details.ext_17,
    posts.value.details.ext_20,
    posts.value.details.ext_23,
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
    posts.value.details.ext_21.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
    posts.value.details.ext_24.map((urlObj: KurocoUrlObject) =>
      getUrlArray(urlObj)
    ),
  ];
  console.log(JSON.stringify(contentImagesArray));

  interface MegamenuContent {
    title: string;
    outline: string;
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
        outline:
          Object.keys(contentOutlinesArray[j]).length >= i + 1
            ? contentOutlinesArray[j][i]
            : '',
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

  const mouseOverIndex = ref(-1);
  const mouseOverAction = (index: number) => {
    mouseOverIndex.value = index;
  };
  const mouseLeaveAction = () => {
    mouseOverIndex.value = -1;
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
      class="flex h-[72px] w-[95%] items-center justify-between rounded-lg bg-white pr-4"
    >
      <!-- ホームロゴ -->
      <div class="flex h-full items-center justify-center">
        <AtomsLogo
          logoUrl="/logo-black-l.png"
          linkUrl="/"
          width="189"
          height="39"
        ></AtomsLogo>
      </div>
      <!-- リンクメニュー -->
      <div class="flex h-full items-center space-x-8 pr-16">
        <div
          class="grid translate-y-[8px] grid-cols-5 items-center justify-items-center gap-4"
        >
          <MoleculesUnderLineTextButton
            v-for="(menuObject, index) in menuObjects"
            :key="menuObject.linkUrl"
            :linkUrl="menuObject.linkUrl"
            :hoverIndex="hoverIndex"
            :menuIndex="index"
            @mouseover="mouseOverAction(index)"
            class="relative hidden pc:block"
            >{{ menuObject.title }}
          </MoleculesUnderLineTextButton>
          <!-- ホバー時のポップアップメニュー -->
          <div class="relative" v-for="(menuObject, index) in menuObjects">
            <div
              class="absolute top-0 left-1/2 grid h-fit -translate-x-1/2 grid-flow-row gap-2 rounded-md bg-white px-5 py-3 shadow-[0_0_4px_4px_rgba(0,0,0,0.1)] transition-opacity duration-300"
              :class="{
                'w-[680px] grid-cols-2': menuObject.contents.length > 3,
                'w-[340px] grid-cols-1': menuObject.contents.length <= 3,
                'hidden': menuObject.contents.length == 0,
                'scale-0 opacity-0': index != mouseOverIndex,
                'opacity-1 scale-100': index == mouseOverIndex,
              }"
            >
              <NuxtLink
                :to="content.linkUrl"
                v-for="content in menuObject.contents"
                class="group my-2 flex w-[292px] items-center gap-4"
              >
                <!-- アイコン -->
                <div
                  class="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-[#F1F5F9]"
                >
                  <img
                    :src="content.imgUrl"
                    alt=""
                    class="h-[26px] object-cover"
                  />
                </div>
                <!-- タイトル・テキスト -->
                <div class="flex flex-col">
                  <!-- タイトルとやじるし -->
                  <div class="flex items-center gap-2">
                    <div class="text-[16px] font-bold text-[#020617]">
                      {{ content.title }}
                    </div>
                    <div class="flex-none overflow-hidden">
                      <font-awesome-icon
                        :icon="['fas', 'right-long']"
                        class="-translate-x-full text-[12px] text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0"
                      />
                    </div>
                  </div>
                  <div class="text-[12px] font-thin text-[#64748B]">
                    {{ content.outline }}
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
        <AtomsDivLine class="hidden pc:block"></AtomsDivLine>
        <!-- <AtomsButtonSearch class="hidden pc:block"></AtomsButtonSearch> -->
        <AtomsButtonOval
          linkUrl="/contact"
          bgColor="bg-[#2563eb]"
          textColor="text-white"
          class="hidden tb:block"
          >お問い合わせ</AtomsButtonOval
        >
      </div>
    </div>
    <Transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-500"
      leave-to-class="opacity-0"
    >
      <OrganismsSiteMenu
        v-show="humbergerStore.clickHumbergerFlag"
        class="fixed top-0 left-0 z-30"
      ></OrganismsSiteMenu>
    </Transition>
    <AtomsButtonHamburger class="right-[3.5%] z-40"></AtomsButtonHamburger>
  </nav>
</template>
