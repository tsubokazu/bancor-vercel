export const useBeautyQuestionsStore = defineStore('beauty-questions', () => {
  // 資料一覧をKurocoから取得

  const header = ref({} as any);
  const questions = ref({} as any);

  // 資料一覧をKurocoから取得
  const fetchBeautyQuestions = async () => {
    // 取得したデータを型に当てはめる
    // ヘッダー
    header.value = {
      title: 'よくあるご質問',
      imgUrl: '/images/beauty/stores/header.png',
    };

    // よくあるご質問
    questions.value = {
      questions: [
        {
          questions:
            '小顔矯正で痛い思いをしたことがあるのですが、痛みはありますか？',
          answer:
            '当店では痛みが少ない施術で、万が一、痛みなど不快な感覚があれば、施術中にご指摘いただければ、すぐに改善致します。頭のマッサージを受けていただく感覚であり、大体のお客様は施術中に寝てしまわれます。あまりにも痛みを感じないことから施術中、本当に効果があるのかと心配になる方もいらっしゃいますが、施術後に鏡を見ていただくと多くの方が効果に驚かれます。',
        },
        {
          questions: 'ブプラ独自の技法というのは？',
          answer:
            '頭や顔中にある30種類以上の筋肉（表情筋）は、日常生活を過ごす上ではその1/3程度しか使われておりません。その他の使われていない2/3の筋肉が凝ってしまうことで体液循環が正常に働かず、頭や顔に浮腫みが生じます。頭蓋骨小顔矯正では、頭蓋骨の形成を理解した施術者が頭皮マッサージしながら筋肉をダイレクトに動かして浮腫みを解消させます。痛みが苦手な方でも安心できる優しいマッサージであり、寝てしまう人がほとんどの快適小顔マッサージになります。',
        },
        {
          questions: 'コルギのようなものなのでしょうか？',
          answer:
            '全く異なります。コルギのように顔に直接アプローチをかけるのではなく、基本的には頭に少しの指圧をかけて、お顔やデコルテまでのリンパドレナージュを行います。',
        },
        {
          questions: '小顔効果はどのくらいの期間継続されるのでしょうか？',
          answer:
            '個人差はありますが、1回～3回は最低10日間は空けてください。4回目以降は2週間～3週間目安で。7回目以降は1ヶ月に1回程度を目安にしております。',
        },
        {
          questions: '小顔効果の効果が回数ごとに違うのは何故ですか？',
          answer:
            'コリのほぐれ具合により浮腫みが解消されやすくなるため、回数によるというものではなく、解消の度合によって効果の差が出てくるものとなります。 頭皮が固いほど（張ってる状態）ほど、複数回通っていただかなくては存分な効果が出ません。その場合は、2週間程度の周期で通っていただき、コリが解消されてきましたら1ヶ月程度開けていただき、定期的なお顔のメンテナンスのため通っていただけるようお伝えさせていただいております。その際はお客様の頭やお顔の状態に合わせてご来店のペースはご提案させていただきます。',
        },
        {
          questions: '小顔効果に驚きました！3日に1回は通ってもいいですか？',
          answer:
            '頻繁に通いたいと仰ってくださるお客様もいらっしゃいますが、最低10日間は空けていただいております。体のめぐりを促進し続けると好転反応を起こします。好転反応とは悪いものが良いものへと変化する際に、頭痛や吐き気などを様々な症状に反応することを言います。そのためお客様には10日間は空けていただくようお願いしております。',
        },
      ],
    };
  };

  return {
    fetchBeautyQuestions,
    header,
    questions,
  };
});