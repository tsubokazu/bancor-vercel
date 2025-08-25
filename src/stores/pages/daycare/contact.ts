import type { 
  ContactObject, 
  ContactHeader, 
  ContactLeftMenu, 
  ContactItems, 
  FacilityContactItem 
} from '~/types/pages/daycare/contact';

export const useContactStore = defineStore('contact', () => {
  // 各データのref
  const header: Ref<ContactHeader> = ref({} as ContactHeader);
  const leftMenu: Ref<ContactLeftMenu> = ref({} as ContactLeftMenu);
  const contactItems: Ref<ContactItems> = ref({} as ContactItems);
  const facilityContactItems: Ref<Array<FacilityContactItem>> = ref([]);

  // データ取得関数
  const fetchContact = async () => {
    try {
      const config = useRuntimeConfig();
      const baseUrl = config.public.kurocoApiUrl || '';
      const contactEndpoint = config.public.kurocoContactEndpoint || '';
      
      if (!baseUrl || !contactEndpoint) {
        console.warn('API configuration is missing for contact data');
        return;
      }

      const { data, error } = (await useFetch(
        `${baseUrl}${contactEndpoint}`
      )) as any;

      if (!data.value || error.value) {
        console.error(`[useContactStore] fetchContact error: ${error.value}`);
        return;
      }

      // データの設定（実際のAPI構造に合わせて調整が必要）
      const contactData = data.value;
      
      header.value = contactData.header || {};
      leftMenu.value = contactData.leftMenu || {};
      contactItems.value = contactData.contactItems || {};
      facilityContactItems.value = contactData.facilityContactItems || [];
    } catch (err) {
      console.error('[useContactStore] fetchContact error:', err);
    }
  };

  return {
    header,
    leftMenu,
    contactItems,
    facilityContactItems,
    fetchContact,
  };
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactStore, import.meta.hot));
}