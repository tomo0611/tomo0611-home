import Image from 'next/image'
import { roboto_mono, yomogi } from './fonts'
import Link from 'next/link'
import { Fav } from './components/Fav'
import { SkillCards } from './components/SkillCards'
import { WorkPanels } from './components/WorkSection/WorkPanels'

export default function Home() {
  return (
    <main className={"z-0 " + yomogi.className}>
      <div>
        <div className="flex justify-center">
          <div className="bg-white card md:card-side shadow-xl mx-5 md:mt-20 mt-10 mb-10 md:max-w-4xl md:w-[48rem] w-[25rem]">
            <figure className="md:w-80 md:h-full">
              <div className="md:w-60 md:h-60 w-full h-full md:rounded-full overflow-hidden">
                <Image className="w-full h-full" src="/img/avatar.png" alt="tomo0611's avatar" width={240} height={240} />
              </div>
            </figure>
            <div className="card-body">
              <h2 className={"card-title text-accent"}>tomo0611</h2>
              <div className="whitespace-pre-line">

                <p className='text-sm mt-4'>
                  所属
                </p>
                <p>大阪公立大学 工学部 情報工学科 B2 (学部2年)</p>

                <p className='text-sm mt-4'>
                  分野
                </p>
                <p>Web系 / Ubuntu / Androidアプリ開発</p>

                <p className='text-sm mt-4'>
                  趣味
                </p>
                <p>プログラミング / アニメ</p>

                <div className="flex justify-center">
                  <div className="flex flex-row flex-wrap justify-center m-3">
                    <Fav navLinks={[
                      { name: 'Twitter', href: 'https://twitter.com/tomo0611_dev', icon: 'twitter' },
                      { name: 'GitHub', href: 'https://github.com/tomo0611', icon: 'github' },
                      { name: 'Instagram', href: 'https://www.instagram.com/tomo06.11/', icon: 'instagram' },
                      { name: 'Mail', href: 'mailto:tomo0611@hotmail.com', icon: 'microsoftoutlook' },
                      { name: 'Zenn', href: 'https://zenn.dev/tomo0611', icon: 'zenn' },
                    ]} />
                  </div>
                </div>
                <p>ボクとお友達になりませんか？</p>
                <p>Twitterやインスタでおはなししたいな、、 </p>
              </div>
              <div className="card-actions justify-end">
                <Link href="/" className='underline hover:text-pink-500 duration-200'>
                  もっと知る→
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl md:px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8 text-accent text-2xl font-semibold ml-3'>Skills - 技術と分野</p>
            <div className='mt-2 ml-4 mr-4'>
              <p>ボクの技術について紹介します。</p>
              <p>未熟なので、チョットデキル(完璧に使いこなせる)技術はありません😥</p>
              <p>これから増やしていきます、</p>
            </div>
            <div className='mx-12 mt-4 mb-16 grid grid-cols-1n md:grid-cols-2 gap-2 md:gap-4'>
              <SkillCards skills={[
                {
                  name: 'Next.js', icon_name: 'nextjs', category: 'Framework', text1: 'むっちゃ使ってる。', text2: '最近の悩みの種だいたいこれ。'
                },
                {
                  name: 'React', icon_name: 'react', category: 'Language', text1: '基本からしっかりやりたい', text2: ''
                },
                {
                  name: 'Tailwind', icon_name: 'tailwind', category: 'Library', text1: 'デザイン用', text2: ''
                },
                {
                  name: 'Visual Studio Code', icon_name: 'vscode', category: 'Software', text1: '一番使ってる開発環境。', text2: ''
                },
                {
                  name: 'GitHub & Git', icon_name: 'github', category: 'Service & Version Control Software', text1: 'いつも使ってます。', text2: ''
                },
                {
                  name: 'Linux (Ubuntu)', icon_name: 'linux', category: 'Operating System', text1: '職場でRHELを強要されてます、', text2: 'タスケテ、、、'
                },
                {
                  name: 'Docker', icon_name: 'docker', category: 'Containerization', text1: '部活の大先輩に言われて始めました。', text2: ''
                },
                {
                  name: 'C++', icon_name: 'cpp', category: 'Language', text1: '競プロのために始めました。', text2: ''
                },
                {
                  name: 'Python', icon_name: 'py', category: 'Language', text1: 'スクレイピングとかで使う。', text2: ''
                },
                {
                  name: 'Kotlin', icon_name: 'kotlin', category: 'language', text1: 'Androidアプリ開発用。', text2: ''
                },
                {
                  name: 'Android Studio', icon_name: 'androidstudio', category: 'Software', text1: '小6からやってます。', text2: ''
                },
                {
                  name: 'Figma', icon_name: 'figma', category: 'Software', text1: 'まだまだ勉強中❗', text2: ''
                },
                {
                  name: 'Firebase', icon_name: 'firebase', category: 'Cloud Platform', text1: '今はHostingを主に利用。', text2: '昔はAndroidアプリで使ってた。'
                },
                {
                  name: 'Photoshop', icon_name: 'ps', category: 'Software', text1: '画像編集用。', text2: ''
                },
                {
                  name: 'PHP', icon_name: 'php', category: 'Language', text1: '最近はもうやってない。', text2: ''
                },
                {
                  name: '正規表現', icon_name: 'regex', category: 'Language', text1: 'しっかりやりたい', text2: ''
                }
              ]} />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8  text-accent text-2xl font-semibold ml-3'>Works - 作品</p>
            <div className='mt-2 ml-4'>
              <p>今まで作ってきた作品</p>
            </div>
            <div className='mx-4 md:mx-12 mt-4 mb-8'>
              <div className="flex justify-center">
                <WorkPanels />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8  text-accent text-2xl font-semibold'>Articles - 記事など</p>
            <div className='mt-2 ml-2'>
              <p>今まで執筆してきた記事たち</p>
            </div>
            <div className='mx-12 mt-4 mb-8 grid grid-cols-1n md:grid-cols-2 gap-4'>
              準備中
            </div>
          </div>
        </div>


        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8  text-accent text-2xl font-semibold'>Events - イベント</p>
            <div className='mt-2 ml-2'>
              <p>はやく登壇できるように頑張ります…‼️</p>
            </div>
            <div className='mx-12 mt-4 mb-8 grid grid-cols-1n md:grid-cols-2 gap-4'>
              なし
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
