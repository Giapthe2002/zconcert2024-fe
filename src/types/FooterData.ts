type FooterItem = {
    title: string;
};

export type PersonContact = {
    name: string;
    phone: string;
    role: string;
};

type FooterContactItem = FooterItem & {
    mail: string;
    mailIcon: string;
    contactIcon: string;
    personContacts: PersonContact[];
};

type FooterPlaceItem = FooterItem & {
    placeEmbedAddress: string;
    timeLogo: string;
    time: string;
};

export type FooterData = {
    contacts: FooterContactItem[];
    place: FooterPlaceItem;
};
