export type TicketData = {
    tickets: {
        wavy: number;
        sandy: {
            sandyA: number;
            sandyB: number;
            sandyC: number;
            sandyD: number;
        };
    };
    totalPrice: number;
};

export type CustomerEntity = {
    uuid: string;
    createdAt: string;
    fullName: string;
    phoneNumber: string;
    email: string;
    facebook: string;
    known: string;
    ticketData: TicketData;
    paymentStatus: boolean;
};
