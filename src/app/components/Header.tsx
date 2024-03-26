import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <header className='bg-white shadow'>
            <div className='max-w-5xl mx-auto'>
                <Link href='/' className='items-center cursor-pointer hover:bg-red-100 duration-200 px-3 py-4 inline-flex'>
                    <Image className="rounded-full" src="/img/avatar.png" alt="tomo0611's avatar" width={36} height={36} />
                    <span className='ml-3 font-bold'>tomo0611</span>
                </Link>
            </div>
        </header>
    )
}