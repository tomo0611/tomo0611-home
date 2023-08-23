import Image from 'next/image'
import { roboto_mono, yomogi } from './fonts'
import Link from 'next/link'
import { Fav } from './components/Fav'

export default function Home() {
  return (
    <main className={"z-0 " + yomogi.className}>
      <div>
        <div className="flex justify-center">
          <div className="bg-white card md:card-side shadow-xl mx-5 md:mt-20 mb-10 md:max-w-4xl">
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
                <Link href="/about" className='underline hover:text-pink-500 duration-200'>
                  もっと知る→
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className='mt-4 rounded-md bg-white shadow-xl mx-5 mb-10 md:max-w-4xl'>
            <p className='text-accent text-2xl'>Skills</p>
        </div>
        </div>
      </div>
    </main>
  )
}
