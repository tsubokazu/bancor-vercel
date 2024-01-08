<script setup lang="ts"></script>

<template>
  <div class="flex w-full justify-center">
    <div class="flex w-11/12 flex-col pc:max-w-[1200px]">
      <!-- アクセント -->
      <div class="flex h-[28px] w-[60px]">
        <div class="flex h-full w-1/2 flex-col">
          <div class="h-1/2 w-full bg-[#45abef]"></div>
          <div class="h-1/2 w-full bg-[#0253bd]"></div>
        </div>
        <div class="h-full w-1/2 bg-[#2f56fd]"></div>
      </div>
      <!-- ビジョン -->
      <div class="mt-12 flex justify-between">
        <div class="flex flex-col">
          <div class="text-[40px] font-bold text-[#2563eb]">
            変化に柔軟で<br />
            途切れることのない<br />
            果てしない情熱を
          </div>
          <NuxtLink
            to="/vision"
            class="group mt-[156px] flex items-center gap-3 text-[#94a3b8] transition-colors duration-300 hover:text-black"
          >
            <div class="text-[16px] font-bold">もっとみる</div>
            <font-awesome-icon
              class="text-[16px] transition-transform duration-700 group-hover:translate-x-1"
              :icon="['fas', 'right-long']"
            />
          </NuxtLink>
        </div>
        <div class="flex max-w-[471px] flex-col items-end font-semibold">
          <div class="text-[17px] leading-[2.47rem]">
            私たちBancorメンバーの最大の目的は世界中のインフラを構築すること。<br />
            人々にとって必要かそうでないかを考える隙もなく、自然と生活の一部に取り入れているもの。<br />
            それをBancorではインフラと呼んでいます。<br />
            BancorではIT・福祉・金融の分野において、人々が自然と利用するサービスの開発に向けて日々努力を続けています。<br />
            この取り組みの継続によって、テックとデザインを起点としたクリエイティブな文化が醸成されてきました。<br />
            私たちが取り組む分野においては、例え後発であったとしても、常に独自性を持ったユニークな戦略で市場に挑みます。
          </div>
          <AtomsFuturaBoldText
            size="text-[17px]"
            text="Bancor Inc."
            color="text-[#94a3b8]"
            class="mt-12"
          ></AtomsFuturaBoldText>
        </div>
      </div>
    </div>
  </div>
</template>
