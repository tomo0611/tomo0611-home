'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }: { navLinks: { name: string, href: string }[] }) {
    const pathname = usePathname()

    return (
        <>
            {navLinks.map((link) => {
                const isActive = pathname === link.href

                return (
                    <li key={link.name}>
                        <Link
                            className={isActive ? 'text-pink-500' : 'text-primary hover:text-pink-500 duration-200'}
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}