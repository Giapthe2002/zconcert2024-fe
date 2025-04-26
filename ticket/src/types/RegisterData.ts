export type TicketRegisterData = {
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

export type RegisterData = {
    fullName: string;
    phoneNumber: string;
    email: string;
    facebook: string;
    known: string;
    ticketData: TicketRegisterData;
};
