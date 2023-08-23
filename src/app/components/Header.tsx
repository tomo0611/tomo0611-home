import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <header className='bg-white'>
            <div className='flex items-center px-3 py-4'>
                <Image className="rounded-full" src="/img/avatar.png" alt="tomo0611's avatar" width={30} height={30}/>
                <span className='ml-3 font-bold'>tomo0611.jp</span>
            </div>
        </header>
    )
}