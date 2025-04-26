import Popup from "@rsrc/utils/popup/Popup";
import {
    failedPopup,
    loadingPopup,
    showFailurePopup,
    showSuccessPopup,
    successPopup,
} from "./createStatePopup";
import { fetchData } from "@rlibs/fetchData";
import { FetchMethod } from "@tenums/FetchMethod";
import { Response } from "@rsrc/types/Response";

import "./qr-popup.scss";

const qrContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;

const EMPTY_LINK = "https://img.vietqr.io/image/MB-0852362511-compact.png";
const PREFIX_LINK = "https://img.vietqr.io/image/MB-0852362511-compact2.png";

qrContent.innerHTML = `
  <span>Hình thức thanh toán</span>
  <div class="qr-image__container">
    <img
      src=${EMPTY_LINK}
      alt="QR image for banking"
      id="js-qr-image"
    />
  </div>
  <p>
    (&#8270;) Vui lòng hoàn thành giao dịch trong vòng 24h sau khi đăng
    ký!<br />
    (&#8270;) Vui lòng bấm đăng ký để hoàn thành việc đăng ký mua vé!
  </p>
  <button id="js-registerButton">Đăng ký</button>
`;

const qrPopup = new Popup.PopupBuilder(qrContent)
    .closeOnClickOutside()
    .insertToDOMWhenInit()
    .build();

qrPopup.wrapper.classList.add("qr-popup__wrapper");

const qrImgElement: HTMLImageElement = document.getElementById(
    "js-qr-image",
) as HTMLImageElement;

const generateBankingInfo = (): string => {
    let handledInfo = "";
    const space = "%20";

    const { fullName, phoneNumber, ticketData } = window.registerData;

    handledInfo += fullName + space + phoneNumber + space + "CK" + space;

    const { wavy, sandy } = ticketData.tickets;

    if (0 !== wavy) handledInfo += "W" + wavy + space;
    if (0 !== sandy.sandyA) handledInfo += "SA" + sandy.sandyA + space;
    if (0 !== sandy.sandyB) handledInfo += "SB" + sandy.sandyB + space;
    if (0 !== sandy.sandyC) handledInfo += "SC" + sandy.sandyC + space;
    if (0 !== sandy.sandyD) handledInfo += "SD" + sandy.sandyD + space;

    return handledInfo;
};

export const updateQrImage = () => {
    const newLink = `${PREFIX_LINK}?amount=${
        window.registerData.ticketData.totalPrice
    }&addInfo=${generateBankingInfo()}&accountName=ZConcert2024`;

    if (qrImgElement.src !== newLink) qrImgElement.src = newLink;
};

const registerBtnElement = document.getElementById(
    "js-registerButton",
) as HTMLButtonElement;

registerBtnElement.addEventListener("click", async () => {
    qrPopup.hide();
    loadingPopup.show();

    try {
        const responseData: Response = await fetchData({
            url: "google-sheet/add",
            method: FetchMethod.POST,
            headers: {
                "Content-Type": "application/json",
            },
            data: window.registerData,
        });

        if (201 === responseData.status) {
            showSuccess();
        } else {
            showError();
        }
    } catch (error) {
        showError();
        console.error(`Error when register new ticket: ${error}`);
    }
});

const showSuccess = () => {
    showSuccessPopup(
        () => {
            loadingPopup.hide();
        },
        () => {
            closeAndReload(successPopup);
        },
    );
};

const showError = () => {
    showFailurePopup(
        () => {
            loadingPopup.hide();
        },
        () => {
            closeAndReload(failedPopup);
        },
    );
};

const closeAndReload = (popup: Popup, timeout: number = 3000) => {
    setTimeout(() => {
        popup.hide();
        location.reload();
    }, timeout);
};

export { qrPopup };
