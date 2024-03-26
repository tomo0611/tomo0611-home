export type article = {
    id: string;
    title: string;
    created_at: Date;
    url: string;
    thumbnailPath: string;
    media: string;
};

export type random_article = {
    id: number;
    title: string;
    thumbnail: string;
    date_created: string;
};

export type random_article_response = {
    data: random_article[];
};