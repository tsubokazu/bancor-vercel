export const usePagesBeautyStore = defineStore('pagesBeauty', () => {
  // 会社案内ページの情報をKurocoから取得
  const slider: any = ref({}); // スライダー
  const topics: any = ref({}); // トピックス
  const menu: any = ref({}); // 予約・口コミ
  const description: any = ref({}); // 説明(ブプラの小顔矯正とは)
  const problem: any = ref({}); // こんなお悩みを解決できます
  const features: any = ref({}); // ブプラの3つの特徴
  const treatment: any = ref({}); // 施術メニュー
  const review: any = ref({}); // お客様の声
  const stores: any = ref({}); // 店舗情報
  const comparison: any = ref({}); // Before&After
  const copy: any = ref({}); // コピー
  const flow: any = ref({}); // 施術までの流れ
  const question: any = ref({}); // よくある質問

  const fetchPagesBeauty = async () => {
    // 取得したデータを型に当てはめる
    // スライダー
    slider.value = {
      items: [
        {
          title: 'デコルテケア',
          outline:
            '皆さまこんにちは(^^)ブプラ健軍店の山崎です！\r\n◆鎖骨は、体全体のリンパの流れが良くなるとても重要なポイント\r\n◆クリームをつけて、マッサージをすることで、リンパの流れを促進し、肩こりやむくみの解消にも効果的です。\r\n\r\nデコルテケアのポイント:\r\n\r\n1. クリームを使ってマッサージ\r\nマッサージクリームや保湿クリームを使って、デコルテの皮膚に適量を伸ばしましょう。そして、軽くマッサージをすることで、リンパの流れが良くなり、むくみや肩こりの解消に役立ちます。\r\n\r\n2. マッサージのテクニック\r\nデコルテのマッサージは、鎖骨周りを中心に行いましょう。鎖骨の外側から内側に向かって指を滑らせるようにマッサージします。優しくリンパの流れを促進させるために、力を入れすぎないように気を付けましょう。\r\n\r\n3. ストレッチ\r\nデコルテケアには、適度なストレッチも有効です。首や肩を軽く動かすことで、筋肉がほぐれ、リンパの流れが良くなります。\r\n\r\n4. 日頃のケア\r\nデコルテケアは、日頃のケアが大切です。毎日のマッサージやストレッチを習慣にしましょう。また、日焼け止めを忘れずに塗ることで、デコルテの肌を守ることができます。\r\n\r\nデコルテケアを行うことで、リンパの流れが良くなり、肩こりやむくみの解消に効果的です。日頃のケアを心掛け、美しいデコルテを保ちましょう！',
          date: '2023.07.22',
          imgUrl: '/images/beauty/index/slider/01.png',
        },
        {
          title: '廊下を防止する食事法',
          outline:
            '皆さまこんにちは(^^)ブプラ健軍店の山崎です！本日は老化を防止する食事法についてです！\r\n\r\n●規則正しい食事のタイミング\r\n朝・昼・夜、一日3食を規則正しく摂ることが大切です。食事のタイミングが不規則になると、血糖値が急上昇し、インスリンの分泌が過剰になることがあります。これが繰り返されると、インスリン抵抗性が進み、糖尿病のリスクが高まります。また、老化を促進することが知られています。\r\n\r\n●バランスの良い食事\r\n老化を防止するためには、ビタミン、ミネラル、酵素、アンチオキシダントなどがバランスよく含まれている食事を心掛けましょう。特に野菜や果物、魚、海藻、豆類などは老化防止のために重要な栄養素を豊富に含んでいます。\r\n\r\n●糖質の取りすぎを避ける\r\n糖質の過剰な摂取は、体内で糖化を引き起こし、老化を促進します。特に加工食品やスナック菓子、飲料などには高い糖質が含まれているので注意しましょう。\r\n\r\n●水分を十分に摂る\r\n体内の細胞がうまく機能するためには、水分が不可欠です。一日に約1.5リットル以上の水を摂るよう心掛けましょう。老化を防ぐためには、水分の摂取が非常に重要です。\r\n\r\nまとめ：\r\n老化を防止するための食事法は、規則正しい食事のタイミング、バランスの良い食事、糖質の取りすぎを避ける、水分を十分に摂るという4つのポイントを守ることです。これらの食事法を実践することで、健康で若々しい体を維持しましょう！皆さまの健康をお祈りしています！',
          date: '2023.07.15',
          imgUrl: '/images/beauty/index/slider/02.png',
        },
        {
          title: '家庭菜園♪',
          outline:
            '皆様こんにちは(^_-)-☆ブプラ健軍店の山崎です♪\r\n子どもたちが毎日水を上げていたイチゴ♪実がなって大きくなっていました(^○^)\r\n今の季節は、家庭菜園がとても楽しい時期ですね！\r\n\r\n我が家でも、子どもたちと一緒に家庭菜園を楽しんでいます。イチゴを始め、トマトやキュウリ、ピーマンなども育てています。新鮮な野菜を収穫する喜びは、何とも言えないものがありますね。\r\n\r\nさて、家庭菜園で大切なのは、規則的な水やりです。特に、この時期は暑さが厳しくなるため、しっかりと水分を与えることが大切です。また、適切な栄養も与える必要がありますので、肥料や養分を忘れずに与えてください。\r\n\r\n家庭菜園のもう一つの楽しみは、子どもたちと一緒に収穫した野菜で料理をすることです。新鮮な野菜を使った料理は、格別な味がします。野菜が苦手な子どもも、自分たちで育てた野菜を食べることで、野菜が好きになることもありますよ。\r\n\r\n家庭菜園は、子どもたちと一緒に楽しむことができ、自然と触れ合うことができる素晴らしい趣味です。皆様も、家庭菜園を始めてみてはいかがでしょうか？\r\n\r\nこれからも、家庭菜園での楽しみや、収穫した野菜を使ったレシピなどを紹介していきますので、お楽しみに♪',
          date: '2023.07.11',
          imgUrl: '/images/beauty/index/slider/03.png',
        },
        {
          title: 'BUPURAのこだわり♪',
          outline:
            '普段、皆様がご自宅で使われている化粧品、、実はお肌の表面の表皮という部分にしか届かないんです。\r\n表皮って、サランラップ一枚分の厚さしかありません。そのため、普通の化粧品では、お肌の深層部分へのケアが難しいのです。\r\n\r\nしかし、BUPURAでは、この問題に真剣に取り組んでいます！\r\n私たちは、お肌の深層部分にまで届く特別な成分を使用して、効果的なケアを実現しています。\r\n\r\n私たちの化粧品は、お肌の表皮だけでなく、真皮層にも浸透することができます。真皮層には、コラーゲンやエラスチンといった、お肌のハリや弾力を保つための成分が存在しています。私たちの化粧品は、これらの成分に直接働きかけることで、より効果的なケアを実現しています。\r\n\r\nまた、私たちは、お肌に優しい成分を選び、安全性を重視しています。敏感肌の方でも、安心して使用いただけるように配慮しています。\r\n\r\nBUPURAでは、お肌の悩みに寄り添い、本当に効果的なケアを提供することを心掛けています。私たちのこだわりをぜひ、お試しください。\r\n\r\nこれからも、皆様のお肌が美しく、健康であるために、私たちは全力でサポートしてまいります。\r\nご愛顧のほど、どうぞよろしくお願い申し上げます。',
          date: '2023.07.01',
          imgUrl: '/images/beauty/index/slider/04.png',
        },
        {
          title: '小麦の取りすぎが良くないワケ',
          outline:
            '皆さまこんにちは(^^)ブプラ健軍店の山崎です！今日の朝ごはん、お昼ごはんは何でしたか？「うどん」「パスタ」「ラーメン」「パン」など、小麦製品をよく食べていませんか？\r\n\r\n私たちの日常的な食生活には欠かせない小麦製品ですが、実は過剰に摂取すると健康に悪影響を及ぼすことがあります。\r\n\r\n1. 小麦は糖質が多い\r\n小麦製品は糖質が多いため、摂りすぎると血糖値が上昇し、インスリンの分泌が増加します。これが繰り返されると、インスリン抵抗性が進行し、糖尿病やメタボリックシンドロームのリスクが高まります。\r\n\r\n2. グルテンの摂りすぎ\r\n小麦にはグルテンというたんぱく質が含まれています。一部の人にはグルテンが消化されづらく、過剰に摂取するとアレルギー反応や消化不良を引き起こすことがあります。\r\n\r\n3. 食物繊維が不足\r\n小麦製品は精製されているため、食物繊維が少ないです。食物繊維が不足すると、便秘や肥満のリスクが高まります。\r\n\r\n私たちは、これらの問題を避けるために、小麦製品の摂取量を適切にコントロールすることが大切です。小麦製品を食べる際は、全粒粉や玄米などの食物繊維が豊富な食品と一緒に摂取し、バランスの良い食事を心掛けましょう。\r\n\r\nまた、過剰な糖質摂取を避けるために、小麦製品だけでなく、砂糖や甘い飲み物の摂取も控えるようにしましょう。\r\n\r\n健康的な食生活を続けることで、美容や健康をサポートしましょう。当店では、健康的な食事や美容に関するアドバイスを提供しておりますので、どうぞお気軽にご相談くださいませ。',
          date: '2023.06.04',
          imgUrl: '/images/beauty/index/slider/05.png',
        },
      ],
    };

    // topics
    topics.value = {
      title: 'お知らせ',
      topics: [
        {
          title: '本日7月1日(土)ご予約状況☆',
          date: '2023.07.01',
          linkUrl: '/',
        },
        {
          title: '本日6月3日(土)ご予約状況☆',
          date: '2023.06.03',
          linkUrl: '/',
        },
      ],
    };

    // 予約・口コミ
    menu.value = {
      title: '形だけじゃない<真の美容法>',
      outline:
        '弊社では小顔矯正や熟練のボディリンパ・小顔矯正のハンド技術に加え、最新のハーブピーリングもできる小顔・痩身サロンを展開しています。お客様の口コミでは高い評価をいただいており、自信を持って施術を提供することができています。今後も皆様に効果を感じて頂ける施術を提供できるようスタッフ一同全力で努めてまいります。',
      menus: [
        {
          title: '予約へ進む',
          linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/',
        },
        {
          title: '口コミをみる',
          linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/review/',
        },
      ],
    };

    // 説明(ブプラの小顔矯正とは)
    description.value = {
      title: 'ブプラの<小顔矯正>とは',
      subTitle: '<ブプラの>\r\n<頭蓋骨小顔矯正による小顔効果>',
      outline:
        '普段使われにくい筋肉をダイナミックに動かすことが特徴です。\r\n頭蓋骨小顔矯正とは、顔面麻痺のリハビリ方法を参考に生まれた技術です。\r\n私達は小顔と頭蓋骨の密接な関係に着目し、独自の技術でお顔が肥大化する原因を徹底的にケアします。\r\n日常生活において、頭・顔の筋肉のうち約70％は使われていないと言われております。使われていない筋肉は、硬くなりやすく、本来の機能（収縮性）が失われやすいのです。 その凝り固まった筋肉が原因で、浮腫み、そしてたるみ、お肌の質にも影響してくるのです。\r\n頭蓋骨小顔矯正では、この原因を解消させるため、小顔効果はもちろん、お肌への良い影響を与えることが期待できます。',
      imgUrl: '/images/daycare/index/description/01.png',
    };

    // こんなお悩みを解決できます
    problem.value = {
      title: 'ブプラがあなたの<お悩み>を解消します',
      imgUrl: '/images/daycare/index/policy/08.png',
    };

    // ブプラの3つの特徴
    features.value = {
      title: 'ブプラの 3つの特徴',
      outline: '小顔効果が期待できるブプラ独自の特徴を3つご紹介いたします。',
      features: [
        {
          title: '本当の効果を求める方へ向けた施術',
          outline:
            'お客様のお悩みに合わせた機器を使用し小顔矯正を行います。リピーターが急増するブプラではヒアリングを行い、お客様に合った施術方法をご提案いたします。',
          buttonTitle: '予約へ進む',
          linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/',
          imgUrl: '/images/beauty/index/features/01.png',
        },
        {
          title: '多くのお客様から高評価を獲得',
          outline:
            'ブプラではご予約の際にホットペッパービューティーを利用していますが、サロン平均4.87と非常に高い評価をいただいております。',
          buttonTitle: '口コミ評価をみる',
          linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/review/',
          imgUrl: '/images/beauty/index/features/02.png',
        },
        {
          title: 'クーポン利用でさらにお得',
          outline:
            'ブプラではホットペッパービューティーにてクーポンを発行しています。クーポンを利用することで0円から体験していただけます。',
          buttonTitle: 'クーポンを利用する',
          linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/coupon/',
          imgUrl: '/images/beauty/index/features/03.png',
        },
      ],
    };

    // 施術メニュー
    treatment.value = {
      title: '施術メニュー',
      outline:
        'お一人お一人のお悩みに合わせた熟練ハンドの技術で今までと違う感覚のエステ体験を提供しています。',
      treatments: [
        {
          title: '頭蓋骨小顔矯正',
          subTitle: '小顔になりたい方へ',
          couponTitle: 'クーポンを利用する',
          couponLinkUrl:
            'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000596431&couponId=CP00000007868233&add=0',
          imgUrl: '/images/beauty/index/treatment/01.png',
        },
        {
          title: '美白＋頭蓋骨小顔矯正',
          subTitle: '小顔も美肌も手に入れたい方へ',
          couponTitle: 'クーポンを利用する',
          couponLinkUrl:
            'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000596431&couponId=CP00000007869798&add=0',
          imgUrl: '/images/beauty/index/treatment/02.png',
        },
      ],
    };

    // お客様の声
    review.value = {
      title: 'お客様の声',
      outline: 'お客様に対する高いホスピタリティ精神で身体も心も満足に',
      linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/coupon/',
      reviews: [
        {
          name: 'しんちゃんまん',
          sex: '女性',
          age: '40代',
          review:
            '来店予約前にお電話した際、対応してくださった方がとても分かりやすく説明していただき、感じが良く、予約を決めました。来店時も、事前説明も丁寧かつ詳しくしていただき、安心して施術を受けることができました。他店でしたとき、とても痛くて身構えていましたが、痛くないように調整してくださったり、様子を見ながら施術していただき、とても満足しました。これからも通い続けたいと思いました。ありがとうございました。',
          totalStar: 5,
          atmosphereStar: 5,
          hospitalityStar: 5,
          techniqueStar: 5,
          menuPriceStar: 5,
          usedMenu: ['リラク', 'エステ'],
          usedCoupon:
            'お得！★本日限定割引クーポン♪★BUPURA式頭蓋骨小顔骨格フェイシャル¥3,980',
          isPickup: true,
        },

        {
          name: 'れいち',
          sex: '女性',
          age: '40代',
          review:
            '初めての体験で、少し痛かったですが。効果でてる！！と感じられて、逆に良かったです。施術前後で写真を見せていただきましたが、タルミが改善され、小顔効果はもちろんですが、肌のトーンが上がってたのには驚きました。一回で効果でたので、続けていきたいです。素敵なサロンに出会えて良かったです。',
          totalStar: 5,
          atmosphereStar: 4,
          hospitalityStar: 5,
          techniqueStar: 5,
          menuPriceStar: 4,
          usedMenu: ['リラク', 'エステ'],
          usedCoupon:
            'お得！★本日限定割引クーポン♪★BUPURA式頭蓋骨小顔骨格フェイシャル¥3,980',
          isPickup: false,
        },

        {
          name: 'syk-1203',
          sex: '女性',
          age: '30代',
          review:
            '小顔・頭蓋骨矯正2回目。指圧で矯正していただくのですが、丁寧な施術のおかげで頭が軽くなります。マスク生活でなんだか縦長な顔になったな…と思っていたのは気のせいではなかったと自覚しました（笑）施術後、即座にまず実感できるのが目元のスッキリ感です。鼻周りの浮腫みもとれ、顔ひとつひとつのパーツが目立つようになれます。ビタミン導入もしていただき、日常に少し明るさが持てた気がしてもっと磨きたいなと思えました！',
          totalStar: 5,
          atmosphereStar: 4,
          hospitalityStar: 5,
          techniqueStar: 5,
          menuPriceStar: 3,
          usedMenu: ['リラク', 'エステ'],
          usedCoupon: '★★頭蓋骨矯正　会員様のご予約クーポン★★',
          isPickup: false,
        },
      ],
    };

    // 店舗情報
    stores.value = {
      title: '店舗情報',
      outline: '九州を中心に店舗を拡大中です！',
      stores: [
        {
          name: '健軍店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '熊本',
          linkUrl: '/stores/0',
        },
        {
          name: 'BUPURA光の森店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '熊本',
          linkUrl: '/stores/9',
        },
        {
          name: '香椎店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '福岡',
          linkUrl: '/stores/1',
        },
        {
          name: '福津店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '福岡',
          linkUrl: '/stores/2',
        },
        {
          name: '久留米店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '福岡',
          linkUrl: '/stores/3',
        },
        {
          name: '春日店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '福岡',
          linkUrl: '/stores/4',
        },
        {
          name: '金池店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '大分',
          linkUrl: '/stores/5',
        },
        {
          name: '高城店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '大分',
          linkUrl: '/stores/6',
        },
        {
          name: '下関店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '山口',
          linkUrl: '/stores/7',
        },
        {
          name: '宇部店',
          imgUrl: '/images/daycare/index/stores/01.png',
          place: '山口',
          linkUrl: '/stores/8',
        },
      ],
    };

    // Before&After
    comparison.value = {
      title: 'Before & After',
      outline: '施術を受けられたお客様のビフォーアフターをご覧になれます。',
      before: {
        imgUrl: '/images/beauty/index/before-after/before.png',
        title: '施術前',
      },
      after: {
        imgUrl: '/images/beauty/index/before-after/after.png',
        title: '施術後',
      },
      outline2:
        '満足度の高い当社スタッフの施術によりむくみやほうれい線、肌のハリなど効果を実感していただけるよう、まずはヒアリングを行い、お客様に合った施術を提供しています。',
      buttonTitle: 'もっとみる',
      linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/photo/',
    };

    // コピー
    copy.value = {
      copy1: 'Make Beauty',
      copy2: 'Meet your second self',
      copy3: 'Remain Beautiful',
      buttonTitle: '店舗をみる',
      linkUrl: 'https://beauty.hotpepper.jp/kr/slnH000596431/',
      imgUrl: '/images/beauty/index/copy/01.png',
    };

    // 施術までの流れ
    flow.value = {
      title: '施術までの流れ',
      outline:
        'この度はブプラのページをご覧いただきありがとうございます。\r\nブプラでは、はじめてご利用されるお客様でも安心してご来店いただけるよう、ご不明な点や不安なことがございましたらお電話でもご相談を承っております。お気軽にお問合せください。',
      steps: [
        {
          title: 'ご予約',
          subTitle: 'お電話またはWEBでのご予約',
          outline:
            'WEBでのご予約は、ホットペッパーに掲載されているブプラの店舗ページからご利用いただけます。お電話でのご予約は、ご希望の日時・ご希望のコース・キャンペーンクーポン等の有無・お客様のお名前・お電話番号ををお伺いし、来店の日にちを決定致します。',
          imgUrl: '/images/beauty/index/flow/01.png',
        },
        {
          title: 'ご来店',
          subTitle: 'ご予約店舗へ来店',
          outline:
            'ご予約いただいた店舗へご来店頂きます。 施術中にクレンジング等を行いますが、ご来店の際はいつも通りのメイクや髪型で来ていただけます。また、メニューによってはお着替えの後施術を行いますので、着脱しやすい服装をおすすめしております。',
          imgUrl: '/images/beauty/index/flow/02.png',
        },
        {
          title: '悩みをスタッフに打ち明けよう。',
          subTitle: 'アンケート・ヒアリング',
          outline:
            'はじめてサロンをご利用されるお客様には、アレルギーや日頃どんなお悩みがあるのかアンケート用紙に記入していただいております。ブプラでは、少しでもお客様のお悩みを重点的に解決に導けるよう施術を行ってまいりますので、どんなお悩みでもまずはご相談ください。',
          imgUrl: '/images/beauty/index/flow/03.png',
        },
        {
          title: 'さっそく施術開始',
          subTitle: '施術',
          outline:
            'まず頭蓋骨の形に合わせて全体をほぐします。おでこの生え際を中心に、老廃物の流れを促すようマッサージします。 この際、お顔の右半分を先にマッサージさせていただき、変化があるかどうかを途中で鏡で確認することができます。頭全体のマッサージが終わると、フェイスラインをリフトアップマッサージして、頭蓋骨小顔矯正を終了致します。スペシャルコース・オプションをご利用のお客様はそのまま施術を続行いたします。',
          imgUrl: '/images/beauty/index/flow/05.png',
        },
        {
          title: '施術が終わったら？',
          subTitle: 'お着替え・お化粧直し',
          outline:
            '施術が終わりましたら、ヘアメイクのお直しのお時間をご用意しております。ブプラでは、鏡・ドライヤー・ヘアブラシをご用意しておりますので、ご自由にお使いください。それ以外に必要なものがある場合は、お客様でご持参いただくようお願いしております。',
          imgUrl: '/images/beauty/index/flow/06.png',
        },
        {
          title: '継続来店でさらに綺麗に',
          subTitle: '次回のご予約',
          outline:
            'はじめてのお客様には終了後、各コースとお得な回数券のご案内をさせていただいております。ブプラの施術では、２週間に１回のお手入れを推奨しており、定着するまでに6回が目安になります。回数や効果には個人差がございますので、お気軽にご相談ください。',
          imgUrl: '/images/beauty/index/flow/07.png',
        },
      ],
    };

    // よくあるご質問
    question.value = {
      title: 'よくあるご質問',
      subTitle: 'Questions',
      linkUrl: '/questions',
    };
  };
  return {
    slider,
    topics,
    menu,
    description,
    problem,
    features,
    treatment,
    review,
    stores,
    comparison,
    copy,
    flow,
    question,
    fetchPagesBeauty,
  };
});
