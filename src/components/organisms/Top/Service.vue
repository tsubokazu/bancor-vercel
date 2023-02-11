<script setup lang="ts"></script>

<template>
  <div class="flex h-screen max-h-[642px] justify-center">
    <div class="relative flex h-full w-full max-w-[1200px] space-x-10">
      <MoleculesTopServiceMenu class="w-[324px]"></MoleculesTopServiceMenu>
    </div>
    <MoleculesTopServiceContents
      class="absolute left-[30vw] h-[500px] w-[70vw]"
    ></MoleculesTopServiceContents>
  </div>
</template>
