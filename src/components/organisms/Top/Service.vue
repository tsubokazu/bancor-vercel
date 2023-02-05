<script setup lang="ts"></script>

<template>
  <div class="flex h-screen max-h-[642px] justify-center">
    <div class="relative mt-24 flex h-full w-full max-w-[1200px] space-x-10">
      <MoleculesTopServiceMenu></MoleculesTopServiceMenu>
      <MoleculesTopServiceContents
        class="absolute left-[320px] h-[500px] w-[1174px]"
      ></MoleculesTopServiceContents>
    </div>
  </div>
</template>
