<template>
  <div class="h-full w-full">
    <div class="relative h-full w-full">
      <AtomsFirstviewTopicTitle
        class="absolute -top-4 left-2 z-10 tb:left-6 pc:left-12"
      ></AtomsFirstviewTopicTitle>
      <AtomsFirstviewTopicOuterFrame
        class="flex h-28 flex-col space-y-2 pt-4 tb:h-32 tb:px-6 pc:px-12"
      >
      </AtomsFirstviewTopicOuterFrame>
      <AtomsFirstviewTopicInnerFrame
        class="absolute top-6 left-[2.5%] flex h-12 w-[95%] items-center justify-start pl-6"
      >
      </AtomsFirstviewTopicInnerFrame>
      <AtomsFirstviewTopicNotification
        class="absolute top-6 right-[5%] h-12 w-[90%]"
      ></AtomsFirstviewTopicNotification>
      <div
        class="absolute top-[86px] left-[2.5%] flex w-fit items-center justify-start tb:top-[90px]"
      >
        <AtomsFirstviewTopicProgressBar
          class="mr-2"
        ></AtomsFirstviewTopicProgressBar>
        <AtomsFirstviewTopicProgressCount
          class="mr-1"
        ></AtomsFirstviewTopicProgressCount>
        <AtomsFirstviewTopicProgressCountMax></AtomsFirstviewTopicProgressCountMax>
      </div>
    </div>
  </div>
</template>
