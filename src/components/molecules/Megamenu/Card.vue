<script setup lang="ts">
  interface Props {
    linkUrl: string;
    title: string;
    imgUrl: string;
  }
  defineProps<{
    content: Props;
  }>();

  const hoverAnimation = ref('');
  const scaleUpImageAnimation = ref('');
  const mouseOverAction = () => {
    hoverAnimation.value = 'animate-move-underline';
    scaleUpImageAnimation.value = 'animate-scale-up-image';
  };
  const mouseLeaveAction = () => {
    hoverAnimation.value = 'animate-move-underline-rv';
    scaleUpImageAnimation.value = 'animate-scale-up-image-rv';
  };
</script>

<template>
  <NuxtLink :to="content.linkUrl">
    <div
      class="flex flex-col"
      @mouseover="mouseOverAction()"
      @mouseleave="mouseLeaveAction()"
    >
      <AtomsMegamenuCardImage
        v-show="content.imgUrl != ''"
        :imgUrl="content.imgUrl"
        :title="content.title"
        :scaleUpImageAnimation="scaleUpImageAnimation"
      ></AtomsMegamenuCardImage>
      <AtomsMegamenuCardButton :hoverAnimation="hoverAnimation">{{
        content.title
      }}</AtomsMegamenuCardButton>
    </div>
  </NuxtLink>
</template>
