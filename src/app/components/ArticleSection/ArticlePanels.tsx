import { article } from '@/app/data/articles';
import { ArticleCard } from './ArticleCard';
import { headers } from "next/headers";

export async function ArticlePanels() {
    const host = headers().get("host");
    const articles: article[] = await (await fetch(`http://${host}/api/articles`, { cache: "no-store" })).json();

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};