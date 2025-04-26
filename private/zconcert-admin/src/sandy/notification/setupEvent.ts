import { fetchData } from "@rsrc/libs/fetchData";
import { Response } from "@rsrc/types/Response";
import { FetchMethod } from "@tsrc/enums/FetchMethod";

const sandyNotiBtnElement = document.getElementById(
    "js-sandyNotiBtn",
) as HTMLButtonElement;

const sandyNotiLogElement = document.getElementById(
    "js-sandyNotiLog",
) as HTMLDivElement;

export const setupSandyNotiEvent = () => {
    sandyNotiBtnElement.addEventListener("click", async () => {
        sandyNotiBtnElement.disabled = true;

        const { email } = window.customerData;
        const data = {
            email,
            ticketType: "sandy",
        };

        try {
            const responseData: Response = await fetchData({
                url: "mail/send-notification",
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
                false,
            );
            console.error(`Error when sending wavy ticket mail: ${error}`);
        }
    });
};

const setMessage = (message: string, turnOnBtn: boolean = false) => {
    sandyNotiLogElement.textContent = message;
    sandyNotiBtnElement.disabled = !turnOnBtn;
};
