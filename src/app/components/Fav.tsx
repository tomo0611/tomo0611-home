
import Link from 'next/link'

export function Fav({ navLinks }: { navLinks: { name: string, href: string }[] }) {
    return (
        <>
            {navLinks.map((link) => {
                return (
                    <li>
                        <Link
                            className={'text-primary hover:text-pink-500 duration-200'}
                            href={link.href}
                            key={link.name}
                        >
                            {link.name}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}