<script setup lang="ts">
  interface Categories {
    linkName: string;
    title: string;
    imgUrl: string;
  }

  interface Props {
    linkName: string;
    title: string;
    categories: Array<Categories>;
  }

  defineProps<{
    menuObject: Props;
  }>();
</script>

<template>
  <div class="container mx-auto flex h-72 rounded-lg bg-white">
    <MoleculesMegaMenuLeft :title="menuObject.title"></MoleculesMegaMenuLeft>
    <MoleculesMegaMenuRight></MoleculesMegaMenuRight>
  </div>
</template>
