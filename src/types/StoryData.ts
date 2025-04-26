export type StoryItem = {
    id: string;
    title: string;
    image: string;
    alt: string;
    htmlPopupContent: string;
};

export type StoryData = {
    title: string;
    items: StoryItem[];
};
