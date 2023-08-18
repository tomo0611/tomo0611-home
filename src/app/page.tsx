import Image from 'next/image'
import { roboto_mono } from './fonts'
import Link from 'next/link'
import { Fav } from './components/Fav'

export default function Home() {
  return (
    <main className={"z-0 " + roboto_mono.className}>
      <div>
        <div className="flex justify-center">
          <div className="bg-white card md:card-side shadow-xl mx-5 md:mt-40 mb-10 md:max-w-4xl">
            <figure className="md:w-80 md:h-full">
              <div className="md:w-60 md:h-60 w-full h-full md:rounded-full overflow-hidden">
                <Image className="w-full h-full" src="/img/avatar.png" alt="tomo0611's avatar" width={240} height={240} />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">Hi~👋</h2>
              <div className="whitespace-pre-line">
                <p>I'm <span className="text-accent">tomo</span></p>
                <p>This is my <span className="text-accent">home page</span></p>
                <p>Here are some <span className="text-accent">useful links</span> to my profile:</p>
                <div className="flex justify-center">
                  <div className="flex flex-row flex-wrap justify-center m-3">
                    <Fav navLinks={[
                      { name: 'GitHub', href: 'https://github.com/tomo0611', icon: 'github' },
                      { name: 'Instagram', href: 'https://www.instagram.com/tomo06.11/', icon: 'instagram' },
                      { name: 'Mail', href: 'mailto:tomo0611@hotmail.com', icon: 'envelope' },
                      { name: 'Twitter', href: 'https://twitter.com/tomo0611_dev', icon: 'twitter' },
                    ]} />
                  </div>
                </div>
                <p>Feel free to make friend with me. </p>
              </div>
              <div className="card-actions justify-end">
                <Link href="/about" className='underline hover:text-pink-500 duration-200'>
                  Learn more→
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
