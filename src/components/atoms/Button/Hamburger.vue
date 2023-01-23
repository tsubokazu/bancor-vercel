<script setup lang="ts">
  const isOpened = ref(false);
  const clickButton = () => {
    console.log('cliced');
    isOpened.value = !isOpened.value;
  };
  const squareClassArray = computed(() => [
    'relative',
    'h-12',
    'w-12',
    'rounded-lg',
    'transition-all',
    'duration-400',
    isOpened.value ? 'bg-white' : 'bg-bancor-gray900',
  ]);
  const lineCommonClassArray = computed(() => [
    'absolute',
    'h-0.5',
    'w-5',
    'rounded-full',
    'transition-all',
    'duration-400',
    isOpened.value ? 'bg-bancor-gray900' : 'bg-white',
  ]);
  const line1ClassArray = computed(() =>
    isOpened.value ? ['left-3.5', 'top-6', 'rotate-45'] : ['left-3.5', 'top-4']
  );
  const line2ClassArray = computed(() =>
    isOpened.value ? ['left-3.5', 'top-6', 'opacity-0'] : ['left-3.5', 'top-6']
  );
  const line3ClassArray = computed(() =>
    isOpened.value ? ['left-3.5', 'top-6', '-rotate-45'] : ['left-3.5', 'top-8']
  );
</script>

<template>
  <div @click="clickButton" :class="squareClassArray">
    <span :class="[lineCommonClassArray, line1ClassArray]"></span>
    <span :class="[lineCommonClassArray, line2ClassArray]"></span>
    <span :class="[lineCommonClassArray, line3ClassArray]"></span>
  </div>
</template>
