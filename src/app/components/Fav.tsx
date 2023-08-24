
import Link from 'next/link'

export function Fav({ navLinks }: { navLinks: { name: string, href: string, icon: string }[] }) {
    return (
        <>
            {navLinks.map((link) => {
                return (
                    <Link
                        key={link.name}
                        className='m-1 rounded-full text-center'
                        href={link.href}
                        target='_blank'>
                            <i className={"text-xl p-3 rounded-full hover:bg-pink-300 duration-200 bg-gray-200 si si--color si-" + link.icon}></i>
                    </Link>
                )
            })}
        </>
    )
}