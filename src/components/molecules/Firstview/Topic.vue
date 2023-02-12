<template>
  <div>
    <AtomsFirstviewTopicTitle
      class="absolute -top-4 left-2 z-10 tb:left-6 pc:left-12"
    ></AtomsFirstviewTopicTitle>
    <AtomsFirstviewTopicOuterFrame
      class="flex flex-col space-y-2 pt-4 tb:px-6 pc:px-12"
    >
      <AtomsFirstviewTopicInnerFrame
        class="relative flex items-center justify-start pl-6"
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
