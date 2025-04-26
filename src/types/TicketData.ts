export enum TicketOrder {
    PREORDER = "pre-order",
    REGULAR = "regular",
}

type TicketTypePrices = {
    single: number;
    triple: number;
    quintuple: number;
};

type TicketOrderPrices = {
    wavy: {
        original: TicketTypePrices;
        saled: TicketTypePrices;
    };
    sandy: {
        original: TicketTypePrices;
        saled: TicketTypePrices;
    };
};

export type TicketPrices = {
    "pre-order"?: TicketOrderPrices;
    regular: TicketOrderPrices;
};

export type TicketData = {
    enabled: boolean;
    title: string;
    ticketPrices: TicketOrderPrices;
    stageMap: string;
    stageMapAlt: string;
    htmlPopupContent: string;
};
