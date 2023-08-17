/// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Roboto_Mono } from 'next/font/google'

export const roboto_mono = Roboto_Mono({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})