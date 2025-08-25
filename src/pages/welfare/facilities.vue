<script setup lang="ts">
  import type { FacilitiesObject } from '~/types/pages/daycare/facilities';
  import { useFacilitiesStore } from '~/stores/pages/daycare/facilities';
  import type { SystemDevObject } from '~/types/pages/system-development';
  import { usePagesSystemDevStore } from '~/stores/pages/system-development';

  // 施設情報一覧ページ情報をPiniaから取得
  const facilitiesStore = useFacilitiesStore();

  if (Object.keys(facilitiesStore.header).length == 0) {
    await facilitiesStore.fetchFacilities();
  }
  const { header, informations, categories }: FacilitiesObject =
    facilitiesStore;

  // 事業内容ページ情報をPiniaから取得
  const pagesSystemDevStore = usePagesSystemDevStore();
  if (Object.keys(pagesSystemDevStore.header).length == 0) {
    await pagesSystemDevStore.fetchPagesSystemDev();
  }
  const { valueUpdate }: SystemDevObject = pagesSystemDevStore;

  const mainImages = ref(informations.map((information) => information.imgUrl));
  const clickGallery = (infoIndex: number, imageIndex: number) => {
    mainImages.value[infoIndex] = informations[infoIndex].gallery[imageIndex];
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
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth);
  });
</script>

<template>
  <div class="flex w-full flex-col items-center">
    <!-- ヘッダー -->
    <div class="h-[240px] w-full pc:h-[240px]">
      <AtomsBasicHeader
        :imgUrl="header.imgUrl"
        class="h-full w-full"
      ></AtomsBasicHeader>
    </div>
    <!-- ボディ -->
    <div
      class="relative flex w-full flex-col items-center space-y-8 bg-bancor-gray700 pb-[128px]"
    >
      <!-- ヘッダータイトル -->
      <div
        class="absolute -top-32 flex w-[95%] flex-col space-y-3 pc:max-w-[1100px]"
      >
        <div class="text-base text-white">{{ header.title }}</div>
        <AtomsFuturaItalicText
          :text="header.subTitle"
          color="text-white"
          size="text-[32px] tb:text-[36px] pc:text-[40px]"
        ></AtomsFuturaItalicText>
      </div>

      <div
        class="flex w-[95%] flex-col justify-between space-y-4 tb:flex-row tb:space-x-8 tb:space-y-0 pc:max-w-[1200px]"
      >
        <!-- カテゴリ -->
        <div
          class="flex w-full flex-col space-y-2 rounded-3xl border-bancor-gray500 bg-bancor-white100 py-4 pl-[50px] pc:max-w-[1200px]"
        >
          <div>カテゴリ</div>
          <div class="flex items-center space-x-4">
            <div
              v-for="category in categories"
              class="flex items-center justify-center rounded-full border border-bancor-black100 py-2 px-6"
            >
              {{ category.category }}
            </div>
          </div>
        </div>
      </div>

      <!-- 星ノ学園　北筑校 -->
      <div
        v-for="(information, infoIndex) in informations"
        class="flex w-[95%] flex-col items-center space-y-6 rounded-3xl border-bancor-gray500 bg-bancor-white100 py-[28px] tb:flex-row tb:space-y-0 pc:max-w-[1200px] pc:space-x-4"
      >
        <!-- 左文面 -->
        <div class="flex w-[95%] flex-col tb:mx-8 tb:w-[50%]">
          <!-- アイコンとタイトル -->
          <div class="mb-8 flex space-x-[12px]">
            <!-- アイコン -->
            <AtomsBasicIcon
              class="mt-1"
              iconUrl="/images/daycare/enquete/03.png"
              size="h-[32px]"
            ></AtomsBasicIcon>
            <!-- タイトル -->
            <div class="flex flex-col">
              <!-- タイトル -->
              <AtomsBasicTitle
                :text="`${information.region} | ${information.service}`"
                size="text-[18px]"
              ></AtomsBasicTitle>
              <!-- 学園名 -->
              <div class="text-[28px] font-bold">{{ information.name }}</div>
            </div>
          </div>
          <!-- 所在地等の施設情報 -->
          <div
            class="flex flex-col space-y-2 rounded-2xl border border-[#e8e8e8] px-4 py-8 pc:px-12"
          >
            <!-- 所在地 -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-pin.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">所在地</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col">
                <div class="text-[15px]">〒{{ information.postCode }}</div>
                <div class="mb-2 text-[15px]">{{ information.address }}</div>
                <NuxtLink
                  :to="information.mapLinkUrl"
                  class="flex cursor-pointer items-center space-x-2 text-[15px] text-[#9ca3af]"
                >
                  <div>Googleマップでひらく</div>
                  <font-awesome-icon :icon="['fas', 'angle-right']" />
                </NuxtLink>
              </div>
            </div>
            <!-- 電話番号 -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-tel.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">電話番号</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col">
                <div class="text-[15px]">{{ information.tel }}</div>
              </div>
            </div>
            <!-- FAX -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-fax.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">FAX</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col">
                <div class="text-[15px]">{{ information.fax }}</div>
              </div>
            </div>
            <!-- 携帯番号 -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-mobile.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">携帯番号</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col">
                <div class="text-[15px]">{{ information.mobileTel }}</div>
              </div>
            </div>
            <!-- 利用時間 -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-time.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">利用時間</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col">
                <div class="text-[15px]">
                  平日：児童発達支援　{{ information.timeChildSupport }}
                </div>
                <div class="text-[15px]">
                  放課後等デイサービス　{{ information.timeAfterSchool }}
                </div>
                <div class="text-[15px]">
                  春/夏/冬休み/土曜日　{{ information.timeSaturday }}
                </div>
                <div class="text-[15px]">定休日　{{ information.holiday }}</div>
              </div>
            </div>
            <!-- 利用対象 -->
            <div class="flex space-x-4">
              <!-- 項目 -->
              <div class="flex w-[100px] flex-shrink-0 items-start space-x-1">
                <AtomsBasicIcon
                  class="flex h-[22.5px] w-[22.5px] items-center justify-center"
                  iconUrl="/images/daycare/facilities/icon-girl.png"
                  size="h-[12.5px]"
                >
                </AtomsBasicIcon>
                <div class="text-[15px] font-bold">利用対象</div>
              </div>
              <!-- 情報 -->
              <div class="flex flex-col space-y-2">
                <div
                  v-for="target in information.targets"
                  class="flex flex-col"
                >
                  <div class="text-[15px] font-bold">
                    {{ target.title }}
                  </div>
                  <div class="text-[15px]">
                    {{ target.outline }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 写真 -->
        <div class="flex w-[95%] flex-col tb:w-[40%]">
          <!-- メイン写真 -->
          <div
            class="mb-4 h-[300px] w-full overflow-hidden rounded-xl pc:h-[350px]"
          >
            <img :src="mainImages[infoIndex]" class="h-full object-cover" />
          </div>
          <!-- ギャラリー -->
          <div class="flex w-full space-x-4">
            <div
              v-for="(gallery, imageIndex) in information.gallery"
              class="cursor-pointer overflow-hidden rounded-xl"
            >
              <img
                @click="clickGallery(infoIndex, imageIndex)"
                :src="gallery"
                class="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Value Update -->
    <div class="relative h-[400px] w-[95%] tb:h-[834px] pc:max-w-[1100px]">
      <!-- Value Updateの大きなタイトル -->
      <AtomsBasicTitle
        class="font-futuraBold"
        spaceY="-space-y-12 tb:-space-y-24"
        size="text-[100px] tb:text-[200px]"
        :text="valueUpdate.title"
      ></AtomsBasicTitle>

      <!-- Value Updateの小さなサブタイトル -->
      <AtomsBasicOutline
        v-if="!isSmartPhone"
        class="absolute top-[148px] left-[620px]"
        size="text-[20px]"
        :text="valueUpdate.outline"
      ></AtomsBasicOutline>

      <!-- パララックスイメージ -->
      <div class="absolute top-0 left-4 h-full w-full overflow-hidden">
        <div class="relative flex h-full w-full justify-between px-10">
          <!-- 1枚目 -->
          <ScrollParallax
            v-if="!isSmartPhone"
            class="absolute left-0 top-[60%] z-50"
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
            v-if="!isSmartPhone"
            class="absolute left-1/4 top-[50%] z-50"
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
            v-if="!isSmartPhone"
            class="absolute left-2/4 top-[75%] z-50"
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
            v-if="!isSmartPhone"
            class="absolute left-3/4 top-[40%] z-50"
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
</template>
