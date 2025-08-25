import type { 
  BeautyStoresObject, 
  BeautyStoresHeader, 
  BeautyStoresStores 
} from '~/types/pages/beauty/stores';

export const useBeautyStoresStore = defineStore('beautyStores', () => {
  // 各データのref
  const header: Ref<BeautyStoresHeader> = ref({} as BeautyStoresHeader);
  const stores: Ref<BeautyStoresStores> = ref({} as BeautyStoresStores);

  // データ取得関数
  const fetchBeautyStores = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const beautyStoresEndpoint = config.public.kurocoBeautyStoresEndpoint || '';
      
      if (!baseUrl || !beautyStoresEndpoint) {
        console.warn('API configuration is missing for beauty stores data');
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${beautyStoresEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[useBeautyStoresStore] fetchBeautyStores error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const beautyStoresData = data.value;
      
      header.value = beautyStoresData.header || {};
      stores.value = beautyStoresData.stores || {};
    } catch (err) {
      console.error('[useBeautyStoresStore] fetchBeautyStores error:', err);
    }
  };

  return {
    header,
    stores,
    fetchBeautyStores,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBeautyStoresStore, import.meta.hot));
}