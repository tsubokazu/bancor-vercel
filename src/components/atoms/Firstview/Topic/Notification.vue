<script setup lang="ts">
  import { Notification, Notifications } from '../../../../types';
  const notifications = inject<Notifications>('firstviewNotifications');
  const notification01: Notification | undefined =
    notifications?.notification01;
  const notification02: Notification | undefined =
    notifications?.notification02;
  const notification03: Notification | undefined =
    notifications?.notification03;
  const notification04: Notification | undefined =
    notifications?.notification04;
  const notification05: Notification | undefined =
    notifications?.notification05;
</script>

<template>
  <div class="relative h-7 w-full">
    <NuxtLink :to="notification01?.linkUrl">
      <div class="absolute animate-notification1 text-lg text-white">
        {{ notification01?.title }}
      </div></NuxtLink
    >
    <NuxtLink :to="notification02?.linkUrl">
      <div class="absolute animate-notification2 text-lg text-white">
        {{ notification02?.title }}
      </div></NuxtLink
    >
    <NuxtLink :to="notification03?.linkUrl">
      <div class="absolute animate-notification3 text-lg text-white">
        {{ notification03?.title }}
      </div></NuxtLink
    >
    <NuxtLink :to="notification04?.linkUrl">
      <div class="absolute animate-notification4 text-lg text-white">
        {{ notification04?.title }}
      </div></NuxtLink
    >
    <NuxtLink :to="notification05?.linkUrl">
      <div class="absolute animate-notification5 text-lg text-white">
        {{ notification05?.title }}
      </div></NuxtLink
    >
  </div>
</template>
