const wavyTicketBtnElement = document.getElementById(
    "js-wavyTicketBtn",
) as HTMLButtonElement;

export const disableWavyBtn = () => {
    wavyTicketBtnElement.disabled = true;
};

export const setupWavyButton = () => {
    const numOfWavy = window.customerData.ticketData.tickets.wavy;

    if (0 === numOfWavy) return;

    wavyTicketBtnElement.disabled = false;
};
