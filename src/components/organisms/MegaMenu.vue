<script setup lang="ts">
  interface Categories {
    linkName: string;
    title: string;
    imgUrl: string;
  }

  interface Props {
    linkName: string;
    title: string;
    enTitle: string;
    categories: Array<Categories>;
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
      :title="menuObject.title"
      :enTitle="menuObject.enTitle"
      :linkName="menuObject.linkName"
    ></MoleculesMegamenuTitle>
    <MoleculesMegamenuMenu
      :categories="menuObject.categories"
    ></MoleculesMegamenuMenu>
    <button @click="click"></button>
  </div>
</template>
