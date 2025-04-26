import { AreaShape } from "@tenums/AreaShape";
import { TicketType } from "@tenums/TicketType";

export type MapArea = {
    ticketType: TicketType;
    shape: AreaShape;
    coords: string;
    alt: string;
};
