<script setup lang="ts">
  interface Contents {
    linkUrl: string;
    title: string;
    imgUrl: string;
  }

  interface Props {
    linkUrl: string;
    title: string;
    enTitle: string;
    subTitle: string;
    contents: Array<Contents>;
  }

  const Props = defineProps<{
    menuObject: Props;
  }>();
  const click = () => {
    console.log(Props.menuObject);
  };
</script>

<template>
  <div class="flex h-72 rounded-lg bg-white">
    <MoleculesMegamenuTitle
      :title="menuObject.subTitle"
      :enTitle="menuObject.enTitle"
      :linkUrl="menuObject.linkUrl"
    ></MoleculesMegamenuTitle>
    <MoleculesMegamenuContent
      :contents="menuObject.contents"
    ></MoleculesMegamenuContent>
    <button @click="click"></button>
  </div>
</template>
