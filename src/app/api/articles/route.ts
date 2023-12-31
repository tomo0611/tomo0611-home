import { article, random_article_response } from "@/app/data/articles";
import { NextResponse } from "next/server";
import { parse } from 'node-html-parser';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const hasUrl = searchParams.has("url");
    const url = hasUrl
        ? searchParams.get("url")!!
        : "https://ch-random.net/post/461/featured.png";

    const res = (await fetch("https://ch-random.net/authors/tomo/")).text();
    const root = parse(await res);
    const articles_random = JSON.parse(root.querySelector("#__NEXT_DATA__")!!.innerHTML).props;

    const articles_random_data = (articles_random as random_article_response).pageProps.posts;

    const articles: article[] = [];

    for (let i = 0; i < articles_random_data.length; i++) {
        const article = articles_random_data[i];
        articles.push({
            id: article.id,
            title: article.title,
            created_at: article.lastmod.substring(0, 10).replaceAll("-", "/"),
            url: `https://ch-random.net/post/${article.id}/`,
            thumbnailPath: `https://ch-random.net${article.thumbnailPath}`,
            media: "random"
        })
    }

    // 今後書いたらZennも追加する
    // https://zenn.dev/api/articles?username=tomo0611&order=latest
    return NextResponse.json(articles);
}