import { Response } from "@rsrc/types/Response";
import { SpanElements, InputElements } from "../../../types/ElementObject";
import { fetchData } from "@rsrc/libs/fetchData";
import { FetchMethod } from "@tsrc/enums/FetchMethod";

const sandyTicketBtnElement = document.getElementById(
    "js-sandyTicketBtn",
) as HTMLButtonElement;
const sandyTicketLogElement = document.getElementById(
    "js-sandyTicketLog",
) as HTMLDivElement;

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

export const setupSandyTicketEvent = () => {
    sandyTicketBtnElement.addEventListener("click", async () => {
        sandyTicketBtnElement.disabled = true;

        const sandyASeats = sandyInputElement.sandyA.value;
        const sandyBSeats = sandyInputElement.sandyB.value;
        const sandyCSeats = sandyInputElement.sandyC.value;
        const sandyDSeats = sandyInputElement.sandyD.value;

        const isValid = validateInput(
            sandyASeats,
            sandyBSeats,
            sandyCSeats,
            sandyDSeats,
        );

        if (!isValid) {
            setMessage("Số ghế nhập chưa đúng, vui lòng kiểm tra lại!", true);
            return;
        } else {
            setMessage("");
        }

        disableInputs();

        const { uuid, fullName, email, ticketData } = window.customerData;

        const processedTicketData = {
            tickets: {
                sandyA: sandyASeats,
                sandyB: sandyBSeats,
                sandyC: sandyCSeats,
                sandyD: sandyDSeats,
            },
            totalTicket: Object.values(ticketData.tickets.sandy).reduce(
                (prev, curr) => prev + curr,
                0,
            ),
        };

        const data = {
            uuid,
            fullName,
            email,
            ticketType: "sandy",
            ticketData: processedTicketData,
        };

        try {
            const responseData: Response = await fetchData({
                url: "mail/send-ticket",
                method: FetchMethod.POST,
                headers: {
                    "Content-Type": "application/json",
                },
                data,
            });

            if (200 === responseData.status) {
                setMessage(responseData.message);
            } else {
                setMessage(responseData.message, true);
            }
        } catch (error) {
            setMessage(
                "Something wrong at server side, contact developer",
                true,
            );
            console.error(`Error when sending sandy ticket mail: ${error}`);
        }
    });
};

const disableInputs = () => {
    Object.values(sandyInputElement).forEach(
        (element) => (element.disabled = true),
    );
};

const validateInput = (
    sandyASeat: string,
    sandyBSeat: string,
    sandyCSeat: string,
    sandyDSeat: string,
): boolean => {
    let isValid = true;

    const notValidMsg = "Số lượng ghế khác với tổng số vé, kiểm tra lại";
    const { sandyA, sandyB, sandyC, sandyD } =
        window.customerData.ticketData.tickets.sandy;

    if (sandyA !== splitString(sandyASeat).length) {
        setInputState(sandyLogElement.sandyA, notValidMsg);
        isValid = false;
    } else {
        setInputState(sandyLogElement.sandyA, "");
    }

    if (sandyB !== splitString(sandyBSeat).length) {
        setInputState(sandyLogElement.sandyB, notValidMsg);
        isValid = false;
    } else {
        setInputState(sandyLogElement.sandyB, "");
    }

    if (sandyC !== splitString(sandyCSeat).length) {
        setInputState(sandyLogElement.sandyC, notValidMsg);
        isValid = false;
    } else {
        setInputState(sandyLogElement.sandyC, "");
    }

    if (sandyD !== splitString(sandyDSeat).length) {
        setInputState(sandyLogElement.sandyD, notValidMsg);
        isValid = false;
    } else {
        setInputState(sandyLogElement.sandyD, "");
    }

    return isValid;
};

const splitString = (input: string) => {
    input = input.trim();

    if ("" === input) return [];

    return input.split(/[ ,]+/);
};

const setInputState = (element: HTMLSpanElement, message: string) => {
    element.textContent = message;
};

const setMessage = (message: string, turnOnBtn: boolean = false) => {
    sandyTicketLogElement.textContent = message;
    sandyTicketBtnElement.disabled = !turnOnBtn;
};
