const sandyNotiBtnElement = document.getElementById(
    "js-sandyNotiBtn",
) as HTMLButtonElement;

export const disableSandyNotiBtn = () => {
    sandyNotiBtnElement.disabled = true;
};

export const setupSandyNotiBtn = () => {
    const sandyObject = window.customerData.ticketData.tickets.sandy;
    const numOfSandy = Object.values(sandyObject).reduce(
        (prev, current) => prev + current,
        0,
    );

    if (0 === numOfSandy) return;

    sandyNotiBtnElement.disabled = false;
};
