import type { FacilitiesObject, FacilityInformation } from '~/types/pages/daycare/facilities';

export const useFacilitiesStore = defineStore('facilities', () => {
  // 各データのref
  const header: Ref<{ title: string; subTitle: string }> = ref({} as { title: string; subTitle: string });
  const informations: Ref<Array<FacilityInformation>> = ref([]);

  // データ取得関数
  const fetchFacilities = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const facilitiesEndpoint = config.public.kurocoFacilitiesEndpoint || '';
      
      if (!baseUrl || !facilitiesEndpoint) {
        console.warn('API configuration is missing for facilities data');
        // デフォルトデータを設定
        header.value = { title: '', subTitle: '' };
        informations.value = [];
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${facilitiesEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[useFacilitiesStore] fetchFacilities error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const facilitiesData = data.value;
      
      header.value = facilitiesData.header || {};
      informations.value = facilitiesData.informations || [];
    } catch (err) {
      console.error('[useFacilitiesStore] fetchFacilities error:', err);
    }
  };

  return {
    header,
    informations,
    fetchFacilities,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFacilitiesStore, import.meta.hot));
}