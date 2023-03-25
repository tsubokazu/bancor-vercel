<script setup lang="ts">
  interface Props {
    fileUrl: string;
    fileName: string;
  }
  const props = defineProps<Props>();

  const downloadFile = async () => {
    const a = document.createElement('a');
    a.href = props.fileUrl;
    a.download = props.fileName;
    a.style.display = 'none';
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
</script>

<template>
  <button class="h-[38px] w-[37px]" @click="downloadFile">
    <img src="/download-icon.png" alt="download" />
  </button>
</template>
