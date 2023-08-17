/*
From https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#templates

Templates are similar to layouts in that they wrap each child layout or page.

Unlike layouts that persist across routes and maintain state,
templates create a new instance for each of their children on navigation.

This means that when a user navigates between routes that share a template,
a new instance of the component is mounted,
DOM elements are recreated, state is not preserved, and effects are re-synchronized.
*/

import Image from "next/image";
import { roboto_mono } from '@/app/fonts'

export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] z-50 bg-pink-200 animate-slideFade duration-500 delay-1000 origin-top flex justify-center items-center">
            <div>
                <Image className="block m-auto rounded-full absolute animate-rotate" src="/images/bg_common_circleline.png" alt="flower" width={240} height={240} />
                <Image className="block m-auto rounded-full" src="/images/profile.png" alt="tomo0611's profile picture" width={240} height={240} />
                <p className={"mt-4 text-4xl text-center text-primary " + roboto_mono.className}>Loading...</p>
            </div>
        </div>
        <div>{children}</div>
    </div>
}