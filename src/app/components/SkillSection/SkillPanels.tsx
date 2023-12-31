import type { FC } from 'react';
import { skills } from '@/app/data/skills';
import { SkillCard } from './SkillCard';

export const SkillPanels: FC = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
            ))}
        </div>
    );
};