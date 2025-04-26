import { CustomerData } from "../types/CustomerData";

import "./style.scss";

import "./setupSearchData";
import "./setupSendMail";
import { setupWavyEvent } from "./wavy/ticket/setupEvent";
import { setupSandyNotiEvent } from "./sandy/notification/setupEvent";
import { clearSendMailState } from "./setupSendMail";
import { setupSandyTicketEvent } from "./sandy/ticket/setupEvent";

declare global {
    interface Window {
        customerData: CustomerData;
    }
}

window.customerData = {
    uuid: "",
    fullName: "",
    email: "",
    ticketData: {
        tickets: {
            wavy: 0,
            sandy: {
                sandyA: 0,
                sandyB: 0,
                sandyC: 0,
                sandyD: 0,
            },
        },
        totalPrice: 0,
    },
    paymentStatus: false,
};

clearSendMailState();

setupWavyEvent();
setupSandyNotiEvent();
setupSandyTicketEvent();
