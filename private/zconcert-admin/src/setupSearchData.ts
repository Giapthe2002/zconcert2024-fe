import { fetchData } from "@rlibs/fetchData";
import { Response } from "@rtypes/Response";
import { clearSendMailState, setupSendMailBtn } from "./setupSendMail";
import { FetchMethod } from "@tsrc/enums/FetchMethod";
import { CustomerData } from "../types/CustomerData";

const uuidInputElement = document.querySelector(
    ".search__input-area",
) as HTMLTextAreaElement;
const searchBtnElement = document.querySelector(
    ".search__button",
) as HTMLButtonElement;
const searchStatusElement = document.getElementById(
    "js-searchLog",
) as HTMLSpanElement;

searchBtnElement?.addEventListener("click", async () => {
    searchBtnElement.disabled = true;
    clearSendMailState();
    const uuidInputValue = uuidInputElement.value;

    try {
        const responseData: Response = await fetchData({
            url: `google-sheet/get?uuid=${uuidInputValue}`,
            method: FetchMethod.GET,
        });

        const { status, message, data } = responseData;

        if (200 === status) {
            updateData(data as CustomerData);
            renderData();
            setupSendMailBtn();
        }

        updateStatus(message);
    } catch (error) {
        console.error(`Error when get data: ${error}`);
    } finally {
        searchBtnElement.disabled = false;
    }
});

const updateStatus = (message: string) => {
    searchStatusElement.textContent = message;
};

const updateData = (data: CustomerData) => {
    const { uuid, fullName, email, ticketData, paymentStatus } = data;

    window.customerData = {
        uuid,
        fullName,
        email,
        ticketData,
        paymentStatus,
    };
};

const renderData = () => {
    const { uuid, fullName, email, ticketData, paymentStatus } =
        window.customerData;

    const ticketDataString = getTicketDataString();

    const infoElement = document.querySelectorAll(".info-item span");

    infoElement[0].textContent = uuid;
    infoElement[1].textContent = fullName;
    infoElement[2].textContent = email;

    infoElement[3].textContent = ticketDataString;
    infoElement[4].innerHTML =
        ticketData.totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " &#8363;";

    infoElement[5].textContent = paymentStatus
        ? "Đã thanh toán"
        : "Chưa thanh toán";
};

const getTicketDataString = (): string => {
    let outputString = "";

    const { tickets } = window.customerData.ticketData;
    const numOfSandy = Object.values(tickets.sandy).reduce(
        (prev, current) => prev + current,
        0,
    );

    if (0 !== tickets.wavy) outputString += "Wavy: " + tickets.wavy;
    if (0 !== numOfSandy) {
        outputString += " " + "Sandy: " + numOfSandy + " (";

        if (0 !== tickets.sandy.sandyA)
            outputString += tickets.sandy.sandyA + "A ";

        if (0 !== tickets.sandy.sandyB)
            outputString += tickets.sandy.sandyB + "B ";

        if (0 !== tickets.sandy.sandyC)
            outputString += tickets.sandy.sandyC + "C ";

        if (0 !== tickets.sandy.sandyD)
            outputString += tickets.sandy.sandyD + "D";

        outputString += ")";
    }

    return outputString;
};
