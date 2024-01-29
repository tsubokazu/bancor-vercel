<script setup lang="ts">
  interface Props {
    linkUrl: string;
    isBold?: boolean;
  }
  const Props = withDefaults(defineProps<Props>(), {
    linkUrl: '/',
    isBold: false,
  });

  const navigateToLink = () => {
    console.log(`Props.linkUrl: ${Props.linkUrl}`);

    window.location.href = Props.linkUrl;
  };
</script>

<template>
  <div :class="{ 'font-semibold': Props.isBold }">
    <button @click="navigateToLink">
      <slot />
    </button>
  </div>
</template>
