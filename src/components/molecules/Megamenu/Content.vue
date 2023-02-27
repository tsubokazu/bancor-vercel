<script setup lang="ts">
  interface Contents {
    linkName: string;
    title: string;
    imgUrl: string;
  }
  const Props = defineProps<{
    contents: Array<Contents>;
  }>();
</script>

<template>
  <div
    class="flex h-72 w-[calc(100%_-_384px)] items-center space-x-6 overflow-x-auto rounded-r-lg bg-white px-10 font-bold"
  >
    <MoleculesMegamenuCard
      v-for="(content, index) in contents"
      :key="content.linkName"
      :content="content"
      class="flex-none"
    ></MoleculesMegamenuCard>
  </div>
</template>
