<script setup lang="ts">
  import type { ServiceListItem } from '~/types/pages/service';

  const props = defineProps<{ serviceList: ServiceListItem[] }>();
  console.log(`serviceList: ${JSON.stringify(props)}`);
  const bgColorClasses = props.serviceList.map((service) => {
    console.log(`service: ${service}`);
    return `bg-[${service.color}]`;
  });
  console.log(`bgColorClasses: ${bgColorClasses}`);

  const borderColorClasses = computed(() => {
    props.serviceList.map((service) => {
      return `border-[${service.color}]`;
    });
  });
</script>

<template>
  <!-- サイド -->
  <div
    class="relative flex h-fit w-[238px] flex-none flex-col gap-3 rounded-[10px] border border-[#cbd5e1] bg-white px-4 py-7"
  >
    <!-- タイトル -->
    <div to="/company-info" class="text-[22px] font-bold text-[#1e293b]">
      サービス一覧
    </div>
    <!-- メニュー -->
    <div class="flex flex-col text-[17px] font-bold text-[#64748b]">
      <div v-for="(service, index) in serviceList">
        <NuxtLink
          :key="service.name"
          :to="service.linkUrl"
          class="flex items-center justify-between py-2"
        >
          <div class="flex max-w-[160px] items-center gap-2">
            <!-- カラー丸 -->
            <div
              class="h-4 w-4 flex-none rounded-full border-4"
              :style="{
                backgroundColor: service.color,
                borderColor: service.borderColor,
              }"
            ></div>
            <div>{{ service.name }}</div>
          </div>
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </NuxtLink>
        <div
          v-if="index !== serviceList.length - 1"
          class="my-1.5 h-[1px] w-full bg-[#e2e8f0]"
        ></div>
      </div>
    </div>
  </div>
</template>
