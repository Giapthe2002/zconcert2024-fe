import { TicketType } from "@tenums/TicketType";

import "normalize.css";
import "./style.scss";

import "./layouts/map/Map";
import "./layouts/cart/Cart";
import { RegisterData } from "@ttypes/RegisterData";

type ChangeTicketFunction = (
    ticketType: TicketType,
    isIncrease: boolean,
) => void;

declare global {
    interface Window {
        changeTicketQuantity: ChangeTicketFunction;
        registerData: RegisterData;
    }
}
