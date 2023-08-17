import Image from 'next/image'
import { roboto_mono } from './fonts'

export default function Home() {
  return (
    <main className="z-0">
      <div className="flex flex-col justify-center justify-items-center md:rounded-xl md:w-1/2 rounded-md shadow-xl mb-10 mx-5 mt-40 px-12 py-6">
        <div className="w-80 h-full">
          <div className='md:w-60 md:h-60 md:rounded-full overflow-hidden'>
          <Image src="/img/avatar.png" alt="tomo0611's avatar" width={240} height={240} />
          </div>
        </div>

        <div className={"flex flex-auto flex-col p-4 gap-2 " + roboto_mono.className}>
          <h2 className="font-bold text-2xl">Hi~👋</h2>
          <div className="whitespace-pre-line">
            <p>I'm <span className="text-accent">tomo</span></p><p>This is my <span className="text-accent">home page</span></p><p>Here are some <span className="text-accent">useful links</span> to my profile:</p>

            <div className="flex justify-center">
              <div className="flex flex-row flex-wrap justify-center m-3">
                <div>
                  <button title="Blog" className="btn btn-circle m-2"><i className="bi bi-journal"></i></button>
                </div>
                <div>
                  <button title="GitHub" className="btn btn-circle m-2"><i className="bi bi-github"></i></button>
                </div>
                <div>
                  <button title="Instagram" className="btn btn-circle m-2"><i className="bi bi-instagram"></i></button>
                </div>
                <div>
                  <button title="Line" className="btn btn-circle m-2"><i className="bi bi-line"></i></button>
                </div>
                <div><button title="Mail" className="btn btn-circle m-2"><i className="bi bi-envelope"></i></button></div>
                <div><button title="Twitter" className="btn btn-circle m-2"><i className="bi bi-twitter"></i></button></div>

              </div></div><p>Feel free to make friend with me. </p>

          </div><div className="flex justify-end"><button className="underline">Learn more→</button></div>
        </div>
      </div>
    </main>
  )
}
