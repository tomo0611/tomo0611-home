import { article, random_article_response } from '@/app/data/articles';
import { ArticleCard } from './ArticleCard';

export async function ArticlePanels() {
    const articles_random = await (await fetch("https://randomer.ch-random.net/items/articles?filter[user_created][user_id]=tomo&filter[status]=published&sort[]=-date_updated")).json();

    const articles_random_data = (articles_random as random_article_response).data;

    const articles: article[] = [];

    for (let i = 0; i < articles_random_data.length; i++) {
        const article = articles_random_data[i];
        articles.push({
            id: article.id + "",
            title: article.title,
            created_at: new Date(article.date_created),
            url: `https://ch-random.net/post/${article.id}/`,
            thumbnailPath: `https://randomer.ch-random.net/assets/${article.thumbnail}`,
            media: "random"
        })
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
};