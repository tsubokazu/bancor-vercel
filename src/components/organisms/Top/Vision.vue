<template>
  <div
    class="relative flex h-screen max-h-[380px] flex-col items-center justify-center tb:flex-row"
  >
    <div class="flex h-full w-11/12 space-x-10 pc:max-w-[1200px]">
      <MoleculesTopVisionMenu class="w-[420px]"></MoleculesTopVisionMenu>
    </div>
    <MoleculesTopVisionImage
      class="absolute top-72 left-[10%] h-full w-[90%] tb:left-1/2 tb:top-14 tb:w-[50%]"
    ></MoleculesTopVisionImage>
  </div>
</template>
