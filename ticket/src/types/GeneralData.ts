import { TicketType } from "@tenums/TicketType";

export type GeneralData = {
    isPreorder: boolean;
    soldOutType: TicketType[];
};
