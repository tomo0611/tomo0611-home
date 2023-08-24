export type work = {
    id: string;
    name: string;
    description: string;
    url: string;
};

export const works: work[] = [
    {
        id: 'urabus',
        name: '裏バス',
        description: '大阪公立大学の講義を検索できる高速な詳細検索サービスです。',
        url: 'https://u.omu.news/',
    },
    {
        id: 'ch-random',
        name: 'Randomのホームページ',
        description:
            '自分の所属しているパソコン系部活「ランダム」のホームページを作りました。',
        url: 'https://ch-random.net/',
    },
    {
        id: 'omu-card-collector',
        name: 'OMU Card Collector',
        description: 'Androidスマホで学籍番号を学生証から読み取り、リストを作成します。',
        url: 'https://github.com/tomo0611/OMU-Card-Collector',
    },
    {
        id: 'omu-live-news',
        name: '【非公開】OMU L!ve News',
        description:
            'OMU L!ve Newsは大学からのお知らせを発信していたメディアサイトです。',
        url: '',
    },
];