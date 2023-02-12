<script setup lang="ts">
  import { Notification, Notifications } from '~/types';
  const notifications = inject<Notifications>(
    'firstviewNotifications'
  ) as Notifications;
  const {
    notification01,
    notification02,
    notification03,
    notification04,
    notification05,
  } = notifications;
</script>

<template>
  <div class="flex h-full w-full items-center justify-start">
    <div class="relative h-7 w-full">
      <NuxtLink :to="notification01.linkUrl">
        <div class="absolute animate-notification1 text-lg text-white">
          {{ notification01.title }}
        </div></NuxtLink
      >
      <NuxtLink :to="notification02.linkUrl">
        <div class="absolute animate-notification2 text-lg text-white">
          {{ notification02.title }}
        </div></NuxtLink
      >
      <NuxtLink :to="notification03.linkUrl">
        <div class="absolute animate-notification3 text-lg text-white">
          {{ notification03.title }}
        </div></NuxtLink
      >
      <NuxtLink :to="notification04.linkUrl">
        <div class="absolute animate-notification4 text-lg text-white">
          {{ notification04.title }}
        </div></NuxtLink
      >
      <NuxtLink :to="notification05.linkUrl">
        <div class="absolute animate-notification5 text-lg text-white">
          {{ notification05.title }}
        </div></NuxtLink
      >
    </div>
  </div>
</template>
