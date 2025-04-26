import { ticketData } from "@rsrc/data/ticketData";
import { TicketType } from "@tenums/TicketType";
import { updateQrImage } from "./popup/createQrPopup";

const calculateTotalPrice = (): number => {
    const { ticketData } = window.registerData;

    const numOfWavy = ticketData.tickets.wavy;
    const numOfSandy = Object.values(ticketData.tickets.sandy).reduce(
        (prev, current) => prev + current,
        0,
    );

    const totalWavyPrice = getTicketPrice("wavy", numOfWavy) * numOfWavy * 1000;
    const totalSandyPrice =
        getTicketPrice("sandy", numOfSandy) * numOfSandy * 1000;

    return totalWavyPrice + totalSandyPrice;
};

const getTicketPrice = (
    type: "wavy" | "sandy",
    numOfTickets: number,
): number => {
    const priceByType = ticketData.ticketPrices[type];

    if (numOfTickets >= 5) return priceByType.saled.quintuple;
    if (numOfTickets >= 3) return priceByType.saled.triple;
    if (numOfTickets >= 1) return priceByType.saled.single;

    return 0;
};

window.changeTicketQuantity = (
    ticketType: TicketType,
    isIncrease: boolean = false,
) => {
    const { ticketData } = window.registerData;

    switch (ticketType) {
        case "wavy":
            if (!isIncrease) {
                ticketData.tickets.wavy =
                    0 === ticketData.tickets.wavy
                        ? ticketData.tickets.wavy
                        : ticketData.tickets.wavy - 1;
            } else {
                ticketData.tickets.wavy++;
            }
            break;
        case "sandyA":
        case "sandyB":
        case "sandyC":
        case "sandyD":
            if (!isIncrease) {
                ticketData.tickets.sandy[ticketType] =
                    0 === ticketData.tickets.sandy[ticketType]
                        ? ticketData.tickets.sandy[ticketType]
                        : ticketData.tickets.sandy[ticketType] - 1;
            } else {
                ticketData.tickets.sandy[ticketType]++;
            }
            break;
    }

    updateTicketViewer(ticketType);
    updateTotalPrice();
    updateCheckoutBtnState();
    updateQrImage();
};

const updateTicketViewer = (ticketType: TicketType) => {
    const quantityFieldElement = document.querySelector(
        `span.quantity-${ticketType}`,
    );

    if (!quantityFieldElement) return;

    if ("wavy" === ticketType) {
        quantityFieldElement.textContent =
            window.registerData.ticketData.tickets.wavy.toString();
    } else {
        quantityFieldElement.textContent =
            window.registerData.ticketData.tickets.sandy[ticketType].toString();
    }
};

const updateTotalPrice = (): void => {
    const totalPriceField: HTMLDivElement = document.querySelector(
        "div.price__number",
    ) as HTMLDivElement;

    const totalPrice = calculateTotalPrice();
    window.registerData.ticketData.totalPrice = totalPrice;

    totalPriceField.textContent = totalPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const updateCheckoutBtnState = (): void => {
    const checkoutBtnElement: HTMLButtonElement = document.getElementById(
        "js-checkout-btn",
    ) as HTMLButtonElement;

    const { ticketData } = window.registerData;

    const sumOfTickets =
        ticketData.tickets.wavy +
        Object.values(ticketData.tickets.sandy).reduce(
            (prev, current) => prev + current,
            0,
        );

    if (0 === sumOfTickets) {
        checkoutBtnElement.disabled = true;
    } else {
        checkoutBtnElement.disabled = false;
    }
};
