<script setup lang="ts">
  const humbergerStore = useHumbergerStore();
  const clickButton = () => {
    console.log('cliced');
    humbergerStore.toggleHumbergerFlag();
  };
  const squareClassArray = computed(() => [
    'relative',
    'h-12',
    'w-12',
    'rounded-lg',
    'transition-all',
    'duration-500',
    'border',
    'border-[#e2e8f0]',
    humbergerStore.clickHumbergerFlag ? 'bg-white' : 'bg-white',
  ]);
  const lineCommonClassArray = computed(() => [
    'absolute',
    'h-0.5',
    'w-5',
    'rounded-full',
    'transition-all',
    'duration-500',
    humbergerStore.clickHumbergerFlag ? 'bg-bancor-gray900' : 'bg-[#020617]',
  ]);
  const line1ClassArray = computed(() =>
    humbergerStore.clickHumbergerFlag
      ? ['left-3.5', 'top-6', 'rotate-45']
      : ['left-3.5', 'top-4']
  );
  const line2ClassArray = computed(() =>
    humbergerStore.clickHumbergerFlag
      ? ['left-3.5', 'top-6', 'opacity-0']
      : ['left-3.5', 'top-6']
  );
  const line3ClassArray = computed(() =>
    humbergerStore.clickHumbergerFlag
      ? ['left-3.5', 'top-6', '-rotate-45']
      : ['left-3.5', 'top-8']
  );
</script>

<template>
  <button :class="humbergerStore.humbergerPositionClass">
    <div @click="clickButton" :class="squareClassArray">
      <span :class="[lineCommonClassArray, line1ClassArray]"></span>
      <span :class="[lineCommonClassArray, line2ClassArray]"></span>
      <span :class="[lineCommonClassArray, line3ClassArray]"></span>
    </div>
  </button>
</template>
