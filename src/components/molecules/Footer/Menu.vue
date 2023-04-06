<script setup lang="ts">
  import { FooterObject } from '~/types/Footer';
  const footerObject = inject<FooterObject>('footerObject') as FooterObject;
</script>

<template>
  <div class="flex justify-center bg-bancor-navy300">
    <div
      class="flex h-full w-full max-w-[1200px] flex-col space-y-4 pt-6 tb:flex-row tb:justify-between tb:space-y-0 tb:pt-14"
    >
      <div
        class="flex h-[174px] w-[242px] flex-col space-y-6 tb:justify-between tb:space-y-8"
      >
        <AtomsLogo
          :logoUrl="footerObject.logoUrl"
          :linkUrl="footerObject.linkUrl"
          width="189"
          height="39"
        ></AtomsLogo>
        <MoleculesFooterMenuSNSs
          :snsObjects="footerObject.snsObjects"
          class="ml-5 pc:ml-0"
        ></MoleculesFooterMenuSNSs>
      </div>
      <MoleculesFooterMenuPageLinks
        :pageLinkObjects="footerObject.pageLinkObjects"
        class="mr-0 h-[340px] tb:mr-5 tb:h-[140px] pc:mr-0 pc:w-[648px]"
      ></MoleculesFooterMenuPageLinks>
    </div>
  </div>
</template>
