<script setup lang="ts">
  import { SNSObject } from '~/types/Footer';

  const props = defineProps<{
    snsObjects: Array<SNSObject>;
  }>();
</script>

<template>
  <div class="flex h-full w-full flex-col justify-between">
    <div class="text-sm text-white">Follw Us</div>
    <div class="flex space-x-[22px]">
      <AtomsLinkCircleIcon
        v-for="obj in snsObjects"
        :iconUrl="obj.iconUrl"
        :linkUrl="obj.linkUrl"
      ></AtomsLinkCircleIcon>
    </div>
  </div>
</template>
