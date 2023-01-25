<script setup lang="ts">
  interface Contents {
    linkName: string;
    title: string;
    imgUrl: string;
  }

  interface Props {
    linkName: string;
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
  <div class="container mx-auto flex h-72 rounded-lg bg-white">
    <MoleculesMegamenuTitle
      :title="menuObject.subTitle"
      :enTitle="menuObject.enTitle"
      :linkName="menuObject.linkName"
    ></MoleculesMegamenuTitle>
    <MoleculesMegamenuContent
      :contents="menuObject.contents"
    ></MoleculesMegamenuContent>
    <button @click="click"></button>
  </div>
</template>
