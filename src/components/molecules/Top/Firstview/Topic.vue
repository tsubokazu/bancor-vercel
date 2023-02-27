<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full">
      <AtomsTopFirstviewTopicTitle
        class="absolute -top-4 left-2 z-10 tb:left-6 pc:left-12"
      ></AtomsTopFirstviewTopicTitle>
      <AtomsTopFirstviewTopicOuterFrame
        class="flex h-28 flex-col space-y-2 pt-4 tb:h-32 tb:px-6 pc:px-12"
      >
      </AtomsTopFirstviewTopicOuterFrame>
      <AtomsTopFirstviewTopicInnerFrame
        class="absolute top-6 left-[2.5%] flex h-12 w-[95%] items-center justify-start pl-6"
      >
      </AtomsTopFirstviewTopicInnerFrame>
      <AtomsTopFirstviewTopicNotification
        class="absolute top-6 right-[5%] h-12 w-[90%]"
      ></AtomsTopFirstviewTopicNotification>
      <div
        class="absolute top-[86px] left-[2.5%] flex w-fit items-center justify-start tb:top-[90px]"
      >
        <AtomsTopFirstviewTopicProgressBar
          class="mr-2"
        ></AtomsTopFirstviewTopicProgressBar>
        <AtomsTopFirstviewTopicProgressCount
          class="mr-1"
        ></AtomsTopFirstviewTopicProgressCount>
        <AtomsTopFirstviewTopicProgressCountMax></AtomsTopFirstviewTopicProgressCountMax>
      </div>
    </div>
  </div>
</template>
