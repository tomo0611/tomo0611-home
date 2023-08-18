import Image from 'next/image'
import { roboto_mono } from '@/app/fonts'
import Link from 'next/link'
export default function Home() {
    return (
        <main className={"z-0 " + roboto_mono.className}>
            <div>
                <div className="flex justify-center">
                    <div className="bg-white card md:card-side shadow-xl mx-5 md:mt-10 mt-4 mb-10 md:max-w-4xl">
                        <div className="card-body">
                            <div className="whitespace-pre-line">
                                <p>Hello!</p>

                                <p>Thank you for visiting my site. You came to see my introduction, didn't you? It took half a day to make this site, but I don't know what to write here. </p>
                                <p>I'm tomo.</p>
                                <p>This site, I think Nextjs is easy to use, so I made it with Nextjs. The source code is open source, so if you think it's good, you can find it on Github and change the source code a little bit to make it your own (please follow the open source license).</p>
                                <p>I've been doing web for 7 years, and now I can only write stupid code, but I'll keep trying. (But I'm not a software engineering major, so I guess it's okay?)</p>
                                <p>To friends who want to make friends with me:</p>
                                <p>I'm a little shy, so I don't look for a conversation partner. But if you want to talk and become friends, I'm happy. My SNS account is on the top page. If possible, please PM me directly and I will reply to you as soon as possible ~</p>
                                <p>I'm not good at English, so I'm sorry if I make a mistake. I hope you can understand me. Thank you for your visit ~</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
