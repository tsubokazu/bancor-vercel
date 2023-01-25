<template>
  <div>
    <AtomsFirstviewTopicTitle
      class="absolute -top-4 left-12 z-10"
    ></AtomsFirstviewTopicTitle>
    <AtomsFirstviewTopicOuterFrame class="flex flex-col space-y-2 px-12 pt-4">
      <AtomsFirstviewTopicInnerFrame
        class="flex items-center justify-start pl-6"
      >
        <AtomsFirstviewTopicNotification></AtomsFirstviewTopicNotification>
      </AtomsFirstviewTopicInnerFrame>
      <div class="flex w-full items-center justify-start">
        <AtomsFirstviewTopicProgressBar
          class="mr-2"
        ></AtomsFirstviewTopicProgressBar>
        <AtomsFirstviewTopicProgressCount></AtomsFirstviewTopicProgressCount>
        <AtomsFirstviewTopicProgressCountMax></AtomsFirstviewTopicProgressCountMax>
      </div>
    </AtomsFirstviewTopicOuterFrame>
  </div>
</template>
