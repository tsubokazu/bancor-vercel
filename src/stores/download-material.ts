export const useDownloadMaterialStore = defineStore('download-material', () => {
  // ダウンロードフォームを送信済みの場合に、資料ダウンロードページに遷移するためのフラグ
  const downloadMaterialFlag = ref(false);

  // ダウンロードフォームを送信済みの場合に、資料ダウンロードページに遷移するためのフラグをセットする
  const setDownloadMaterialFlag = (flag: boolean) => {
    downloadMaterialFlag.value = flag;
  };

  return {
    downloadMaterialFlag,
    setDownloadMaterialFlag,
  };
});
