import Image from 'next/image';
import type { FC } from 'react';
import type { work } from '@/app/data/works';
import Link from 'next/link';

type WorkPanelProps = {
    work: work;
};

export const WorkPanel: FC<WorkPanelProps> = ({ work }) => {
    return ( work.url != '' ? 
        <Link className="bg-white p-3 drop-shadow rounded-lg hover:drop-shadow-lg duration-200 w-[18rem]" href={work.url} target='_blank'>
            <Image src={`/img/works/${work.id}.png`} alt={work.name} width={500} height={400} />
            <div className='mt-6 border'/>
            <p className='text-lg font-semibold mt-2'>{work.name}</p>
            <p className='text-sm font-semibold text-gray-500'>{work.description}</p>
        </Link> : <div className="bg-white p-3 drop-shadow rounded-lg hover:drop-shadow-lg duration-200 w-[18rem]">
            <Image src={`/img/works/${work.id}.png`} alt={work.name} width={500} height={400} />
            <div className='mt-6 border' />
            <p className='text-lg font-semibold mt-2'>{work.name}</p>
            <p className='text-sm font-semibold text-gray-500'>{work.description}</p>
        </div>
            
    );
};