// 資料情報をPiniaから取得
const materialsStore = useMaterialsStore();

export default defineNuxtRouteMiddleware((to, from) => {
  // from.nameがmaterialsでない場合は、資料一覧ページに遷移
  if (from.name !== 'materials') {
    return navigateTo('/materials');
  }

  // from.param.idが存在し、from.param.idとto.param.idが異なる場合は、対応のidの資料ページに遷移
  if (from.params.id && from.params.id !== to.params.id) {
    // 送信済みフラグを取得
    const formSentFlag = materialsStore.getFormSentFlag();
    const id = to.params.id;
    if (formSentFlag === false) {
      return navigateTo(`/materials/${id}`);
    } else {
      return navigateTo(`/download-materials/${id}`);
    }
  }
});
