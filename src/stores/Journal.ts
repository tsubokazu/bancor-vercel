import { JournalObject } from '~/types/Journal';
import type { Ref } from 'vue';

export const useJournalStore = defineStore('journal', () => {
  // Bancor Journalの記事をKurocoから取得
  const journals: any = ref({});
  const journalList = ref([]); // 全記事リスト
  const pickupList = ref([]); // ピックアップ記事のリスト
  const devJournalList = ref([]); // システム開発関連記事のリスト
  const featureList = ref([]); // 注目記事リスト
  const tagList: Ref<Array<string>> = ref([]); // ハッシュタグリスト

  const fetchJournals = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const journalEndpoint = config.public.kurocoJournal;
    const { data, error } = (await useFetch(
      `${baseUrl}${journalEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useJournalStore] fetchJournals error: ${error.value}`);
    } else {
      journals.value = data.value;

      // 取得したデータを型に当てはめる
      journalList.value = journals.value.list.map(
        (journal: any): JournalObject => ({
          topicsId: journal.topics_id,
          category: journal.ext_1.key,
          updateDate: journal.update_ymdhi.split('T')[0].replaceAll('-', '.'),
          subject: journal.subject,
          eyeCatchUrl: journal.ext_2.url,
          bodyHTML: journal.ext_3,
          hashTag: journal.ext_4,
          isPickup: journal.ext_5.key == '0' ? false : true,
          pvCount: journal.ext_6,
          editorId: journal.ext_7.key,
        })
      );

      // ピックアップされている記事のみを取得
      pickupList.value = journalList.value.filter(
        (journal: any) => journal.isPickup
      );

      // 注目記事をpv数でソートしてリスト化
      featureList.value = journalList.value.sort(
        (prev: JournalObject, next: JournalObject) => {
          if (prev.pvCount > next.pvCount) {
            return -1;
          } else if (prev.pvCount < next.pvCount) {
            return 1;
          } else {
            return 0;
          }
        }
      );

      // システム開発関連記事のみを取得
      devJournalList.value = journalList.value.filter((journal: any) => {
        for (const tag of journal.hashTag) {
          if (tag.includes('開発')) {
            return true;
          } else {
            continue;
          }
        }
      });

      // ハッシュタグリストの生成
      let journal: JournalObject;
      for (journal of journalList.value) {
        for (const tag of journal.hashTag) {
          if (!tagList.value.includes(tag)) {
            tagList.value.push(tag);
          }
        }
      }
    }
  };

  return {
    journalList,
    pickupList,
    featureList,
    devJournalList,
    tagList,
    fetchJournals,
    journals,
  };
});
