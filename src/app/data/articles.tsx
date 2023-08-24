export type article = {
    id: string;
    title: string;
    created_at: string;
    url: string;
    thumbnailPath: string;
    media: string;
};

export type random_article = {
    id: string;
    title: string;
    thumbnailPath: string;
    lastmod: string;
};

export type random_article_response = {
    pageProps: {
        posts: random_article[];
    }
};