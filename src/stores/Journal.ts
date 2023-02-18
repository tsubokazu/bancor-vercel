import { JournalObject } from '~/types/Journal';

export const useJournalStore = defineStore('journal', () => {
  // Bancor Journalの記事をKurocoから取得
  const journals: any = ref({});
  const journalList = ref([]);
  const pickupList = ref([]);

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
        })
      );

      // ピックアップされている記事のみを取得
      pickupList.value = journalList.value.filter(
        (journal: any) => journal.isPickup
      );
    }
  };

  return { journalList, pickupList, fetchJournals, journals };
});
