export const usePagesDaycareStore = defineStore('pagesDaycare', () => {
  // 会社案内ページの情報をKurocoから取得
  const header: any = ref({}); // ヘッダー
  const topics: any = ref({}); // トピックス
  const features: any = ref({}); // お子さまだけでなく・・・
  const strength: any = ref({}); // 施設のスゴイところ
  const policy: any = ref({}); // 星ノ学園の教育方針
  const environment: any = ref({}); // 園内環境を知る
  const guideline: any = ref({}); // ガイドライン
  const contact: any = ref({}); // お問い合わせ
  const information: any = ref({}); // 施設情報
  const questions: any = ref({}); // 質問
  const fee: any = ref({}); // 料金
  const menu: any = ref({}); // 利用者向けメニュー

  const fetchPagesDaycare = async () => {
    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: 'after-school daycare service',
      subTitle: '児童発達支援・放課後等デイサービス',
      imgUrl: '/images/daycare/index/header/daycare-header.png',
    };

    // topics
    topics.value = {
      title: 'Topics',
      topics: [
        {
          title: '放課後デイサービスの重要性：子供たちの成長を支える役割',
          tag: '放課後デイサービス',
          date: '2023.07.01',
          linkUrl: '/',
        },
        {
          title:
            '保護者のためのガイド：地域の放課後デイサービス施設を選ぶポイント',
          tag: '放課後デイサービス',
          date: '2023.05.20',
          linkUrl: '/',
        },
        {
          title:
            'デイサービスの安全対策：子供たちの安全を確保するための基準とプロトコル',
          tag: '放課後デイサービス',
          date: '2023.05.12',
          linkUrl: '/',
        },
        {
          title:
            '学びと遊びのバランス：質の高い放課後デイサービスプログラムの設計',
          tag: '放課後デイサービス',
          date: '2023.04.01',
          linkUrl: '/',
        },
      ],
    };

    // お子様だけでなく・・・
    features.value = {
      title:
        'お子様だけでなくご家族含めた温かい未来づくり\r\nを指導員一同丁寧にご支援します。',
      features: [
        {
          title: 'お子様の成長を\r\n支援する環境',
          outline: '1人1人の発達段階に合わせた\r\n最適な支援を行います。',
          imgUrl: '/images/daycare/index/features/01.png',
        },
        {
          title: '職歴豊富な\r\n指導員の充実',
          outline:
            '児発~就労まで一貫した支援体制。\r\n最先端デジタル機器を完備。',
          imgUrl: '/images/daycare/index/features/02.png',
        },
        {
          title: '成長に最適な\r\nカリキュラム',
          outline:
            'ITの最先端スキルを学び、\r\n農業で命の大切さと収穫の喜びを。',
          imgUrl: '/images/daycare/index/features/03.png',
        },
      ],
    };

    // 施設のスゴイところ
    strength.value = {
      title: '星ノ学園ユニプレキッズのスゴイところ',
      outline: '子どもたちが思いっきり成長できる安心の場所を',
      strengths: [
        {
          title: '内装に力を入れ、子供たちがのびのびと成長できる環境を',
          outline:
            '障がいのある就学児童向けの支援サービスの一つです。支援を必要とする障がいのあるお子さまに対して、学校や家庭とは異なる時間、空間、人、体験等を通じて、個々のお子さまの状況に応じた発達支援を行います。様々な視点からの支援を行い、お子さまの最善の利益の保証と健全を育みます。',
          imgUrl: '/images/daycare/index/strength/01.png',
          linkUrl: '/daycare/enquete',
        },
        {
          title: '集団の中での生活を保証する「後方支援」としての役割も担う',
          outline:
            '放課後デイサービスの目的は、特性を持ったお子さまが、一人ひとりの支援計画に基づき、それぞれの発達に応じた支援を受けていただくことです。支援を行う対象はお子さまだけではなく、保護者様に対する支援も含まれており、お子さまの背景にある家庭環境や生育歴にも目を向け、保護者様とのコミュニケーションを取りながら、療育を進めていくことも目的のひとつです。',
          imgUrl: '/images/daycare/index/strength/02.png',
          linkUrl: '/daycare/enquete',
        },
        {
          title: 'お子さまが将来のための「できる！」をたくさん作ること',
          outline:
            'お子さま一人ひとりのお悩みに合わせた発達支援のサポートを行っています。発達支援サポートの一部として「宿題サポートの課題支援」「遊びを通した療育支援」「様々な発達促進のための支援」等があり、お子さまの未来や社会への不安を、全力でサポート致します。',
          imgUrl: '/images/daycare/index/strength/03.png',
          linkUrl: '/daycare/enquete',
        },
      ],
    };

    // 教育方針
    policy.value = {
      title: '星ノ学園ユニプレキッズが掲げる3つの教育方針',
      outline:
        '八幡西区の放課後等デイサービス・児童発達支援事業所では、子供たちからたくさんの笑顔が生まれるような場所を提供しのびのびと楽しく過ごす中で、子供たちの成長のお手伝いをしています',
      policies: [
        {
          title: '心のケア',
          outline:
            '自分の気持ちを伝えることが苦手なお子さまや、お友達とのコミュニケーションが苦手なお子さま一人ひとりの気持ちや主張を尊重しサポートします',
          imgUrl: '/images/daycare/index/policy/care.png',
        },
        {
          title: '楽しむ',
          outline:
            '温かい雰囲気の中で、楽しいことや嬉しいことなど自分の力を表現する力を育み、お子さまが心から「楽しい！」と思える環境づくりを心がけています',
          imgUrl: '/images/daycare/index/policy/fun.png',
        },
        {
          title: '自立の力',
          outline:
            '日々の生活の中で、身の回りのことが「自分で出来るようサポート」し、また集団生活の中でお友達と協力することや、社会ルール・マナーの理解を支援します。',
          imgUrl: '/images/daycare/index/policy/independence.png',
        },
      ],
      staffs: [
        {
          name: '児童発達支援管理責任者（常勤）',
          number: '4名',
          imgUrl: '/images/daycare/index/policy/01.png',
        },
        {
          name: '保育士（常勤）',
          number: '4名',
          imgUrl: '/images/daycare/index/policy/02.png',
        },
        {
          name: '保育士（非常勤）',
          number: '2名',
          imgUrl: '/images/daycare/index/policy/03.png',
        },
        {
          name: '児童指導員（常勤）',
          number: '9名',
          imgUrl: '/images/daycare/index/policy/04.png',
        },
        {
          name: '児童指導員（非常勤）',
          number: '1名',
          imgUrl: '/images/daycare/index/policy/05.png',
        },
        {
          name: 'その他従業者（常勤）',
          number: '2名',
          imgUrl: '/images/daycare/index/policy/06.png',
        },
        {
          name: 'その他従業者（非常勤）',
          number: '1名',
          imgUrl: '/images/daycare/index/policy/07.png',
        },
      ],
      imgUrl: '/images/daycare/index/policy/08.png',
    };

    // 園内環境を知る
    environment.value = {
      title: '園内環境を知る',
      outline: '園内の内装や活動の様子などを写真を通じて知ることができます。',
      environmentTitle: '施設ご利用までの流れ',
      environmentOutline: '福岡県で運営する星ノ学園写真',
      environments: [
        {
          imgUrl: '/images/daycare/index/environment/01.png',
        },
        {
          imgUrl: '/images/daycare/index/environment/02.png',
        },
        {
          imgUrl: '/images/daycare/index/environment/03.png',
        },
        {
          imgUrl: '/images/daycare/index/environment/04.png',
        },
        {
          imgUrl: '/images/daycare/index/environment/05.png',
        },
        {
          imgUrl: '/images/daycare/index/environment/06.png',
        },
      ],
      tag: '放課後デイサービス',
      linkTitle: '星ノ学園園内環境',
    };

    // 星ノ学園ご利用ガイドライン
    guideline.value = {
      title: '星ノ学園ご利用ガイドライン',
      outline:
        '学園での1日の過ごし方やご利用に関する流れを知ることができます。',
      imgUrl: '/images/daycare/index/guideline/00.png',
      guideline: {
        title: '施設ご利用までの流れ',
        outline:
          'ご利用までの流れの中で、ご不明点やお困りのことがございましたら、お気軽にこちらからお問い合わせください※こちらの内容は児童発達支援・放課後デイサービスの内容です。',
        step01: {
          title: 'ご見学・ご面談',
          outline:
            'まずは、直接お電話にてお問い合わせください。ご見学・ご対面のご都合を確認致します。※支援中の場合、お電話に出られないこともございます。予めご了承下さい。',
          imgUrl: '/images/daycare/index/guideline/01-kengaku.png',
          numberImgUrl: '/images/daycare/index/guideline/01.png',
          tel: '093-883-7020',
        },
        step02: {
          title: '受給者証の申請',
          subTitle: '各市町村の担当窓口に利用申請',
          outline:
            '児童発達支援・放課後等デイサービスを利用するためには各市町村への申請が必要です。各市町村の役場・市(区)役所の担当窓口へお問い合わせください。※詳しくは1でご説明させていただきます。',
          imgUrl: '/images/daycare/index/guideline/02-shinsei.png',
          numberImgUrl: '/images/daycare/index/guideline/02.png',
        },
        step03: {
          title: '個別支援計画の作成',
          outline: '利用計画書(セルフプラン)と必要書類を準備します。',
          imgUrl: '/images/daycare/index/guideline/03-plan.png',
          numberImgUrl: '/images/daycare/index/guideline/03.png',
          subSteps: [
            {
              title: '① セルフプランのご準備について',
              outline:
                'ご用意した記入用紙にご記入ください。申請の際に記入することもできます。',
            },
            {
              title: '② その他、必要書類のご準備',
              outline:
                '療育が必要だという証明の書類提出を求められます。医師の診断書・臨床心理士の意見書・発達機能検査の結果表などが必要になりますが、ない場合は、各市町村の役場・市(区)役所の担当窓口へご相談ください。',
            },
          ],
        },
        step04: {
          title: 'ご契約',
          outline:
            '受給者証の交付が決定します。※交付が決定しましたら、一度お知らせください。受給者証が交付され、ご自宅に受給者証が送付されます。受給者証によって、初めてサービスを利用するご準備が整ったことになります。',
          imgUrl: '/images/daycare/index/guideline/04-contract.png',
          numberImgUrl: '/images/daycare/index/guideline/04.png',
        },
        step05: {
          title: 'サービスの開始',
          imgUrl: '/images/daycare/index/guideline/05-start.png',
          numberImgUrl: '/images/daycare/index/guideline/05.png',
          subSteps: [
            {
              title: '星ノ学園にてサービス利用本計画書を作成',
              outline:
                '利用計画書をもとに、本計画書をご面談の上作成します。ご参考書類等がある場合は、ご一緒にお持ちいただくとお時間の短縮になります。',
            },
            {
              title: 'ご用意したアセスメントシートのご記入',
              outline: '※ セルフプランのコピーが必要です。',
            },
            {
              title: '',
              outline:
                'ご利用に向けての調整(ご利用される曜日や送迎についてのご相談)及び個別支援計画を元に、支援の目標を明確に作成いたします。支援計画書と共にご契約させていただきます。',
            },
          ],
        },
      },
      timeSchedules: [
        {
          title: '児童発達支援',
          events: [
            {
              time: '9:00',
              title: '送迎・順次登園',
              outline: '',
            },
            {
              time: '10:00',
              title: '自由遊び',
              outline: '',
            },
            {
              time: '10:30',
              title: '朝の会',
              outline: '（ご挨拶/出席確認/絵本や紙芝居の読み聞かせ）',
            },
            {
              time: '11:00',
              title: '運動等の集団行動',
              outline: '',
            },
            {
              time: '12:00',
              title: '昼食（お弁当）',
              outline: '',
            },
            {
              time: '13:00',
              title: '個別活動',
              outline: '（机上での活動等）',
            },
            {
              time: '14:00',
              title: '自由遊び',
              outline: '',
            },
            {
              time: '14:40',
              title: 'おやつ',
              outline: '',
            },
            {
              time: '15:00',
              title: '帰りの会・送迎・順次降園',
              outline: '',
            },
          ],
        },
        {
          title: '放課後等デイサービス（平日）',
          events: [
            {
              time: '14:00',
              title: '送迎・順次登園',
              outline: '',
            },
            {
              time: '15:00',
              title: 'おやつ',
              outline: '',
            },
            {
              time: '15:30',
              title: '個別活動',
              outline: '（宿題・パソコン等）',
            },
            {
              time: '16:15',
              title: '集団活動',
              outline: '（公園・卓球等）',
            },
            {
              time: '17:00',
              title: '帰りの会・送迎・順次降園',
              outline: '',
            },
          ],
        },
        {
          title: '土曜休み・長期休み',
          events: [
            {
              time: '9:00',
              title: '送迎・順次登園',
              outline: '',
            },
            {
              time: '10:30',
              title: '朝の会',
              outline: '（ご挨拶/出席確認/絵本や紙芝居の読み聞かせ）',
            },
            {
              time: '11:00',
              title: '個別活動',
              outline: '（宿題・パソコン等）',
            },
            {
              time: '12:00',
              title: '昼食（お弁当）',
              outline: '',
            },
            {
              time: '13:00',
              title: '自由遊び',
              outline: '',
            },
            {
              time: '13:30',
              title: 'レクリエーションやお出かけ等の集団活動',
              outline: '',
            },
            {
              time: '15:00',
              title: 'おやつ・自由遊び',
              outline: '',
            },
            {
              time: '16:00',
              title: '帰りの会・送迎・順次降園',
              outline: '',
            },
          ],
        },
      ],
    };

    // お問い合わせ
    contact.value = {
      title: 'お子様とご家族\r\n全ての方の未来を\r\n二人三脚で作り上げる。',
      outline: 'お気軽にご相談お受けしております。',
      telOnImgUrl: '/images/daycare/index/enquete/tel-on.png',
      telOffImgUrl: '/images/daycare/index/enquete/tel-off.png',
      tel: '093-883-7020',
      mailOnImgUrl: '/images/daycare/index/enquete/mail-on.png',
      mailOffImgUrl: '/images/daycare/index/enquete/mail-off.png',
      mail: 'uniplay0319@gmail.com',
    };

    // 施設情報
    information.value = {
      title: '施設情報',
      outline:
        '八幡西区北筑の児童発達支援事業書である星ノ学園の施設情報を知ることができます。',
      name: '星ノ学園 ユニプレキッズ 北筑校',
      postCode: '807-0857',
      address: '福岡県北九州市八幡西区北筑1丁目10-26',
      mapLinkUrl: 'https://goo.gl/maps/zMgFkmZoggwJ8F5S8',
      tel: '093-883-7020',
      companyName: 'Bancor株式会社',
      timeChildSupport: '9:00～15:00',
      timeAfterSchool: '学校終了時～18:00',
      timeSaturday: '9:00～16:00',
      holiday: '日/祝/お盆/正月',
      targets: [
        {
          title: '児童発達支援',
          outline:
            '重度心身障がい児を除く、小学校就学前までの「通所による療育等の支援が必要」と認められたお子さま',
        },
        {
          title: '放課後等デイサービス',
          outline:
            '重度心身障がい児を除く、就学後（小学生/中学生/高校生）で「放課後等の時間帯における療育等の支援が必要」と認められたお子さま',
        },
      ],
      imgUrl: '/images/daycare/index/information/01.png',
    };

    // よくあるご質問
    questions.value = {
      title: 'よくあるご質問',
      outline:
        'こちらでは、星ノ学園へよく頂くご質問、お問い合わせのQ&Aを記載しております\r\nまた、こちらに記載していない内容はお気軽にお問い合わせください',
      items: [
        {
          question: '食事の提供はありますか？',
          answer:
            '星ノ学園では昼食等のお食事のご提供は行っておりません。\r\n必要となる場合は、前もって親御様へお知らせの上、お弁当をご持参いただいております。',
        },
        {
          question: '施設を利用できるエリアは決まっていますか？',
          answer:
            'はい、送迎の兼ね合いから基本的に「小倉、戸畑地域」を中心に運用しております。その他のエリアにつきましては、直接お電話(093-883-7020)にてご相談ください。\r\n※ 小倉、戸畑地域でも、時間帯やお住いの場所によっては送迎が困難となる場合もございます。予めご了承ください。',
        },
        {
          question: '利用を断られる場合はありますか？',
          answer:
            '医療的なケアが必要なお子さまにつきましては、専門的なスタッフの配置状況などによりご利用をお断りさせて頂く場合がございます。\r\nまた、過度な自傷行為、他のご利用者様への他害行為などが頻繁にあるお子さまにつきましては、ご利用をお断りさせていただくケースもございます。\r\n詳しくは、直接お電話(090-883-7020)にてご相談ください。',
        },
        {
          question: '土曜、日曜、祝日',
          answer:
            '土曜日、長期休暇はご利用いただけます。\r\n日曜日、祝日は各施設お休みとなります。',
        },
        {
          question:
            '子供が運動や外出がすごく好きなのですが、公園に行ったりなどすることはありますか？',
          answer:
            'はい、社会交流やお友だちとコミュニケーションの場でもありますので、お子さまの体調や天候を考慮した上で、積極的に外出やイベントを行っています。',
        },
        {
          question: '送迎はありますか？',
          answer:
            'はい、送迎も行っております。ご自宅や学校などにお送り、お迎えをさせていただきます。',
        },
        {
          question: '利用料金はいくらになりますか？',
          answer:
            'ご利用料金につきましては、ご世帯の収入額に応じてご負担上限額が決まっております。詳しくは下記をご参照ください。',
        },
      ],
    };

    // ご利用料金について
    fee.value = {
      title: 'ご利用料金について',
      outline:
        'ここでは北九州市の放課後等デイサービス・児童発達支援を行う星ノ学園の概要やご利用料金を知ることができます。',
      dayservice: {
        overview: {
          title:
            '北九州市の児童発達支援事業所で展開される放課後デイサービスとは',
          outline:
            '放課後デイサービスとは、障がいのある就学児童向けの支援サービスのひとつです。\r\n支援を必要とする障がいのあるお子様に対して、学校や家庭とは異なる時間、空間、人、体験等を通じて、個々のお子さまの状況に応じた発達支援を行います。\r\n様々な視点からの支援を行い、お子さまの最善の利益の保証と健全を育みます。',
          imgUrl: '/images/daycare/index/fee/overview.png',
          purpose: '八幡西区での放課後等デイサービスの役割と目的',
          purposeOutline:
            '放課後等デイサービスの目的は、特性を持ったお子さまが、一人ひとりの支援計画に基づき、それぞれの発達に応じた支援を受けていただくことです。\r\n支援を行う対象はお子さまだけでなく、保護者様に対する支援も含まれており、お子さまの背景にある家庭環境や成育歴にも目を向け、保護者様とのコミュニケーションを取りながら、療育を進めていくことも目的のひとつです。\r\nまた、お子さまが地域社会へ積極的に参加していけるよう、ほかのお子さまも含めた集団の中での生活を保証する「後方支援」としての役割も担っています。',
        },
        fee: {
          title: 'ご利用料金目安表 月額（上限）',
          fee1: '0円',
          fee2: '4,600円',
          fee3: '37,200円',
        },
        remarks: {
          title: 'その他備考',
          hours: '学校終了時刻〜18:00（平日学校がある日）',
          holiday: '日曜/祝日/正月',
          capacity: '1日10名程度',
          capacityNote: '※児童発達支援・放課後デイサービス合算',
          recreationCost:
            '別途費用がかかる場合は事前にご連絡、ご説明いたします。',
          requiredItems:
            '文房具、水筒（※持参必須です。）\r\n土曜日や長期休みのご利用の際は昼食を持参',
        },
      },
      support: {
        overview: {
          title: '児童発達支援とは',
          outline:
            '児童発達支援とは、障がい児通所支援の一つです。\r\n小学校就学前の6歳までの障がいのある子どもが主に通い、障がいのあるお子さまへの発達支援やそのご家族への支援を中心に、日常生活における基本動作や知識技術を習得するためのサポートを行います\r\n児童発達支援は大きく分けて「児童発達支援センター」と「児童発達支援事業所」の2種類に分かれており、幼稚園などへの入園や小学校への入学に向けた「集団生活への適応訓練」などの支援も行っております。',
          imgUrl: '/images/daycare/index/fee/support.png',
          center: '児童発達支援センターとは',
          centerOutline:
            '児童発達支援センターには、大きく分けて福祉サービスを提供する「福祉型」と、福祉サービスに加えて治療も行う「医療型」があり、障がいを持つお子さまには馴染みある、身近な地域で支援を提供している施設の事です。\r\nお子さまが定期的に療育などの支援を受けることで、自立するのに必要な技能や知識などの習得や、日常生活に必要な基本動作、集団生活に順応していくためのコミュニケーショントレーニングなどを行う施設です。',
          facility: '児童発達支援事業所とは',
          facilityOutline:
            '児童発達支援事業所は、0歳〜小学校入学前までの、まだ就学していないお子様たちが、自分の慣れ親しんだ地域での発達支援を提供している施設です。\r\n障がいを持ったお子さまの中でも「発達障がいのお子さま」「難病にかかっているお子さま」「心身に障がいを持ったお子さま」を対象に支援を行い、課題を解決するお手伝いをしたり、そのご家族への支援を行うことで、お子さまとその周りの負担を軽減することを主な目的としています。',
        },
        fee: {
          title: 'ご利用料金目安表 月額（上限）',
          fee1: '0円',
          fee2: '4,600円',
          fee3: '37,200円',
        },
        remarks: {
          title: 'その他備考',
          hours: '9:00〜15:00',
          holiday: '日曜/祝日/正月',
          capacity: '1日10名程度',
          capacityNote: '※児童発達支援・放課後デイサービス合算',
          recreationCost:
            '別途費用がかかる場合は事前にご連絡、ご説明いたします。',
          requiredItems:
            'お弁当・水筒・コップ・濡れたおしぼり・手拭きタオル\r\nお尻ふき・お着替え・おむつ等',
        },
      },
    };

    // 利用者様向けメニュー
    menu.value = {
      title: '利用者様向けメニュー',
      outline: '利用前にお困りの場合は、お気軽にご相談ください。',
      items: [
        {
          title: 'お問い合わせ',
          linkUrl: '/daycare/enquete',
        },
        {
          title: '保護者様向け\r\nアンケート',
          linkUrl: '/daycare/enquete',
        },
        {
          title: '施設一覧',
          linkUrl: '#information',
        },
      ],
    };
  };
  return {
    header,
    topics,
    features,
    strength,
    policy,
    environment,
    guideline,
    contact,
    information,
    questions,
    fee,
    menu,
    fetchPagesDaycare,
  };
});
