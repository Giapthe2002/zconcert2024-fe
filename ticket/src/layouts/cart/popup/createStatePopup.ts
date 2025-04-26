import Popup from "@rsrc/utils/popup/Popup";

import "./state-popup.scss";

const loadingContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;
const successContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;
const failedContent: HTMLDivElement = document.createElement(
    "div",
) as HTMLDivElement;

loadingContent.classList.add("state-popup");
successContent.classList.add("state-popup");
failedContent.classList.add("state-popup");

loadingContent.innerHTML = `
  <span>Đang xử lý dữ liệu</span>
  <i class="fa-solid fa-spinner fa-spin" style="color: #f198cc"></i>
`;

successContent.innerHTML = `
  <span>Đăng ký thành công</span>
  <i class="fa-regular fa-circle-check" style="color: #f198cc"></i>
`;

failedContent.innerHTML = `
  <span>Đăng ký thất bại</span>
  <i class="fa-regular fa-circle-xmark fa-shake" style="color: #ff0000"></i>
`;

const loadingPopup = new Popup.PopupBuilder(loadingContent)
    .hideCloseButton()
    .build();

const successPopup = new Popup.PopupBuilder(successContent)
    .hideCloseButton()
    .build();

const failedPopup = new Popup.PopupBuilder(failedContent)
    .hideCloseButton()
    .build();

export const showSuccessPopup = (
    beforeCallback: () => void,
    afterCallback: () => void,
) => {
    beforeCallback();
    successPopup.show();
    afterCallback();
};

export const showFailurePopup = (
    beforeCallback: () => void,
    afterCallback: () => void,
) => {
    beforeCallback();
    failedPopup.show();
    afterCallback();
};

export { loadingPopup, successPopup, failedPopup };
