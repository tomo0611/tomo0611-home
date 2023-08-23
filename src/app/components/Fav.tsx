
import Link from 'next/link'

export function Fav({ navLinks }: { navLinks: { name: string, href: string, icon: string }[] }) {
    return (
        <>
            {navLinks.map((link) => {
                return (
                    <Link
                        key={link.name}
                        className='w-12 h-12 bg-gray-200 hover:bg-pink-300 rounded-full duration-200 m-2 text-center'
                        href={link.href}
                        target='_blank'>
                            <i className={"pt-4 text-xl si si--color si-" + link.icon}></i>
                    </Link>
                )
            })}
        </>
    )
}