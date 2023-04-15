export const useTopSplashStore = defineStore('top-splash', () => {
  // TOPページでのスプラッシュ表示のフラグ
  const topSplashFlag = ref(true);

  // TOPページでのスプラッシュ表示のフラグをセットする
  const setTopSplashFlag = (flag: boolean) => {
    topSplashFlag.value = flag;
  };

  return {
    topSplashFlag,
    setTopSplashFlag,
  };
});
