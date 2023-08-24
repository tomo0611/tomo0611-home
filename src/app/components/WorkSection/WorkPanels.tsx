import type { FC } from 'react';
import { WorkPanel } from '@/app/components/WorkSection/WorkPanel';
import { works } from '@/app/data/works';

export const WorkPanels: FC = () => {
    return (
        <div className='grid grid-cols-1n md:grid-cols-2 gap-4'>
            {works.map((work) => (
                <WorkPanel key={work.id} work={work} />
            ))}
        </div>
    );
};