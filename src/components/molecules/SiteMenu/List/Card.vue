<script setup lang="ts">
  import { JournalObject } from '~/types/Journal';
  const Props = defineProps<{ card: JournalObject }>();
</script>

<template>
  <div class="flex h-full w-full items-start">
    <div class="mr-4 h-full w-[100px]">
      <img class="rounded-md object-cover" :src="Props.card.eyeCatchUrl" />
    </div>
    <div class="flex h-full w-[216px] flex-col space-y-1">
      <div class="flex items-center justify-start space-x-4">
        <div class="text-[12px] text-bancor-orange100">
          {{ Props.card.category }}
        </div>
        <div class="h-[12px] w-px bg-bancor-gray100"></div>
        <div class="text-[12px] text-bancor-gray100">
          {{ Props.card.updateDate }}
        </div>
      </div>
      <div class="text-[14px] font-bold text-white">
        {{ Props.card.subject }}
      </div>
    </div>
  </div>
</template>
