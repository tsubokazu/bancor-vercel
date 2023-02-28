export const useHumbergerStore = defineStore('humberger', () => {
  const clickHumbergerFlag = ref(false);
  const humbergerPositionClass = ref('absolute top-3');
  const toggleHumbergerFlag = () => {
    clickHumbergerFlag.value = !clickHumbergerFlag.value;
    humbergerPositionClass.value = clickHumbergerFlag.value
      ? 'fixed top-6'
      : 'absolute top-3';
  };
  return { clickHumbergerFlag, humbergerPositionClass, toggleHumbergerFlag };
});
