<script setup lang="ts">
  import { FooterObject } from '~/types/Footer';
  const footerObject = inject<FooterObject>('footerObject') as FooterObject;
</script>

<template>
  <div class="flex h-full w-full justify-center bg-bancor-navy300">
    <div class="mt-14 flex h-full w-full max-w-[1200px] justify-between">
      <div class="flex h-[174px] w-[242px] flex-col justify-between space-y-8">
        <AtomsLogo
          :logoUrl="footerObject.logoUrl"
          :linkUrl="footerObject.linkUrl"
        ></AtomsLogo>
        <MoleculesFooterMenuSNSs
          :snsObjects="footerObject.snsObjects"
        ></MoleculesFooterMenuSNSs>
      </div>
      <MoleculesFooterMenuPageLinks
        :pageLinkObjects="footerObject.pageLinkObjects"
        class="h-[140px] w-[648px]"
      ></MoleculesFooterMenuPageLinks>
    </div>
  </div>
</template>
