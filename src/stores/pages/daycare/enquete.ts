import type { 
  EnqueteObject, 
  EnqueteHeader, 
  EnqueteMessage, 
  EnqueteItem 
} from '~/types/pages/daycare/enquete';

export const useEnqueteStore = defineStore('enquete', () => {
  // 各データのref
  const header: Ref<EnqueteHeader> = ref({} as EnqueteHeader);
  const message: Ref<EnqueteMessage> = ref({} as EnqueteMessage);
  const enqueteItems: Ref<Array<EnqueteItem>> = ref([]);

  // データ取得関数
  const fetchEnquete = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const enqueteEndpoint = config.public.kurocoEnqueteEndpoint || '';
      
      if (!baseUrl || !enqueteEndpoint) {
        console.warn('API configuration is missing for enquete data');
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${enqueteEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[useEnqueteStore] fetchEnquete error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const enqueteData = data.value;
      
      header.value = enqueteData.header || {};
      message.value = enqueteData.message || {};
      enqueteItems.value = enqueteData.enqueteItems || [];
    } catch (err) {
      console.error('[useEnqueteStore] fetchEnquete error:', err);
    }
  };

  return {
    header,
    message,
    enqueteItems,
    fetchEnquete,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useEnqueteStore, import.meta.hot));
}