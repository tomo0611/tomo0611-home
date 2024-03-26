/// https://nextjs.org/docs/app/building-your-application/optimizing/fonts
import { Noto_Sans_JP, Roboto_Mono, Yomogi } from 'next/font/google'

export const roboto_mono = Roboto_Mono({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const roboto_mono_bold = Roboto_Mono({
    weight: '600',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const yomogi = Yomogi({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
})

export const noto_sans = Noto_Sans_JP({
    weight: '400',
    style: ['normal'],
    subsets: ['latin'],
    display: 'swap',
});