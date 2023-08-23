
import Link from 'next/link'

export function Fav({ navLinks }: { navLinks: { name: string, href: string, icon: string }[] }) {
    return (
        <>
            {navLinks.map((link) => {
                return (
                    <Link
                        className={'w-12 h-12 bg-gray-200 hover:bg-pink-300 rounded-full duration-200 m-2 p-4 text-center leading-4 min-h-12'}
                        href={link.href}
                        key={link.name}
                        target='_blank'
                    >
                        <i className={"w-12 h-12 text-primary si si--color si-" + link.icon}></i>
                    </Link>
                )
            })}
        </>
    )
}