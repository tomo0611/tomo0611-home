export type contact = {
    id: string;
    name: string;
    icon_name: string;
    text1: string;
    text2: string;
    url: string;
};

export const contacts: contact[] = [
    {
        id: 'twitter_1',
        name: 'Twitter (技術垢)',
        icon_name: 'twitter',
        text1: 'DMかメンション',
        text2: '(メンション推奨)',
        url: 'https://twitter.com/tomo0611_dev',
    },
    {
        id: 'twitter_2',
        name: 'Twitter (大学垢)',
        icon_name: 'twitter',
        text1: '※同じ大学の人限定',
        text2: '(技術の話は技術垢へ)',
        url: 'https://twitter.com/tomo0611_univ',
    },
    {
        id: 'mail',
        name: 'E-mail',
        icon_name: 'microsoftoutlook',
        text1: 'なんだかんだメールって',
        text2: '安定だよね',
        url: 'mailto:tomo0611@hotmail.com',
    },
];