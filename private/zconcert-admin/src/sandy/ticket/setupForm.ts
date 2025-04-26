import { Sandy, SandyKeys } from "../../../types/CustomerData";
import { SpanElements, InputElements } from "../../../types/ElementObject";

// Num of ticket element
const sandyTicketElement: SpanElements = {
    sandyA: document.getElementById("js-sandyATicket") as HTMLSpanElement,
    sandyB: document.getElementById("js-sandyBTicket") as HTMLSpanElement,
    sandyC: document.getElementById("js-sandyCTicket") as HTMLSpanElement,
    sandyD: document.getElementById("js-sandyDTicket") as HTMLSpanElement,
};

// Input element
const sandyInputElement: InputElements = {
    sandyA: document.getElementById("js-sandyAInput") as HTMLInputElement,
    sandyB: document.getElementById("js-sandyBInput") as HTMLInputElement,
    sandyC: document.getElementById("js-sandyCInput") as HTMLInputElement,
    sandyD: document.getElementById("js-sandyDInput") as HTMLInputElement,
};

// Log element
const sandyLogElement: SpanElements = {
    sandyA: document.getElementById("js-sandyAInputLog") as HTMLSpanElement,
    sandyB: document.getElementById("js-sandyBInputLog") as HTMLSpanElement,
    sandyC: document.getElementById("js-sandyCInputLog") as HTMLSpanElement,
    sandyD: document.getElementById("js-sandyDInputLog") as HTMLSpanElement,
};

// Submit button
const sandyTicketBtnElement = document.getElementById(
    "js-sandyTicketBtn",
) as HTMLButtonElement;
const sandyTicketLogElement = document.getElementById(
    "js-sandyTicketLog",
) as HTMLDivElement;

export const setupSandyForm = () => {
    const { sandy } = window.customerData.ticketData.tickets as {
        sandy: Sandy;
    };
    const numOfSandy = Object.values(sandy).reduce(
        (prev, current) => prev + current,
        0,
    );

    Object.entries(sandyTicketElement).forEach(([type, element]) => {
        element.textContent = `(${sandy[type as SandyKeys]})`;
    });

    Object.entries(sandyInputElement).forEach(([type, element]) => {
        element.disabled = 0 === sandy[type as SandyKeys];
    });

    sandyTicketBtnElement.disabled = 0 === numOfSandy;
};

export const clearForm = () => {
    Object.values(sandyTicketElement).forEach(
        (ticketElement) => (ticketElement.textContent = ""),
    );

    Object.values(sandyInputElement).forEach(
        (inputElement) => (inputElement.value = ""),
    );

    Object.values(sandyLogElement).forEach(
        (logElement) => (logElement.textContent = ""),
    );

    sandyTicketLogElement.textContent = "";
    sandyTicketBtnElement.disabled = true;
};
