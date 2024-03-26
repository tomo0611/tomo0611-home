export const runtime = 'edge';

import { article, random_article_response } from "@/app/data/articles";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

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

    // 今後書いたらZennも追加する
    // https://zenn.dev/api/articles?username=tomo0611&order=latest
    return NextResponse.json(articles);
}