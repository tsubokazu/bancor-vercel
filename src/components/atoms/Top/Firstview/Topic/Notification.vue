<script setup lang="ts">
  import { TopTopicNotificationList } from '~/types';
  // Topicのお知らせタイトルをPiniaから取得
  const newsStore = useNewsStore();
  if (newsStore.newsList.length == 0) {
    await newsStore.fetchNews();
  }
  const { notificationList }: TopTopicNotificationList = newsStore;
  const animationClassList = [
    'animate-notification1',
    'animate-notification2',
    'animate-notification3',
    'animate-notification4',
    'animate-notification5',
  ];
</script>

<template>
  <div>
    <div class="flex h-full w-full items-center justify-start overflow-hidden">
      <div class="relative h-7 w-full">
        <div
          class="absolute whitespace-nowrap text-lg text-white"
          :class="animationClassList[index]"
          v-for="(notification, index) in notificationList"
          :key="notification.subject"
        >
          <NuxtLink :to="`/news/notification/${notification.topicsId}`">
            {{ notification.subject }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
