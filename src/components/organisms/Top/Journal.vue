<template>
  <div class="flex h-screen max-h-[587px] justify-center">
    <div class="flex h-full w-full max-w-[1200px] flex-col space-y-10">
      <MoleculesTopJournalMenu></MoleculesTopJournalMenu>
      <div class="flex space-x-5">
        <MoleculesTopJournalMain
          class="mr-3 h-[385px] w-[486px]"
        ></MoleculesTopJournalMain>
        <MoleculesTopJournalList
          class="h-[385px] w-[486px]"
        ></MoleculesTopJournalList>
      </div>
    </div>
  </div>
</template>
