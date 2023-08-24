import type { FC } from 'react';
import { contacts } from '@/app/data/contacts';
import { ContactCard } from './ContactCard';

export const ContactPanels: FC = () => {
    return (
        <div className='grid grid-cols-1n md:grid-cols-2 gap-2 md:gap-4'>
            {contacts.map((contact) => (
                <ContactCard key={contact.id} contact={contact} />
            ))}
        </div>
    );
};