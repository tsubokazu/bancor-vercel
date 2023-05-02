<template>
  <div class="flex h-full w-full justify-center pc:max-h-[587px]">
    <div class="flex h-full w-11/12 flex-col space-y-10 pc:max-w-[1200px]">
      <MoleculesTopJournalMenu></MoleculesTopJournalMenu>
      <div class="flex w-11/12 flex-col tb:flex-row tb:space-x-5">
        <MoleculesTopJournalMain
          class="mr-0 mb-6 w-full tb:mr-3 tb:mb-0 pc:h-[385px] pc:w-[486px]"
        ></MoleculesTopJournalMain>
        <MoleculesTopJournalList
          class="h-[385px] w-full tb:w-[280px] pc:w-[486px]"
        ></MoleculesTopJournalList>
      </div>
    </div>
  </div>
</template>
