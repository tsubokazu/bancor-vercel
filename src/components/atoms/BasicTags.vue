<script setup lang="ts">
  interface Props {
    tags: Array<string>;
    size?: string;
  }
  const props = withDefaults(defineProps<Props>(), {
    size: 'text-xs',
  });
</script>

<template>
  <div class="flex flex-wrap">
    <div v-for="tag in tags" class="mr-3 text-xs font-bold text-bancor-blue200">
      {{ `#${tag}` }}
    </div>
  </div>
</template>
