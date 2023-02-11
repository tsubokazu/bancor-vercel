<script setup lang="ts">
  import { TopServiceObject } from '~/types';
  const topServiceObject = inject<TopServiceObject>(
    'topServiceObject'
  ) as TopServiceObject;
  const defaultImage = topServiceObject.imageDefaultUrl;
  const welfareImage = '/serviceWelfareDev.jpeg';
  const systemImage = '/serviceSystemDev.jpeg';
  const hoverFlagWelfare = ref(false);
  const hoverFlagSystem = ref(false);
  const onHoverFlagWelfare = (): void => {
    hoverFlagWelfare.value = true;
    hoverFlagSystem.value = false;
  };
  const onHoverFlagSystem = (): void => {
    hoverFlagSystem.value = true;
    hoverFlagWelfare.value = false;
  };
  const offHoverFlag = (): void => {
    hoverFlagWelfare.value = false;
    hoverFlagSystem.value = false;
  };

  const mouseLeaveAction = () => {
    offHoverFlag();
  };
</script>

<template>
  <div class="h-full w-full" @mouseleave="mouseLeaveAction()">
    <div class="relative h-full w-full">
      <div class="absolute z-0 flex h-full w-full">
        <MoleculesTopServiceContent
          :title="topServiceObject.welfareTitle"
          :linkUrl="topServiceObject.welfareLinkUrl"
          :outline="topServiceObject.welfareOutline"
          :onFlag="onHoverFlagWelfare"
        ></MoleculesTopServiceContent>
        <MoleculesTopServiceContent
          :title="topServiceObject.systemTitle"
          :linkUrl="topServiceObject.systemLinkUrl"
          :outline="topServiceObject.systemOutline"
          :onFlag="onHoverFlagSystem"
        ></MoleculesTopServiceContent>
      </div>
      <div
        class="h-full w-full before:absolute before:-z-10 before:block before:h-full before:w-full before:bg-gradient-to-t before:from-black before:to-gray-500 before:opacity-70 before:content-['']"
      >
        <Transition
          enter-active-class="transition-opacity duration-500"
          enter-from-class="opacity-0"
          leave-active-class="transition-opacity duration-500"
          leave-to-class="opacity-0"
        >
          <AtomsTopServiceBackground
            v-if="hoverFlagWelfare == true"
            class="absolute -z-20"
            :imgUrl="welfareImage"
          >
          </AtomsTopServiceBackground>
          <AtomsTopServiceBackground
            v-else-if="hoverFlagSystem == true"
            class="absolute -z-20"
            :imgUrl="systemImage"
          >
          </AtomsTopServiceBackground>
          <AtomsTopServiceBackground
            v-else
            class="absolute -z-20"
            :imgUrl="defaultImage"
          >
          </AtomsTopServiceBackground>
        </Transition>
      </div>
    </div>
  </div>
</template>
