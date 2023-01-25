<script setup lang="ts">
  import { Notifications } from '../../../../types';
  const notifications = inject<Notifications>('firstviewNotifications');
  const notification01: string | undefined = notifications?.notification01;
  const notification02: string | undefined = notifications?.notification02;
  const notification03: string | undefined = notifications?.notification03;
  const notification04: string | undefined = notifications?.notification04;
  const notification05: string | undefined = notifications?.notification05;
  console.log(`notification01 = ${notification01}`);
</script>

<template>
  <div class="relative h-7 w-full">
    <div class="absolute animate-notification1 text-lg text-white">
      {{ notification01 }}
    </div>
    <div class="animate-notification2 absolute text-lg text-white">
      {{ notification02 }}
    </div>
    <div class="animate-notification3 absolute text-lg text-white">
      {{ notification03 }}
    </div>
    <div class="animate-notification4 absolute text-lg text-white">
      {{ notification04 }}
    </div>
    <div class="animate-notification5 absolute text-lg text-white">
      {{ notification05 }}
    </div>
  </div>
</template>
