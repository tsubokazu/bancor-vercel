export const usePagesBoardMemberStore = defineStore('pagesBoardMember', () => {
  // 役員・責任者紹介のページの情報をKurocoから取得
  const departments: any = ref([]); // メンバー情報
  const common: any = ref({}); // 共通部分

  const fetchPagesBoardMember = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesBoardMemberEndpoint = config.public.kurocoBoardMember;
    const { data: departmentsData, error } = (await useFetch(
      `${baseUrl}${pagesBoardMemberEndpoint}`
    )) as any;
    if (!departmentsData.value || error.value) {
      console.error(
        `[usePagesBoardMemberStore] fetchPagesBoardMember error: ${error.value}`
      );
    } else {
      // 取得したデータを型に当てはめる
      departments.value = departmentsData.value.list.map((department: any) => {
        return {
          department: department.subject,
          members: department.name.map((member: any, index: number) => {
            return {
              name: department.name[index],
              nameEn: department.name_en[index],
              imgUrl: department.image[index].url,
              position: department.position[index],
              message: department.message[index],
              links: [
                {
                  title: department.link_disp01[index],
                  url: department.link01[index],
                },
                {
                  title: department.link_disp02[index],
                  url: department.link02[index],
                },
                {
                  title: department.link_disp03[index],
                  url: department.link03[index],
                },
                {
                  title: department.link_disp04[index],
                  url: department.link04[index],
                },
              ],
            };
          }),
        };
      });
    }
  };

  // 共通部分
  const fetchPagesBoardMemberCommon = async () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.kurocoApiUrl;
    const pagesBoardMemberCommonEndpoint =
      config.public.kurocoBoardMemberCommon;
    const { data: commonData, error: commonError } = (await useFetch(
      `${baseUrl}${pagesBoardMemberCommonEndpoint}`
    )) as any;
    if (!commonData.value || commonError.value) {
      console.error(
        `[usePagesBoardMemberStore] fetchPagesBoardMember error: ${commonError.value}`
      );
    } else {
      common.value = {
        positionTitle: commonData.value.list[0].position_title,
        imgUrl: commonData.value.list[0].image.url,
        title: commonData.value.list[0].title,
        subTitle: commonData.value.list[0].sub_title,
        outline: commonData.value.list[0].outline,
        linkTitle: commonData.value.list[0].link_title,
        linkUrl: commonData.value.list[0].link_url,
        memberBg: commonData.value.list[0].member_bg.url,
      };
    }
  };

  return {
    departments,
    common,
    fetchPagesBoardMember,
    fetchPagesBoardMemberCommon,
  };
});
