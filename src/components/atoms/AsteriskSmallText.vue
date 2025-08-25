<script setup lang="ts">
  import { text } from 'stream/consumers';

  interface Props {
    text: string;
    color?: string;
    size?: string;
    spaceY?: string;
    isBold?: boolean;
  }
  const props = withDefaults(defineProps<Props>(), {
    color: 'text-bancor-black100',
    size: 'text-[24px] tb:text-[28px] pc:text-[32px]',
    spaceY: 'space-y-5',
    isBold: true,
  });

  // 指定した文字とその直後の文字列の2文字の文字列を返す。
  const getArraySplit = (str: string, target: string): string => {
    const tmpStr = str.substring(0, str.indexOf(target) + 2);
    return tmpStr.substring(tmpStr.indexOf(target));
  };

  const titleTextsList = computed<Array<Array<string>>>(() => {
    if (!props.text) return [['']];
    const titleList = props.text.split('\r\n');
    const textsList: Array<Array<string>> = [];
    for (const title of titleList) {
      if (title.includes('※')) {
        const tmpStrArr = [
          title.substring(0, title.indexOf('※')),
          getArraySplit(title, '※'),
          title.substring(title.indexOf('※') + 2),
        ];
        textsList.push(tmpStrArr);
      } else {
        const tmpStrArr = [title];
        textsList.push(tmpStrArr);
      }
    }

    return textsList;
  });
</script>

<template>
  <div
    class="flex flex-col"
    :class="[color, size, spaceY, { 'font-bold': isBold }]"
  >
    <div v-for="titleTexts in titleTextsList" :key="titleTexts[0]">
      <span
        v-for="title in titleTexts"
        :key="title[0]"
        :class="{ 'text-[5px]': title.includes(`※`) }"
      >
        {{ title }}
      </span>
    </div>
  </div>
</template>
