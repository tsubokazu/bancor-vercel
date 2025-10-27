import type { HeadTag } from '~/types/headTag';

const FALLBACK_HEAD_TAG: HeadTag = {
  title: 'Bancor株式会社｜介護・福祉DXとシステム開発のパートナー',
  description:
    'Bancor株式会社は介護・福祉・保育領域のDX支援や自社開発システム、デジタルマーケティングまで一貫して伴走するテクノロジーカンパニーです。',
  linkUrl: '/',
};

const PLACEHOLDER_BASE_URL = 'https://meta-placeholder.bancor';

const normalizeLinkUrl = (rawLink?: string | null): string => {
  if (!rawLink) {
    return '/';
  }

  try {
    const url = new URL(rawLink, PLACEHOLDER_BASE_URL);
    if (url.pathname === '/' || url.pathname === '') {
      return '/';
    }
    return url.pathname.replace(/\/+$/, '') || '/';
  } catch (error) {
    // 例外時は「/」を先頭につけ、末尾スラッシュを除去
    const path = rawLink.startsWith('/') ? rawLink : `/${rawLink}`;
    const trimmed = path.replace(/\/+$/, '');
    return trimmed === '' ? '/' : trimmed;
  }
};

export const useBancorHeadTag = defineStore('headTag', () => {
  // headタグについての情報をKurocoから取得
  const headTags = ref<HeadTag[]>([]); // headタグの情報

  const fetchHeadTag = async () => {
    console.log('fetchHeadTag');

    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const headTagEndpoint = config.public.kurocoHeadTag;
    const { data: kuroco, error } = (await useFetch(
      `${baseUrl}${headTagEndpoint}`
    )) as any;
    if (!kuroco.value || error.value) {
      console.error(`[useHeadTag] fetchPages error: ${error.value}`);
    } else {
      const data: any = kuroco.value.list.filter(
        (data: any): any => data.topics_id == 104
      )[0];
      // 取得したデータを型に当てはめつつURLを正規化
      headTags.value = data.ext_1.map((title: string, index: number) => ({
        title: title,
        description: data.ext_2[index],
        linkUrl: normalizeLinkUrl(data.ext_3[index]),
      }));
    }
  };

  const ensureHeadTags = async () => {
    if (headTags.value.length === 0) {
      await fetchHeadTag();
    }
  };

  const getHeadTagByPath = (path?: string | null): HeadTag => {
    const normalizedPath = normalizeLinkUrl(path ?? '/');
    return (
      headTags.value.find((tag) => tag.linkUrl === normalizedPath) ??
      headTags.value.find((tag) => tag.linkUrl === '/') ??
      FALLBACK_HEAD_TAG
    );
  };

  return {
    headTags,
    fetchHeadTag,
    ensureHeadTags,
    getHeadTagByPath,
  };
});
