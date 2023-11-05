<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  import { load } from 'cheerio';
  import axios from 'axios';
  const props = defineProps<{ journalObject: JournalObject }>();
  const instagramShareLink = `https://www.instagram.com/`;
  const twitterShareLink = `http://twitter.com/share?url=http://bancor.co.jp/journal/${props.journalObject.topicsId}`;

  // Bancor Journalの開発関連記事をPiniaから取得
  const journalStore = useJournalStore();
  if (journalStore.journalList.length == 0) {
    await journalStore.fetchJournals();
  }
  const {
    devJournalList,
    pickupList,
  }: {
    devJournalList: Array<JournalObject>;
    pickupList: Array<JournalObject>;
  } = journalStore;
  // 現在表示している記事以外の開発関連記事のみを抽出
  const otherJournalList: Array<JournalObject> = devJournalList.filter(
    (journal) => journal.topicsId != props.journalObject.topicsId
  );

  interface OGPData {
    title: string;
    description: string;
    image: string;
    url: string;
  }

  const fetchOGP = async (url: string) => {
    try {
      // 指定されたURLからHTMLを取得
      const { data } = await axios.get(url);

      // cheerioでHTMLを読み込む
      const $ = load(data);

      // OGP情報を格納するオブジェクト
      const ogp: Partial<OGPData> = {};

      // metaタグからOGP情報を取得
      $('meta').each((_, element) => {
        const property = $(element).attr('property');
        const content = $(element).attr('content');
        if (property && content) {
          if (property.includes('og:')) {
            const key = property.split(':')[1] as keyof OGPData;
            ogp[key] = content;
          }
        }
      });

      return {
        title: ogp.title
          ? ogp.title.length > 30
            ? ogp.title.substring(0, 30) + '...'
            : ogp.title
          : '',
        description: ogp.description
          ? ogp.description.length > 30
            ? ogp.description.substring(0, 30) + '...'
            : ogp.description
          : '',
        image: ogp.image || '',
        url: ogp.url || url, // 'og:url'が存在しない場合は、リクエストされたURLを使用
      };
    } catch (error) {
      console.error('Error fetching OGP data:', error);
      return null;
    }
  };

  // HTMLの解析と修正を行う非同期関数
  const parseAndModifyHTML = async (html: string): Promise<string> => {
    const $ = load(html);

    const promises = $('.nuvers-blog-card')
      .map(async (_, element) => {
        const card = $(element);
        const urlText = card.find('.nuvers-blog-card-url').text().trim();
        const ogpInfo = await fetchOGP(urlText);

        if (ogpInfo) {
          card.find('.nuvers-blog-card-title').text(ogpInfo.title);
          card.find('.nuvers-blog-card-description').text(ogpInfo.description);
          card
            .find('.nuvers-blog-card-url')
            .replaceWith(
              `<a href="${urlText}" style="color:#8b8b8b;font-size:14px;">${urlText}</a>`
            );
          card
            .find('.nuvers-blog-card-image')
            .replaceWith(
              `<div class="nuvers-blog-card-image" style="height:100%;width:30%;background-image:url('${ogpInfo.image}');background-size:cover;"></div>`
            );
        }
      })
      .get();

    await Promise.all(promises);

    return $.html();
  };

  // journalObject.bodyHTML内のclass="kuroco-article" の中のclass="nuvers-blog-card-url"からURLを取得
  props.journalObject.bodyHTML = await parseAndModifyHTML(
    props.journalObject.bodyHTML
  );
</script>

<template>
  <div>
    <div class="flex h-full w-full flex-col space-y-16">
      <!-- タイトル -->
      <AtomsH1Title
        :text="journalObject.subject"
        size="text-[28px]"
      ></AtomsH1Title>
      <!-- 本文 -->
      <div class="kuroco-article" v-html="journalObject.bodyHTML"></div>
      <!-- SNS シェア -->
      <div class="flex h-12 w-10/12 items-center justify-between pl-3">
        <NuxtLink :to="instagramShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/instagram-icon.png" alt="instagram" class="h-5" />
          </div>
        </NuxtLink>
        <NuxtLink :to="twitterShareLink">
          <div class="flex h-8 w-8 items-center justify-center">
            <img src="/twitter-icon.png" alt="twitter" class="h-5" />
          </div>
        </NuxtLink>
        <div class="text-xs font-bold">SHARE</div>
        <div class="h-px w-9/12 bg-bancor-gray600"></div>
      </div>
      <!-- 関連記事 -->
      <div class="flex flex-col space-y-10">
        <div class="text-[40px] font-bold">オススメ記事</div>
        <div class="flex space-x-3 overflow-x-scroll pc:overflow-x-hidden">
          <MoleculesBasicCard
            v-for="journal in pickupList.slice(0, 3)"
            :card="journal"
            :key="journal.topicsId"
          ></MoleculesBasicCard>
        </div>
      </div>
    </div>
  </div>
</template>
