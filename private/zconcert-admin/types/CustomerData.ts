export type Sandy = {
    sandyA: number;
    sandyB: number;
    sandyC: number;
    sandyD: number;
};

export type SandyKeys = keyof Sandy;

export type TicketCustomerData = {
    tickets: {
        wavy: number;
        sandy: Sandy;
    };
    totalPrice: number;
};

export type CustomerData = {
    uuid: string;
    fullName: string;
    email: string;
    ticketData: TicketCustomerData;
    paymentStatus: boolean;
};
