export const useLoadingStore = defineStore('loading', () => {
  // TOPページでのスプラッシュ表示のフラグ
  const loadingFlag = ref(true);

  // TOPページでのスプラッシュ表示のフラグをセットする
  const setLoadingFlag = (flag: boolean) => {
    loadingFlag.value = flag;
  };

  return {
    loadingFlag,
    setLoadingFlag,
  };
});
