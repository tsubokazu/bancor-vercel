export const useBeautyQuestionsStore = defineStore('beauty-questions', () => {
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const questions = ref({} as any);

  // 資料一覧をKurocoから取得
  const fetchBeautyQuestions = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesBeautyQuestionsEndpoint =
      config.public.kurocoPagesBeautyQuestions;

    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: 'よくあるご質問',
      imgUrl: '/images/beauty/stores/header.png',
    };

    const { data: kurocoQuestions, error: errorQuestions } = (await useFetch(
      `${baseUrl}${pagesBeautyQuestionsEndpoint}`
    )) as any;
    if (!kurocoQuestions.value || errorQuestions.value) {
      console.error(
        `[usePagesCareWelfareStore] fetchPages error: ${errorQuestions.value}`
      );
    } else {
      const questionsData: any = kurocoQuestions.value.list.filter(
        (data: any): any => data.topics_id == 103
      )[0];

      // よくあるご質問
      questions.value = {
        questions: questionsData.ext_1.map((data: any, index: number) => ({
          question: questionsData.ext_1[index],
          answer: questionsData.ext_2[index],
        })),
      };
    }
  };

  return {
    fetchBeautyQuestions,
    header,
    questions,
  };
});
