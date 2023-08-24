import Image from 'next/image'
import { yomogi } from './fonts'
import Link from 'next/link'
import { Fav } from './components/Fav'
import { WorkPanels } from './components/WorkSection/WorkPanels'
import { SkillPanels } from './components/SkillSection/SkillPanels'
import { ContactPanels } from './components/ContactSection/ContactPanels'

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
                  <div className="flex flex-row flex-wrap justify-center mx-2 my-3">
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
            <p className='mt-8 text-accent text-2xl font-semibold md:ml-2 ml-5'>Skills - 技術と分野</p>
            <div className='mt-2 md:mx-6 mx-8'>
              <p>ボクの技術について紹介します。</p>
              <p>未熟なので、チョットデキル(完璧に使いこなせる)技術はありません😥</p>
              <p>これから増やしていきます、</p>
            </div>
            <div className='mx-12 mt-4 mb-16'>
              <SkillPanels />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8 text-accent text-2xl font-semibold md:ml-2 ml-5'>Works - 作品</p>
            <div className='mt-2 md:mx-6 mx-8'>
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
            <p className='mt-8 text-accent text-2xl font-semibold md:ml-2 ml-5'>Articles - 記事など</p>
            <div className='mt-2 md:mx-6 mx-8'>
              <p>今まで執筆してきた記事たち</p>
            </div>
            <div className='mx-12 mt-4 mb-8 grid grid-cols-1n md:grid-cols-2 gap-4'>
              準備中
            </div>
          </div>
        </div>


        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8 text-accent text-2xl font-semibold md:ml-2 ml-5'>Events - イベント</p>
            <div className='mt-2 md:mx-6 mx-8'>
              <p>はやく登壇できるように頑張ります…‼️</p>
            </div>
            <div className='mx-12 mt-4 mb-8 grid grid-cols-1n md:grid-cols-2 gap-4'>
              なし
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className='mt-4 rounded-2xl bg-white shadow-xl mx-5 mb-10 md:max-w-4xl px-6 md:w-[48rem] w-[25rem]'>
            <p className='mt-8 text-accent text-2xl font-semibold md:ml-2 ml-5'>Contact - お問い合わせ</p>
            <div className='mt-2 md:mx-6 mx-8'>
              <p>以下の方法でお願いします！</p>
            </div>
            <div className='mx-12 mt-4 mb-8'>
              <ContactPanels />
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
