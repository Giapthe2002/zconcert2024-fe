import { TicketType } from "@tenums/TicketType";

import "./CartRow.scss";

export const createCartRow = (ticketType: TicketType, soldOut: boolean) => {
    let ticket: string;
    let type: string | undefined;

    if (TicketType.WAVY === ticketType) {
        ticket = "wavy";
        type = "";
    } else {
        ticket = "sandy";
        type = ticketType.at(ticketType.length - 1);
    }

    const decClickFun = `onclick="changeTicketQuantity('${ticketType}')"`;
    const incClickFun = `onclick="changeTicketQuantity('${ticketType}', true)"`;

    return `
        <div class="row__container">
            <div class="row__ticket">
                <div class="name__container">
                    <span class="${soldOut ? "ticket__name--sold-out" : ""}">${ticket}</span>
                    ${soldOut ? "<span class='sold-out-tag'>SOLD OUT</span>" : ""}
                </div>
                <span class="ticket__type">${!type ? "" : "Type: "}${type}</span>
            </div>
            <div class="row__quantity">
                <button
                    class="quantity-btn quantity-btn--decrease ${soldOut ? "quantity-btn--sold-out" : ""}"
                    ${soldOut ? "" : decClickFun}
                >
                    -
                </button>
                <span class="quantity-field ${soldOut ? "quantity-field__sold-out" : ""} quantity-${ticketType}">
                    0
                </span>
                <button
                    class="quantity-btn quantity-btn--increase ${soldOut ? "quantity-btn--sold-out" : ""}"
                    ${soldOut ? "" : incClickFun}
                >
                    +
                </button>
            </div>
        </div>
    `;
};
