import Image from 'next/image';
import type { FC } from 'react';
import Link from 'next/link';
import { article } from '@/app/data/articles';

type ArticleCardProps = {
    article: article;
};

export const ArticleCard: FC<ArticleCardProps> = ({ article }) => {

    // 要素やボタンを下端（底辺）に揃えたい時のやり方 - https://dezanari.com/css-flex-item-bottom/
    return <Link className="bg-white p-3 drop-shadow rounded-lg hover:drop-shadow-lg duration-200 w-[18rem] flex h-full flex-wrap flex-col" href={article.url} target='_blank'>
        <div className='relative w-18 h-40'>
            <Image className="object-cover rounded-md" src={article.thumbnailPath} alt={article.title} fill />
        </div>
        <div className='mt-3 border' />
        <p className='font-semibold mt-2'>{article.title}</p>
        <p className='pt-4 mt-auto text-sm font-semibold text-gray-500 w-full block'>{article.created_at.toDateString()}</p>
    </Link>;
};