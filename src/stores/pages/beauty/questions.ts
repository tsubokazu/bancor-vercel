import type { 
  BeautyQuestionsObject, 
  BeautyQuestionsHeader, 
  BeautyQuestionsQuestions 
} from '~/types/pages/beauty/questions';

export const useBeautyQuestionsStore = defineStore('beautyQuestions', () => {
  // 各データのref
  const header: Ref<BeautyQuestionsHeader> = ref({} as BeautyQuestionsHeader);
  const questions: Ref<BeautyQuestionsQuestions> = ref({} as BeautyQuestionsQuestions);

  // データ取得関数
  const fetchBeautyQuestions = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const beautyQuestionsEndpoint = config.public.kurocoBeautyQuestionsEndpoint || '';
      
      if (!baseUrl || !beautyQuestionsEndpoint) {
        console.warn('API configuration is missing for beauty questions data');
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${beautyQuestionsEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[useBeautyQuestionsStore] fetchBeautyQuestions error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const beautyQuestionsData = data.value;
      
      header.value = beautyQuestionsData.header || {};
      questions.value = beautyQuestionsData.questions || {};
    } catch (err) {
      console.error('[useBeautyQuestionsStore] fetchBeautyQuestions error:', err);
    }
  };

  return {
    header,
    questions,
    fetchBeautyQuestions,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBeautyQuestionsStore, import.meta.hot));
}