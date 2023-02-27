<script setup lang="ts"></script>

<template>
  <div
    class="relative flex h-[1100px] w-full flex-col items-center justify-center tb:h-[700px] pc:max-h-[500px] pc:flex-row"
  >
    <div class="h-full w-11/12 pc:w-full pc:max-w-[1200px]">
      <MoleculesTopServiceMenu
        class="h-[280px] w-full pc:w-[324px]"
      ></MoleculesTopServiceMenu>
    </div>
    <MoleculesTopServiceContents
      class="absolute top-[280px] h-[400px] tb:top-[300px] pc:top-0 pc:right-0 pc:w-3/5"
    ></MoleculesTopServiceContents>
  </div>
</template>
