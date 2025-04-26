import { fetchData } from "@rlibs/fetchData";
import { FetchMethod } from "@tenums/FetchMethod";
import { Response } from "@rsrc/types/Response";

const wavyTicketBtnElement = document.getElementById(
    "js-wavyTicketBtn",
) as HTMLButtonElement;

const wavyTicketLogElement = document.getElementById(
    "js-wavyTicketLog",
) as HTMLDivElement;

export const setupWavyEvent = () => {
    wavyTicketBtnElement.addEventListener("click", async () => {
        wavyTicketBtnElement.disabled = true;

        const { uuid, fullName, email, ticketData } = window.customerData;

        const processedTicketData = {
            tickets: {
                wavy: ticketData.tickets.wavy,
            },
            totalTicket: ticketData.tickets.wavy,
        };

        const data = {
            uuid,
            fullName,
            email,
            ticketType: "wavy",
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
            console.error(`Error when sending wavy ticket mail: ${error}`);
        }
    });
};

const setMessage = (message: string, turnOnBtn: boolean = false) => {
    wavyTicketLogElement.textContent = message;
    wavyTicketBtnElement.disabled = !turnOnBtn;
};
