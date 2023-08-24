import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';
import { article } from '@/app/data/articles';

type ArticleCardProps = {
    article: article;
};

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {
    return <Link className="bg-white p-3 drop-shadow rounded-lg hover:drop-shadow-lg duration-200 w-[18rem] flex-inline" href={article.url} target='_blank'>
        <div className='relative w-18 h-40'>
            <Image className="object-cover" src={`/api/fetch-og-image?url=${encodeURIComponent(article.thumbnailPath)}`} alt={article.title} fill />
        </div>
        <div className='mt-3 border' />
        <p className='font-semibold mt-2'>{article.title}</p>
        <p className='text-sm font-semibold text-gray-500 pt-4 mt-auto'>{article.created_at}</p>
    </Link>;
};