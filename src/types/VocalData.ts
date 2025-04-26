export type VocalItem = {
    image?: string;
    alt?: string;
    audio?: string;
};

export type VocalData = {
    title: string;
    subtitle: string;
    items: VocalItem[];
};
