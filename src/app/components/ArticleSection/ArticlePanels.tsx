"use client";
;
import { article } from '@/app/data/articles';
import { ArticleCard } from './ArticleCard';

export async function ArticlePanels() {

    const articles:article[] = await (await fetch("/api/articles")).json();

    return (
        <div className='grid grid-cols-1n md:grid-cols-2 gap-2 md:gap-4'>
            {articles.map((article) => (
                <ArticleCard article={article} />
            ))}
        </div>
    );
};