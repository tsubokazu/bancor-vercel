<script setup lang="ts">
  import type { EditorObject, EditorList } from '~/types/Editor';
  const props = defineProps<{ editorId: number }>();

  // 編集者情報をPiniaから取得
  const editorStore = useEditorStore();
  if (editorStore.editorList.length == 0) {
    await editorStore.fetchEditor();
  }
  const { editorList }: EditorList = editorStore;
  const editor: EditorObject = editorList.filter(
    (editor) => editor.editorId == props.editorId
  )[0];
</script>

<template>
  <div
    class="flex h-[128px] w-10/12 items-center justify-center space-x-3 bg-bancor-gray1100 px-5"
  >
    <!-- アイコン画像 -->
    <div class="flex w-2/12 flex-col items-center justify-center">
      <AtomsCircleIcon :iconUrl="editor.iconUrl"></AtomsCircleIcon>
      <div class="text-xs">{{ editor.nickname }}</div>
    </div>
    <!-- 紹介文 -->
    <AtomsBasicOutline
      :text="editor.introductory"
      color="text-bancor-black200"
      size="text-xs"
      class="w-10/12"
    ></AtomsBasicOutline>
  </div>
</template>
