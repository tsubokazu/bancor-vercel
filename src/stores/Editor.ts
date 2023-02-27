import { EditorObject } from '~/types/Editor';

export const useEditorStore = defineStore('editor', () => {
  // 編集者情報をKurocoから取得
  const editor: any = ref({});
  const editorList = ref([]);

  const fetchEditor = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const editorEndpoint = config.public.kurocoEditor;
    const { data, error } = (await useFetch(
      `${baseUrl}${editorEndpoint}`
    )) as any;
    if (!data.value || error.value) {
      console.error(`[useJournalStore] fetchEditor error: ${error.value}`);
    } else {
      editor.value = data.value;

      // 取得したデータを型に当てはめる
      editorList.value = editor.value.list.map(
        (editor: any): EditorObject => ({
          editorId: editor.member_id,
          iconUrl: editor.profileimage.url,
          introductory: editor.notes,
          nickname: editor.nickname,
        })
      );
    }
  };

  return {
    fetchEditor,
    editorList,
  };
});
