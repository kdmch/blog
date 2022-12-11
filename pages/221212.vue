<template>
  <v-app>
    <div id="bg" />
    <Header />
    <Aheader :caps="infocaps" />
    <div id="main">
      <div id="text">
        <h5>フレキシブル・睡眠</h5>
        <div class="line" />
        <p>私はちょ〜〜〜〜〜〜〜〜〜若いので(19歳)、睡眠の可撓性がすごい。フレキシブル睡眠だ。特に土日は。なお、身体にはすげ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜悪い。</p>
        <p>具体的には以下の通りである。金曜日のだいたい18時頃にひと通りの社会参加活動を終えて帰宅、そこから幾許かの仮眠を挟みつつ作業し、身体ぴかぴか運動(お風呂)や顔面よちよち運動(肌メンテ)などをやり、土曜日の陽が昇ってから寝る。するとちょうど20時頃にムクリと起きるわけだ。疲れているともっと遅い。</p>
        <p>ここからエナジードリンクを入れて(寝起きが一番効く)、やはり朝まで作業し、寝る。そして今度は日曜日の昼すぎに起きるのだ。何をするかと言うと社会的娯楽である。友人とご飯とか。社会的娯楽はもちろん陽の高いうちにしかできないため、ここであえて睡眠をカットし、遊べるだけ遊ぶ。</p>
        <p>帰宅するとだいたい22時とかだ。生活リズムが破滅しているので眠くない……かというとそうでもなく、睡眠カットと遊んだ疲れの相乗効果で意外にもグッスリである。</p>
        <p>そして翌朝7時にWAKE UPし、8時間睡眠でピカピカの自分が再び社会参加活動にいそしむわけだ。</p>
        <div class="blank" />
        <p>これ、ずっとやってると早死にするんだろうな。でも、逆張りオタクは正常に寝られないのだ。こんな暮らしを半ば強迫的に5年ほどやっている。もう治せない。</p>
        <p>異常生活リズム人間をやっていこう、いずれ、生活習慣病でくたばるその日まで──</p>
        <div class="separator" />
        <p>こんなに中身の無い文でいいのかって？ばーか。</p>
        <p>異常生活リズムオタクはな、みんなちゃんと寝れてんだろうな、異常生活リズムをやってんのは自分だけなんじゃねーのかって、毎日毎日不安なんだよ！ばーか！正常睡眠のオタクはあっちいけ！</p>
      </div>
    </div>
    <Afooter :caps="infocaps" />
    <Footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: '睡眠時間 | ミトリメ',
        description: '私はちょ〜〜〜〜〜〜〜〜〜若いので(19歳)、睡眠の可撓性がすごい。フレキシブル睡眠だ。特に土日は。なお、身体にはすげ〜〜〜〜〜〜〜〜〜〜〜〜〜〜〜悪い。具体的には上図の通りだ。金曜日のだいたい18時頃にひと通りの社会参加活動を終えて帰宅し',
        type: 'article',
        url: 'https://mitori.me/221212',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/thumbnails/221212.png'
      },
      infocaps: {
        comments: true,
        relateds: true,
        title: '睡眠時間',
        updated: '2022.12.12',
        tags: ['日記'],
        description: '睡眠時間の話',
        url: 'https://mitori.me/221212',
        image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png',
        auther: 'mitori',
        authericon: 'https://raw.githubusercontent.com/kdmch/blog/master/static/icons/mitori.png',
        twitter: 'https://twitter.com/mitorime',
        bio: 'はよ作業せい',
        articles: [{
          no: 1,
          title: 'トップに戻る',
          url: '/',
          image: 'https://raw.githubusercontent.com/kdmch/blog/master/static/img/no-image.png'
        }]
      }
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/textmp.scss";
@import "assets/article.scss";
</style>
